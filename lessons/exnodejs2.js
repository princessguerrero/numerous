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

// question 1
// var counter = 0
// // Listening to end of line event
// rl.on('line', function(input) {
//     clear ()
//     var input2 = input.toLowerCase()      
//     if(input2 === 'inc') {
//         counter += 1
//         console.log(counter)
//         console.log("The counter has been incremented.")
//     } else if(input2 === 'dec') {
//         counter -= 1
//         console.log(counter)
//         console.log("The counter has been decremented.")
//     } else if(input2 === 'res') {
//         counter = 0
//         console.log(counter)
//         console.log("The counter has been reset.")
//     } else {
//         console.log("Invalid entry.")
//     }
// })
// console.log("Please type inc, dec or res")

//question no. 2
// rl.on('line', function(input) {
//     clear()
//     var inputArr = input.split(' ')
//     if(inputArr[1] === '' || inputArr[2] === '' ){
//         console.log('Please enter two numbers separated by spaces')
//       }
//       var Operations = '/+*-'
//       var mathOp = inputArr[0]
//       var firstNumber = Number(inputArr[1])
//       var secondNumber = Number(inputArr[2])
      
//       if(!Operations.includes(mathOp)){
//         console.log('Please enter a valid operation')
//       } else if(isNaN(firstNumber) || isNaN(secondNumber)){
//         console.log('Please enter two numbers.')
//       }  else if (mathOp === Operations[1]){
//         console.log(firstNumber + secondNumber)
//         } else if(mathOp === Operations[3]){
//         console.log( firstNumber - secondNumber)
//         } else if(mathOp === Operations[2]){
//         console.log(firstNumber * secondNumber)
//         } else if (mathOp === Operations[0]){
//         console.log(firstNumber / secondNumber)
//     } 
// })  
// console.log("Please enter a math operation followed by 2 numbers separated by spaces.")
    


// function substract(num1, num2) {
// 	return num1 - num2
// }

// function multiply(num1, num2) {
// 	return num1 * num2
// }

// function divide(num1, num2) {
// 	return num1 / num2
// }


// function isNum(value){
//     return !isNaN(value)
// }


rl.on('line', function(input) {
   clear()
    var inputArr = input.split(' ')
    var result = inputArr[1]
    
        for (var i = 2; i < inputArr.length; i++) {
               
                if (inputArr[0] === '+') {
                    result = Number(result) + Number(inputArr[i])     
                } else if (inputArr[0] === '-') {
                    result = result - inputArr[i]
                } else if (inputArr[0] === '*') {
                    result = result * inputArr[i]
                } else if (inputArr[0] === '/') {
                    result = result / inputArr[i]
                } else if (isNaN(inputArr[i])) {
                    console.log("Enter a valid input.")
                }else {
                    var result = "Invalid input."
                }
            }                     
       console.log(result)
    })
console.log("Input an Operation (+,-,*,/) and numbers separated by spaces.")
    