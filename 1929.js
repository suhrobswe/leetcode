/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  // return [...nums, ...nums]; spread operatori

  // return nums.concat(nums); for methos

  let n = nums.length;

  let ans = [];

  for (let i = 0; i < n; i++) {
    ans[i] = nums[i];
    ans[i + n] = nums[i];
  }

  return ans;
};
