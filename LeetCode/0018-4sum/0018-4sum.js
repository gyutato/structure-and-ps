/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

[-2, -1, 0, 0, 1, 2]

var fourSum = function(nums, target) {
    const res = []
    nums.sort((a, b) => a - b)

    // set the first pointer
    for (let a = 0; a < nums.length - 3; a++) {
        // prevent duplicate 'a'
        while (a > 0 && nums[a-1] === nums[a]) a++;
        // set the second pointer
        let b = a + 1;
        for (let b = a + 1; b < nums.length - 2; b++) {
            // prevent duplicate 'b'
            while (b > a + 1 && nums[b-1] === nums[b]) b++
            // set the rest of the pointers
            let c = b + 1;
            let d = nums.length - 1
            // calc sum and update the pointer
            while (c < d) {
                const sum = nums[a] + nums[b] + nums[c] + nums[d]
                if (sum === target) res.push([nums[a], nums[b], nums[c], nums[d]])
                if (sum > target) d--;
                else {
                    c++;
                    while (nums[c-1] === nums[c]) c++;
                }
            }
        }
    }

    return res
};