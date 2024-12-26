// Write a JavaScript program to get the longest string in an array.

// Input:
// arr = [
// "JavaScript",
// "Python",
// "Java",
// "C++",
// "Ruby",
// "Swift",
// ]

// Output: "JavaScript"
"use strict";
function longest(arr) {
  let maxstring = arr[0];

  for (let str of arr) {
    if (str.length > maxstring.length) {
      maxStr = str;
    }
  }
  return maxstring;
}
let arr = ["JavaScript", "Python", "Java", "C++", "Ruby", "Swift"];
let result = longest(arr);
console.log(result);
