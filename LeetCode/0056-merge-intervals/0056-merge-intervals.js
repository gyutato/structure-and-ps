/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort(([a], [b]) => a - b);

  let overlap = [];
  let result = [];
  for (let i = 0; i < intervals.length; i++) {
    const target = intervals[i]

    if (overlap.length === 0) {
      overlap = overlap.concat(target)
    }
    // if current interval does not overlap
    else if (target[0] > overlap[1]) {
      result.push(overlap)
      overlap = target
      continue;
    }
    else {
      // update overlap start
      overlap[0] = Math.min(overlap[0], target[0])
      // update overlap end
      overlap[1] = Math.max(overlap[1], target[1])
    }
  }

  // push remaining intervals
  if (overlap.length) result.push(overlap)
  
  return result
};