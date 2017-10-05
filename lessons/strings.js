//print just the length
// var name = 'Princess Guerrero'
// console.log(name.length)


//print the first and last name
// var firstName =  'Princess';
// var lastName = 'Guerrero';

// function fullName(firstName, lastName) {
//     return firstName + ' ' + lastName;
// }

// console.log(fullName(firstName, lastName));

//concatenate (did not run this yet)
// var fullName = firstName + lastName


//this prints 1, 2, 3, 4, 5
// var str = ''
// var num = 5
// for (var i = 1; i < num; i++) {
//   str += i + ', '
// }
// str += i

// console.log(str)


//prints 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10
// var str = ''
// var num = 10
// for (var i = 1; i <= num; i++) {
//   if (i > 1) {
//       str += ', ';
//   }
//   str += i;
// }


// console.log(str)

//run this and check what it prints
// var str = ''
// var num = 10

// for (var i = 1; i <= num; i++) {
//     if (i > 1) {
//         str += ', '
//     }
//     str += i;
//     console.log(i  + ' ' + str);
// }

//nesting loops (but remove the comma on the next ones)
// var str;
// var num = 7

// for (var i = 1; i <= num; i+=2) {
//     str = ''
//     for (var j = 1; j <= i; j++) {
//     if (i > 1) {
//         str += ', '
//     }
//     str += j;
// }
//     console.log(i  + ' ' + str);
// }


// prints this
// 1 1, BLAST OFF
// 4 4, 3, 2, 1, BLAST OFF
// 7 7, 6, 5, 4, 3, 2, 1, BLAST OFF
// var list;
// var num = 7

// function joinList(n) {
//     str = ''
//     for (var j = n; j > 0; j-= 1) {
//         if (j < n) {
//             str += ', '
//         }
//         str += j;
//     }   
//     return str; 
// }

// for (var i = 1; i <= num; i += 3) {
//     list = joinList(i);
//     console.log(i + ' ' + list + ', BLAST OFF');
// }

// getting the middle char use (.length-1)/2
// my code
// var name = 'Andy'

// function getMiddle(str) {
//   var midInd = ((name.length-1)/2)
//   if (midInd % 2 === 0) {
//   console.log("middle char is " + '\'' +str[midInd] + '\'')
//   } else
//   console.log("There's no middle.")
// }
// (getMiddle(name))


// var name = 'Andre'

// if (name.length % 2 === 1) {
//     console.log(name[Math.ceil((name.length / 2))-1]);
// } else {
//     console.log(name)
// }


//var name = 'peter' // name = 'PETER' // 'PeTEr'
//...
//Peter

// var name = 'peter'

// function toUpper(name) {
//     name = name.toLowerCase()
//     var remChar = name.slice(1)
//     var upper = name[0].toUpperCase()
    
//     return upper + remChar
// }
// console.log(toUpper('peter'))


//will print dig donner
// function mixUp(str1, str2) {
    
//     var remChar1 = str1.slice(0, 2)
    
//     var remChar2 = str2.slice(0, 2)
    
//     var lastPart1 = str1.slice(2, str1.length)
    
//     var lastPart2 = str2.slice(2, str2.length)
    
//     var newStr1 = remChar2 + lastPart1
    
//     var newStr2 = remChar1 + lastPart2
    
//     return newStr1 + ' ' +newStr2
    
// }
    
// console.log(mixUp('dog', 'dinner'))

//this will print Bobby Flay

// function nameCase(name) {
//     var space = name.indexOf(' ');
//     return name[0].toUpperCase()
//     + name.slice(1, space + 1)
//     + name[space + 1].toUpperCase()
//     + name.slice(space + 2)
// }
// console.log(nameCase('bobby flay'))


//this will print Gordon Ramsay
// function nameCase(name) {
//     var n = name.toLowerCase()
//     var space = n.indexOf(' ');
//     return n[0].toUpperCase()
//     + n.slice(1, space + 1)
//     + n[space + 1].toUpperCase()
//     + n.slice(space + 2)
// }
// console.log(nameCase('GORDON RAMSAY'))


//this will print Barack Hussein Obama
// function nameCase(name) {
//     var theRest = name.toLowerCase().trim();
//     var space = theRest.indexOf(' ');
//     var result = ''
//     while (space !== -1) {
//         var part1 = theRest.slice(0, space + 1)
//         theRest = theRest.slice(space + 1)
//         result += part1[0].toUpperCase() + part1.slice(1);
//         space = theRest.indexOf(' ');
//   } 
//   result += theRest[0].toUpperCase()+theRest.slice(1)
//   return result;
// }
// console.log(nameCase('barack hussein obama'))


// prints Barack Hussein Obama
// function nameCase(name) {
//     var result = name[0].toUpperCase();
//     for (var i = 1; i < name.length; i++) {
//         if (name[i - 1] === " ") {
//             result += name[i].toUpperCase();
//         } else {
//             result += name[i].toLowerCase();
//         }
//     }
//     return result;
//  }

//  console.log(nameCase('barack hussein obama'))




    
                 
    
    