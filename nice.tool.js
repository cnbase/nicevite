/**
 * 工具函数
 */
//处理入口文件
const GetIndexFiles = function (allIndexFile, ModuleName) {
    let _indexFiles = {}
    if (!ModuleName) {
        for (let i in allIndexFile) {
            _indexFiles = Object.assign(_indexFiles, allIndexFile[i])
        }
    } else if (allIndexFile[ModuleName]) {
        _indexFiles = allIndexFile[ModuleName];
    }
    return _indexFiles;
}
/**
 * 判断文件是否存在
 * checkFile(FilePath).isFile()
 */
const { promises } = require('fs')
const CheckFile = async function (FilePath) {
    return await promises.stat(FilePath).then(stat => stat.isFile()).catch(_ => false)
}

/**
 * 异步载入配置文件
 */
const AsyncRequireFile = async function(FilePath,defaultValue) {
    const isFile = await CheckFile(FilePath)
    if (isFile) {
        return require(FilePath)
    } else {
        return defaultValue
    }
}

module.exports = {
    GetIndexFiles,
    CheckFile,
    AsyncRequireFile
}