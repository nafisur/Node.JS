
var express = require('express')
var app = express()
app.set('view engine', 'ejs')

// app.get('/', function(req, res){
//     res.send('HomePage using Express')
// })

// app.get('/contact', function(req, res){
//     res.send('Contact Page using Express')
// })

// app.get('/profile/:name', function(req, res){
//     res.send("profile selected: "+req.params.name)
// })

// app.get('/profile/:name/:city', function(req, res){
//     var profile = `Profile name :  ${req.params.name}
//     Resident of : ${req.params.city}`
//     res.send(profile)
// })

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html')
})

app.get('/contact', function(req, res){
    res.sendFile(__dirname+'/contact.html')
})

app.get('/profile/:name/:city', (req, res) => {

    var data = {age: 28, job: "Project Manager",
    hobbies: ["Coding", "Movies"]}

return res.render('profile', {user: req.params.name, city: req.params.city})
})

app.listen(3000)