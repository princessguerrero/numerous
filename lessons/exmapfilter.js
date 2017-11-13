//ex 1
// var original = [1, 2, 3]

// var arr1 = original.map(function(num){
//     return num + 10
// })
// console.log(arr1)

//ex 2
// var original = [1, 2, 'buckle', 'my', 'shoe'];
// var arr1 = original.map(function(elem) {
//     if(typeof elem !== 'string') {
//         return ''
//     } else
//        return elem
// })
// console.log(arr1)

//ex 3
// var original = [1, 2, 3, 4, 5, 6];
// var arr1 = original.filter(function(elem) {
//     if(elem % 2 === 0) {
//         return elem
//     }
// })
// console.log(arr1)

//ex 4
// var original = [true, false, [], '', 0, NaN, 'kittens', 500];
// var arr1 = original.filter(function(elem) {
//     if(elem) {
//         return elem
//     }
// })
// console.log(arr1)

//ex 5
// var arr = [1, 2, 6, 7, 100];
// var arr2 = arr.reduce(function(accumulator, curr) {
//         return accumulator + curr
// })
// console.log(arr2)

//ex 6
// var arr = [1, 2, 'popsicle', 6, 7, 'axe body spray', 100];
// var arr1 = arr.filter(function(elem){
//     if (typeof elem === "number"){
//         return true
//     }else {
//         return false
//     }
// })
// var sumOfArr = arr1.reduce(function(accumulator, curr) {
//         return accumulator + curr
// })
// console.log(sumOfArr)


//ex 7
// var arr = [1, 2, 6, 7, 100];
// var sumOfArr = arr
//     .map(function(elem){
//         return elem * 2;
//     })
//     .reduce(function(accumulator,curr) {
//         return accumulator + curr 
//     })
// console.log(sumOfArr);
// 232


//ex 8
// var arr = [1, 2, 500, 6, 3, 26];
// var max = arr.reduce(function(acc, curr) {
//     if (acc > curr) {
//         return acc;
//     } else {
//         return curr;
//     }
// });
// console.log(max)


//ex 9
// function elementDivisibleBy (divisor, arr){
//     var arr1 = arr.filter(function(elem){
//         if ( elem % divisor === 0){
//             return (elem)
//         }
//     })
//     console.log (arr1)
// }
// (elementDivisibleBy(2,[ 7, 3, 4, 8, 12, 13]))


//ex 10
function joinByReduce(str, arr) {
    var result = arr.reduce(function(newStr, curr){
        return newStr += str + curr
    })
    return result
}
console.log(joinByReduce('-', [2, 4, 'sportsball', 'sewing machine']))


//ex 11
// var counter = 0
// function countZeros(arr){
//     var arr1 = arr.reduce(function(accumulator, curr){
//      if (curr === 0){
//             counter +=1   
//         }
//     })
//     return counter
// }
// console.log(countZeros([1, 2, 0, 12, 0, 3, 0]))

