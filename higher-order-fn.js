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

Array.prototype.myMerge = function(arr,callback) {
  var newArr = [];
  // check if array lengths are the same
  if (arr.length != this.length) {
    return "can't merge arrays with different length";
  }
  if (typeof callback !== "function") {
    return "callback should be a valid function";
  }
  for (var i = 0; i < arr.length; i++) {
    newArr.push(callback(this[i],arr[i]));
  }
  return newArr;
}

function merge(arr1,arr2,callback) {
  var arr = [];
  // check if array lengths are the same
  if (arr1.length != arr2.length) {
    return "can't merge arrays with different length";
  }
  if (typeof callback !== "function") {
    return "callback should be a valid function";
  }
  for (var i = 0; i < arr1.length; i++) {
    arr.push(callback(arr1[i],arr2[i]));
  }
  return arr;
}