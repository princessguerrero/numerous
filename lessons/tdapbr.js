// importing the readline module

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

function createTodo(description, completed){

 var todo = {

 description: description,

 completed: completed

 }

 


 return todo

 }

 


// function addTodo(todoArr, todo){

// return todoArr.concat(todo)

// }

 


 function logTodo(todo, i){

 console.log((i+1) + '. ' + todo.description + '. Completed: ' + todo.completed)

 }

 


 function forEachArr(arr, callback){

 for (var i = 0; i < arr.length; i++){

 callback(arr[i], i)

 }

 }

 


 var todoArr = []

 var buyMilk = createTodo('buy milk', false)

// todoArr = addTodo(todoArr, buyMilk)

 todoArr.push(buyMilk)

 var cleanHouse = createTodo('clean the house', false)

// todoArr = addTodo(todoArr, cleanHouse)

 


 // logging all todos

// forEachArr(todoArr, logTodo)

var userArray = []

// Listening to end of line event

rl.on('line', function(input) {

 clear()

 console.log("Things to do:")

 var splitInput = input.toLowerCase().split(" ")

 var noAdd = splitInput.slice(1, splitInput.length-1).join(" ")

 var lastElement = splitInput.pop()

 if(splitInput[0] === "add") {

 if (lastElement !== "true" || lastElement !== "false") {

 splitInput.push(lastElement)

 }

 var userInput = createTodo(noAdd, lastElement)

 userArray.push(userInput)

 forEachArr(userArray, logTodo)

 } else {

 console.log("Please type add first.")

 }

 


})

console.log("Things to do:")
