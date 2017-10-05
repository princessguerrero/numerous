// var sum = 0

// for (var i = 1; 1 <= 10; i += 1)

// //make a loop for cube and triangle numbers

// //ex. loops 2.

// function allEven(num) {
//     for(var i = 0; i <= num; i+=2) {
//         console.log(i)
//     }
// }
// allEven(54)

//ex. loops 5.

// function assignGrade(score) {
//     if (score > 90) {
//         return 'A'
//     } else if (score > 80) {
//         return 'B'
//     } else if (score > 70) {
//         return 'C'
//     } else if (score > 65) {
//         return 'D'
//     } else {
//         return 'F'
//     }
// }

// function logs(score) {
//     for(var i = 60; i <= 100; i +=1) {
//         console.log(i + assignGrade(score))
//     }
// }

// logs()

// ex. no. 6

// function fizzOrBuz() {
//     for(var i = 1; i <= 100; i++) {
//         if(i % 5 === 0) {
//             console.log("Buzz")
//         }
//         if(i % 3 === 0) {
//             console.log("Fizz")
//         }
//         console.log(i)   
//     } 
// }

// fizzOrBuz()

// ex.no. 8

// function bottleSong(num) {
    
//         for(var i = 99; i >= 2; i -= 1) {
    
//             if (i > 2) {
    
//                 console.log( 
    
//                     i + " bottles of beer on the wall, " +
    
                    
    
//                     i + "bottles of beer. Take one down, pass it around, " +
    
                    
    
//                     (i-1) + "bottles of beer on the wall.")
    
    
    
//             } else if (i === 2) {
    
//                 console.log(
    
//                     "2 bottles of beer on the wall, 2 bottles of beer. " +
    
//                     "Take one down, pass it around,1 bottle of beer on the wall. ")        
    
//             }
    
//     }
    
//     }
    
//     bottleSong()
    
//     console.log ("1 bottle of beer on the wall, 1 bottle of beer. " +
    
//     "Take one down, pass it around,+ No more bottle of beer on the wall.")

//     function plural(n, word) {
//         if (n !== 1) {
//             return word + 's';
//         }
//         return word;
//     }


//chess2 nested loop

// function makeBoard(num) {
//     var board = '';

//     for (var row = 0; row < num; row++) {
//         for (var column = 0; column < num; column++) {
//             if ((column + row) % 2 === 0) {
//                 board += '#'
//             } else {
//                 board += ' '
//             }
//         }
//         board += '\n'
//     }
//     return board;
// }
// console.log(makeBoard(8));

// var counter = 0
// function fib() {
//    for(var i = 0; i <= 0; i+= counter){
//     counter = (i-1) + (1-2);
//   }
// }
// console.log(fib(10))
 
// function sumFibs(num) {
//     return num;
//   }
  
//   sumFibs(4);
  
  