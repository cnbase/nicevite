/**
 * vite plugins
 * npm i -D consola
 * npm i -D vite-plugin-style-import
 */
const { createStyleImportPlugin, AndDesignVueResolve } = require('vite-plugin-style-import')
const AppPlugins = [
    createStyleImportPlugin({
        resolves: [AndDesignVueResolve()],
    })
]

/**
 * vite resolve 配置
 */
const AppResolve = {}

/**
 * vite css 配置
 * npm i -D less
 */
const AppCss = {
    preprocessorOptions: {
        less: {
            javascriptEnabled: true,
        }
    }
}

/**
 * 自定义 rollupOptions 参数
 * npm i -D rollup-plugin-external-globals
 */
const externalGlobals = require("rollup-plugin-external-globals")
const AppRollupOptions = {
    external: ['vue'],
    plugins: [
        externalGlobals({
            vue: 'Vue'
        })
    ]
}

module.exports = {
    AppPlugins,
    AppResolve,
    AppRollupOptions,
    AppCss
}