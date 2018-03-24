var mongoose = require("mongoose");
var db = require("../utils/db");

var ArticleSchema = new mongoose.Schema({
    title: { type: String },
    content: { type: String },
    create_time: { type: Date, default: Date.now() }
});

module.exports = db.model("article", ArticleSchema);