"use strict";


function filterBy(arr, type) {
    return arr.filter((item) => typeof item !== type);
}


console.log(filterBy(['hello', 'world', 23, '23', true, null, { a: 1, b: 2, },
    [1, 2, 3],
    function() { console.log('hello'); },
], 'string'));

console.log(filterBy([0, false, undefined, null, true, 'true', 34], 'object'));

console.log(filterBy([null, null, [0, 1, 2], true], 'object'));



// function filterBy(arr, type) {
//     let newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] !== type) {
//             newArray.push(arr[i]);
//         }
//     }
//     return newArray;
// }
// console.log(filterBy(['hello', 'world', 23, '23', null], 'object'));
// console.log(filterBy([null, null, [0, 1, 2], true], 'object'));