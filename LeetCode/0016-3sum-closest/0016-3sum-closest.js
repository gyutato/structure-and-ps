/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let closest = Infinity;
    nums.sort((a, b) => a - b)

    // set the pointers
    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1;
        let k = nums.length - 1;

        // move the pointers
        while (j < k) {
            const currSum = nums[i] + nums[j] + nums[k]

            // early return condition
            if (currSum === target) return target;

            // update the closest value
            if (Math.abs(target - closest) > Math.abs(target - currSum)) closest = currSum

            // lower the sum if current sum is bigger than the target value
            if (currSum > target) k--;

            // else, update the left pointer
            else j++;
        }
    }

    return closest
};