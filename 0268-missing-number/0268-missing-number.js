/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
let n = nums.length;
    let shouldBeTotal = (n * (n + 1)) / 2; 
    let actualTotal = 0;
    
    for(let i = 0; i < nums.length; i++) {
        actualTotal += nums[i];
    }
    
    return shouldBeTotal - actualTotal; 
    
};