// Write a JavaScript program to calculate the total value of a specific property in an array of objects.

// Input:
// arr = [
//     {
//         product: "Laptop",
//         price: 1000,
//         quantity: 2,
//     },
//     {
//         product: "Phone",
//         price: 600,
//         quantity: 3,
//     },
//     {
//         product: "Monitor",
//         price: 250,
//         quantity: 1,
//     },
// ]

// Output:
// total value for "price": 1850
// total value for "quantity": 6

"use strict";
function total(arr, prop) {
  return arr.reduce((sum, obj) => sum + obj[prop], 0);
}
let arr = [
  { product: "Laptop", price: 1000, quantity: 2 },
  { product: "Phone", price: 600, quantity: 3 },
  { product: "Monitor", price: 250, quantity: 1 },
];
let priceTotal = total(arr, "price");
let quantityTotal = total(arr, "quantity");
console.log(`total value for "price": ${priceTotal}`);
console.log(`total value for "quantity": ${quantityTotal}`);
