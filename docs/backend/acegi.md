# Acegi Security

作为Spring Security的前身，目前有老项目用到了该技术。

## 作用

* **URL资源的访问控制**  
如所有用户可以访问index.jsp，但只有授权用户可以访问/user/addUser.jsp。Acegi允许正则和Ant风格的路径表达式。
* **业务方法的访问控制**
Spring容器中的所有Bean的方法都可以被Acegi管理，如所有用户都可以调用Book.query方法，但是只有授权用户可以访问Book.add方法。
* **领域对象的访问控制**
可以理解为数据权限，如用户在User.updateUser时，应该只能修改自己的用户信息。

Acegi的核心是通过servlet的过滤器保护url，通过Spring AOP对Bean方法进行拦截，阻止业务方法的调用。基于AOP，在目标方法执行前，检查用户的ACL（Access Control List）是否包含该领域对象。以此进行拦截。
同时Acegi可以提出部分不想返回的领域对象。（但是直接用sql会更简单）


## 组件

* **SecurityContextHolder**
  * **SecurityContext**
  承载着用户（认证主体）的身份信息的权限信息。
* **AuthenticationManager**
认证管理器
* **AccessDecisionManager**
访问控制管理器

* **UserDetails**
作为被需要实现的接口，UserDetails定义了获取用户名、密码，账号是否过期、被锁定、凭证是否过期等方法。任一方法返回false则凭证失效。
代码中User需实现该接口。

* **UserDetailsService**
UserDetails loadUserByUsername,配合上述UserDetails从数据库中返回UserDetails，需要实现该接口。

* **Authentication**
Authentication代表一个待认证用户，Acegi从登录页面、Cookie等获取待认证的用户信息（一般为用户名、密码）自动构造Authentication实例。Authentication中Object getPrincipal获取一个代表用户的对象，一般可以转换为UserDetails。从中可以取得用户名/密码等信息。在Authentication被AuthenticationManager认证之前，没有任何权限的信息。在通过认证之后，Acegi通过UserDetails将用户对应的权限信息加载到Authentication中。Authentication拥有一个GrantedAuthority[]getAuthorities()方法，通过该方法可以得到用户对应的权限信息。 
Authentication和UserDetails很容易被混淆，因为两者都有用户名/密码及权限的信息，接口方法也很类似。其实Authentication是Acegi进行安全访问控制真正使用的用户安全信息的对象，它拥有两个状态：未认证和已认证。UserDetails是代表一个从用户安全信息源（数据库、LDAP服务器、CA中心）返回的真正用户，Acegi需要将未认证的Authentication和代表真实用户的UserDetails进行匹配比较，通过匹配比较（简单的情况下是用户名/密码是否一致）后， Acegi将UserDetails中的其它安全信息（如权限、ACL等）拷贝到Authentication中。这样， Acegi安全控制组件在后续的安全访问控制中只和Authentication进行交互。
由于Acegi对程序资源进行访问安全控制时，一定要事先获取和请求用户对应的Authentication，Acegi框架必须为Authentication提供一个“寓所”，以便在需要时直接从“寓所”把它请出来，作为各种安全管理器决策的依据。
SecurityContextHolder就是Authentication容身的“寓所”，可以通过SecurityContextHolder.getContext().getAuthenication()代码获取Authentication。SecurityContextHolder和Authentication之间存在一个getContext()中介，这个方法返回SecurityContext对象。我们知道Authentication是用户安全相关的信息，请求线程其它信息（如登录验证码等）则放置在SecurityContext中，构成了一个完整的安全信息上下文。SecurityContext接口提供了获取和设置Authentication的方法：

* **SecurityContextHolder**
SecurityContextHolder是Acegi框架级的对象，它在内部通过ThreadLocal为请求线程提供线程绑定的SecurityContext对象。这样，任何参与当前请求线程的Acegi安全管理组件、业务服务对象等都可以直接通过SecurityContextHolder.getContext()获取线程绑定的SecurityContext，避免通过方法入参的方式获取用户相关的SecurityContext。
线程绑定模式对于大多数应用来说是适合的，但是应用本身会创建其它的线程，那么只有主线程可以获得线程绑定SecurityContext，而主线程衍生出的新线程则无法得到线程绑定的SecurityContext。Acegi考虑到了这些不同应用情况，提供了三种绑定SecurityContext的模式：
SecurityContextHolder.MODE_THREADLOCAL：SecurityContext绑定到主线程，这是默认的模式；
SecurityContextHolder.MODE_GLOBAL：SecurityContext绑定到JVM中，所有线程都使用同一个SecurityContext；
SecurityContextHolder.MODE_INHERITABLETHREADLOCAL：：SecurityContext绑定到主线程及由主线程衍生的线程中。
你可以通过SecurityContextHolder.setStrategyName(StringstrategyName)方法指定SecurityContext的绑定模式。

## 流程

用户请求一个受限资源时，AuthenticationManager首先开始工作，它将身份认证的工作委托给多个AuthenticationProvider。因为在具体系统中，用户身份可能存储在不同的信息安全系统中。如数据库、CA中心、LDAP服务器等。
只要有一个AuthenticationProvider识别了用户身份。AuthenticationManager就通过身份认证。并将用户的授权信息放入SecurityContext中。
之后AccessDecisionManager开始工作，它包含多个AccessDecisionVoter，在访问时每个Voter都有投票权，根据最终投票结果决定是否对用户开放受限资源的访问。

1．你点击一个链接访问一个网页；

2．浏览器发送一个请求到服务器，服务器判断出你正在访问一个受保护的资源；

3．如果此时你并未通过身份认证，服务器发回一个响应提示你进行认证——这个响应可能是一个HTTP响应代码，抑或重定向到一个指定页面；

4．根据系统使用认证机制的不同，浏览器或者重定向到一个登录页面中，或者由浏览器通过一些其它的方式获取你的身份信息（如通过BASIC认证对话框、一个Cookie或一个X509证书）；

5．浏览器再次将用户身份信息发送到服务器上（可能是一个用户登录表单的HTTP POST信息、也可能是包含认证信息的HTTP报文头）；

6．服务器判断用户认证信息是否有效，如果无效，一般情况下，浏览器会要求你继续尝试，这意味着返回第3步。如果有效，则到达下一步；

7．服务器重新响应第2步所提交的原始请求，并判断该请求所访问的程序资源是否在你的权限范围内，如果你有权访问，请求将得到正确的执行并返回结果。否则，你将收到一个HTTP 403错误，这意味着你被禁止访问。

