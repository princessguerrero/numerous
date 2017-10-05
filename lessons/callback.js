// var forEachElement = function(arr, callback) {
//     for (var i = 0; i < arr.length; i++) {
//         callback(arr[i])
//     }
// }


// var logIt = function(v) {
//     console.log(v);
// }

// forEachElement([1, "this", "that"], logIt)

// var forEachElement = function(arr, initialValue, callback) {
//     var t = initialValue;
//     for (var i = 0; i < arr.length; i++) {
//         t = callback(arr[i], t)
//     }
//     return t
// }


// var add = function(a, b) {
//     return a + b
// }

// console.log(forEachElement([1, 2, 3, 3, 4, 5], 0, add))


// function sayHello() {
//     console.log('hello')
//   }
  
//   setInterval(sayHello, 1000)


// var spinner = '/-\\|'
// var i = 0

// setInterval(function() {
//     console.log('\033[H' + spinner[i])
//     i = (i + 1) % spinner.length
// }, 100)


//ex 1
// function logEachElem(arr) {
//    console.log(arr)
// }


// function forEachElement(arr, callback) {
//     for(var i = 0; i < arr.length; i++) {
//         callback(arr[i])
//     }
// }
// forEachElement([1, 2, 3, 4, 5], logEachElem)


//ex 2
// function logArrTypes(arr) {
//     console.log(arr + " is a " + typeof(arr))
// }

// function forEachElement(arr, callback) {
//     for(var i = 0; i < arr.length; i++) {
//        callback(arr[i])
//      }
// }
// forEachElement([1, "cat", true], logArrTypes)

//ex 3
// var seconds = 0

// function secPassed() {
//     console.log(seconds += 1)
// }
      
// setInterval(secPassed, 1000)


// ex 4
// function conservativeSpender(balance) {
//     return balance > 100
// }

// function liberalSpender(balance) {
//     return balance > 10
// }

// function horribleSaver (balance) {
//     return balance > 0
// }


// function shouldIBuyThis(balance, callback) {
//     if (callback(balance)) {
//         console.log("Sure!  I'll buy it!")
//         } 
//         else {
//         console.log("Nope! Gotta keep my savings up!")
//     }
// }

// shouldIBuyThis(0, horribleSaver)


// function smarterShouldIBuyThis(balance, price, callback) {
//     if(callback(balance - price)){
//       console.log("Sure!  I've got the money!") 
//     } else {
//       console.log("Gotta keep my savings up!")
//     }
// }
// smarterShouldIBuyThis(45, 54, horribleSaver)

function map(arr, func) {
    var newArr = []
    for(var i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i]))
    }
    return newArr
}
console.log(map([1, 2, 3,], add4))

function add4(num) {
    return num + 4
}

