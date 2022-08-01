const { resolve } = require('path')
const RootPath = resolve(__dirname)

/**
 * 所有入口文件
 */
const AllIndexFiles = {
    admin: {
        index: RootPath + '/admin/index.html',
    }
}

module.exports = AllIndexFiles