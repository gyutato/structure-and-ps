function solution(fees, records) {
    var answer = [];
    const hash = {}
    const [limit, minFee, unit, unitFee] = fees
    
    // 입-출차 내역 해시 생성
    for (let record of records) {
        const [time, n, inOrOut] = record.split(' ')
        const number = Number(n)
        if (hash[number]) {
            hash[number].push([getTimeInMinute(time), inOrOut])
        } else {
            hash[number] = [[getTimeInMinute(time), inOrOut]]
        }
    }
    
    // 차량 정렬
    const cars = Object.entries(hash).sort((a, b) => a[0] - b[0])
    
    // 각 차량의 요금 계산
    for (let car of cars) {
        let fee = minFee;
        let totalTime = 0;
        let inTime = 0;
        
        // 내역 배열의 각 내역을 확인
        const len = car[1].length
        for (let i = 0; i < len; i++) {
            const [time, inOrOut] = car[1][i]
            if (inOrOut === 'IN') {
                inTime = time
                if (i === len - 1) {
                    totalTime += getTimeInMinute('23:59') - inTime
                }
            }
            if (inOrOut === 'OUT') {
                totalTime += (time - inTime)
            }
        }
        
        // 요금 계산
        const limitExceed = totalTime - limit
        if (limitExceed > 0) {
            fee += Math.ceil(limitExceed / unit) * unitFee
        }
        
        answer.push(fee)
    }
    
    return answer;
}

const getTimeInMinute = (time) => {
    const [h, m] = time.split(':')
    return Number(h) * 60 + Number(m)
}