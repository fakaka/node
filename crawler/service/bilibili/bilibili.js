var request = require('request')

const map = {
    1: '动画',
    3: '音乐',
    4: '游戏',
    11: '电视剧',
    16: '广告',
    23: '电影',
    36: '科技',
    119: '鬼畜',
    129: '舞蹈',
    155: '时尚',
    160: '生活',
    168: '国产原创相关'
}

/**
 * 根据分区id获取数据
 * @param {Number} rid 分区id
 */
function getRankData(rid) {
    // 完整的url
    // https://api.bilibili.com/x/web-interface/ranking/region?callback=jQuery172010471243388019502_1497597717792&rid=11&day=3&original=0&jsonp=jsonp&_=1497597782930

    request.get('https://api.bilibili.com/x/web-interface/ranking/region?rid=' + rid, {}, (err, resp, body) => {
        if (err)
            throw err
        if (!body)
            return
        var data = JSON.parse(body).data
        console.log(map[rid])
        console.log(data[0])

        for (var i = 0; i < data.length; i++) {
            let element = data[i]
            // saveAV(element)
        }
    })
}

/**
 * 保存视频信息
 * @param {Object} av b站视频
 */
function saveAV(av) {
    AV.findOne({ aid: av.aid }).then((res) => {
        if (res) {
            console.log(`aid为${av.aid}的视频已经存在`)
        } else {
            new AV(av).save()
        }
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = {
    /**
     * 分区排行数据
     * @param {Array} likes 喜欢的栏目
     */
    rank(likes = [1, 3, 4, 11, 23, 129]) {

        for (let i = 0; i < likes.length; i++) {
            var rid = likes[i]
            getRankData(rid)
        }
    },
    dynamic() {

    }
}

