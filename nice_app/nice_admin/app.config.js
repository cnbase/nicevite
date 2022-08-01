/**
 * 项目插件
 */
//  const AutoImport = require('unplugin-auto-import/vite')
const Components = require('unplugin-vue-components/vite')
const { AntDesignVueResolver } = require('unplugin-vue-components/resolvers')
const AppPlugins = [
    // AutoImport({
    //     resolvers: [
    //       (name) => {
    //         if (name.match(/^Bk[A-Z]/)) {
    //           const parseName = name.slice(2).replace(/([A-Z])/g, ' $1').trim().split(' ').join('-').toLowerCase()
    //           return {name, from: 'bkui-vue/lib/'+parseName, sideEffects: 'bkui-vue/lib/'+parseName+'/'+parseName+'.css'}
    //         }
    //       }
    //     ]
    // }),
    Components({
        resolvers: [AntDesignVueResolver()],
    }),
]

/**
 * vite resolve配置
 */
const AppResolve = {
}

/**
 * 自定义 rollupOptions 参数
 * npm install -D rollup-plugin-external-globals
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