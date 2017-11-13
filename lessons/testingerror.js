"use strict";
function Person(name) {
    this.name = name;
    // TypeError: Cannot set property 'name' of undefined
}

var p = new Person("Ferdinand")
console.log(p)
// => undefined

//for assert it is in consfunc.js (vector problem)