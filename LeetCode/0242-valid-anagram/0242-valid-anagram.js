/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false

    const hashS = {}
    const hashT = {}

    for (let i = 0; i < s.length; i++) {
        addHash(hashS, s[i])
        addHash(hashT, t[i])
    }

    const sortedS = sortedHash(hashS)
    const sortedT = sortedHash(hashT)
    
    for (let i = 0; i < sortedS.length; i++) {
        if ((sortedS[i][0] !== sortedT[i][0]) 
        || (sortedS[i][1] !== sortedT[i][1])
        ) {
            return false
        }
    }

    return true
};

const addHash = (hash, value) => {
    if (!hash[value]) {
        hash[value] = 0
    }

    hash[value]++
}

const sortedHash = (hash) => {
    const res = Object.entries(hash).sort((a, b) => {
        return a[0].charCodeAt() - b[0].charCodeAt()
    })

    return res

}