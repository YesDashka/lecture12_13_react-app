const arithmeticOperations = [
    '+',
    '-',
    '*',
    '/',
]

/**
 * @type {number[]}
 */
const numbers = [...Array(10).keys()]

const resultOperations = [
    'CE',
    'C',
    '=',
]
let store = {
    arithmeticOperations,
    numbers,
    resultOperations: resultOperations
}

export default store;