/**
 * @param {number[]} height
 * @return {number}
 */

const min = (left, right) => Math.min(left, right)
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1
    let ans = 0;

    while (left < right) {
        const newVal = min(height[left], height[right]) * (right - left)
        if (newVal > ans) {
            ans = newVal
        }
        console.log(left, right, ans)

        if (height[left] < height[right]) {
            const curLeft = left;
            while (height[curLeft] >= height[left] && left < height.length) left++
        } else {
            const curRight = right;
            while (height[curRight] >= height[right] && right >= 0) right--
        }
    }

    return ans;
};