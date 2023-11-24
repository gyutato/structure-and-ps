function solution(n, info) {
    let rInfo = Array(11).fill(0);
    let diff = 0, rScore = [];
    const len = info.length
    
    const calcMaxDiff = (rInfo) => {
        let sum = 0;
        for (let i = 0; i < len; i++) {
            if (!info[i] && !rInfo[i]) continue
            else if (info[i] >= rInfo[i]) sum -= (10 - i)
            else sum += (10 - i)
        }
        
        if (diff < sum) {
            for (let r = 0; r < len; r++) { rScore[r] = rInfo[r]; }
            diff = sum;
        } 
        else if (diff == sum) {
            for (let i = len-1; i >= 0; i--) {
                if (rScore[i] < rInfo[i]) {
                    for (let r = 0; r < len; r++) { rScore[r] = rInfo[r]; }
                    break;
                } else if (rScore[i] > rInfo[i]) {
                    break;
                }
            }
        }
    }
    
    const dfs = (target, arrows, rInfo) => {
        // base case
        if (target === len || arrows === 0) {
            calcMaxDiff(rInfo)
            return
        }
        
        // 쏠 화살 수 결정
        let shoot = 0;
        if (info[target] < arrows) shoot = info[target] + 1
        else if (target === len - 1) shoot = arrows
        
        // 사격 가능한 경우, 사용한 화살 개수 업데이트
        const tmp = info[target]
        if (shoot > 0) {
            // 라이언 사격 정보 업데이트
            rInfo[target] = shoot
            // 어피치는 어차피 해당 점수 가져가지 못하므로 0 처리 (maxDiff 계산에 용이하도록)
            info[target] = 0
            dfs(target + 1, arrows - shoot, rInfo)
        }
        // 사격할 수 없거나 사격을 포기한 경우
        rInfo[target] = 0
        info[target] = tmp
        dfs(target + 1, arrows, rInfo)
    }
    
    dfs(0, n, rInfo)
    
    return diff > 0 ? rScore : [-1]
}