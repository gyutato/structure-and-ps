/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false

    const freq = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        freq[calcCharIdx(s[i])]++
        freq[calcCharIdx(t[i])]--
    }

    for (f of freq) {
        if (f !== 0) return false
    }

    return true
};

const calcCharIdx = (char) => {
    return char.charCodeAt() - 'a'.charCodeAt()
}
