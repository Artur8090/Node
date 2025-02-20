let Emitter = require('events');
let emitter = new Emitter()

// let eventName = 'hello';
// emitter.on(eventName,function(name){
//     console.log(`Hello, ${name}`);
// })

// emitter.emit('hello', 'artur')
/*
let eventName = 'start';
emitter.on(eventName,function(arr){
    for(let i = 0; i<arr.length; i++){
        console.log(arr[i])
    }
})
const weekdays = ['mon','tue','wed','thu','fri','sat','sun']
emitter.emit('start', weekdays)
*/
let HandlerClick = require('events');
let click = new HandlerClick();
let eventName = {event : "click"}
click.on(eventName,() =>{
    console.log(eventName.event)
})  

click.emit(eventName, 'Вызов события клик')