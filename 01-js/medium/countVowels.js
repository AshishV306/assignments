/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const arr = {a:'a',e:'e',i:'i',o:'o',u:'u'};
// console.log(arr);
// console.log(arr.a);
str = str.toLowerCase();
let count=0;
for(let i =0 ; i<str.length; i++){
  if(str[i]==arr[str[i]]){
    count ++;
  }
}
// console.log(count);
return count;
}
// countVowels("aeioujjj");
module.exports = countVowels;