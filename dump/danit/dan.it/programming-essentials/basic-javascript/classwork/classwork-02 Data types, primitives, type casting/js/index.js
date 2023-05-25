"use strict";

let str = "Some string";
let maxWidth = 3;

let result;

// result = maxWidth ** 3;
// console.log(result);

// let color =
// 	"rgba(" +
// 	Math.random() * 255 +
// 	", " +
// 	Math.random() * 255 +
// 	", " +
// 	Math.random() * 255 +
// 	", " +
// 	Math.random() +
// 	");";

// color = `rgba(
//     ${Math.random() * 255},
//     ${Math.random() * 255},
//     ${Math.random() * 255},
//     ${Math.random()});
//     $540`;

// result = maxWidth++;
// console.log("result: " + result);
// console.log("maxWidth: " + maxWidth);

// result = ++maxWidth;
// console.log(`result: ${result}`);
// console.log(`maxWidth: ${maxWidth}`);

// result = maxWidth--;
// console.log("result: " + result);
// console.log("maxWidth: " + maxWidth);

// result = --maxWidth;
// console.log(`result: ${result}`);
// console.log(`maxWidth: ${maxWidth}`);

/*
number:
    явно (type casting)
    - Number()
    - parseInt()
    - parseFloat()

    не явно (в процессе работы операторов/функций)
    - +value
    - math operations
*/
const BOOLEAN_VAR = true;
const NUMBER_VAR = -1;
const NULL_VAR = null;
const UNDEF_VAR = undefined;

// result = String(undefVar);
result = { undefined: undefined }.toString();
result = [2, 3].toString();
console.log(`result: ${result}`);
console.log(`typeof result: ${typeof result}`);

const STRING_VAR = "";
result = Boolean(undefined);
console.log(`result: ${result}`);
console.log(`typeof result: ${typeof result}`);
