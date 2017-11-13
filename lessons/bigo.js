function linearTime(arr) {
    arr.forEach(function(str) {
       console.log(str)
    })
}


//Print out who selected which character.  Two players can select the same character.
// function quadraticTime(characterNames) {
//     var arr = []
//     for (var i = 0; i < characterNames.length; i++) {
//         for (var j = 0; j < characterNames.length; j++ ) {
//             arr.push(("Player One: " + characterNames[i] + "; Player Two: " + characterNames[j]))
//         }
//     }
//     return arr
// }
// var arr = quadraticTime(["Agnes", "Bart", "Carl"])
// console.log(arr.length)


var board = [["x","o","o"], ["o","x","o"], ["x","o","x"]]
function ticTac(arr) {
    var arr = []
    for (var i = 0; i < board.length; i ++) {
        for (var j = 0; j < board.length; j++) {
            console.log(arr[i][j])
        }
    }
 }
ticTac(board)
