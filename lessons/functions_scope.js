// var func = function (num) {
//     num * 3
//     return 'hello'
// }
// console.log(func(10))  

// function thirdPow(num) {
//     return num*num*num
// }

// console.log(thirdPow(3))

// function add1(num) {
//     return num + 1
// }

// function add2(num) {
//     return add1(num) + 1
// }

// function add3(num) {
//     return add2(num) + 1
// }

// add3(3)

// function larger(num1, num2) {
    
//         if (num1 > num2){
    
//             return num1
    
//         } else if( num1 === num2 || num1 < num2) {
    
//             return num2
    
//         } 
    
//     }
    
    
    
//     console.log(larger(8, 8))

// function calcCircumference(radius) {
//     return 2*Math.PI*radius
// }
// // console.log(calcCircumference(2))

// function calcArea(radius) {
//     return Math.PI*Math.pow(radius,2)
// } 
// // console.log(calcArea(3))

// function circleProps(radius) {
//     console.log("The circumference is " + calcCircumference(radius) +
//     ".")
//     console.log("The area is " + calcArea(radius) + ".")
// }
// (circleProps(1))

function square(num) {
    return num*num
}

function half(num) {
    return num/2
}

function percentOf(num1, num2) {
    return num1/num2*100 + "%"
}


function areaOfCircle(radius) {
    var localArea = Math.PI * (radius * radius);
    
    var localAreaRounded = Math.round(localArea * 100) / 100
    
    return localAreaRounded
    
 }

function doStuff(num) {
   return percentOf(square(num), areaOfCircle(half(square(num))))   
}

console.log(doStuff(5))