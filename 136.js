// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var singleNumber = function (nums) {
//   if (nums.length === 1) return nums[0];

//   let uniqueArr = [];

//   for (let i = 0; i < nums.length; i++) {
//     let index = uniqueArr.indexOf(nums[i]);

//     if (index !== -1) {
//       uniqueArr.splice(index, 1);
//     } else uniqueArr.push(nums[i]);
//   }

//   return uniqueArr[0];
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result = result ^ nums[i];
  }

  return result;
};
