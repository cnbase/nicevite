/**
 * ajax 封装方法
 * npm install axios --save
 */
import axios from 'axios'

/**
 * API 地址
 * 可以是域名，也可以是绝对路径
 */
const apiHost = '/'

//组装API地址
const getApiUrl = function (api) {
    return apiHost + api
}

//post
const post = function (api, data, config) {
    data = data || {}
    config = config || {}
    config = {
        headers: { 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/json;charset=UTF-8' },
        responseType: 'json',
        ...config,
    }
    return new Promise(function (resolve, reject) {
        axios.post(getApiUrl(api), data, config).then(function (response) {
            if (response.status === 200) {
                resolve(response.data);
            } else {
                reject(response.data);
            }
        }).catch(function (error) {
            reject(error);
        });
    });
}

//formData 方式
const postFile = function (api, data, config) {
    data = data || {}
    config = config || {}
    config = {
        headers: { 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'multipart/form-data' },
        responseType: 'json',
        ...config,
        transformRequest: [function (data) {
            // 对 data 进行任意转换处理
            let formData = new FormData();
            for (let i in data) {
                if (Object.prototype.hasOwnProperty.call(data, i)) {
                    formData.append(i, data[i]);
                }
            }
            return formData;
        }],
    }
    return new Promise(function (resolve, reject) {
        axios.post(getApiUrl(api), data, config).then(function (response) {
            if (response.status === 200) {
                resolve(response.data);
            } else {
                reject(response.data);
            }
        }).catch(function (error) {
            reject(error);
        });
    });
}

//get
const get = function (api, data, config) {
    data = data || {}
    config = config || {}
    config = {
        headers: { 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/x-www-form-urlencoded' },
        responseType: 'json',
        params: {
            ...data
        },
        ...config
    }
    return new Promise(function (resolve, reject) {
        axios.get(getApiUrl(api), config).then(function (response) {
            if (response.status === 200) {
                resolve(response.data);
            } else {
                reject(response.data);
            }
        }).catch(function (error) {
            reject(error);
        });
    });
}

export default {
    get,
    post,
    postFile,
}