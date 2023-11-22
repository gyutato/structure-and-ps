function solution(queue1, queue2) {
    let q1sum = queue1.reduce((acc, val) => acc + val, 0)
    const q2sum = queue2.reduce((acc, val) => acc + val, 0)
    
    if (q1sum === q2sum) return 0
    if ((q1sum + q2sum) % 2 !== 0) return -1
    
    // 통합 큐 생성
    const q0 = [...queue1, ...queue2]
    const q0sum = q0.reduce((acc, val) => acc + val, 0)

    // q1 범위 표시 포인터 생성
    let start = 0;
    let end = queue1.length
    const target = q0sum / 2
    
    // 투포인터 반복 - 모든 경우의 수 탐색
    let count = 0;
    while (count <= q0.length * 2) {
        if (q1sum === target){
            return count
        } else if (q1sum < target) {
            q1sum += q0[end++]
        } else {
            q1sum -= q0[start++]
        }
        count++
    }
    
    return -1;
}