var express = require("express");

var app = express();

app.get("/", function (req, resp) {
    resp.end("666");
});
app.listen(3000);