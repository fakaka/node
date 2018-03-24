var mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
var db = require('../util/mongodb')

var MoneySchema = new mongoose.Schema({
    mid: { type: String },
    io: { type: String },
    num: { type: Number },
    payment: { type: String },
    desc: { type: String },
    record_time: { type: mongoose.SchemaTypes.Date, default: Date.now() },
    create_time: { type: mongoose.SchemaTypes.Date }
})

module.exports = db.model("money", MoneySchema)