var mongoose = require("mongoose")
mongoose.Promise = require('bluebird')

var db = mongoose.createConnection('localhost', 'data', 27017)

db.on('error', () => {
    console.error('连接错误:')
})
db.once('open', () => {
    console.log("数据库连接成功");
})

var InsSchema = new mongoose.Schema({
    id: { type: String },
    comments_disabled: Boolean,
    is_video: Boolean,
    code: String,
    date: String,
    display_src: String,
    caption: String,
    comments: Number,
    likes: Number
})

var InsModel = db.model("ins", InsSchema)

// var user = new InsModel({ id: 666, name: "好开心" })
// user.save((err, res, num) => {
//     console.log(res)
// })

module.exports = db.model("ins", InsSchema)

