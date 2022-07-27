# nicevite

## 简介

### 基于vue3使用vite构建的前端开发框架

本框架为前后端分离开发而设计

- 允许前端工程师通过简单配置，一键打包整个项目(单应用整站，多应用移动端、PC端、管理后台等)
- 允许第三方开发者按框架开发规范开发模板并分享模板

### 功能介绍

* 支持三方模板导入（只需将模板文件拷贝到对应目录即可）
* 支持按项目、按模块两种方式一键打包

## 使用说明

### 目录结构

```
nice_app 项目开发目录
----/${AppName} 项目源文件目录
----/${AppName}/nice.index.js 项目入口文件
----/${AppName}/nice.config.js 按项目自定义plugins及resolve配置参数文件
nice_public 打包编译时直接 copy 文件的目录，需按项目名称规范存放
----/${AppName}/* 项目名/资源文件，如 nice_public/demo/static/xxx.jpg
nice_www 最终打包目录
----/${AppName} 项目打包目录
.env.development 开发模式配置文件 npm run dev
.env.production 生产环境配置文件 npm run build
nice.config.js 框架主配置文件
nice.tool.js 框架函数库文件
vite.config.js 原vitejs配置文件
```

### 安装

* 下载框架文件
* 安装依赖 `npm install`
* 设置 `nice.config.js` , `nice.index.js`, `nice.config.js` 配置文件
* 本地调试  `npm run dev`
* 构建页面 `npm run build`
* 本地测试应用(需构建完成) `npm run preview`

### 开发规范

#### 接口返回格式 (建议)

```
//code[String]: "0"表示成功,其他失败
{"code": "0", "data": {}, "msg": "说明"}
```

### 常见问题

**1. 本地开发模式 AJAX 报错 `HTTP/1.1 405 Method not allowed`**

使用场景：本地环境开发时， `POST` 模拟请求本地json等静态文件时，失败

原因：一般web服务器，不允许响应 `POST` 请求的静态文件

解决此问题的两种方法：

1. 本地调试推荐：修改 `.env.xxx` 文件中 `NICE_SITE_DOMAIN` 域名为 `xxx.idev.ren` , 其中 `xxx` 可以为任意字符。此域名已泛解析到 `127.0.0.1`
1. 本地调试：配置 `.env.xxx` 文件的 `NICE_SITE_DOMAIN` 参数为域名，修改系统 `hosts` 文件，将域名指向 `127.0.0.1`
2. 不推荐 - 将 `POST` 请求修改为 `GET` ，注意生产环境打包前改回 `POST`
3. 官方 - 采用代理模式，配置 `server.proxy` 代理参数 [查看文档](https://cn.vitejs.dev/config/server-options.html#server-proxy)

**2. 使用 vue-router HTML5 路由模式时，需要配置服务器**

详见官方文档：<https://router.vuejs.org/zh/guide/essentials/history-mode.html#nginx>

```
#Nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**3. `unplugin-auto-import` 和 `unplugin-vue-components`插件的理解**

`unplugin-auto-import`: 允许代码中不写 `import xxx from 'xxx'`,自动导入
`unplugin-vue-components`: 解决按名称匹配到的规则路径导入文件

**4. 动态导入 `defineAsyncComponent` 的一些理解**

> 注意变量仅代表一层深的文件名。如果 file 是 foo/bar，导入将会失败。
> 详见：https://cn.vitejs.dev/guide/features.html#dynamic-import
> `defineAsyncComponent` ,变量形式: 变量名只能支持文件名，如./pages/{$path=ABC}.vue(OK),./pages/{$path=dir/ABC}.vue(X)
> 试验证明：每个变量只能是目录名或文件名，即$path = 'home'(OK),$path = '/home'(带'/',X)

```
# 多级目录动态导入样例
const MyAsyncComponent = (path,name) => defineAsyncComponent(() => import(`./pages/${path}/${name}.vue`))
```

```
# 另一种动态导入方式, import.meta.glob 同样最后一级正则变量也必须是文件名
const modules = import.meta.glob('./**/*.vue')
const routes = [
  { path: '/abc', component: modules['pages/dir/ABC.vue']}
]
```