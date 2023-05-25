"use strict";

// let agree = true;
// let numberVar = 3;
// let stringVar = "text";
// let emptyStringVar = "";
// let result = null;

// result = null || undefined || false;
// console.log(result);

// result = null && undefined && false;
// console.log(result);

// result = null === undefined;
// console.log(result);
// result = null !== undefined;
// console.log(result);

// result = "3" == 3;
// console.log(result);
// result = "3" != 3;
// console.log(result);

// result = 3 > 2;
// result = 3 < 2;
// result = 3 >= 2;
// result = 3 <= 2;

// 4 <= 5; - подумай, зачем сравнивать нужно было?

// if (false) {
// 	console.log("true");

// 	if (true) {
// 		console.log("true 2");
// 	}
// } else if (4 > 5) {
// 	console.log("false");
// } else {
// 	console.log("final");
// }

// if (true) {
// 	result = 3;
// } else {
// 	result = 4;
// }

// (condition) ? (if true) : (if false);
// result = numberVar ? (numberVar > 1 ? "text" : null) : false;
// console.log(result);

// let choise = 4;
// switch (choise) {
// 	case 1:
// 		console.log(`You choose A`);
// 		break;
// 	case 2:
// 		console.log(`You choose B`);
// 		break;
// 	case 3:
// 		console.log(`You choose C`);
// 		break;

// 	default:
// 		console.log(`You choose nothing`);
// 		break;
// }

// let userNumber = prompt("введите число");
// // console.log(NaN === NaN); // false FOREVER
// if (isNaN(+userNumber) || userNumber === null || userNumber === "") {
// 	userNumber = prompt("Необходимо ввести число!");
// 	if (isNaN(+userNumber) || userNumber === null || userNumber === "") {
// 		alert("«⛔️ Ошибка! Вы ввели не число.»");
// 	} else {
// 		// прверка еще раз.
// 	}
// } else {
// 	if (+userNumber % 2 === 0) {
// 		console.log("Ваше число чётное.");
// 	} else {
// 		console.log("Ваше число не чётное.");
// 	}
// }

// let choise = prompt("введите имя");

// switch (choise) {
// 	case "Mike":
// 		console.log(`Hello ${choise}! You are CEO`);
// 		break;
// 	case "Jane":
// 		console.log(`Hello ${choise}! You are CTO`);
// 		break;
// 	case "Walter":
// 		console.log(`Hello ${choise}! You are программист`);
// 		break;
// 	case "Oliver":
// 		console.log(`Hello ${choise}! You are менеджер`);
// 		break;
// 	case "John":
// 		console.log(`Hello ${choise}! You are уборщик`);
// 		break;
// 	default:
// 		console.log(`Пользователь не найден.`);
// 		break;
// }

const COFFEE_COST = 25;
const TEA_COST = 10;
const CAPUCHINO_COST = 50;

const COFFEE_TITLE = "Коxфе";
const TEA_TITLE = "Чай";
const CAPUCHINO_TITLE = "Капучино";

let choiseTitle;
let choiseCost;

const choise = prompt("Выберите напиток: 1-коффе, 2-чай, 3-капучино");
const cost = +prompt("Заплати!");
// (condition) ? (if true) : (if false);
// const change =
// 	choise === "K" ? cost - 25 : choise === "Ч" ? cost - 10 : cost - 50;

switch (choise) {
	case "1":
		choiseTitle = COFFEE_TITLE;
		choiseCost = COFFEE_COST;
		break;
	case "2":
		choiseTitle = TEA_TITLE;
		choiseCost = TEA_COST;
		break;
	case "3":
		choiseTitle = CAPUCHINO_TITLE;
		choiseCost = CAPUCHINO_COST;
		break;
	default:
		console.log("Такого напитка нет.");
		break;
}

let MESSAGE_WITH_COST = `Ваш ${choiseTitle} готов. Возьмите сдачу: ${
	cost - choiseCost
}`;
let MESSAGE_WITHOUT_COST = `Ваш ${choiseTitle} готов. Спасибо за сумму без сдачи! :)`;

if (cost === choiseCost) {
	console.log(MESSAGE_WITHOUT_COST);
} else {
	console.log(MESSAGE_WITH_COST);
}
