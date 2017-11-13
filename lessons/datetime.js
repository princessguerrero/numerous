var now = new Date();
//if no paramater it refers to present

var now = new Date(1993, 4, 7, 12);
//parameters are optional
//month starts with 0

now.setDate(now.getDate() - 7)

// console.log(now.toString());
// getFullYear() : Get the year (4 digits)
// getMonth() : Get the month, from 0 to 11.
// getDate() : Get the day of month, from 1 to 31, the name of the method does 
// look a little bit strange.
// getHours(), getMinutes(), getSeconds(), getMilliseconds() : Get the corresponding 
// time components.
// getDay() : Get the day of week, where 0 stands for Sunday and 6 stands for Saturday.

var birthDate = new Date(1982, 9, 29)
// console.log(birthDate.toString())

// var firstBirthday = birthDate.setFullYear(getFullYear() + 1)
// var firstImmu = birthDate.setDate(getDate() + 180)
// birthDate.getDate(now + 1000)


var then = new Date(1982, 9, 29);
var now = new Date ()
var msPerWeek = 1000 * 60 * 60 * 24 * 7 
// console.log((now.getTime() - then.getTime())/msPerWeek)

var start = new Date()
for (var i = 0; i < 100000; i++) {
    // console.log(i)
}
var end = new Date()

// console.log(end.getTime()-start.getTime()/ 1000)

var timestamp = Date.parse('2012-01-26T15:00');
//or just ('2012-01-26')
var then = new Date(timestamp);

console.log(then.toString())