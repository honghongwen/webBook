# SpringBoot


## Apsect
常用切面

```java
package com.sinfor.order.aspect;

import com.sinfor.order.common.ResultEnum;
import com.sinfor.order.components.CurrentUserIdHolder;
import com.sinfor.order.components.JwtTokenComponent;
import com.sinfor.order.config.IgnoreLogUrlsConfig;
import com.sinfor.order.config.IgnoreUrlsConfig;
import com.sinfor.order.exception.ApiException;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.List;


/**
 * @author fengwen
 * @date 2021-10-14
 * @description 登陆切面
 */
@Slf4j
@Aspect
@Component
public class RequestAspect {

    @Autowired
    private IgnoreUrlsConfig ignoreUrlsConfig;

    @Autowired
    private IgnoreLogUrlsConfig ignoreLogUrlsConfig;

    @Autowired
    private JwtTokenComponent jwtTokenComponent;

    @Pointcut("bean(*Controller)")
    public void requestPoint() {

    }

    @Before("requestPoint()")
    public void doBefore(JoinPoint joinPoint) {
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        if (attributes == null) {
            throw new IllegalArgumentException("解析请求错误");
        }
        HttpServletRequest request = attributes.getRequest();

        // 避免有些刷屏日志、可能如解析图片传的是图片base64的值，如nginx等有代理，ip可从header里获取
        if (!ignoreLogUrlsConfig.getUrls().contains(request.getRequestURI())) {
            log.info("用户操作日志:\n  url:{}\n  ip:{}\n  参数:{}",
                    request.getRequestURI(),
                    request.getRemoteAddr(),
                    joinPoint.getArgs());
        }
        String token = request.getHeader("token");
        validateToken(token, request.getRequestURI());
    }

    private void validateToken(String token, String url) {
        // 敏感接口不记录，如涉及到密码等
        List<String> ignoreUrls = ignoreUrlsConfig.getUrls();
        if (ignoreUrls.contains(url)) {
            return;
        }

        if (!StringUtils.hasLength(token)) {
            throw new ApiException(ResultEnum.TOKEN_ERROR.getCode(), "token不能为空");
        }

        String userId = jwtTokenComponent.getUseridFromToken(token);
        if (!StringUtils.hasLength(userId)) {
            throw new ApiException(ResultEnum.TOKEN_ERROR);
        }

        log.info("当前操作用户:{}", userId);
        CurrentUserIdHolder.setUserId(userId);
    }
}

```