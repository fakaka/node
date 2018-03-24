var article = require("../model/article");

module.exports = {
    findBy: function (cb) {
        article.findOne({ title: "test" }, function (err, res) {
            cb(res);
        });
    },
    insertOne: function (cb) {
        article.create({ title: "test", content: "666" }, function (err, doc) {
            if (err) return err;
            labelModel.create({ blogid: doc._id, label: label }, function (err, doc) {
                if (err) return err;
            })
        })
    }
}
