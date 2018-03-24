var express = require('express')
var router = express.Router()
var dao = require('../dao/docDao')

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
    // console.log('Time: ', new Date().toLocaleString());
    next()
})


router.get("/", function (req, resp) {
    dao.query('', (results) => {
        resp.json(results)
    })
})

module.exports = router;