/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const str = str.replace(/\s/g, '');
  str = str.toLowerCase();
  let j = str.length-1;
  for(let i=0; i<(str.length/2);i++){
    if(str[i]!=str[j]){
      return false;
    }
    j--;
  }
  return true;
}

// let b = isPalindrome("nayann")
// console.log(b);
module.exports = isPalindrome;
