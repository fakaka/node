var router = require('express').Router();
var articleDao = require("../dao/articleDao")

router.get("/", function (req, resp) {
    // console.log(req.query)
    // var page = {};
    // page.size = req.query.size || 10;
    // page.index = req.query.index || 1;

    // articleDao.find(page, {}, function (res) {
    //     resp.json(res);
    // });
    articleDao.find({}, {}, function (res) {
        resp.render('posts', {
            posts: res
        });
    });
});

router.get("/:id", (req, resp) => {
    articleDao.findById(id, function (err, res) {
        resp.json(res);
    });
});

router.post("/add", (req, resp) => {
    var article = {
        title: req.body.title,
        content: req.body.content
    };
    articleDao.addArticle(article, function (res) {
        resp.json(res);
    });
});

module.exports = router;
