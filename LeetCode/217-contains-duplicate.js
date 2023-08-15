/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const buf = []
    buf.push(nums.pop())
    for (let i = nums.length - 1; i >= 0; i--) {
        if (buf.includes(nums[i])) return true;
        const num = nums.pop()
        buf.push(num)

    }

    return false;
};