// Write a JavaScript program to check a given string is an anagram of another string.

// Example 1:
// Input: evil = vile
// Output: true

// Example 2:
// Input: a gentleman = elegant man
// Output: true

// Example 3:
// Input: eleven plus two = twelve plus one
// Output: true
"use strict";

function anagram(str1, str2) {
  str1 = str1.replace(/\s+/g, "").toLowerCase().split("").sort().join("");
  str2 = str2.replace(/\s+/g, "").toLowerCase().split("").sort().join("");
  return str1 === str2;
}
let input1 = "evil";
let input2 = "vile";
console.log(anagram(input1, input2));

let input3 = "a gentleman";
let input4 = "elegant man";
console.log(anagram(input3, input4));

let input5 = "eleven plus two";
let input6 = "twelve plus one";
console.log(anagram(input5, input6));
