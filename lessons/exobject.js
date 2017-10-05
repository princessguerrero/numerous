//question one object exercises
// var favRecipe = {
//     name: 'Omelette',
//     servings: 2,
//     ingredients: ['eggs', 'salt', 'pepper', 'onion', 'tomato', 'mushroom']
// }

// function logRecipe(recipe) {
//     console.log('Name:' + ' ' + favRecipe.name + '\n' + 
//                 'Servings:' + ' ' +favRecipe.servings + '\n' +
//                 'Ingredients:'+ '\n' +favRecipe.ingredients.join('\n'))
        
// }
// logRecipe(favRecipe)


//question 2
// var recipe = {
//     name: 'Omelette',
//     servings: 2,
//     ingredients: ['eggs', 'salt', 'pepper', 'onion', 'tomato', 'mushroom']
// }

// function prettyLog(recipe) {
//     console.log('Name:' + ' ' + recipe.name + '\n' +
//     'Servings:' + ' ' +recipe.servings + '\n' +
//     'Ingredients:' + ' ' +recipe.ingredients.join(' > '))
// }

// prettyLog(recipe)


//question 3

// var cat = {
//     family: 'Felidae',
//     genus: 'Felis',
//     species: 'Catus' 
// }

//use a loop put it in an array and push




//my answer
// function getProps(obj) {
//     console.log(Object.keys(cat))
// }
// getProps(cat)


// function getProps(obj) {
//     for (var key in obj) {
//         console.log(key)
//     }
// }
// getProps(cat)


//question 4
// function getObjLength(obj) {
//     var sum = 0
//     for (var key in obj) {
//         sum += 1
//     }
//     return sum
// }
// console.log(getObjLength(cat))


//question 5
// var films = [
//     {
//     title: 'Wonder Woman',
//     director: 'Patty Jenkins',
//     boolean: false
//     },
//     {
//     title: 'Inception',
//     director: 'Christopher Nolan',
//     watched: false
//     }
// ]

// function logTitleDir (arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i].watched === false) {
//             console.log('You already watched \"' + arr[i].title + '\" directed by ' +
//             arr[i].director)
//         } else
//         console.log('You still need to watch \"' + arr[i].title + '\" directed by ' + arr[i].director)
//     }
// }
// logTitleDir(films)


//question 6

var toDos = [
    {
    description: 'Clean room',
    completed: 'no'
    },
    {
    description: 'Do Laundry',
    completed: 'no'
    },
    {
    description: 'Clean bathroom',
    completed: 'no'
    }
]

function addToDo(arr) {
    toDos.push(arr[0])
    return toDos
}
console.log(addToDo([{description: 'Wash dishes', completed: 'no'}]))


function showAll(arr) {
    var num = 0
    for (var i = 0; i < arr.length; i++) {
        num += 1
        console.log(num + '. ' + arr[i].description + '. '+ ' Completed? ' + 
        arr[i].completed)
    }
} 
showAll(toDos)


function completed(arr, num) {
    if (num > arr.length - 1){
        console.log('Index does not exist')
    }
    if (arr[num].completed === 'no') {
        arr[num].completed = 'yes'
    }
  
    return toDos
}
console.log(showAll(completed(toDos, 2)))