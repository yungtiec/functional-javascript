/* 
Use partial application to create a function that fixes the first argument to console.log 
Use Function#apply to inplement the partial application
*/
function logger(namespace) {
  return function() {
    args = Array.prototype.slice.call(arguments);
    console.log.apply(null,[namespace].concat(args))
  }
}
module.exports = logger
