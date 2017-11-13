function addThreeNumsFromString(str) {
  var strToArr = str.split('')
  var sum = 0
  for (var i = 0; i < strToArr.length; i++) {
    var toNumber = Number.strToArr[i]
       sum += strToArr[i]
 }
 return sum
}

console.log(addThreeNumsFromString("5 5 5"))
// will log 15
console.log(addThreeNumsFromString("4 2 1"))
// will log 7
