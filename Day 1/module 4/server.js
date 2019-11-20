var http = require('http')
var server = http.createServer(function(req, res){

    if (req.url == "/") {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<html><head><body> Hello </body></html>')
    }
    else if (req.url == "/profile") {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<html><head><h2>Welcome to My Profile </h2></head> <body></body></html>')
    }

    else {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<html><head><body> Opps 404 Page not found!! </body></html>') 
    }
    res.end()

}).listen(3000)

console.log("server running")