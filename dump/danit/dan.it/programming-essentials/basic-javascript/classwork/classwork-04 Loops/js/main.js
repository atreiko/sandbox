"use strict";

let num = 0;

// console.log(++num);
// for (let index = 0; index < 100; index += 3) {
// 	if (index === 7) {
// 		console.log("7 step");
// 	}
// 	console.log(++num);
// }

// console.log(index);

// while (num <= 1000) {
// 	console.log(num);
// 	num += 10;
// }

// do {
// 	console.log("do while");
// } while (false);

// for (let i = 0; i <= 300; i++) {
// 	if (i % 2 !== 0 && i % 5 !== 0) {
// 		console.log(i);
// 	}
// }

// Посчитать сумму чисел от 1 до 1000
// let sum = 0;
// for (let index = 1; index < 1000; index++) {
// 	sum += index;
// }
// let condition, num1, num2;

// do {
// 	num1 = prompt("Enter number 1");
// 	num2 = prompt("Enter number 2");

// 	condition =
// 		!isNaN(+num1) &&
// 		num1 !== undefined &&
// 		num1 !== null &&
// 		num1 !== "" &&
// 		!isNaN(+num2) &&
// 		num2 !== undefined &&
// 		num2 !== null &&
// 		num2 !== "";

// 	if (condition) {
// 		alert(`Поздравляем. Введённые вами числа: «${num1}» и «${num2}»`);
// 	}
// } while (!condition);

// do {
// 	let name = prompt("Your name");
// 	let lastName = prompt("Your lastName");
// 	let year = +prompt("Your year");

// 	if (name !== "" && lastName !== "" && year > 1910 && year <= 2020) {
// 		alert(
// 			"Добро пожаловать, родившийся в" +
// 				year +
// 				"," +
// 				name +
// 				" " +
// 				lastName +
// 				"."
// 		);
// 		break;
// 	}
// } while (true);

let condition; // undefined === false
let operations; // undefined === false

// while (!condition && !operations) {

// }

do {
	let num1 = prompt("Enter number 1");
	let num2 = prompt("Enter number 2");
	let operation = prompt("Enter operation (+ or - or * or / or **)");

	condition =
		!isNaN(+num1) &&
		num1 !== null &&
		num1 !== "" &&
		!isNaN(+num2) &&
		num2 !== null &&
		num2 !== "";

	operations =
		operation === "+" ||
		operation === "-" ||
		operation === "*" ||
		operation === "/" ||
		operation === "**";

	if (condition && operations) {
		switch (operation) {
			case "+":
				console.log(
					`Над числами ${num1} и ${num2} была произведена операция ${operation}. Результат: ${
						+num1 + +num2
					}.`
				);
				break;
			case "-":
				console.log(
					`Над числами ${num1} и ${num2} была произведена операция ${operation}. Результат: ${
						num1 - num2
					}.`
				);
				break;
			case "/":
				console.log(
					`Над числами ${num1} и ${num2} была произведена операция ${operation}. Результат: ${
						num1 / num2
					}.`
				);
				break;
			case "*":
				console.log(
					`Над числами ${num1} и ${num2} была произведена операция ${operation}. Результат: ${
						num1 * num2
					}.`
				);
				break;
			case "**":
				console.log(
					`Над числами ${num1} и ${num2} была произведена операция ${operation}. Результат: ${
						num1 ** num2
					}.`
				);
				break;
		}
	}
} while (!condition && !operations);
