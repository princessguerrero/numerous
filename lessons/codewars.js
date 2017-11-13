function list(names){
    var newArr = []
    var empty = "''"
    if (names.length === 0) {
        return empty
    } 
    for(var i = 0; i < names.length; i++) {
        if (names.length === 1) {
            newArr = names[0].name
        } else if (names.length > 1) {
            newArr.push(names[i].name)
        } 
    }
    if (newArr.length === 1){
        return newArr
    } else if (newArr.length === 2) {
        return newArr = newArr[0] + ' & ' + newArr[1] 
    } else if (newArr.length >= 3) {
        var lastElement = newArr.slice(-1)
        return newArr = newArr.slice(0,newArr.length - 1) + ' & ' + lastElement
    }
    return newmodArr
}

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Homer'} ]))
// returns 'Bart, Lisa & Maggie'

console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]))
// returns 'Bart & Lisa'

console.log(list([ {name: 'Bart'} ]))
// returns 'Bart'

console.log(list([]))
// returns ''
