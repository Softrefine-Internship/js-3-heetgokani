// Write a JavaScript program to check if obj1 contains all the property values of obj2.

// Example 1:
// Input: obj1: { name: "John", age: 23; degree: "CS" }, obj2: {age: 23, degree: "CS"}
// Output: true

// Example 2:
// Input: obj1: { name: "John", degree: "CS" }, obj2: {name: "Max", age: 23, degree: "CS"}
// Output: false
"use strict";
function check_obj(obj1, obj2) {
  for (let i in obj2) {
    if (obj1[i] !== obj2[i]) {
      return false;
    }
  }
  return true;
}
// Example 1
console.log(
  check_obj({ name: "John", age: 23, degree: "CS" }, { age: 23, degree: "CS" })
);
// Example 2
console.log(
  check_obj(
    { name: "John", degree: "CS" },
    { name: "Max", age: 23, degree: "CS" }
  )
);
