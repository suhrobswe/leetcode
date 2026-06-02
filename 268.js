/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let idealSum = 0;
  let actualSum = 0;
  // We calculate from zero to n
  for (let i = 0; i <= nums.length; i++) {
    idealSum += i;
  }

  for (let i = 0; i < nums.length; i++) {
    actualSum += nums[i];
  }

  return idealSum - actualSum;
};
