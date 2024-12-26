// Write a JavaScript program to find the longest word within the string.

// Input: "This is a demo String find the largest word from it"
// Output: "largest"
"use strict";
function longest(str) {
  let words = str.split(" ");
  let max = "";
  for (let word of words) {
    if (word.length > max.length) {
      max = word;
    }
  }
  return max;
}

let input = "This is a demo String find the largest word from it";
let result = longest(input);
console.log(result);
