/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let red = 0;
    let blue = nums.length - 1;
    let white = 0;
    while (white <= blue) {
        if (nums[white] === 0) {
            swap(nums, white, red);
            red++;
            white++;
        } else if (nums[white] === 1) {
            white++;
        } else {
            swap(nums, white, blue);
            blue--;
        }
    }

};

const swap = (arr, idx1, idx2) => {
    const tmp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = tmp
}                   