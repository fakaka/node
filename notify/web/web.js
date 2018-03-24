var http = require("http")
var fs = require("fs")
var port = 3000

http.createServer(function (req, resp) {
    console.log("Client connected:" + req.url)

    resp.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Access-Control-Allow-Origin': '*'
    })

    var id = 0
    var timer = setInterval(function () {
        var content = "data:" + new Date().toLocaleString() + "\n\n"
        content += 'id:' + (id++) + '\n\n'
        var b = resp.write(content)
        if (!b) {
            console.log("Data got queued in memory (content=" + content + ")")
        }
        else {
            console.log("Flushed! content is\n" + content)
        }
    }, 1000)

    req.connection.on("close", function () {
        resp.end()
        clearInterval(timer)
        console.log("Client closed connection. Aborting.")
    })

}).listen(port)

console.log("Server running at http://localhost:" + port)