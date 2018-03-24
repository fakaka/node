var express = require("express")
var app = express()
var server = require("http").createServer(app)
var io = require("socket.io").listen(server)

var port = process.env.PORT || 80
server.listen(port, () => {
    console.log("listen port: " + port)
})

var users = []

app.use('/', express.static(__dirname + '/public'))

io.set('heartbeat interval', 20)

io.sockets.on("connection", socket => {
    socket.on("login", name => {
        console.log(name + " is login")
        for (let i = 0; i < users.length; i++) {
            if (users[i] == name) {
                socket.emit("duplicate")
                return
            }
        }
        socket.userIndex = users.length
        socket.nickname = name
        users.push(name)
        io.sockets.emit("login", name)
        io.sockets.emit("sendClients", users)
    })
    socket.on("chat", data => {
        console.log(socket.nickname + "say" + data)
        if (socket.nickname == undefined) {
            return
        }
        io.sockets.emit("chat", socket.nickname, data)
    })
    socket.on("logout", name => {
        for (let i = 0; i < array.length; i++) {
            if (users[i] == name) {
                users.splice(i, 1)
                return
            }
        }
        socket.broadcast.emit("logout", name)
        io.sockets.emit("sendClients", users)
    })

})



