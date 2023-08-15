/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    for (let letter of s) {
        console.log(letter, t.includes(letter))
        if (t.includes(letter)) {
            t = t.replace(letter, '')
        } else {
            return false
        }
    }

    if (t.length === 0) return true 
    return false
};