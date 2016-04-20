#Callback function 
**Functions are first-class objects in JavaScript!** so functions can be passed as arguments to other functions and be returned by other functions. 
A **higher order function** takes other functions as arguments or returns other functions.
A **callback function** is a function that is passed to another function as a argument.
For example:
```javascript
var arr = [1,2,3];
arr.reduce(function(sum,val) {
  return sum + val;
});
```
The anonymous function is passed to the Reduce method as a parameter. 
When a callback function is passed to another function as a paramter, it is only being defined but not executed. 
> Recall that IIFE is required to immediately executed an anonymous function after function definition. 
```javascript
(function(){/*...*/}()) // Crockford's recommendation
(function(){/*...*/})() // or this 
```
>     

At some point, it will be "called back" by the higher order function, hence the name callback.
```javascript
setTimeout(function() {
  alert('timeout!');
},5000);
```
In this example, the anonymous function is called back after 1 second. Even without a name, the higher order function accesses the callback function via the arguments object.