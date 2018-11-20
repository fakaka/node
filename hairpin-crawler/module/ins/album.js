var request = require('request')
var Promise = require('bluebird')

/**
 * 从HTML中获取需要的JSON
 * 
 * @param {String} body 
 */
function getJson(body) {
    if (!body)
        return ""
    var regExp = /window._sharedData = .*};/
    var list = regExp.exec(body)
    // 判断是否为空
    var result = list[0].substr(21)
    result = result.substr(0, result.length - 1)
    return result
}

module.exports = {
    /**
     * 获取最新一页ins的消息
     */
    getLatest(user) {
        return new Promise((resolve, reject) => {
            let url = ''
            if (user == 'lyt') {
                url = 'https://www.instagram.com/whitehairpin/'
            }
            else if (user == 'test') {
                url = 'https://www.instagram.com/vakmj012/'
            }else {
                resolve(null)
            }
            request.get(url, (err, resp, body) => {
                var obj = JSON.parse(getJson(body))
                // console.log(obj)
                resolve(obj)
            })
        })
    },
    /**
     * 获取所有的ins消息
     * 
     * @param {String} url 
     */
    getListAll(url) {
        return new Promise((resolve, reject) => {
            request.get('https://www.instagram.com/whitehairpin/', (err, resp, body) => {
                var regExp = /window._sharedData = .*};/
                var list = regExp.exec(res.body)
                // console.log(list[0])
                var result = list[0].substr(21)
                result = result.substr(0, result.length - 1)
                var obj = JSON.parse(jsonData)
                resolve(obj);
            })
        })
    },
    /**
     * 获取单个ins消息页
     * @param {String} url 
     */
    getOne(url) {
        return new Promise((resolve, reject) => {
            request.get(url, (err, resp, body) => {
                reject(err)
                var obj = JSON.parse(getJson(body))
                resolve(obj);
            })
        })
    }
}
