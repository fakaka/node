var express = require("express")
var querystring = require("querystring")
var bodyParser = require("body-parser")
var sign = require("./router/sign")
var qrcode = require("./router/qrcode")
var joke = require("./router/joke")
var doc = require("./router/doc")

var port = process.env.PORT || 4869
var app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: "1mb" }))

//设置跨域
app.all('*', function (req, resp, next) {
    console.log(new Date().toLocaleTimeString() + " " + req.method + " " + req.url)
    resp.header("Access-Control-Allow-Origin", "*")
    resp.header("Access-Control-Allow-Headers", "X-Requested-With")
    resp.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    next()
})

// 首页
app.get("/", (req, resp) => {
    resp.json({ msg: "Welcome" })
})

//sign
app.use("/sign", sign)

//qrcode
app.use("/qrcode", qrcode)

//joke
app.use("/joke", joke)

//doc
app.use("/doc", doc)


app.listen(port, () => {
    console.log("Listen Port ：http://127.0.0.1:" + port)
})
