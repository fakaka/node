var mongoose = require("mongoose");
mongoose.Promise = require('bluebird');
var config = require('../config').mongodb;

var db = mongoose.createConnection('localhost', 'data', 27017);

db.on('error', () => {
    console.error('连接错误:')
});
// db.once('open', () => {
//     console.log("数据库连接成功");
// });

module.exports = db;