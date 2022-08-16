const { resolve } = require('path')
const RootPath = resolve(__dirname)

/**
 * 所有入口文件
 */
const AllIndexFiles = {
    admin: {
        login: RootPath + '/admin/login.html',
        index: RootPath + '/admin/index.html',
        welcome: RootPath + '/admin/welcome/index.html',
        error404: RootPath + '/admin/Error404.html',
    }
}

module.exports = AllIndexFiles