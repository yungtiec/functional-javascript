function duckCount() {
  var args = Array.prototype.slice.call(arguments);
  return args.filter(function(arg) {
    return Object.prototype.hasOwnProperty.call(arg,'quack');
  }).length;
}
module.exports = duckCount

/*
lessons:
1. convert arguments object to array
2. Object.creat(somePrototype)
3. How to borrow function from others prototype
4. hasOwnProperty is the method of the Object prototype
   - When invoked, it does not go up the prototype chain to search for property
5. the 'in' keyword goes up the prototype chain
*/