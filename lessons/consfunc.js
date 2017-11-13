//constructor functions start with a Capital letter


// function Rabbit(type, name) {
//     this.type = type;
//     this.name = name;
// };

// Rabbit.prototype.speak = function(line) {
//     console.log("The " + this.type + " rabbit " + this.name + " says " + line + "'");
// };

// var killerRabbit = new Rabbit("killer", "George");
// console.log(killerRabbit instanceof Rabbit)


// // exercise 1



function Vector(x, y) {
    //this is what's happening
    //var this = {}
    //this _proto_ = Vector.prototype
    this.x = x
    // this.y = y
}


Vector.prototype.plus = function(vec) {
    
    this.x += vec.x
    this.y += vec.y
    return this
}
var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)
var v3 = new Vector(3, 4)
// console.log(v1.plus(v2))



Vector.prototype.minus = function(vec) {
    this.x -= vec.x
    this.y -= vec.y
    return this
}
// console.log(v1.minus(v2))

Vector.prototype.getLength = function(){
    return Math.sqrt(Math.pow(this.x - 0, 2) + Math.pow(this.y - 0, 2))
}
// console.log(v3.getLength())


var assert = require("assert");

function test1() {
  var p1 = new Vector(1, undefined);

  assert.strictEqual(p1.x, 1, "p1.x");
  assert.strictEqual(p1.y, undefined, "p1.y");
}

// try {
//     test1();
// } catch (error){
//     console.log("--- Test Failed ---")
//     console.log(error.message + " should be " + error.expected + " but is " + error.actual );
//     //error.message is  "p1.x", error.expected "2", error.actual "undefined"
//     console.log(error.stack.split("\n")[1])
// }
//this logs:
// --- Test Failed ---
// p1.y should be 2 but is undefined
//     at test1 (/Users/princess_guerrero/repo/lessons/consfunc.js:62:10)



function test2() {
    var p1 = new Vector(1, 2);
    var p2 = new Vector(2, 4);
    var p3 = p1.plus(p2);
  
    assert.strictEqual(p3.x, 3, "p3.x");
    assert.strictEqual(p3.y, 6, "p3.y");
  }

  var tests = [test1, test2];
  
  
//   tests.forEach(function(test){
//       try {
//           test();
//       } catch (error) {
//           console.log("--- Test Failed ---")
//           console.log(error.message + " should be " + error.expected + " but is " + error.actual );
//           console.log(error.stack.split("\n")[1])
//       }
//   })
  
  function runTests(tests) {
    var passed = 0;
    var failed = 0;

    tests.forEach(function(test){
        try {
            console.log()
            console.log(test)
            test();

            passed += 1;
        } catch (error) {
  
            console.log("--- Test Failed ---")
            console.log(error.message + " should be " + error.expected + " but is " + error.actual );
            console.log(error.stack.split("\n")[1])

            failed += 1;
        }
    })

    console.log()
    console.log("---Total---")
    console.log(passed + " passed")
    console.log(failed + " failed")
}
runTests(tests)