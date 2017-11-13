Array.prototype.map = function(func) {
    var results = [];
    for (var i = 0; i < this.length; i++){
        results.push(func(this[i]));
    }

    return results;
};

var arr = [1, 2, 3]
var arr2 = arr.map(function(num){
    return num + 1
})
console.log(arr2)

var arr3 = arr.map(function(num){
    return num * 2
})
console.log(arr3)

Array.prototype.map = function(func) {
    var results = [];
    // for (var i = 0; i < this.length; i++){
    //     results.push(func(this[i]));
    // }
    this.forEach = function (elem){
        results.push(func(elem))
    }
    return results;
};


var numbers = [2,3,4,10,2]
var numbers2 = numbers.filter(function(num){
    return num > 3
})
console.log(numbers2)


var bestFilmIds = films
    .filter(function(film) {
    return film.rating === 5.0;
    })
    .map(function(film) {
    return film.id;
}); 
//will log ['bad boys', 'fracture'] the movies are in the lessons   

//reduce
Array.prototype.reduce = function(func, initialValue) {
    var counter;
    var accumulator;

    // If the user didn't pass an initial value, use the first element.
    if (initialValue === undefined) {
        accumulator = this[0];
    } else {
        accumulator = initialValue;
    }

    // Iterate through the array, feeding the current value and the result of
    // the previous computation back into the function 
    for (var i = 0; i < this.length; i++) {
        accumulator = func(accumulator, this[i])
    }

    return accumulator;
}