function nextInLine(arr, item) {
    arr.push(item);
    var removed = arr.shift()
    return removed;  // Change this line
  }
  
  // Test Setup
  var testArr = [1,2,3,4,5];
  
console.log(nextInLine(testArr, 6))  