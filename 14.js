var longestCommonPrefix = function (strs) {
  // Agar massiv bo'sh bo'lsa, silliqqina bo'sh satr qaytaramiz
  if (strs.length === 0) return "";

  let firstWord = strs[0]; // Birinchi so'zni namuna qilib olamiz

  for (let i = 0; i < firstWord.length; i++) {
    let char = firstWord[i]; // Birinchi so'zning i-harfi

    // Qolgan so'zlarni solishtirib chiqamiz
    for (let j = 1; j < strs.length; j++) {
      // Agar joriy so'z tugab qolgan bo'lsa TAYYOR harf mos kelmasa
      if (i === strs[j].length || strs[j][i] !== char) {
        // Shu yergacha bo'lgan prefiksni qirqib qaytaramiz
        return firstWord.substring(0, i);
      }
    }
  }

  // Agar hamma so'zlar to'liq bir xil bo'lsa, birinchi so'zning o'zi chiqadi
  return firstWord;
};
