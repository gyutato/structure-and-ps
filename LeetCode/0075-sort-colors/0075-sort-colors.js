/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // two pointers
    // 배열의 첫 번째 요소부터 확인
    // 정렬되지 않은 영역 중 최솟값 -> 정렬할 자리와 swap
    for (let i = 0; i < nums.length - 1; i++) {
        let min = nums[i]
        let minIdx = i;
        for (let j = i + 1; j < nums.length; j++) {
            // 최솟값 업데이트
            if (nums[j] < min) {
                min = nums[j]
                minIdx = j
            }
        }
        swap(nums, i, minIdx)
        console.log(nums)
    }
};

const swap = (arr, idx1, idx2) => {
    const tmp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = tmp
}