// Write a function `XO` to check to see if a string has the same amount of 
// 'x's and 'o's. The method must return a boolean and be case insensitive. 
// The string can contain any character.

// XO("ooxx")    // returns true
// XO("xooxx")   // returns false
// XO("ooxXm")   // returns true
// XO("zpzpzpp") // returns true because zero 'x's and 'o's are present
// XO("zzoo")    // returns false

// function XO (string){
//     var xCount = 0
//     var oCount = 0
//     var s = string.toLowerCase()
//     for(var i=0; i<string.length; i++){
//        if(s[i] === 'x'){
//           xCount+=1
//     }else if (s[i]=== 'o'){
//          oCount+=1
//       }
//     }
//     if (xCount === oCount){
//     return true
//     }else {
//     return false
//     }
//    }



// Write a function `countVowels` that receives a string and returns the number 
// of vowels found in the string. 

// countVowels("hello") // returns 2 

// countVowels("dog says woof") // returns 4

// countVowels("cat says meow") // returns 4

// function countVowels(str) {
//     var lower = str.toLowerCase()
//     var counter = 0
//     for (var i = 0; i < str.length; i++){
//         if ('aeiou'.includes()) {
//             counter ++
//         } else {

//         }    
//     }
//     console.log(counter)
// }
// countVowels('hello')


//other solution
// function countVowels(str) {
//     var vowel = 0
//     for (var i = 0; i < str.length; i++) {
//        if ("aeiouAEIOU".includes(str[i])) {
//                 vowel++
//          }
//     }
//     return vowel
// }
    
// console.log(countVowels('meow meow meow'))


// Write a function `isPalindrome` that receives a string and returns true if 
// the string is a palindrome and false if it is not a palindrome. 

// isPalindrome("racecar") // returns true 

// isPalindrome("tattarrattat") // returns true 

// isPalindrome("dog") // returns false

// function isPalindrome(str) {
//     var backward = ''
//     for (var i = str.length -1; i >= 0; i--) {
//         backward += str[i]
//     }
//     return backward === str
// }
    
//     console.log(isPalindrome('racecar'))


//another code from Peter
// function isPalindrome(word) {
//     for (var i = 0; i < (word.length - 1) / 2; i++) {
//         if (word[i] !== word[word.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.assert(!isPalindrome("ABCA"), "ABCA is NOT a palindrome");
// console.assert(isPalindrome("ABBA"), "ABBA is a palindrome");
// console.assert(isPalindrome("racecar"), "racecar is a palindrome");
// console.assert(isPalindrome("tattarrattat"), "tattarrattat is a palindrome");
// console.assert(!isPalindrome("going"), "going IS NOT a palindrome");
// console.assert(isPalindrome("eye"), "eye is a palindrome");
// console.assert(!isPalindrome("longer"), "longer IS NOT a palindrome");
// console.assert(!isPalindrome("dog"), "dog IS NOT a plaindrome");



// Write your own mySubString function that takes three arguments, 
// a string and two numbers: a start index and an end index. The substring 
// should include all characters from the the start index and up to 
// (but no including) the end index. If either argument is greater than the 
// string's length, treat it as if it were equal to the string's length. 
// if the end index is omitted, also treat it as if it were equal to the 
// string's length.

// mySubString("giraffe", 1, 2) // returns "i"
// mySubString("giraffe", 2, 8) // returns "raffe"
// mySubString("giraffe", 0, 2) // returns "gi"

// function mySubString(string, start, end){
//  for(var i = 0; i<string.length; i++){
//     return string.substring(start, end)
//     }
//    }
//    console.log(mySubString('apple', 2,3))



// Write a function `myIncludes` that receives a string and a letter and 
// returns true if the letter is found in the string and false otherwise. 

// myIncludes("hello", "e") // returns true  
// myIncludes("buddy", "z") // returns false


// function myIncludes(string,letter){
//     var ans;
//     for(var i=0; i<string.length; i++){
//       if(string[i]===letter){
//          return true
//        }
//     }
//     return false
   
//    }



// Write a function that takes a number num as an argument and logs a triangle 
// - using hashtags, with height and base equal to the value of num. For example, 
// if the value of num is 5, the triangle will look like this:

// #
// ##
// ###
// ####
// #####

// function triangle(num){
//     var newTrig = ''
//     for(var i = 0; i<=num; i++){
//         newTrig += '#'
//     console.log(newTrig)
//     }
// }

// triangle(5)

// Write a function that creates a string that represents a board. The function will 
// take a number length as an argument. It will alternate between spaces  - ' ', and
// '#' characters to represent each position in the board. It will use the newline 
// character - '\n' to separate the lines. For example, if the value of length is 8, 
// the string should look like this:

// # # # # #
//  # # # # 
// # # # # #
//  # # # # 
// # # # # #
//  # # # # 
// # # # # #
//  # # # # 
// # # # # #

function boardTwoLoops(length){
    var line = ''
    var reverseLine = ''
    var board = ''
    
    for (var i = 0; i <= length; i++){
      if (i % 2 === 0){
        line += ' '
        reverseLine += '#'
      } else {
        line += '#'
        reverseLine += ' '
      }
    }
    
    for (var i = 0; i <= length; i++){
      if (i % 2 === 0){
        board += reverseLine + '\n'
      } else {
        board += line  + '\n'
      } 
    }
    return board
  }
  