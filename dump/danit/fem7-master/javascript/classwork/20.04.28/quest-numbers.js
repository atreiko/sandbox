const numbers = [
	0 / 0 + 2,
	-12 / Infinity,
	1e3 + 2e2,
	-"12" / -3,
	9 % 4,
	3 ** 3,
	12 - 4 * 6 - 4 / 2,
	5 + 6 / "2",
	5 + 4 / "0b0",
	Math.pow(2, 3),
	2 ** 3,
	2 ^ 2,
	(0b0001 ^ 0b1010).toString(2),
	parseFloat("12.3.4"),
	parseInt("12.3.4", 10),
	parseInt("0xff"),
	parseInt("ff", 16),
	parseInt(255, 16),
	Number("ff"),
	Number("0xff"),
	(12.34).toFixed(1),
	(12.36).toFixed(1),
	(12.36).toFixed(5),
	Math.trunc(3.55),
	Math.round(3.55),
	Math.ceil(3.11),
	Math.floor(3.61),
	// 4 = --6 -15*5
];
// console.log(numbers);
console.log(numbers[25]);
