// function decimalToBinary(num){
//     string = ''
//     for(var i = num; i >= 0; i--){
//         if(num >= Math.pow(2,i)){
//             num = num - Math.pow(2,i)
//             string += '1'
//         } else {
//             string += '0'
//         }
//     }
//     return string
// }

// console.log(decimalToBinary(5))


//Peter's solution
// function numToBin(num) {
//     var number = num
//     var result = []
//     while (number >= 1) {
//         result.unshift(number % 2)
//         number = Math.floor(number / 2)
//     }
//     return result.join('')
// }
// con sole.log(numToBin(65535))

//my code
function binaryToDecimal(str) {
    var yes = 0
    var no = 0
    var n = 0
    for (var i = str.length-1; i >= 0; i--) {
       if (str[i] === '1') {
        yes += 1 * (Math.pow(2,n++))
       } else if(str[i] === '0') {
        no += 0 * Math.pow(2, n++)
       }
    }
    var sum = yes + no
    return sum
}
console.log(binaryToDecimal('101'))


//kelvin's code
// function binaryToDecimal(str) {
//     var on = 0
//     var off = 0
//     var n = 0
//     for (var i = str.length - 1; i >= 0; i--) {
//         if (str[i] === '1'){
//             on += 1 * Math.pow(2, n++)
//         }else if (str[i] === '0'){
//             off += 0 * Math.pow(2, n++)
//         }
//     }
//     var sum = on + off
//     return sum
// }

// console.log(binaryToDecimal("1000"))
