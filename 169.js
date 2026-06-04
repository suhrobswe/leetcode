/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = new Map();

  // 1-bosqich: Barcha sonlarni sanab chiqamiz
  for (let i = 0; i < nums.length; i++) {
    let currentCount = map.get(nums[i]) || 0;

    // Agar son bo'lsa ham, bo'lmasa ham shunchaki 1 qo'shib yozamiz
    map.set(nums[i], currentCount + 1);
  }

  // 2-bosqich: Yarmidan ko'p takrorlanganini qidiramiz
  for (let i = 0; i < nums.length; i++) {
    let count = map.get(nums[i]) || 0; // || 0 qavsdan tashqarida

    if (count > nums.length / 2) {
      // nums emas, nums.length
      return nums[i];
    }
  }
};
