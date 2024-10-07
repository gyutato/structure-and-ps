/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const [base, target] = nums1.length < nums2.length 
        ? [nums1, nums2] 
        : [nums2, nums1]
    const res = []

    for (let i = 0; i < base.length; i++) {
        if (target.indexOf(base[i]) >= 0 && res.indexOf(base[i]) < 0) {
            res.push(base[i])
        }
    }

    return res
};