var getData = require('../util/requestUtil').getData

async function getList(ctx, next) {
    // https://m.weibo.cn/api/container/getIndex?value=3700233717&containerid=1076033700233717
    var req = ctx.request
    
    let data = {
        containerid: ctx.query.containerid || 1076033700233717,
    }
    let url = 'https://m.weibo.cn/api/container/getIndex?value=3700233717&containerid=' + data.containerid
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

module.exports = {
    getList
}
