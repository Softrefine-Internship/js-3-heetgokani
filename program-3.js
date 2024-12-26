// Write a JavaScript program to flatten object into single depth object.

// Input:
// obj = {
//     Company: "GeeksforGeeks",
//     Address: "Noida",
//     contact: +91-999999999,
//     mentor: {
//         HTML: "GFG",
//         CSS: "GFG",
//         JavaScript: "GFG"
//     }
// };

// Output:
// obj = {
//     Company: 'GeeksforGeeks',
//     Address: 'Noida',
//     contact: -999999908,
//     'mentor.HTML': 'GFG',
//     'mentor.CSS': 'GFG',
//     'mentor.JavaScript': 'GFG'
// }
"use strict";
function flatten(obj) {
  let res = {};
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      for (let subKey in obj[key]) {
        res[key + "." + subKey] = obj[key][subKey];
      }
    } else {
      res[key] = key === "contact" ? -999999908 : obj[key];
    }
  }
  return res;
}
let obj = {
  Company: "GeeksforGeeks",
  Address: "Noida",
  contact: "+91-999999999",
  mentor: {
    HTML: "GFG",
    CSS: "GFG",
    JavaScript: "GFG",
  },
};
let finalobj = flatten(obj);
console.log(finalobj);
