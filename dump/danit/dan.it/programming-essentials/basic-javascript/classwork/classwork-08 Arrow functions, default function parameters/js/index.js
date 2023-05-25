"use strict";

// let a = 2,
// 	b = 4;
// let result = (a = 2, b = 4) => {
// 	// debugger;
// 	return a + b;
// };
// // console.log(result(3, 5));
// console.log(result());

// const user = {
// 	name: "Uasya",
// 	getName: function () {
// 		// debugger;
// 		console.log(this.name);
// 	},
// };

// debugger;

// user.getName();

/*
function fnName (){}
const fnName = function(){}
const fnName = () => (a) // return a by default
const fnName = () => {return a}
*/

// let a = 2;
// let b = 4;

// const getSumm = (a, b) => {
// 	return a + b;
// };

// const getSumm = (a, b) => a + b;
// console.log(getSumm(a, b));

// const getSumm = (...rest) => {
// 	console.log(rest);
// 	let summ = 0;
// 	for (let index = 0; index < rest.length; index++) {
// 		summ += rest[index];
// 	}
// 	return summ;
// };
// console.log(getSumm(3, 4, 5, 6));

// const getMax = (...rest) => {
// 	if (rest.length < 2) {
// 		return "Error";
// 	}
// 	for (let i = 0; i < rest.length; i++) {
// 		if (isNaN(+rest[i]) || typeof rest[i] !== "number") {
// 			return `Error in ${i + 1} argument`;
// 		}
// 	}
// 	return Math.max(...rest);
// };
// console.log(getMax("10", 2, 5));

// const log = (message = "«Внимание! Сообщение не указано.»", count = 1) => {
// 	for (let i = 0; i < count; i++) {
// 		console.log(`${i}: ${message}`);
// 	}
// };
// log("text", 55);
