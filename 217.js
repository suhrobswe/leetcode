/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  //   const uniqueNumbers = new Set(nums);
  //   return uniqueNumbers.size != nums.length;
  
  return new Set(nums).size !== nums.length;
};
