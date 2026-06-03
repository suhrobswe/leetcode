/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let cleanStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  return cleanStr === cleanStr.split("").reverse().join("");
};
