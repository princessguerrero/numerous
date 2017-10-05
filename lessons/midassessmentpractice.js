//question 1 my answer
// function and(x, y) {
//     if (x && y) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(and('happy string', []))

//peter's
// function and(x, y) {
//     return x & y
// }

// and(true, true)
// and('happy string', [])


//question 2
// function addOnlyNumbers(foo, bar) {
//     if (foo === NaN || bar === NaN) {
//         return NaN
//     }else if (typeof foo === 'number' && typeof bar === 'number') {
//         return foo + bar
//     } else {
//         return NaN
//     }      
// }
// console.log(addOnlyNumbers(NaN, 22))
  

//question 3
// function isAllNum(arr) {
//     for(var i = 0; i < arr.length; i++) {
//         if(typeof arr[i] !== 'number') {
//             return false
//         }
//     }
//     return true
// }
// console.log(isAllNum([1, 2, 3, 4, 5]))


//question 4
// function forceAllNum(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             arr[i] = 0
//         }
//     }
//     return arr
// }
// console.log(forceAllNum([1, 2, 'Mountain Dew']))


//question 5
// function makeVowelsHyphen(s) {
//     var resultStr = ''
//     var vowels = 'aeiou'
//     if (typeof s !== 'string') {
//         return undefined
//     } else {
//         for (var i = 0; i < s.length; i++) {
//             if (vowels.includes(s[i])) {
//                 resultStr += '-'
//             } else {
//                 resultStr += s[i]
//             }
//         }
//       return resultStr
//     }
// }
// console.log(makeVowelsHyphen('tuesday is my favorite day'))


//question 6
// function hasPropertyTacos(loljk) {
//     for(var key in loljk) {
//         if (key === 'tacos') {
//             return true
//         }         
//     }
//     return false
// }
//console.log(hasPropertyTacos({ name: 'Cody', flavor: 'so many tacos' }))

//peter's code
// function hasPropertyTacos(loljk) {
//     return loljk.tacos !== undefined
// }
// (hasPropertyTacos({ name: 'Cody', flavor: 'so many tacos' }))



//question 7
// function hasPropertyGeneric(bigO, littleP) {
//     for(var key in bigO) {
//         if (key === littleP) {
//             return true
//             }         
//         }
//         return false
// }
// console.log(hasPropertyGeneric({ name: 'cody', tacos: 3 }, 'tacos'))


//question 8
function countVowelsGeneric(str, sub) {
    var vowels = 'aeiou'
    var resultStr = ''
    if(typeof str !== 'string' || typeof sub !== 'string') {
        return undefined
    } else {
        for (var i = 0; i < str.length; i++) {
            if (vowels.includes(str[i])) {
                resultStr += sub
            } else {
                resultStr += str[i]
            }
        }
    }
    return resultStr
}
console.log(countVowelsGeneric('tuesday is my favorite day', 'j'))
