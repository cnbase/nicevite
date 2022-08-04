## 开发记录

### **CDN模式加载vue**

```
1. 下载 vue.runtime.global.prod.js 文件
2. npm i -D rollup-plugin-external-globals
3. 配置app.config.js的 AppRollupOptions 选项，如下
const externalGlobals = require("rollup-plugin-external-globals")
const AppRollupOptions = {
    external: ['vue'],
    plugins: [
        externalGlobals({
            vue: 'Vue'
        })
    ]
}
```

### **按需载入antD**

```
1. npm i ant-design-vue --save
2. npm i -D unplugin-vue-components
3. 配置 app.config.js 的 AppPlugins 选项:
const Components = require('unplugin-vue-components/vite')
const { AntDesignVueResolver } = require('unplugin-vue-components/resolvers')
const AppPlugins = [
    Components({
        resolvers: [AntDesignVueResolver()],
    }),
]
```

### **自动导入css样式**

```
1. npm i -D less
2. 配置 app.config.js 的 AppCss 选项:
preprocessorOptions: {
    less: {
        javascriptEnabled: true,
    }
}
3. npm i -D consola
4. npm i -D vite-plugin-style-import
5. 配置 app.config.js 的 AppPlugins 选项:
const { createStyleImportPlugin, AndDesignVueResolve } = require('vite-plugin-style-import')
const AppPlugins = [
    createStyleImportPlugin({
        resolves: [AndDesignVueResolve()],
    }),
]
```