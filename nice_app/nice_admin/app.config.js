/**
 * 项目插件
 */
const AppPlugins = []

/**
 * vite resolve配置
 */
const AppResolve = {
}

/**
 * 自定义 rollupOptions 参数
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
    AppRollupOptions
}