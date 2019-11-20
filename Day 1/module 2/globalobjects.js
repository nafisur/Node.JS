
var timer = 0

function showDateTime(){
    var dt = new Date()
    console.log(dt.getHours() + ":" + dt.getMinutes()  + ":" + dt.getSeconds())

}

//setTimeout(showDateTime, 4000)

var time = setInterval(function() {
    console.log(timer+"seconds")
    timer += 1
    if (timer > 10) {
        clearInterval(time)
    }
}, 1000);
