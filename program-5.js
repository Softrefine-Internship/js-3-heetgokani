// Write a JavaScript program to count number of occurrences of repeated names in an array of objects.

// Input:
// arr = [
//     {
//        employeeName: "Ram",
//        employeeId: 23
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 24
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 21
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 25
//     },
//     {
//        employeeName: "Kisan",
//        employeeId: 22
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 20
//     }
//  ]

// Output:
// [
//     {employeeName: "Ram", occurrences: 3},
//     {employeeName: "Shyam", occurrences: 2},
//     {employeeName: "Kisan", occurrences:  1}
// ]

"use strict";

function count(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < res.length; j++) {
      if (res[j].employeeName === arr[i].employeeName) {
        res[j].occurrences++;
        found = true;
        break;
      }
    }

    if (!found) {
      res.push({ employeeName: arr[i].employeeName, occurrences: 1 });
    }
  }

  return res;
}

let arr = [
  { employeeName: "Ram", employeeId: 23 },
  { employeeName: "Shyam", employeeId: 24 },
  { employeeName: "Ram", employeeId: 21 },
  { employeeName: "Ram", employeeId: 25 },
  { employeeName: "Kisan", employeeId: 22 },
  { employeeName: "Shyam", employeeId: 20 },
];

let result = count(arr);
console.log(result);
