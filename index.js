const yosay = require('yosay')
const mathlib = require('mathjs')

const startingNumber = +process.argv[2] || 999999

const odd = n => (3 * n) + 1
const even = n => n / 2
const isOdd = x => x & 1

const getNext = x =>
    isOdd(x) ? odd(x) : even(x)

const createChain = (x, ...arr) => {
    arr.push(x)
    while (x != 1) {
        x = getNext(x)
        arr.push(x)
    }
    return arr.length
}

const arrayOfAllNumbers = x => Array.from(Array(x), (_, x) => (createChain(x + 1)))
const getLongestChain = x => mathlib.max(arrayOfAllNumbers(x))

const theNumber = Number(arrayOfAllNumbers(startingNumber).indexOf(getLongestChain(startingNumber))) + 1

console.log(yosay('The starting number ' + theNumber + ' produces the longest chain.'))
