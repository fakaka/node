var http = require("http");
var url = require("url");

var server = http.createServer(function (req, resp) {
    console.log("REQUEST " + req.method + " " + req.url);
    var parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl);


    resp.writeHead(200, { "Content-type": "application/json" });
    resp.write(JSON.stringify({ msg: "success" }));
    resp.end();
});

server.listen(3000);

console.log("Listen port: " + "3000");