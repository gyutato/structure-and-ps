/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    const left = []
    const right = []
    // intervals 내부의 요소들을 순회한다
    for (let i = 0; i < intervals.length; i++) {
        const [currStart, currEnd] = intervals[i]
        const [newStart, newEnd] = newInterval
        // newInterval 을 merge 할 구간 전까지는 그대로 push 한다
        if (currEnd < newStart) left.push(intervals[i])
        // newInterval 을 merge 할 구간이 끝나면, 요소들을 그대로 push 한다
        else if (newEnd < currStart) right.push(intervals[i])
        // newInterval 을 merge 할 구간이 되면, merge 한다
        else {
            newInterval[0] = Math.min(currStart, newStart)
            newInterval[1] = Math.max(currEnd, newEnd)
        }
    }

    return [...left, newInterval, ...right]
};