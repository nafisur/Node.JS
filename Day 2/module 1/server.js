var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req, res){

    if (req.url == '/' || req.url == '/home') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        var homePage = fs.createReadStream(__dirname+'/index.html', 'utf-8')
        homePage.pipe(res)
    }

    else if (req.url == '/jsonrequest') {
        res.writeHead(200, {'Content-Type': 'application/json'})
        var employee = {
            empid : 10,
            empname : "nafisur",
            job : "Developer"

        }
        res.end(JSON.stringify(employee))
    }
    
})
server.listen(3000, '127.0.0.1')