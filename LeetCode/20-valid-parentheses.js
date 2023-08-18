/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = []
    const dict = {
        ')': '(',
        '}': '{',
        ']': '[',
    }
    const opens = Object.values(dict)

    for (let p of s) {
        if (opens.includes(p)) {
            stack.push(p)
        } else {
            if (stack.pop() !== dict[p]) {
                return false;
            }
        }
    }

    return stack.length === 0
};