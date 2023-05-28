/* ФУНКЦИИ */

/* у функции есть параметры; функция принимает аргументы, которые станятся значениями параметров */
function showMessage(message) {
	console.log(message);
}

showMessage("Hello World!");
showMessage("Hello World!");

/* Видимость переменных */
// Переменные, объявленные внутри функции (локальные переменные), не видны снаружи
function sayHello() {
	let message = "Привет, мир!"; // локальная переменная
	console.log(message);
}

sayHello();
// console.log(message); // message is not defined

// Переменные, объявленные снаружи функции, видны внутри нее. Функция может их изменять
// Изменение переменных во "внешней" области называется побочным эффектом функции (side-effect). Так делать не рекомендуется
// переменные, объявленные снаружи относительно всех функций - глобальные переменные
let userName = "Коля";

function greetUser() {
	userName = "Петя"; // изменяем значение внешней переменной
	console.log(`Привет ${userName}`);
}

console.log(userName);
greetUser();
console.log(userName);

// если внешняя переменная передаются в функцию как аргумент, для примитивных типов данных ее значение КОПИРУЕТСЯ в соответствующий параметр внутри функции
function changeName(name) {
	console.log(name);
	name = `${name}а`; // изменяем значение параметра
	// console.log(arguments[0]);
	// const newName = `${name}а`;
	// console.log(`Вы изменили значение с ${name} на ${newName}`);
}
// Вообще говоря, изменять значения параметров не рекомендуется, лучше создать новую переменную для этого

let name = "Александр";
changeName(name);

// значение внешнего name осталось прежним, функция изменила значение локальной переменной (параметра)
console.log(name); //

// Фактически происходит присваивание param = argument
const arg = 1;

function test(param) {
	console.log(param);
}
test(arg);

function test2(param = arg) {
	console.log(++param);
}
test2();
console.log(arg);
