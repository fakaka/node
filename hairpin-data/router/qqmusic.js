var getData = require('../util/requestUtil').getData

async function getTopList(ctx, next) {
    var req = ctx.request

    let data = {
        uin: 0,
        needNewCode: 1,
        platform: 'h5',
        g_tk: 1928093487,
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        format: 'jsonp'
    }
    const options = {
        url: 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg',
        param: 'jsonpCallback',
        body: JSON.stringify(data)
    }

    await getData(options).then((res) => {
        var jsonData = res.substring('MusicJsonCallback('.length, res.length - 1)
        ctx.body = jsonData
    })

}
async function getTop(ctx, next) {
    var req = ctx.request

    let data = {
        topid: ctx.query.tid,
        needNewCode: 1,
        uin: 0,
        tpl: 3,
        page: 'detail',
        type: 'top',
        platform: 'h5',
        g_tk: 1928093487,
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: 0,
        format: 'jsonp'
    }
    let url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
    const options = {
        url,
        param: 'jsonpCallback'
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

module.exports = {
    getTopList, getTop
}
