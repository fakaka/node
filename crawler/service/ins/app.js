var album = require('./album')
var downloader = require('./downloader')
var fs = require('fs')
var InsModel = require('./util/db')
var notification = require('./notification')

module.exports = {
    work() {
        album.getLatest()
            .then((data) => {
                if (data == null) {
                    console.log('指定用户不对')
                    return
                }
                var nodes = data.entry_data.ProfilePage[0].user.media.nodes
                for (var index = 0; index < nodes.length; index++) {
                    saveData(nodes[index])
                }
            }).catch(err => {
                console.log(err)
            })
    }
}

/**
 * 1. 先存到数据库
 * 2. 根据消息id判断重复  
 *      * 重复就放弃  
 *      * 不重复就继续 3
 * 3. 保存图片视频到本地
 * 4. 上传到7牛或者腾讯云
 * 
 * @param {String} node ins消息节点
 */
function saveData(node) {
    // 存到数据库
    InsModel.find({ "id": node.id }).then((res) => {
        // console.log(res)
        if (res.length > 0) {
            console.log('id为' + node.id + '的ins已经存在')
            return
        }
        let msg = {
            id: node.id,
            comments_disabled: node.comments_disabled,
            is_video: node.is_video,
            code: node.code,
            date: node.date,
            display_src: node.display_src,
            caption: node.caption || '',
            comments: node.comments.count,
            likes: node.likes.count
        }
        var ins = new InsModel(msg)
        ins.save((err, res, num) => {
            // console.log(res)
        })

        // 存文件
        downloader.downloadMedia(node).then((fileName) => {
            // 发送提醒邮件
            let caption = node.caption || ''
            caption = caption.replace(/\n/g, '<br>')
            console.log(caption)
            var html = `<h2>${caption}</h2><img src="http://ooyhwygfv.bkt.clouddn.com/${fileName}" width="640px">`

            let mailOpt = {
                subject: 'ins消息提醒',
                html: html
            }
            notification.email(mailOpt)
            // InsModel.find({ "id": node.id }).then((res) => {
            //     console.log(res)
            // })

        })
    }).catch((err) => {
        console.error(err)
    })
}


