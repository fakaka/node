var album = require('./album')
var downloader = require('./downloader')
var fs = require('fs')

album.getLatest().then(data => {
    console.log("-------------app------------------")
    var nodes = data.entry_data.ProfilePage[0].user.media.nodes
    for (var index = 0; index < nodes.length; index++) {
        saveData(nodes[index])
    }
}).catch(err => {
    console.log(err)
})

/**
 * 1. 先存到数据库
 * 2. 根据消息id判断重复
 *      重复就放弃
 *      不重复就继续 3
 * 3. 保存图片视频到本地
 * 4. 上传到7牛或者腾讯云
 * 
 * @param {String} node ins消息节点
 */
function saveData(node) {
    // 存到数据库


    // 存文件
    downloader.downloadMeida(node)
}