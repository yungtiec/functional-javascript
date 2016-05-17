**Functions are first-class objects in JavaScript!** so functions can be passed as arguments to other functions and be returned by other functions. 
A *higher order function* takes other functions as arguments or returns other functions. A *closure*, on the other hand, is the inner function. 
# Closure
Closure has the following scopes:
- global scope
- its higher-order function's scope
  - has access even after the higher order function has returned
  - store references
- its own scope 

## Be careful with loops
The intent with the function below is to log a fruit every second, but the function outputs undefined four times instead.
```javascript
var = ["Lemon", "Orange", "Mango", "Banana"];
function printFruitsWrong(fruits){
  for (var i = 0; i < fruits.length; i++) {
    setTimeout( function(){
      console.log( fruits[i] );
    }, i * 1000 );
  }
}
```
setTimeout is called and returned every iteration, having to wait i*1000 ms. At the same time, i, which doesn't have to wait, is incremented every iteration. When the time's up, console.log, here as the callback function, fires up, and uses the reference it stored to get i, only to get a value of four because the loop has ended. Since the fruit array only have four elements, fruit[4] returns undefined. 
#### The fix: Immediately-invoked function expression
In this case, the i value in every iteration is passed as an argument to an immediately-invoked function, which creates a private scope to encapsulate the data inside. 
```Javascript
function printFruits(fruits){
  for (var i = 0; i < fruits.length; i++) {
  (function(current){
    setTimeout( function(){
      console.log( fruits[current] );
    }, current * 1000 );
  })(i)
  }
}
```
## When to use closures
### emulating private data
The example shows a private counter. 
```javascript
function counter() {
  var count;
  return  {
    add: function() {count++},
    getValue: function() {return count}
  };
}
```
The value count cannot be accessed outside of the function unless the getValue closure is called.
```javascript
var c = counter();
c.add();
c.add();
c.getValue(); // => 2
```
#### Avoid unnecessary use in constructor
```javascript
function Dog(b) {
  var breed = b;
  this.getBreed = function() {
    return breed;
  };
  this.bark = function() {
    console.log('bark')
  }
}
```
Everytime a dog instance is created, the bark method is added to the instance. However, the method does not use any private data so it's a wasted of time to add it to every instance. One can add bark() to the Dog prototype. 
#### The fix: Prototypical Inheritance
```
function Dog(b) {
  var breed = b;
  this.getBreed = function() {
    return breed;
  }
}
Dog.prototype.bark = function() {
  console.log('bark');
}
```
###### Takeaway
Use closure to access private variables defined in the constructor function. (breed/getBreed)
If breed is one of the properties of a Dog object instance, then getBreed() can be added to prototype.
```
function Dog(b) {
  this.breed = b;
}
Dog.prototype.getBreed = function() {
  return this.breed;
}
Dog.prototype.bark = function() {
  console.log('bark');
}
```
#Callback function 
A *callback function* is a function that is passed to another function as a argument.
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
},1000);
```
In this example, the anonymous function is called back after 1 second. Even without a name, the higher order function accesses the callback function via the arguments object.
## Be careful when callbacks use *this*
First, we need to understand *this*
#### *this* depends on execution context
By default, this refers to the global object because the execution context is global when a program starts. In the case of browser, it refers to the window. However, a few situations can change the value of this. 

1. Method invocations
2. The new operator
3. call and apply


## Reference
- http://www.sitepoint.com/javascript-closures-demystified/
- http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/
- http://javascriptissexy.com/understand-javascript-closures-with-ease/
- http://www.sitepoint.com/demystifying-javascript-closures-callbacks-iifes/