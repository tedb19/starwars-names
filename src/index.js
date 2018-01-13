var uniqueRandomArray = require('unique-random-array')
var starwarsNames = require('./starwars-names.json')
var getRandomItem = uniqueRandomArray(starwarsNames)

module.exports = {
    all: starwarsNames,
    random
}

function random(number) {
    if(number === undefined) {
        return getRandomItem()
    } else {
        var randomItems = [];
        for(var i=0; i < number; i++){
            randomItems.push(getRandomItem())
        }
        return randomItems
    }
}