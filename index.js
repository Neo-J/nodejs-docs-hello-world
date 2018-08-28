let http = require('http');
let port = process.env.PORT || 1337;

let server = http.createServer(function(requireuest, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(port);

});

server.listen(port);


