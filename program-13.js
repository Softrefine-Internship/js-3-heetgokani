// Write a JavaScript program to group elements by their properties.

// Input:
// arr = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Alice" },
//     { id: 3, name: "Bob" },
//     { id: 4, name: "Alice" },
// ]

// Output:
// { 'John' => [ 1 ], 'Alice' => [ 2, 4 ], 'Bob' => [ 3 ] }
"use strict";
function group(arr) {
  return arr.reduce((acc, { id, name }) => {
    acc[name] = acc[name] || [];
    acc[name].push(id);
    return acc;
  }, {});
}
let arr = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" },
  { id: 4, name: "Alice" },
];
let result = group(arr);
let formattedResult = "{ ";
for (let name in result) {
  formattedResult += `'${name}' => [ ${result[name].join(", ")} ], `;
}
formattedResult = formattedResult.slice(0, -2) + " }";
console.log(formattedResult);
