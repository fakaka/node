var getData = require('../util/requestUtil').getData
var xml2js = require('xml2js')

async function spring4all(ctx, next) {

    var page = ctx.request.query.page || 1

    const options = {
        url: 'http://www.spring4all.com/common/articles/' + page
    }

    await getData(options).then((res) => {
        ctx.body = res
    })
}

async function cnode(ctx, next) {

    // tab  String 主题分类。目前有 ask share job good
    var requestData = {
        // 页数
        pageSize: ctx.request.query.pageSize || 10,
        // 是否使用 md 默认 true
        mdrender: 'false',
    }
    console.log(requestData)

    const options = {
        url: 'https://cnodejs.org/api/v1/topics?limit=' + requestData.pageSize,
        body: JSON.stringify(requestData)
    }

    await getData(options).then((res) => {
        ctx.body = res
    })
}

async function oschina(ctx, next) {

    var pageSize = ctx.query.pagesize || 10

    const options = {
        url: 'https://www.oschina.net/action/api/news_list?pageSize=' + pageSize
    }

    await getData(options).then((res) => {
        xml2js.parseString(res, { explicitArray: false, ignoreAttrs: true }, function (err, result) {
            ctx.body = result
        })
    })
}

async function csdn(ctx, next) {
    const options = {
        url: 'https://www.csdn.net/api/articles'
    }

    await getData(options).then((res) => {
        ctx.body = res
    })
}


module.exports = {
    spring4all, cnode, oschina, csdn
}
