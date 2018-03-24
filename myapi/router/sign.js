var express = require('express')
var router = express.Router()
var dao = require('../dao/signDao')

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
    // console.log('Time: ', new Date().toLocaleString())
    next()
})


router.get("/", function (req, resp) {
    resp.json({ msg: "sign api" })
})

//后台管理签到列表
router.get("/lists", function (req, resp) {

})

//个人签到记录
router.get("/record/:sid", function (req, resp) {

})

router.get("/sid", function (req, resp) {
    resp.json({ sid: '007' })
})

module.exports = router