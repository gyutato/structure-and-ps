/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function(grid) {
    let res = 0;

    // 행, 열 정보 저장
    const col = grid[0].length
    const row = grid.length

    // 점화식: 각 열의 요소들에 대해, 이전으로부터의 최대 move 저장
    let dp = new Array(row).fill(0);

    // 각 열에 대해 반복 (왼->오)
    for (let c = 1; c < col; c++) {
        // 현재 열에서 접근가능한 셀이 있는지 확인 (없으면 더 이상 진행할 수 없음)
        let moveable = false;
        // dp 배열의 값을 덮어씌울 것이므로 이전 열의 dp[i - 1] 값을 저장하기 위한 변수 생성
        let topLeft = 0;

        for (let r = 0; r < row; r++) {
            let maxMove = -1;
            const current = grid[r][c]

            // top-left 로부터 접근가능한지 확인
            // 첫 번째 행이 아님 && top-left 셀이 접근가능한 셀임 && 현재 셀의 값이 더 큼
            if (r >= 1 && topLeft !== -1 && current > grid[r - 1][c - 1]) {
                maxMove = Math.max(maxMove, dp[r - 1] + 1)
            }

            // left 로부터 접근가능한지 확인
            if (dp[r] !== -1 && current > grid[r][c - 1]) {
                maxMove = Math.max(maxMove, dp[r] + 1)
            }

            // bottom-left 로부터 접근가능한지 확인
            if (r < row - 1 && dp[r + 1] !== -1 && current > grid[r + 1][c - 1]) {
                maxMove = Math.max(maxMove, dp[r + 1] + 1)
            }

            // 현재 셀의 정보를 dp 배열에 업데이트
            topLeft = dp[r]
            dp[r] = maxMove
        }

        // 현재 행에 접근 가능한 셀이 한 개라도 있는지 확인
        console.log(JSON.stringify(dp))
        moveable = dp.filter(move => move !== -1).length > 0
        if (!moveable) break;
        res = c
    }
    return res
};