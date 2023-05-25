"use strict";

// let b = 34;
// // console.log(`window a: ${window.b}`);
// // console.log(`a: ${b}`);
// console.log(window);
// console.log(this);
// {
// 	// console.log(`first b: ${b}`);
// 	let b = 33;
// 	console.log(`second b: ${b}`);
// 	console.log(this);
// 	{
// 		let b = 35;
// 		console.log(`third b: ${b}`);
// 		console.log(this);
// 	}
// }

// console.log(`fourth b: ${b}`);

// summ();

// function summ() {
// 	console.log(num1 + num2);
// 	console.log(window);
// 	console.log(this);
// }
// const num1 = 3;
// const num2 = 5;

// const summ = function (num1, num2) {
// 	num1 = num1 ** 2;
// 	num2 = num2 ** 2;
// 	console.log(num1 + num2);
// 	console.log(arguments);
// 	console.log(arguments[2]);
// 	console.log(arguments.length);
// };
// let result;

// const summ = function (num1, num2) {
// 	num1 = num1 ** 2;
// 	num2 = num2 ** 2;
// 	let result = num1 + num2;

// 	return result;
// 	console.log(result);
// };

// result = summ(num1, num2);
// console.log(result);

// result = summ("2", "3", 3, 44);
// console.log(result);

// function summ(a, b) {
// 	let result = a + b;
// 	return result;
// }
// console.log(summ(34, 45));

// function argsCounter() {
// 	return arguments.length;
// }
// console.log(argsCounter(23, 4, 5, 6, 7, 4, 3));

// function count(numFirst, numLast, numThird) {
// 	if (arguments.length !== 3) {
// 		console.log("⛔️ Ошибка! ");
// 		return;
// 	}
// 	if (
// 		(numFirst !== null &&
// 			numFirst !== "" &&
// 			numFirst !== undefined &&
// 			!isNaN(+numFirst)) ||
// 		(numLast !== null &&
// 			numLast !== "" &&
// 			numLast !== undefined &&
// 			!isNaN(+numLast)) ||
// 		(numThird !== null &&
// 			numThird !== "" &&
// 			numThird !== undefined &&
// 			!isNaN(+numThird))
// 	) {
// 		console.log("⛔️ Ошибка! аргументов не является допустимым числом");
// 		return;
// 	}
// 	console.log(`numFirst > numLast: ${numFirst > numLast}`);

// 	if (numFirst > numLast) {
// 		console.log("⛔️ Ошибка! Счёт невозможен.");
// 		return;
// 	}
// 	console.log(`numFirst === numLast: ${numFirst === numLast}`);
// 	if (numFirst === numLast) {
// 		console.log("⛔️ Ошибка! Нечего считать");
// 		return;
// 	}

// 	console.log("🏁 Отсчёт начат.");
// 	for (let i = numFirst; i <= numLast; i++) {
// 		if (i % numThird === 0) {
// 			console.log(i);
// 		}
// 	}
// 	console.log("✅ Отсчёт завершен.");
// }

// count(2, 4, "y");

function summ() {
	if (arguments.length < 2) {
		console.log("Error");
		return;
	}
	for (let i = 0; i < arguments.length; i++) {
		if (
			arguments[i] === null ||
			arguments[i] === "" ||
			arguments[i] === undefined ||
			isNaN(+arguments[i])
		) {
			console.log("Error");
			return;
		}
	}
	let result = 0;
	for (let i = 0; i < arguments.length; i++) {
		result = arguments[i] + result;
	}
	console.log(result);
}
summ(2, 3);
