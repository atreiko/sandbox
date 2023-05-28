"use strict";
const conditions = [
	-1 || 0,
	-1 && 0,
	null || (-1 && 1),
	null || 2 || undefined,
	console.log(1) || 2 || console.log(3),
	console.log(1 && null && 2),
	console.log(console.log(1) && console.log(2)),
	null || (2 && 3) || 4,
	null || (0 && 3) || 4,
];

console.log(line(0));

function line(number) {
	return comparison[number - 2];
}
