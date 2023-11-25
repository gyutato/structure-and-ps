// 18/23
function solution(dice) {
    var answer = [];

    // 주사위의 총 개수 totalDice, A가 가져갈 주사위의 개수 pick
    const totalDice = dice.length
    const aPicks = []
    const bPicks = []

    const dfs = (diceCount, start, aPick) => {
        // 만약 A가 모든 주사위를 골랐다면, bPicks 업데이트 후 굴려서 비교 수행
        if (diceCount === totalDice / 2) {
            const bPick = dice.map((_, idx) => !aPick.includes(idx) ? idx : null).filter(v => v !== null)
            aPicks.push(aPick)
            bPicks.push(bPick)
            return;
        }

        // A가 주사위를 고르는 경우의 수  = nC(n/2)
        for (let i = start; i < totalDice; i++) {
            if (aPick.includes(i)) continue;
            dfs(diceCount - 1, i, [...aPick, i])
        }
    }

    // 주사위 선택 (aPicks, bPicks 결정)
    dfs(totalDice, 0, [])

    // 한 개의 aPick이 bPick을 결정함
    // 결정된 aPick - bPick 쌍 안에서 각 주사위를 굴리는 경우의 수를 구해야 함

    // 주어진 조합 (pick) 을 굴린 경우의 수
    const getDiceRollResults = (picks) => {
        const result = []
        const dices = dice.filter((_, idx) => picks.includes(idx))
        const diceDfs = (nextDice, rolls) => {
            if (nextDice === picks.length) {
                result.push([picks, rolls, rolls.reduce(sum, 0)])
                return;
            }
            // 각 주사위를 굴리는 경우의 수
            for (let i = 0; i < 6; i++) {
                diceDfs(nextDice + 1, [...rolls, dices[nextDice][i]])
            }
        }

        diceDfs(0, [])
        return result
    }

    // 가장 높은 확률과 해당 조합
    let maxProb = 0
    let maxComb = []


    // 각 pick 조합에 대해, 굴림 결과들을 구함
    const pickLen = aPicks.length
    for (let p = 0; p < pickLen; p++) {
        const aCases = getDiceRollResults(aPicks[p])
        const bCases = getDiceRollResults(bPicks[p])

        // 전체 경우의 수
        const totalComb = aCases.length * bCases.length

        // 각 굴림 결과의 조합에 대해, 승리 여부를 구함
        const len = aCases.length

        let win = 0
        for (let a = 0; a < len; a++) {
            for (let b = 0; b < len; b++) {
                if ( aCases[a][2] > bCases[b][2]) win++
            }
        }
        const prob = win / totalComb
        if (prob > maxProb) {
            maxProb = prob
            maxComb = aCases[0][0].map(v => v + 1)
        }
    }

    return maxComb;
}


const sum = (acc, val) => acc + val

const setHash = (hash, key, val) => {
    if (hash[key]) hash[key]++
    else hash[key] = 1
}