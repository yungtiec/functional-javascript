// write forEach function
Array.prototype.myForEach = function(callback) {
  var arr = []
  for (var i = 0; i < this.length; i++) {
    arr.push(callback(this[i]));
  }
  return arr;
}

// write filter
Array.prototype.myFilter = function(predicateFn) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (predicateFn(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr
}

// write map
Array.prototype.myMap = function(projectionFn) {
  var arr = []
  this.myForEach(function(itemInThis) {
    arr.push(projectionFn(itemInThis));
  })
  return arr;
}