/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = []
    nums.sort((a, b) => a - b)
    
    for (let i = 0; i < nums.length - 2; i++) {
        // set two pointers
        let [j, k] = [i+1, nums.length - 1]

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k]
            if (sum === 0) {
                const el = [nums[i], nums[j], nums[k]]
                if (!isDuplicate(res, el)) res.push(el)
            }
            if (sum < 0) j++
            else k--
        }
    }

    return res
};

const isDuplicate = (array, value) => {
    const v = JSON.stringify(value)
    for (const el of array) {
        if (JSON.stringify(el) === v) return true
    }

    return false
}