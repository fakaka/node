var express = require('express')
var router = express.Router()
var moneyDao = require('../dao/moneyDao')

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
    next()
})

/**
 * 默认查最近的一个月的
 */
router.get("/", function (req, resp) {
    moneyDao.findAll().then((res) => {
        resp.json(res)
    })
})

router.get("/lists", function (req, resp) {
    moneyDao.findAll().then((res) => {
        resp.json(res)
    })
})

router.get("/lists/month/:m", (req, resp) => {
    console.log(req.params)
})

router.get("/lists/day/:d", (req, resp) => {
    console.log(req.params)
})

router.post("/add", function (req, resp) {
    var params = req.body
    var values = [new Date().toLocaleString(), params.io, params.num, params.payment, params.descs]
    moneyDao.add(values, function (res) {
        if (res.affectedRows > 0) {
            resp.end(JSON.stringify({ msg: "添加成功", code: 0 }))
        } else {
            resp.end(JSON.stringify({ msg: "添加失败", code: 1 }))
        }
    })
})

router.get("/delete/:id", function (req, resp) {
    let id = req.params.id
    moneyDao.delete(id).then((res) => {
        resp.json(res)
    })
})

router.post("/update", function (req, resp) {
    var params = req.body
    console.log(params)
    var sql = 'update details set io=?,num=?,payment=?,descs=? where id=?'
    db.query(sql, [params.io, params.num, params.payment, params.descs, params.id], function (err, rows) {
        if (err) throw err
        console.log(rows)
        resp.end(JSON.stringify(rows))
    })
})

module.exports = router