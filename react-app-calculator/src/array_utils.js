/**
 *
 * @param array {[string]}
 * @param str {string}
 * @return {boolean}
 */
function has(array, str) {
    return array.filter(s => str.includes(s)).length !== 0
}

export default {
    has
}