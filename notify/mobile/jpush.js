/**
 * 相关文档
 * https://docs.jiguang.cn/jpush/server/3rd/nodejs_sdk/
 */
var JPush = require("jpush-sdk")
var client = JPush.buildClient('7a59e61668be1b48d8e61295', '56748db7ae6180631db90431')

/**
 * 
 * @param {Object} options 
 * @param {Function} cb 
 */
function notify(options, cb) {
    client.push()
        .setPlatform(JPush.ALL)
        .setAudience(JPush.ALL)
        .setNotification(JPush.android(options.message ,options.title, 1, {'key':'value'}))
        .send(cb)
}

exports.notify = notify