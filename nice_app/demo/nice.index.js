const { resolve } = require('path')
const RootPath = resolve(__dirname)

/**
 * 所有入口文件
 */
const AllIndexFiles = {
    default: {
        index: RootPath + '/index.html',
    },
    index: {
        index: RootPath + '/index/index.html',
    }
}

module.exports = AllIndexFiles