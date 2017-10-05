//returns the length

// function arrLength (arr) {
//     return arr.length
// }

// console.log(arrLength([1, 2, 3, 3, 2, 1]))
// console.log(arrLength(["jets", "mets", "giants", "yankees"]))

// function longestArr(arr1, arr2) {
//     if (arr1.length > arr2.length) {
//         return arr1
//     } else if (arr2.length > arr1.length) {
//         return arr2
//     } else
//         return null
// }
// console.log(longestArr(["jets", "mets", "giants", "yankees"], ["cubs", "white sox", "bulls"]))

//this returns bat
// function middleElement(arr) {
//     if (arr.length % 2 === 0) {
//         return "Oops there's no middle."
//     } else {
//         return arr[Math.floor(arr.length/2)]
//     }
// }
// console.log(middleElement(['dog', 'cat', 'bat', 'octopus', 'chinchilla']))


// function sumArrays(arr) {
//     var sum = 0
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }

// console.log(sumArrays([1, 2, 3, 4, 5, 6]));


// function range(min, max) {
//     var arr = []
//     for(var i = min; i <= max; i++) {
//         arr.push(i)
//     }
//     return arr
// }   
// console.log(range(2, 6))


function rangeWithStep(min, max, step) {
    var arr = []
    if (step === undefined) {
        for (var i = min; i <= max; i++) {
            arr.push(i)
        }
     } else {
    
        for (var i = min; i <= max; i+=step) {
        arr.push(i)
        }  
    }
    return arr
}
console.log(rangeWithStep(4, 10, 2))
console.log(rangeWithStep(4, 10))
