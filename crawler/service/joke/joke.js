var request = require('request')
var config = require('./config')
var Joke = require('./model/joke')

module.exports = {
    /**
     * 阿里云市场的api
     */
    joke1() {
        var options = {
            headers: { Authorization: 'APPCODE ' + config.appcode }
        }
        for (var index = 2; index < 10; index++) {
            let url = 'http://jisuxhdq.market.alicloudapi.com/xiaohua/text?pagenum=' + i + '&pagesize=20&sort=addtime'
            request.get(url, options, (err, resp, body) => {
                console.log(body)
                var list = JSON.parse(body).result.list
                for (var i = 0; i < list.length; i++) {
                    var ele = list[i];
                    // console.log(ele)
                    saveJoke({ content: ele.content })
                }
            })
        }
    },
    /**
     * 糗事百科
     */
    joke2() {

    }
}
/**
 * 保存数据到数据库
 * @param {Object} obj 
 */
function saveJoke(obj) {
    new Joke(obj).save()
        .catch(err => {
            if (err)
                console.log(err)
        })
}