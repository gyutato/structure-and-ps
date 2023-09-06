/**
 * input array is sorted
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let index1 = 0;
    let index2 = numbers.length - 1

    while (numbers[index1] + numbers[index2] !== target) {
        if (numbers[index1] + numbers[index2] > target) index2--;
        else index1++;
    }

    return [index1 + 1, index2 + 1]

    // for (let i = 0; i < numbers.length - 1; i++) {
    //     for (let j = i + 1; j < numbers.length; j++) {
    //         if (numbers[i] + numbers[j] === target) return [i + 1, j + 1]
    //     }
    // }
};