var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var querystring = require("querystring");
var article = require("./route/article");
var path = require("path");


var port = process.env.port || 3000;
app.use(bodyParser.json({ limit: "1mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, resp) => {
    resp.end("Welcome");
});
app.use("/article", article);

app.listen(port, () => {
    // console.log("listening on port : " + port);
    console.log("http://localhost:" + port);
})