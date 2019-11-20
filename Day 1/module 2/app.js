var fs = require("fs")

//non-blocking code
console.log("file read started")
fs.readFile('node.txt', function(err, data){

    if (err) {
        return console.log(err)
    }
    else {
        console.log(data.toString)
    }
    console.log("file read may/may not completed")
})