/* Use Function#bind to implement a logging function that allows you to namespace messages. */
module.exports = function(namespace) {
  return console.log.bind(null, namespace);
}
var info = logger('INFO:')
// console.log now has an argument 'INFO:'
// but it's not called yet
// it's still only a function definition
info('this is an info message')
// => INFO: this is an info message
// the parenthesis fires up the console.log function
// now with two argument objects

/*
lessons:
MDN def of bind()
The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
The key here is 'creates a new function'
so a new function is defined, not called. 

compared to partial application with apply
apply() will directly invoke the function
thats why in the logger.js, its wrapped in a anonymous fn

function logger(namespace) {
  return function() {
    args = Array.prototype.slice.call(arguments);
    console.log.apply(null,[namespace].concat(args))
  }
}
*/
