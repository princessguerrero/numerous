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


// Listening to end of line event
rl.on('line', function(input) {
    clear()
    var maybeNumber = Number(input)
    if (isNaN(input)) {
        console.log("that's not a number")
    } else {
    console.log('your input was: ' + maybeNumber)
    }
})
console.log("Input a number")