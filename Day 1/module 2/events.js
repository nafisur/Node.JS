var events = require('events')

var emObj = new events.EventEmitter()

emObj.on('greetings', function(data){

    console.log('Regards ' + data)
})

emObj.emit('greetings', 'nafisur, ahmed')