var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var db = require('../util/mongodb');

var JokeSchema = new mongoose.Schema({
    type: { type: String },
    content: { type: String },
    img_url: { type: String },
    add_time: { type: String }
});

module.exports = db.model("jokes", JokeSchema);