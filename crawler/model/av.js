var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var db = require('../util/mongodb');

var AvSchema = new mongoose.Schema({
    // id: { type: String },
    aid: { type: String },
    typename: { type: String },
    title: { type: String },
    subtitle: { type: String },
    play: { type: Number },
    review: { type: Number },
    video_review: { type: Number },
    favorites: { type: Number },
    mid: { type: Number },
    author: { type: String },
    description: { type: String },
    create: { type: String },
    pic: { type: String },
    coins: { type: Number },
    duration: { type: String },
    badgepay: { type: Boolean },
    pts: { type: Number },
});

module.exports = db.model("av", AvSchema);