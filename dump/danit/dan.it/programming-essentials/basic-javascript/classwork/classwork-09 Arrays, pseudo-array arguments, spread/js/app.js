"use strict";

// const user = { name: "Uasya" };
// let arr = [1, , "3", { name: "Uasya" }, [3, 4], null, false]; // new Array();

// console.log(arr);
// console.log(typeof arr);
// console.log({ name: "Uasya" });

// console.log(arr[3]);
// console.log(arr.length);

const arr = [];

arr.push(3);
arr.unshift(2);
arr.push(4);

// arr.pop();
// arr.shift();

console.log(arr);

// for (let index = 0; index < arr.length; index++) {
// 	console.log(arr[index]);
// }

// const arrItemsIncrement = (value, index, array) => {
// 	array[index] = ++value;
// };

// // arr.forEach(arrItemsIncrement);
// arr.forEach((x, i, a) => {
// 	a[i] = ++x;
// 	console.log(++x);
// });

// console.log(arr);

// SLICE
// const newArr = arr.slice(1);

// console.log(arr);
// console.log(newArr);

// SPLICE
// delete arr[1];
// arr.splice(1, 1, "33", false, null);
// arr.splice(1, 1, ...arr);
// console.log(arr);

// CONCAT
// const newArr = arr.concat(arr);
// console.log(newArr);

// FIND Метод find() возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции.  В противном случае возвращается undefined.

// const arr2 = [{ id: 1 }, { id: 3 }, { id: 4 }, { id: 34 }];
// let result = arr2.find(function (item, index, array) {
// 	return item.id > 4;
// });

// console.log(result);

// FILTER Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
// const arr2 = [{ id: 1 }, { id: 3 }, { id: 4 }, { id: 34 }];
// let results = arr2.filter((item) => item.id < 20);
// console.log(results);

// MAP
// const arr2 = [{ id: 1 }, { id: 3 }, { id: 4 }, { id: 34 }];
// let results = arr2.map((el) => el.id);
// console.log(results);

// SORT
// const arr2 = [{ id: 1 }, { id: 3 }, { id: 4 }, { id: 34 }];
// arr.sort(compare);
// arr2.sort((a, b) => {
// 	// if (a.id < b.id) return 1;
// 	// if (a.id === b.id) return 0;
// 	// if (a.id > b.id) return -1;

// 	return b.id - a.id;
// });
// function compare(a, b) {
// 	if (a < b) return 1; // если первое значение больше второго
// 	if (a === b) return 0; // если равны
// 	if (a > b) return -1; // если первое значение меньше второго
// }
// console.log(arr);
// console.log(arr2);

// SPLIT & JOIN
// let names = "Вася, Петя, Маша";

// let result = names.split(", ").reverse().join("->");
// console.log(result);

// REDUCE
// const arr2 = [{ id: 1 }, { id: 3 }, { id: 4 }, { id: 34 }];

// let result = arr2.reduce((summ, value) => summ + value.id, 0);
// console.log(result);

// thisArg
// let army = {
// 	minAge: 18,
// 	maxAge: 27,
// 	canJoin(user) {
// 		console.log(this);
// 		return user.age >= this.minAge && user.age < this.maxAge;
// 	},
// };
// let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];
// // найти пользователей, для которых army.canJoin возвращает true
// let soldiers = users.filter(army.canJoin, army);

// console.log(soldiers.length); // 2
// console.log(soldiers);
// let storage = [
// 	"apple",
// 	"water",
// 	"banana",
// 	"pineapple",
// 	"tea",
// 	"cheese",
// 	"coffee",
// ];
// const replaceItems = (name, list) => {
// 	let index = storage.findIndex(function (item, index, array) {
// 		return item === name;
// 	});
// 	if (index === -1) {
// 		return "Error";
// 	}
// 	if (!Array.isArray(list)) {
// 		return "Error2";
// 	}

// 	storage.splice(index, 1, ...list);
// };

// console.log(replaceItems("apple", ["green", "while"]));
// console.log(storage);

// const days = {
// 	ua: [
// 		"Понеділок",
// 		"Вівторок",
// 		"Середа",
// 		"Четвер",
// 		"П’ятниця",
// 		"Субота",
// 		"Неділя",
// 	],
// 	ru: [
// 		"Понедельник",
// 		"Вторник",
// 		"Среда",
// 		"Четверг",
// 		"Пятница",
// 		"Суббота",
// 		"Воскресенье",
// 	],
// 	en: [
// 		"Monday",
// 		"Tuesday",
// 		"Wednesday",
// 		"Thursday",
// 		"Friday",
// 		"Saturday",
// 		"Sunday",
// 	],
// };
// function organizer() {
// 	const langs = Object.keys(days);
// 	let result;
// 	let lang;
// 	do {
// 		lang = prompt("Choose language: ru, ua, en");

// 		result = langs.find((item) => item === lang);
// 	} while (result === undefined);

// 	days[lang].forEach((el) => {
// 		console.log(el);
// 	});
// }
// organizer();
