import uniqueRandomArray from 'unique-random-array'
import starwarsNames from './starwars-names.json'

const getRandomItem = uniqueRandomArray(starwarsNames)

module.exports = {
    all: starwarsNames,
    random
}

function random(number) {
    if(number === undefined) {
        return getRandomItem()
    } else {
        let randomItems = [];
        for(let i=0; i < number; i++){
            randomItems.push(getRandomItem())
        }
        return randomItems
    }
}