function favoriteAnimal(str, callback) {

 return callback(str);

 }

 


 favoriteAnimal('animals are the best', replaceWithDog)

 // returns 'dogs are the best'

 


 favoriteAnimal('I love my animal', replaceWithCat)

 // returns 'I love my cat'

 function replaceWithDog(str) {

 return str.replace("animals", "dogs")

 }

 function replaceWithCat(str) {

 return str.replace("animal", "cat")

 }

 console.log(favoriteAnimal('animals are the best', replaceWithDog))

 console.log(favoriteAnimal('I love my animal', replaceWithCat))



 function conservativeSpender(balance) {
    return balance > 100
    }
    function liberalSpender(balance) {
    return balance > 10
    }
    function horribleSaver (balance) {
    return balance > 0
    }
    
    function shouldIBuyThis(balance, callback) {
    if (callback(balance) === true) {
    return "Sure! Ive got the money"
    } else {
    return "Nope! Gotta keep my savings up!"
    }
    }
    
    
    console.log(shouldIBuyThis(20, horribleSaver))
    // logs: "Sure! I've got the money!"
    console.log(shouldIBuyThis(20, liberalSpender))
    // logs: "Sure! I've got the money!"
    console.log(shouldIBuyThis(20, conservativeSpender))
    // logs: "Nope! Gotta keep my savings up!"
    console.log(shouldIBuyThis(101, conservativeSpender))
    // logs: "Sure! I've got the money!"
    
    function smarterShouldIBuyThis(balance, price, callback) {
    var newBalance = balance - price
    if (callback(newBalance) === true) {
    return "Sure! Ive got the money"
    } else {
    return "Nope! Gotta keep my savings up!"
    }
    }
    console.log(smarterShouldIBuyThis(45, 50, horribleSaver))