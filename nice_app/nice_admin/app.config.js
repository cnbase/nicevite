/**
 * 项目插件
 */
const AppPlugins = []

/**
 * vite resolve配置
 */
const AppResolve = {}

/**
 * 自定义 rollupOptions 参数
 */
const AppRollupOptions = {
    external: ['vue'],
    output: {
        globals: {
            vue: 'Vue'
        }
    }
}

module.exports = {
    AppPlugins,
    AppResolve,
    AppRollupOptions
}