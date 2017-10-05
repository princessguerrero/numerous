//to insert an array in an existing array

// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];

// function arrayInsert(a1, a2, where) {
//     for (var i = 0; i < a2.length; i++) {
//       a1.splice(where + i, 0, a2[i])
//     }
//     return a1
// }

// arrayInsert(arr1, arr2, arr1.length)

// console.log(arr1);


// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];
// var arr3 = arr1.concat(arr2);

// console.log(arr3);


//question 1
// var array = [1, 2, 3]
// function addTwoElements(arr, val1, val2) {
//     array.push(val1, val2)
//     return array
// }
    
// console.log(addTwoElements(array, 4, 5))


//question 2

// function withoutLastTwo(arr) {
    
//     if (arr.length < 2) {
//         return []
//     } else {
//         arr.pop()
//         arr.pop()
//     }
//     return arr
// }
// console.log(withoutLastTwo(['dog', 'cat']))


//question 3

// function everyThird(arr) {
//     var newArr = []
//     for(var i = 2; i < arr.length; i+=3) {
//         newArr.push(arr[i])
//     }
//     return newArr
// }
// console.log(everyThird([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]))


//question 4
// function lastToFront(arr) {
    
//     arr.unshift(arr.pop())
//     return arr
// }
// console.log(lastToFront([1, 2, 3, 4]))

// function lastToFront(arr) {
//     arr.splice(0,0,arr.pop())
//     return arr
// }
// console.log(lastToFront([1, 2, 3, 4]))