// console.log("Hello World")

// function hello() {
//     console.log("Hii!")
// }

// hello()

// var http = require('http')
// var server = http.createServer(function(req, res) {
//     console.log("server running")
//     res.end('http server')
// })

// server.listen(3000)

var cal = require('./calc')
var msg = require('./header')
var user = require('./user')
// cal.add(10,20)
// cal.sub(10,5)
// cal.mul(5,5)
// cal.div(10,2)

// console.log(user.username, user.password)
var user1 = new user("Nafisur", "Ahmed")
console.log(user1.fullname())