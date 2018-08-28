var http = require('http');
let port = process.env.PORT || 1337;

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(port);

});

server.listen(port);


