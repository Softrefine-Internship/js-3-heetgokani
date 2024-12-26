// Write a JavaScript program to find intersection of two sets.

// Input:
// let set1 = new Set([1, 2, 3, 4]);
// let set2 = new Set([3, 4, 5, 6]);

// Output: [3, 4]
"use strict";
function intersect(set1, set2) {
  let result = [];
  for (let elem of set1) {
    if (set2.has(elem)) {
      result.push(elem);
    }
  }
  return result;
}
let set1 = new Set([1, 2, 3, 4]);
let set2 = new Set([3, 4, 5, 6]);
console.log(intersect(set1, set2));
