var mongoose = require("mongoose")
mongoose.Promise = require('bluebird')
var db_config = require('../config').mongodb

var db = mongoose.createConnection(db_config.host, db_config.database, db_config.port)

db.on('error', () => {
    console.error('mongodb连接错误 ')
})
// db.once('open', () => {
//     console.log("数据库连接成功")
// })

module.exports = db