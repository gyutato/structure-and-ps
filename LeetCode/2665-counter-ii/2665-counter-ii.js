/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const _init = init;
    let value = init;

    return {
        increment() {
            return ++value
        },

        decrement() {
            return --value
        },

        reset() {
            value = _init
            return value
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */