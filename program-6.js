// Write a JavaScript program to modify an object’s property in an array of objects.

// Input:
// arr = [
// {
//     employee_id: 1,
//     employee_name: "Aman",
// },
// {
//     employee_id: 2,
//     employee_name: "Bhargava",
// },
// {
//     employee_id: 3,
//     employee_name: "Chaitanya",
// },
//  ]

// Output:
// [
//     { employee_id: 1, employee_name: 'Aman' },
//     { employee_id: 2, employee_name: 'Rahul' },
//     { employee_id: 3, employee_name: 'Chaitanya' }
// ]
"use strict";
function modify(arr, id, name) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].employee_id === id) {
      arr[i].employee_name = name;
      break;
    }
  }
  return arr;
}
let arr = [
  { employee_id: 1, employee_name: "Aman" },
  { employee_id: 2, employee_name: "Bhargava" },
  { employee_id: 3, employee_name: "Chaitanya" },
];
let result = modify(arr, 2, "Rahul");
console.log(result);
