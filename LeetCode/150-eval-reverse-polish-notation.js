/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const operator = ['+', '-', '*', '/']
    const calc = (_last, _prev, oper) => {
        const [last, prev] = [Number(_last), Number(_prev)]
        switch (oper) {
            case '+':
                return prev + last
            case '-':
                return prev - last
            case '*':
                return prev * last
            case '/':
                const tmp = prev / last
                return tmp > 0 ? Math.floor(tmp) : Math.ceil(tmp)
        }
    }

    const stack = []
    for (let i = 0; i < tokens.length; i++) {
        // 숫자라면 push
        if (!operator.includes(tokens[i])) {
            stack.push(tokens[i])
        } else {
            // 연산자라면 상위 2개 꺼내서 연산하고 다시 push
            const last = stack.pop()
            const prev = stack.pop()
            console.log(calc(last, prev, tokens[i]))
            stack.push(calc(last, prev, tokens[i]))
        }
    }
    return stack[0]
};