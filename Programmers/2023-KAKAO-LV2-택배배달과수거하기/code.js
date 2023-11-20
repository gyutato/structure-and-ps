function solution(cap, n, deliveries, pickups) {
    var answer = 0;
    let totalDeli = deliveries.reduce((acc, val, idx) => acc + val)
    let totalPick = pickups.reduce((acc, val, idx) => acc + val)
    
    for (let goal = n - 1; goal >= 0; goal--) {
        // 해당 집에 배달/수거물이 있는 경우 방문 - 한 번에 배달 못할 수도 있으므로 while문
        while (deliveries[goal] || pickups[goal]) {
            // 이동 거리 계산
            answer += (goal + 1) * 2
            
            // 적재 - cap 과 남은 배달물 수 중 더 적은 것
            let load = Math.min(cap, totalDeli)
            
            // 가는 길 - 배달
            for (let i = goal; i >= 0; i--) {
                if (!load) break;
                
                if (deliveries[i]) {
                    const deli = Math.min(load, deliveries[i])
                    deliveries[i] -= deli
                    load -= deli
                    totalDeli -= deli
                }
            }
            
            // 적재 - cap과 남은 수거물 수 중 더 적은 것
            load = Math.min(cap, totalPick)
            
            // 오는 길 - 수거
            for (let i = goal; i >= 0; i--) {
                if (!load) break;
                
                if (pickups[i]) {
                    const rest = Math.min(load, pickups[i])
                    pickups[i] -= rest
                    load -= rest   
                    totalPick -= rest
                }
            }
        }
    }
    
    return answer 
}