//ex 1
// var date = new Date(2016, 2, 16, 3, 12);
// console.log(date.toString())

//ex 2
//solve without array
// var daysArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri','Sat']
// function getWeekDay(dateobj){
//    var myDay = date.getDay(dateobj)
//    for (var i = 0; i < daysArr.length; i++){
//        if (i === myDay) {
//            return daysArr[i]
//        }
//    }
// }
    
// console.log(getWeekDay(2012, 0, 3))


// var date = new Date()
// var daysArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri','Sat']

// function getWeekDay() {
//     var myDay = date.getDay()
//         return daysArr[myDay]
// }
// console.log(getWeekDay())


// AJ's code
// var date = new Date(2016, 2, 16, 3, 12);
// console.log(date.toString())
// function getWeekDay(date){
//     return date.toString().split(' ').shift()
//  }
//  console.log(getWeekDay(date))


//ex 3 this is fixed.  not the same with what was submitted
// var now = new Date()

// function getDateBefore(date, days) {
//     var newDate = new Date(date);
//     newDate.toString()
//     newDate.setDate(newDate.getDate() - days)
//     return newDate.toString()
// }
// console.log(getDateBefore(now, 365))

//Lev
// function getDateBefore(date, days) {
//     var newDate = new Date(date);
//     var currDay = newDate.getDate()
//     newDate.setDate(currDay - days)
//     return newDate;
// }

// var date = new Date()
// console.log(getDateBefore(date, 365))

//ex 4

// function getLastDayOfMonth(year, month) {
//     return new Date(year, month + 1, 0).getDate();    
// }
// console.log(getLastDayOfMonth(2012, 1))


//ex 5

// var date = new Date(2016, 2, 16, 3, 12);
// // console.log(date.toString())

// function nameOfMonth(date){
//     return date.toString().split(' ').slice(1, 2).toString()
//     //date.toString().split(' ')[1]
//  }
//  console.log(nameOfMonth(new Date(2009, 10, 11)))
//  console.log(nameOfMonth(new Date(2014, 11, 13)));
//returns 'Nov'
//returns 'Dec'
//make an array if you want it to return a whole month name


//ex 6


// function getSecondsToday(){
//     var today = new Date()
//     var begDay = new Date()
//         begDay.setHours(0,0,0) 
//     return (today - begDay)/1000
// }
// console.log(getSecondsToday())


//ex 7

// function getSecondsToTomorrow(){
//     var today = new Date()
//     var endDay = new Date()
//         endDay.setHours(24, 0, 0)
//     return (endDay - today)/1000
// }
// console.log(getSecondsToTomorrow())

// var date = new Date()
// var timestamp = Date.parse(date)
// console.log(timestamp)

function getSecondsToDismissal(){
    var today = new Date()
    var dismissal = new Date()
        dismissal.setHours(18, 0, 0)
    console.log((dismissal - today)/1000)
}


setInterval(getSecondsToDismissal, 1000)
