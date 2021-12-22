const {EventEmitter} = require('events');

const event = new EventEmitter();

event.on('saySomething', (message) => {
    console.log(message);
});

/*
event.once('saySomething', (message) => {
    console.log(message);
});
*/

event.emit('saySomething', 'Hello world!');
event.emit('saySomething', 'NodeJS');