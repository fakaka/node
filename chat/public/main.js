window.onload = function () {
    console.log("login...");
    document.getElementById('info').textContent = 'get yourself a nickname :)';
    document.getElementById('nickWrapper').style.display = 'block';
    document.getElementById('nicknameInput').focus();

    socket = io.connect();
    socket.on("connect", () => {
        socket.on("login", function (name) {
            console.log("hi " + name);
            document.getElementById('loginWrapper').style.display = 'none';
            document.getElementById("historyMsg").innerHTML += "[" + new Date().toLocaleString() + "] System : " + name + " login ";
        });
        socket.on("chat", function (name, msg) {
            var container = document.getElementById('historyMsg');
            var msgToDisplay = document.createElement('p');
            msgToDisplay.innerHTML = "[" + new Date().toLocaleString() + '] ' + name + ' say: ' + msg;
            container.appendChild(msgToDisplay);
        });
        socket.on("logout", function (name) {
            document.getElementById("historyMsg").innerHTML += "[" + new Date().toLocaleString() + "] System : " + name + " logout ";
        });
    })

    document.getElementById('loginBtn').addEventListener('click', function () {
        var nickName = document.getElementById('nicknameInput').value;
        if (nickName.trim().length != 0) {
            socket.emit('login', nickName);
        } else {
            document.getElementById('nicknameInput').focus();
        };
    }, false);
    document.getElementById('nicknameInput').addEventListener('keyup', function (e) {
        if (e.keyCode == 13) {
            var nickName = document.getElementById('nicknameInput').value;
            if (nickName.trim().length != 0) {
                socket.emit('login', nickName);
            };
        };
    }, false);
    document.getElementById('sendBtn').addEventListener('click', function () {
        var messageInput = document.getElementById('messageInput');
        var msg = messageInput.value;
        messageInput.value = '';
        messageInput.focus();
        if (msg.trim().length != 0) {
            socket.emit('chat', msg);
        }
    }, false);
    document.getElementById('messageInput').addEventListener('keyup', function (e) {
        if (e.keyCode == 13) {
            var messageInput = document.getElementById('messageInput');
            var msg = messageInput.value;
            messageInput.value = '';
            messageInput.focus();
            if (msg.trim().length != 0) {
                socket.emit('chat', msg);
            }
        }
    }, false);
    document.getElementById('clearBtn').addEventListener('click', function () {
        document.getElementById('historyMsg').innerHTML = '';
    }, false);
}