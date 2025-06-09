/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if (nums.length < 3) return null;
    nums.sort((a, b) => a - b);
    let closestSum = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];
            if (currentSum === target) return currentSum;
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }
            if (currentSum < target) {
                left++;
                while (left < right && nums[left] === nums[left - 1]) left++;
            } else {
                right--;
                while (left < right && nums[right] === nums[right + 1]) right--;
            }
        }
    }
    return closestSum;
};