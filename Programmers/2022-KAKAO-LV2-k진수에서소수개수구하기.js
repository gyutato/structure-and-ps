function solution(n, k) {
    var answer = 0;
    
    const kNum = convertNum(n, k)
    const nums = []
    
    for (let i = 0; i < kNum.length; i++) {
        let num = ''
        
        // 0 만나기 전까지 숫자 찾기
        while (kNum[i] !== '0' && i < kNum.length) {
            num += (kNum[i])
            i++
        }
        nums.push(Number(num))
    }
    
    for (let num of nums) {
        if (isPrime(num)) answer++
    }
    
    return answer;
}

const isPrime = (k) => {
    if (k <= 1) return false
    
    for (let i = 2; i <= Math.sqrt(k); i++) {
        if (k % i === 0) return false
    }
    return true
}

const convertNum = (n, k) => {
    const stack = []
    const num = function dfs (n, k){
        stack.push(String(n % k))
        const nextN = Math.floor(n / k)
        if (nextN === 0) return;
        dfs(nextN, k)
    }(n, k)
    
    let ans = ''
    for (let i = stack.length - 1; i >= 0; i--) {
        ans += stack[i]
    }
    
    return ans
}