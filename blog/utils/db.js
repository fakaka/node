var mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
var config = require("../config")

var db = mongoose.createConnection(config.mongodb);

db.on('error', (err) => {
    console.error('数据库连接失败: ' + err);
});
db.once('open', () => {
    // console.log("数据库连接成功");
});

module.exports = db;