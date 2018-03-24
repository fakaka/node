var mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
var db = require('../util/mongodb')

var SignSchema = new mongoose.Schema({
    sid: { type: String }
})

module.exports = db.model("sign", SignSchema)