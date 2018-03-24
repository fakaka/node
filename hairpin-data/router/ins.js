var getData = require('../util/requestUtil').getData

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

/**
 * 获取最新一页ins的消息
 */
async function getLatest(ctx, next) {

    const options = {
        url: 'https://www.instagram.com/whitehairpin/?__a=1',
        proxy: 'http://127.0.0.1:1087'
    }

    await getData(options).then((res) => {
        var data = JSON.parse(res)
        if(data.graphql.user){
            ctx.body = data.graphql.user
        }else{
            ctx.body = ''
        }
    })

}

/**
 * 获取所有的ins消息
 * 
 * @param {String} url 
 */
function getListAll(url) {
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
}

/**
 * 获取单个ins消息页
 * @param {String} url 
 */
function getOne(url) {
    return new Promise((resolve, reject) => {
        request.get(url, (err, resp, body) => {
            reject(err)
            var obj = JSON.parse(getJson(body))
            resolve(obj);
        })
    })
}

module.exports = {
    getLatest, getListAll, getOne

}
