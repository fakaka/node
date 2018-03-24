var http = require('http');

var server = http.createServer(function (request, response) {
	response.writeHead(200, {
		'Content-Type': 'text/html'
	});
	response.end('<h1>Hello Nodejs</h1>');
});
server.listen(8888);
server.on('error',function(e){
	if(e.code=="EADDRINUSE"){//端口被占用

	}
})

console.log('Server running at http://127.0.0.1:8888/');