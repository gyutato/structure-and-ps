/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
	const obj = {}

	for (let num of nums) {
		if (Object.hasOwn(obj, num)) {
			obj[num]++
		} else {
			obj[num] = 1;
		}
	}

	return Object.entries(obj).sort((a, b) => b[1] - a[1]).map(([key, val]) => key).slice(0, k)
};