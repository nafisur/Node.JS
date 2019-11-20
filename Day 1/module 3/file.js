var fs = require('fs')
var path = "C:\\temp.txt"

fs.exists(path, function(exists){

    if (!exists) {
    console.log("404")
}
else {
    fs.stat(path, function(err, stats) {
        console.log(stats)

    })  
    fs.open(path, "r", function(err, data){

        if (err) {
            console.log(err)
            return
        }
        else {
            console.log("file opened successfully")
            var buffer = new Buffer.alloc(stats.size)
            fs.readFile(path, function(err, data){
                var localdata = buffer.toString("utf8")
                console.log(data.toString)
            })
        }
    })
}
})