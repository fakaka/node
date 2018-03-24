var getData = require('../util/requestUtil').getData
var cheerio = require('cheerio')

const map = {
    '1': '动画',
    '3': '音乐',
    '4': '游戏',
    '11': '电视剧',
    '16': '广告',
    '23': '电影',
    '36': '科技',
    '119': '鬼畜',
    '129': '舞蹈',
    '155': '时尚',
    '160': '生活',
    '168': '国产原创相关'
}

async function getRank(ctx, next) {
    // 完整的url
    // https://api.bilibili.com/x/web-interface/ranking/region?callback=jQuery172010471243388019502_1497597717792&rid=11&day=3&original=0&jsonp=jsonp&_=1497597782930

    const options = {
        url: 'https://api.bilibili.com/x/web-interface/ranking/region?rid=' + ctx.query.rid
    }

    await getData(options).then((res) => {
        ctx.body = res
    })
}

async function getBanner(ctx, next) {
    // 完整的url

    const options = {
        url: 'https://api.bilibili.com/x/web-show/res/loc?id=142'
    }

    await getData(options).then((res) => {
        var obj = JSON.parse(res)
        if (obj.code == 0) {
            ctx.body = obj
        }
    })
}





async function getUserVideo(ctx, next) {
    // 完整的url
    // http://space.bilibili.com/ajax/member/getSubmitVideos?mid=116683&page=1&pagesize=10

    const options = {
        url: 'http://space.bilibili.com/ajax/member/getSubmitVideos?mid=' + ctx.query.mid + '&page=1&pagesize=10'
    }

    await getData(options).then((res) => {
        ctx.body = res
    })

}
async function getUserInfo(ctx, next) {
    // 完整的url

    const options = {
        url: 'https://space.bilibili.com/ajax/member/GetInfo?mid=' + ctx.query.mid
    }

    await getData(options).then((res) => {
        ctx.body = res
    })

}


async function search(ctx, next) {
    // 完整的url

    var data = {
        "keyword": ctx.query.keyword,
        "page": 1,
        "pagesize": 10,
        "search_type": "all"
    }

    let url = 'https://search.bilibili.com/api/search'
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

    const options = {
        url
    }

    await getData(options).then((res) => {
        ctx.body = res
    })

}

async function recommend(ctx, next) {
    // 完整的url
    // https://api.bilibili.com/x/web-interface/ranking/index?day=3
    var data = {
    }

    let url = 'https://api.bilibili.com/x/web-interface/ranking/index?day=3'

    const options = {
        url
    }

    await getData(options).then((res) => {
        ctx.body = res
    })

}

async function video(ctx, next) {
    // 完整的url
    // https://api.bilibili.com/x/web-interface/ranking/index?day=3
    var data = {

        "batch": "1",
        "check_area": "1",
        "id": 20793270,
        "platform": "ios",
        "type": "json",
    }

    let url = 'http://api.bilibili.com/view?'
    url += param(data)

    const options = {
        url
    }

    await getData(options).then((res) => {
        ctx.body = res
    })

}

function param(data) {
    let url = ''
    for (var k in data) {
        let value = data[k] || ''
        url += '&' + k + '=' + encodeURIComponent(value)
    }
    return url ? url.substring(1) : ''
}

function ranks(likes = [1, 3, 4, 11, 23, 129]) {

    for (let i = 0; i < likes.length; i++) {
        var rid = likes[i]
        getRank(rid)
    }
}

function dynamic() {

}


module.exports = {
    getRank, search, getUserVideo, getUserInfo, recommend, video, getBanner
}

