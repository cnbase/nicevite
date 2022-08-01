/**
 * 异步配置
 */
import { loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')

const defineNiceConfig = async function () {

    /**
     * 项目名称
     */
    const AppName = 'demo'

    /**
     * 应用模块名称
     * 注：按项目打包时请留空
     */
    const ModuleName = ''

    /**
     * 项目文件路径
     */
    const AppPath = resolve(__dirname, 'nice_app/' + AppName)

    /**
     * 打包根路径
     */
    const RootPath = resolve(__dirname, 'nice_app/' + AppName + (ModuleName ? '/' + ModuleName : ''))

    /**
     * 静态资源直接拷贝目录
     */
    const CopyDir = resolve(__dirname, 'nice_public/' + AppName + (ModuleName ? '/' + ModuleName : ''))

    /**
     * 载入项目入口文件
     */
    const { GetIndexFiles, AsyncRequireFile } = require('./nice.tool.js');
    let AllIndexFiles = await AsyncRequireFile(AppPath + '/nice.index.js', {})
    IndexFiles = GetIndexFiles(AllIndexFiles, ModuleName)

    /**
     * 获取项目配置
     */
    let AppConfig = await AsyncRequireFile(AppPath + '/app.config.js', { AppPlugins: [], AppResolve: {}, AppRollupOptions: {} })
    let AppPlugins = AppConfig.AppPlugins ? AppConfig.AppPlugins : []
    let AppResolve = AppConfig.AppResolve ? AppConfig.AppResolve : {}
    let AppRollupOptions = AppConfig.AppRollupOptions ? AppConfig.AppRollupOptions : {}

    /**
     * 构建相关的配置项
     */
    const BuildConfig = {
        root: RootPath,
        base: '',
        publicDir: CopyDir,
        outDir: resolve(__dirname, 'nice_www/' + AppName + (ModuleName ? '/' + ModuleName : '')),
        assetsDir: 'static',
        rollupOptions: {
            input: IndexFiles,
            ...AppRollupOptions
        },
        host: function (mode, envPath) {
            return loadEnv(mode, envPath, '').NICE_SITE_DOMAIN
        },
    }

    /**
     * 插件相关
     * 默认 vue()
     * 其他扩展放 nice_app/{AppName}/app.config.js
     */
    const Plugins = [
        vue(),
        ...AppPlugins
    ]

    /**
    * resolve相关
    * vue.esm-bundler.js: 包含运行时编译器,DOM内模板或通过内联 JavaScript 字符串的模板
    * 如：const Home = { template: '<div>首页内容</div>' }
    */
    const Resolve = {
        // alias: { 'vue': 'vue/dist/vue.esm-bundler.js' },
        ...AppResolve
    }

    return {
        AppName,
        BuildConfig,
        Plugins,
        Resolve,
    }
}

module.exports = {
    defineNiceConfig
}