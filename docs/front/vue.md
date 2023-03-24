# Vue知识

## 组件版本

用的node版本比较老，对应的一些组件版本如下

| 名称              | 版本    |
| ----------------- | ------- |
| node              | 13.14.0 |
| npm               | 6.14.4  |
| sass-loader       | 7.0.1   |
| node-sass         | 4.13.0  |
| svg-sprite-loader | 6.0.11  |
| vue               | 2.5.2   |
| vuex              | 3.0.1   |
| vue-router        | 3.0.1   |
| element-ui        | 2.15.13 |
| axios             | 1.3.3   |
| echarts           | 5.4.1   |


## 项目搭建

### 1.创建项目
```shell
vue init webpack vue-mall
```
选择vue-router

### 2.集成vue-router
创建src/router/index.js、src/permission.js

```javascript
import Vue from "vue";
import Router from "vue-router";
import Layout from "@/views/layout/Layout";

Vue.use(Router);

export const asyncRoutes = [{}];

export const currencyRoutes = [
  {
    path: "/404",
    name: "404",
    hidden: true,
    meta: {
      title: "404"
    },
    component: () => import("@/views/404")
  },
  {
    path: "/login",
    name: "Login",
    hidden: true,
    meta: {
      title: "login"
    },
    component: () => import("@/views/login/index")
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    meta : {},
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("@/views/Dashboard"),
        meta: {
          title: "看板",
          icon: "el-icon-data-line"
        }
      },
      {
        path: "/personal",
        name: "Personal",
        hidden: true,
        component: () => import("@/views/Personal/index"),
        meta: {
          title: "我的主页"
        }
      }
    ]
  }
];

const creatRouter = () => {
  return new Router({
    routes: currencyRoutes,
    scrollBehavior() {
      return { x: 0, y: 0 };
    }
  });
};

const router = creatRouter();

// 解决addRoute不能删除动态路由问题
export function resetRouter() {
  const reset = creatRouter();
  router.matcher = reset.matcher;
}

export default router;

```

```javascript
import router from "./router";
import { getToken } from "./utils/auth";

const whiteList = ["/login"];
router.beforeEach((to, from, next) => {
  const hasToken = getToken();
  if (hasToken) {
    if (to.path === "/login") {
      next({
        path: "/"
      });
    } else {
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next({
        path: "/login"
      });
    }
  }
});
```
可基于router的子路由，创建全局的layout样式。
具体可查看demo项目


### 2.集成element-ui
```shell
 npm i element-ui -S
```

修改main.js,加入
```js
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
```


### 3.集成axios

```shell
npm install -S axios
```

调整dev.env.js
```js
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://localhost:9797"'
})

```

创建src/api，将接口路由创建到对应文件，如下login.js
```js
import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/login",
    method: "post",
    data
  });
}


export function getUserInfo(token) {
  return request({
    url: "/login/getUserFromToken?token=" + token,
    method: "get"
  });
}
```


编写request.js，做拦截器
```js
import axios from "axios";
import { Message, MessageBox } from "element-ui";
import store from "@/store";
import { getToken } from "@/utils/auth";

// 创建axios实例
const service = axios.create({ 
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 120000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers["token"] = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非200是抛错 可结合自己业务进行修改
     */
    const res = response.data;
    if (res.code !== 200) {
      Message({
        message: res.message,
        type: "error",
        duration: 3 * 1000
      });

      // 403:未登录;
      if (res.code === 403) {
        MessageBox.confirm(
          "你已被登出，可以取消继续留在该页面，或者重新登录",
          "确定登出",
          {
            confirmButtonText: "重新登录",
            cancelButtonText: "取消",
            type: "warning"
          }
        ).then(() => {
          store.dispatch("user/LoginOut").then(() => {
            // location.reload(); // 为了重新实例化vue-router对象 避免bug
          });
        });
      }
      return Promise.reject("error");
    } else {
      return response.data;
    }
  },
  error => {
    console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 3 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;

```

### 4.集成vuex
```shell
npm install vuex@next --save
```

新建 src/store src/store/index.js src/store/getter.js src/store/modules/user.js

user.js
```js
import { login, getUserInfo } from "@/api/login";
import { setToken, setUser} from "@/utils/auth";
import router, { resetRouter ,asyncRoutes, currencyRoutes } from "@/router";


const state = {
  token: localStorage.getItem("token") ? localStorage.getItem("token") : "", // 认证凭证'
  user: localStorage.getItem("user") ? localStorage.getItem("user") : "",

};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  DEL_TOKEN(state) {
    state.token = "";
    state.user = {};
   
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },

  SET_USER(state, payload) {
    state.user = payload;
  }
};
const actions = {
  Login({ commit }, userInfo) {
    const { userId, password } = userInfo;
    return new Promise((resolve, reject) => {
      login({
        userId: userId.trim(),
        password: password
      })
        .then(response => {
          const token = response.data;
          commit("SET_TOKEN", token);
          setToken(token);
          resolve(token);
        })
        .catch(error => {
          resolve("");
        });
    });
  },
  LoginOut({ commit }) {
    commit("DEL_TOKEN");
    resetRouter();
    router.push({
      path: "/login",
      query: {
        redirect: "/"
      }
    });
  },
  SetUserInfo({ commit }, payload) {
    return new Promise((resolve, reject) => {
      getUserInfo(payload).then(response => {
        const { data } = response;
        commit("SET_USER", data);
        setUser(data);
        resolve(data);
      });
    });
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
```

getters.js
```js
const getters = {
  token: state => state.user.token,
  routes: state => state.permissions.routes,
  user: stat => {
    if (typeof stat.user.user === "string") {
      return JSON.parse(stat.user.user);
    } else {
      return stat.user.user;
    }
  }
};

export default getters;

```

index.js
```js
import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import getters from "./getters";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user
  },
  getters
});

export default store;
```

### 5.集成svg
```shell
npm i svg-sprite-loader --save
```

配置webpack解析svg,webpack.base.conf.js修改
```js
{
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('src/icons')],
        options: {
          symbolId: 'icon-[name]'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        exclude: resolve('src/icons'),
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      }
```

新建src/icons/svg、src/icons/index.js

```js
import Vue from "vue"
import SvgIcon from '@/components/SvgIcon'

Vue.component('svg-icon', SvgIcon);

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
```

使用方式
```vue
<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
```


### 6.集成scss

这两个组件编译基于python，先检查本地机器是否有python，并且有环境变量，执行python命令能正常输出
同时他对不同node版本有不同对应关系，[查看对应关系](https://github.com/sass/node-sass)
确保对应版本，不然会install一直报错

```shell
 npm  install sass-loader@7.0.1 --save-dev
 npm install node-sass@4.13.0 --sava-dev
```

创建src/styles 编写全局scss


### demo项目

至此，一个基于vuex、aixos、vue-router支持svg、scss的vue2项目就已经构建完成了。当然，全局的layout还需自己编写。
具体可查看演示项目，已经配置了可供开发的基本配置
[演示项目](https://github.com/honghongwen/vue-temp)

[参考项目一](https://gcddblue.github.io/vue-admin-webapp/#/dashbord)
[参考项目二](https://panjiachen.github.io/vue-element-admin/#/login?redirect=%2Fdashboard)


### 命令

```shell
# 安装依赖
npm install

# 本地启动
npm run dev

# 打包
npm run build
```