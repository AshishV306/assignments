/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();

  // Check if the lengths are the same, if not, they can't be anagrams
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Create hashmaps to store character frequencies
  const charCount1 = {};
  const charCount2 = {};

  // Count character occurrences in the first string
  for (const char of cleanStr1) {
    charCount1[char] = (charCount1[char] || 0) + 1;
  }

  // Count character occurrences in the second string
  for (const char of cleanStr2) {
    charCount2[char] = (charCount2[char] || 0) + 1;
  }

  // Compare the character frequencies in both hashmaps
  for (const char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  // If all frequencies match, the strings are anagrams
  return true;
}

module.exports = isAnagram;
