var mysql = require('mysql');
const express = require('express')
var app = express()
app.set('view engine','ejs')
const bodyParser = require('body-parser')
app.use(bodyParser.json())


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'my_db'
});
 
connection.connect((err)=> {
    if (!err) {
        console.log("DB connection successfull")
    }
    else {
        console.log(JSON.stringify(err, undefined,2))
    }
})

app.get('/employees', (req, res)=>{

    var sql_query = 'select * from employee'
    connection.query(sql_query,(err,rows, fields)=>{
        if (!err) {
            res.render('employee-dashboard',{data:rows})
            //connection.end()
        }
        else{
            console.log(err)
        }
    })
})
app.listen(3000, ()=> console.log('App running'))
