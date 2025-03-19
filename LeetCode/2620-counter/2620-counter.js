/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let inner = n
    return function() {
        return inner++
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */