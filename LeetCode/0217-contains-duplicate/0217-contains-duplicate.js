/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hash = {}

    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i]

        if (hash[curr]) return true
        hash[curr] = 1
    }

    return false
};