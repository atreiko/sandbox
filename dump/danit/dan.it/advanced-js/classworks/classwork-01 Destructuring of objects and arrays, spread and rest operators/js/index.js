"use strict";

// // we have an array with first name and last name
// let arr = ["Roi", "Yehoshua"];
// // destructuring assignment
// let [firstName, lastName] = arr;
// // a shorter way for writing:
// // let firstName = arr[0];
// // let lastName = arr[1];
// console.log(firstName);
// // Roi
// console.log(lastName);
// // Yehoshua

// let [, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// console.log(title);

// let [a, b, c] = "abc"; // ["a", "b", "c"]
// let [one, two, three] = new Set([1, 2, 3]);
// console.log(one);
// console.log(a);

// let user = {};
// [user.firstName, user.lastName] = "John Smith".split(" ");
// console.log(user.firstName); // John

// let countryCodes = new Map();
// countryCodes.set("US", "United States");
// countryCodes.set("FR", "France");
// countryCodes.set("IL", "Israel");

// console.log(countryCodes);

// for (let [key, value] of countryCodes.entries()) {
//     console.log(`${key}:${value}`);
//     // US: United States, FR: France, IL: Israel
// }

// let options = { title: "Menu", width: 100, height: 200 };

// let { title, width, height } = options;

// console.log(title); // Menu
// console.log(width); // 100
// console.log(height); // 200

// let options = { title: "Menu", width: 100, height: 200 };
// // { sourceProperty: targetVariable }
// let { width: w, height: h, title } = options;

// console.log(title); // Menu
// console.log(w); // 100
// console.log(h); // 200

// let options = { title: "Menu", width: 300 };

// let { width = 100, height = 200, title } = options;

// console.log(title); // Menu
// console.log(width); // 100
// console.log(height); // 200

// let title, width, height;
// // error in this line
// ({ title, width, height } = { title: "Menu", width: 200, height: 100 });

// console.log(title); // Menu
// console.log(width); // 200
// console.log(height); // 100

// let options = { title: "My menu", items: ["Item1", "Item2"] };

// function showMenu({
// 	title = "Untitled",
// 	width = 200,
// 	height = 100,
// 	items: [item1 = "", item2 = ""],
// }) {
// 	console.log(`${title} ${width} ${height}`);
// 	console.log(item1, item2);
// }
// showMenu(options);

// let arr = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// arr = [1, 2, 3, 4, 5, 66];

// console.log(...arr);

// lg(1, 2, 3, 4, 5, 66);
// function lg(...rest) {
// 	console.log(rest);
// }

// let [val1, val2, ...rest] = arr;
// console.log(val1);
// console.log(val2);
// console.log(rest);

// let options = { title: "My menu", items: ["Item1", "Item2"] };

// let { title, ...rest } = options;
// console.log(title);
// console.log(rest);
// console.log(options);

// const armodroms = [
// 	"Отравленный кинжал",
// 	"Золотой бог",
// 	"Гарганто",
// 	"Фламберг",
// 	"Рыцарь",
// ];
// const airships = ["Золар Ауперкаль", "Казнь", "Вечный голод", "Покровитель"];

// const newArr = [...armodroms, ...airships];
// console.log(newArr);

// const getPatientStatus = function (height, weight) {
// 	let indexMass = weight / (height / 100) ** 2;
// 	let arr = [
// 		{ anorexia: [10, 15] },
// 		{ norma: [16, 25] },
// 		{ extraWeight: [26, 30] },
// 		{ firstLevel: [31, 35] },
// 		{ secondLevel: [36, 40] },
// 		{ thirdLevel: [41, 999] },
// 	];

// 	let status;
// 	arr.forEach((item) => {
// 		for (const [key, [min, max]] of Object.entries(item)) {
// 			if (indexMass <= max && indexMass >= min) {
// 				status = key;
// 			}

// 			// console.log(`${key}: ${min}, ${max}`);
// 		}
// 	});
// 	return [indexMass, status];
// };
// let patientStatus = getPatientStatus(170, 70);
// console.log(patientStatus);

// const createObject = (firstName, lastName, ...rest) => {
// 	let user = { firstName, lastName };

// 	for (const prop of rest) {
// 		let [key, value] = prop.split(": ");
// 		user[key] = value;
// 	}
// 	return user;
// };

// const user = createObject(
// 	"Золар",
// 	"Аперкаль",
// 	"status: глава Юного клана Мескии",
// 	"wife: Иврейн"
// );
// console.log(user);

const createWarrior = ({ name, status, weapon }) => ({
	name,
	status,
	weapon,
});

let warrior = createWarrior({
	name: "Yasya",
	lastName: "Pupkin",
	weapon: "Javascript",
	status: "Master",
	vid: "Top",
});
console.log(warrior);
