//  importing the readline module
var readline = require('readline')

// We will be able to use `rl`
// Only After creating the readline interface
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Clears the terminal screen
function clear () {
  process.stdout.write('\u001B[2J\u001B[0;0f')
}

// function bulletPoints(arr) {
//     return '\n - ' + arr.join('\n - ')
// }

// var hold = []

// function holdJoined(arr) {
//     return arr.join('\n')
// }

// Listening to end of line event
// question one

// rl.on('line', function(input) {
//     clear()
//     hold.push(input)
//     console.log(holdJoined(hold))
// })
// console.log("Type anything")


//question 2

// var sum = 0

// rl.on('line', function(input) {
//     clear()
//     if (isNaN(input)) {    
//     }
//     else {
//         sum += Number(input)
//     }
//     console.log(sum)
// })
// console.log("Type a number")


// question 3

function addNum(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        var maybeNumber = Number(arr[i])
        if (!isNaN(maybeNumber)) {     
           sum += maybeNumber
        }
    }
    return sum
}



rl.on('line', function(input) {
    clear()
    var inputArr = input.split(' ')
    var sum = addNum(inputArr)
    console.log(sum)    
})

// Lev's code
// function sumStringArr(arr){
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++){
//       var num = Number(arr[i])
      
//       if (!isNaN(num)){
//         sum += num;
//       }
//     }
//     return sum;
//   }
  
//   rl.on('line', function(input){
//       var inputArr = input.split(' ')
//       var sum = sumStringArr(inputArr)
//       console.log(sum)
//   })

//just wanted to make a change to try github
//i'm trying to edit from github
