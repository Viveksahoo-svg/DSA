/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let seen = new Map()
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (seen.has(num) && i - seen.get(num) <= k) return true
    seen.set(num, i)
  }
  return false
};