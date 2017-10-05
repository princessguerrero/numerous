//function to get the range
// function range(min, max) {
//     var numbers = [];
//     for (var i = min; i <= max; i++){
//       numbers.push(i);
//     }
//     return numbers;
//   }

//function to get the sum
//   function sumArr(numbers){
//     var total = 0;
//     for (var i = 0; i < numbers.length; i++) {
//       total += numbers[i];
//     }
//     return total;
//   }

//calling the other functions
//   function sumOfRange(min, max) {
//       return sumArr(range(min, max));
//   }

//   console.log(sumOfRange(1, 5))


// function add1(num) {
//     return num + 1
// }
// console.log(add1(1))

// function add2(num) {
//     return add1(add1(num))
// }
// console.log(add2(1))


// function add3(num) {
//     return add2(add1(num))
// }
// console.log(add3(1))


// function add4(num) {
//     return add2(add2(num))
// }
// console.log(add4(1))


// function add5(num) {
//     return add3(add2(num))
// }
// console.log(add5(1))


//ex. question 1
// function double(num) {
//     return num * 2
// }

// function square(num) {
//     return num * num
// }

// function doubleSquare(num) {
//     return square(double(num))
// }
// console.log(doubleSquare(2))


//ex. question 3


// function removeDupes(arr) {
//     var arr2 = []
    
//     for (var i = 0; i < arr.length; i++)  {
//         if (arr2.includes(arr[i])) {
//         } 
//         else {
//           arr2.push(arr[i])
//         }
//     }
//     return arr2
// }
// console.log(removeDupes([1,1,2,1,2,3,3]))

// function concatAndRemoveDupes(arr, arr2) {
//     return removeDupes(arr.concat(arr2))
// }
// console.log(concatAndRemoveDupes([1,1,2,1,2,3,3], [2,3,4]))

// question 4
var grades = [91, 85, 100, 92, 88]


function sort (arr) {
    return arr.sort(function (a, b) { 
        return a - b 
    })
}
console.log(sort(grades))

function middleElement(arr){
    var sum = 0 
    return arr[Math.floor(arr.length/2)]
}
console.log(middleElement(grades))

function median(arr) {
    return (middleElement(sort(arr)))
}

console.log(median(grades))

