var getData = require('../util/requestUtil').getData

// https://www.juhe.cn/docs/api/id/95
async function juheApi(ctx, next) {

    let key = 'be6d01b2c119167f8f882a93079058c1'
    let page = ctx.request.query.page || 1
    let pagesize = ctx.request.query.pagesize || 10
    let sort = 'desc'
    let time = new Date().getTime().toString().substr(0, 10)

    const options = {
        url: `http://v.juhe.cn/joke/content/list.php?key=${key}&page=${page}&pagesize=${pagesize}&sort=desc&time=${time}`,
    }

    await getData(options).then((res) => {
        ctx.body = res
    })
}

module.exports = {
    juheApi
}
