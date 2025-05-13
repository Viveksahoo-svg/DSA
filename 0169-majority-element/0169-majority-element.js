/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    var count = 1;
    var current = nums[0];
    var half = Math.floor(nums.length / 2);
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] === current) {
            count++;
            if (count > half) return current;
        } else {
            current = nums[i];
            count = 1;
        }
    }
    return current;
};