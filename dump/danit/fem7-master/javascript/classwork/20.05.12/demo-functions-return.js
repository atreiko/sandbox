/* возврат значения */

function sum(a, b) {
	return a + b;
}

let result = sum(1, 2);
console.log(result);

// если у функции нет явно указанного return, она возвращает undefined.
// пустой return возвращает undefined
function doNothing() {
	return;
}

console.log(doNothing() === undefined);

// Несколько return и условные конструкции
function checkAge(age) {
	// if (age >= 18) {
	// 	return true;
	// } else {
	// 	return false;
	// }

	if (age >= 18) {
		return true;
	}
	return false;
}

if (checkAge(12)) {
	console.log("Доступ получен");
} else {
	console.log("Доступ закрыт");
}

// Return можно ипользовать, если надо закончить выполнение функции
function getUserInput() {
	// return prompt('введите что-нибудь');
	return 25;
}

function processInput() {
	const userInput = getUserInput();
	if (userInput === null) return;

	console.log(userInput);
}

processInput();
