/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map()

    for (let word of strs) {
        const tmp = word.split('').sort().join('')
        const anagram = map.get(tmp)
        
        if (anagram){
            map.set(tmp, [...anagram, word])
        } else {
            map.set(tmp, [word])
        }
    }

    const res = []
    map.forEach((val) => res.push(val))
    return res
};