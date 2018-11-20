var request = require('request')
var fs = require('fs')
var album = require('./album')
var uploader = require('./uploader')
var Promise = require('bluebird')
// var moment = require('monent')

module.exports = {
    /**
     * 保存图片和视频
     * @param {String} imgUrl 图片大图链接 (视频)
     * @param {String} fileName 时间加标题 格式为yyyyDDmm (时间是发布时间！！！)
     */
    downloadMedia(item) {
        return new Promise((resolve, reject) => {
            console.log('正在保存 ==>')
            let pub_time = item.date
            let imgUrl = item.display_src
            let ext = imgUrl.substring(imgUrl.lastIndexOf("."))
            let caption = item.caption || ''
            caption = caption.replace(/\n/g, '')

            let fileName = pub_time + caption
            console.log(fileName)
            // https://scontent-nrt1-1.cdninstagram.com/t51.2885-15/e35/17438556_767322670115568_4521178215548452864_n.jpg
            if (fileName.length > 25) {
                fileName = fileName.substring(0, 25)
            }
            fileName += ext
            downloadImg(imgUrl, fileName)
            if (item.is_video) {
                // downloadVideo(node)
            }
            resolve(fileName)
        })
    },
    saveFile(fileName, data) {
        fs.writeFile(fileName, data, { encoding: "utf-8" }, (err) => {
            if (err)
                console.error(err)
        })
    }
}

function downloadVideo(node) {
    let url = 'https://www.instagram.com/p/' + node.code
    album.getOne(url).then((data) => {
        var media = data.entry_data.PostPage.graphql.shortcode_media
        request(media.video_url, {}, (err, res) => {
            if (err)
                console.error(err)
        }).pipe(fs.createWriteStream(''))

    })
}


function downloadImg(imgUrl, fileName) {
    var stream = request(imgUrl, (err, res) => {
        if (err)
            console.error(err)
    }).pipe(fs.createWriteStream('img/' + fileName))

    stream.on('finish', function () {
        uploader.uploadFile(fileName, 'img/' + fileName)
    })
}
