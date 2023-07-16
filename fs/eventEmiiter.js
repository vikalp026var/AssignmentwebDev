const EventEmitter = require('events');

// Create an instance of EventEmitter
// const eventEmitter = new EventEmitter();

// Subscribe to the "subscribe" event
// eventEmitter.on('subscribe', (channel) => {
//   console.log(`User has subscribed to ${channel}!`);
// });

// Trigger the "subscribe" event and pass the channel name
// const channel = "College Wallah";
// eventEmitter.emit('subscribe', channel);
// const eventHandler=()=>{
//      console.log('Event handler is called ');
// }
// eventEmitter.on('customEvent',eventHandler);
// eventEmitter.emit('customEvent')
// eventEmitter.off('customEvent',eventHandler);
// eventEmitter.emit('customEvent');
// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Get the current maximum number of listeners
const currentMaxListeners = eventEmitter.getMaxListeners();
console.log('Current maximum number of listeners:', currentMaxListeners);

// Set the maximum number of listeners to 5
eventEmitter.setMaxListeners(5);
console.log('The updated maximum number of listeners:', eventEmitter.getMaxListeners());
