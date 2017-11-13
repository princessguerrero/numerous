


function list(names){
    var newArr = []
    for(var i = 0; i < names.length; i++) {
        if (names === []) {
            newArr.push('')
        } else if (names.length === 1) {
            newArr.push(names[0].name)
        } else if (names.length > 1) {
            newArr.push(names[i].name)
        }
    }
    if (newArr.length === 2) {
        newArr = newArr[0] + ' & ' + newArr[1] 
    } else if (newArr.length === 3) {
        var lastElement = newArr.slice(-1)
        var noLast = newArr.pop()
        newArr = newArr.join(', ') + ' & ' + lastElement
    }
    return newArr
}
console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))
// returns 'Bart, Lisa & Maggie'

console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]))
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
