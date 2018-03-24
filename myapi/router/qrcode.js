var express = require('express');
var router = express.Router();
var fs = require("fs");

router.get("/", function (req, resp) {
    var code = fs.readFileSync("code.jpg");
    resp.write(code, "binary");
    resp.end();
});

module.exports = router;