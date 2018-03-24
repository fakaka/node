var articleModel = require("../model/article");

module.exports = {
    findById: function (id, cb) {
        articleModel.findById(id, function (err, res) {
            if (err) return err;
            console.log(res);
            cb(res);
        });
    },
    find: function (page, conditions, cb) {
        let skip = (parseInt(page.index) - 1) * page.size;
        let size = parseInt(page.size);
        articleModel.find(conditions).skip(skip).limit(size).exec(function (err, res) {
            if (err) return err;
            console.log(res);
            cb(res);
        });
    },
    addArticle: function (article, cb) {
        articleModel.create(article, function (err, res) {
            console.log(article)
            if (err) return err;
            console.log(res);
            cb(res);
        });
    },
    deleteArticleById: function (id, cb) {
        articleModel.findByIdAndRemove(id, function (err, res) {
            if (err) return err;
            console.log(res);
            cb(res);
        });
    }
}
