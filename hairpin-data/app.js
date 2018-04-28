const Koa = require('koa')
const router = require('koa-router')()
const cors = require('koa-cors')

const fs = require('fs')

const app = new Koa()

const PORT = 3003

// 
// fs.readdirSync(__dirname + '/router').filter((f) => {
//     return f.endsWith('.js')
// }).forEach((file) => {
//     console.log(`process controller: ${file}...`)
//     let mapping = require(__dirname + '/router/' + file)
//     console.log(mapping)
// })

// 设置跨域 *
app.use(cors())

// TODO 返回 api 文档
router.get('/', (ctx, next) => {
    ctx.body = '欢迎使用该 api'
})

// router.get('/app/:id', (ctx, next) => {
//     console.log('id = ' + ctx.params.id)
//     ctx.body = 'id'
// })

// 云音乐通用接口
router.get('/music/search', require('./router/music').search)
router.get('/music/banner', require('./router/music').getBanner)

// 歌曲相关接口
router.get('/music/song/url', require('./router/music').getMusicUrl)
router.get('/music/song/detail', require('./router/music').getMusicDetail)
router.get('/music/song/lyric', require('./router/music').getMusicLyric)
router.get('/music/song/comment', require('./router/music').getMusicComment)

// 歌单相关接口
router.get('/music/playlist/detail', require('./router/music').getPlaylist)


// 排行榜相关接口
router.get('/music/top', require('./router/music').getTopList)
router.get('/music/top/artist', require('./router/music').getTopArtists)

router.get('/qqmusic/toplist', require('./router/qqmusic').getTopList)
router.get('/qqmusic/top', require('./router/qqmusic').getTop)

// B站
router.get('/bilibili/banner', require('./router/bilibili').getBanner)
router.get('/bilibili/rank', require('./router/bilibili').getRank)
router.get('/bilibili/search', require('./router/bilibili').search)
router.get('/bilibili/recommend', require('./router/bilibili').recommend)
router.get('/bilibili/video', require('./router/bilibili').video)
router.get('/bilibili/user/info', require('./router/bilibili').getUserInfo)
router.get('/bilibili/user/space', require('./router/bilibili').getUserSpace)
router.get('/bilibili/user/video', require('./router/bilibili').getUserVideo)


// 新闻
router.get('/news/osc', require('./router/news').oschina)
router.get('/news/csdn', require('./router/news').csdn)
router.get('/news/cnode', require('./router/news').cnode)
router.get('/news/spring4all', require('./router/news').spring4all)

// 笑话
router.get('/joke/juhe', require('./router/joke').juheApi)

// ins
router.get('/ins/lyt', require('./router/ins').getLatest)

// weibo
router.get('/weibo/list', require('./router/weibo').weiboList)
router.get('/weibo/hot', require('./router/weibo').weiboHot)
router.get('/weibo/like', require('./router/weibo').weiboLike)


app.use(router.routes())

app.listen(PORT)
console.log(`http://localhost:${PORT}`)
