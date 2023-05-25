"use strict";

"text"; // 'text' `text`

// console.log(typeof typeof "text");

// const str = "Some \u00A9 text";

// console.log(str);

// console.log(str.length);

// console.log(str[15]);

// console.log(str.length);

// console.log(str[0], str[5]);

// for (const iterator of str) {
// 	console.log(iterator);
// }

// const str2 = str.toLowerCase();
// console.log(str2);
// console.log(str);

// const str3 = (str + " ").repeat(3);
// console.log(str3);

// console.log(str.includes("So", 3));

// console.log(str.indexOf("t", 0));
// console.log(str.lastIndexOf("t", str.length - 1));

// console.log(str.startsWith(""));
// console.log(str.startsWith("S"));

// console.log(str.endsWith(""));
// console.log(str.endsWith("t"));

// const str5 = str.slice(3, 10);
// console.log(str5);

// const str6 = str.substring(3, 10);
// console.log(str6);

// const str7 = str.substr(3, 7);
// console.log(str7);

// console.log("textt" < "text");

// console.log("A".charCodeAt(0));
// console.log("b".codePointAt(0));

// console.log(String.fromCodePoint(65));
/*
function repeat(hitString, count) {
	let str = "";
	if (typeof hitString !== "string") {
		return "Error";
	}
	if (isNaN(+count) || typeof count !== "number") {
		return `Error! count is "${count}"`;
	}
	for (let i = 0; i < count; i++) {
		str += hitString;
	}

	return str;
}
console.log(repeat("Text", "3"));
*/
// function capitalizeAndDoublify(str) {
// 	let newStr = "";
// 	for (const iterator of str) {
// 		newStr += iterator.toUpperCase().repeat(2);
// 	}
// 	return newStr;
// }
// console.log(capitalizeAndDoublify("Text"));

const nowDate = new Date();
const date0 = new Date(0);

console.log(nowDate - date0);

console.log(new Date(1588552089655));
// console.log(nowDate);
// console.log(Date.now());

// console.log(nowDate.getDate());
// console.log(nowDate.getDay());
// console.log(nowDate.getUTCDate());

// nowDate.setMonth(0);
// console.log(nowDate);
const days = {
	0: "Воскресенье",
	1: "Понедельник",
	2: "Вторник",
	3: "Среда",
	4: "Thursday",
	5: "Friday",
	6: "Saturday",
};

function getNameOfDay(daysAgo, daysObj) {
	return daysObj[new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000).getDay()];
}
console.log(getNameOfDay(66, days));
