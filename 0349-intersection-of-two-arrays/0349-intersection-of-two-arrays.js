/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
   let result = [];
   for(let item of nums2){
    if(nums1.includes(item) && !result.includes(item)){
        result.push(item)
    }
   } return result
};
