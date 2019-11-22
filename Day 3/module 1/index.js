const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname+'/views'))
app.use(session({secret:'abaaba',saveUninitialized: true, resave: true}))
var globalSession

router.get('/', (req, res) => {

    globalSession = req.session
    if (globalSession.email) {
        return res.redirect('/admin')
    }
    else {
        res.sendFile(__dirname+'/views/homepage.html')
    }
})

router.post('/login', (req, res)=>{

    globalSession = req.session
    globalSession.email = req.body.email
    res.end('success')

})

router.get('/logout', (req, res)=> {

    req.session.destroy((err)=>{
        if (err) {
            return console.log(err)
        }
        res.redirect('/')
    })
})

router.get('/admin', (req, res)=>{
    if (globalSession.email) {
       res.write(`<h1> Hello ${globalSession.email}</h1>`)
       res.end('<a href='+'/logout'+'> Logout </a>')
    }
    else {
        res.write('<h1> Please login </h1>')
        res.end('<a href='+'/'+'> Login </a>')
    }
})



app.use('/',router)

app.listen(3000 || process.env.PORT, ()=> {
    console.log(`port number:+ ${process.env.PORT}`)
})