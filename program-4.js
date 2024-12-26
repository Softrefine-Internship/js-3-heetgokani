// Write a JavaScript program to get the index of an object by it's property.

// Input:
// arrayObj = [{
//     prop_1: 'val_1',
//     prop_2: 'val_2',
//     prop_3: 'val_3'
// }, {
//     prop_1: 'val_4',
//     prop_2: 'val_5',
//     prop_3: 'val_6'
// }];

// Output: 1 (index of an object for prop_1: 'val_4')

"use strict";

function index(arr, prop, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][prop] === val) {
      return i;
    }
  }
  return -1; // If no match is found
}
let arr = [
  { prop_1: "val_1", prop_2: "val_2", prop_3: "val_3" },
  { prop_1: "val_4", prop_2: "val_5", prop_3: "val_6" },
];
let idx = index(arr, "prop_1", "val_4");
console.log(idx); // Output: 1
