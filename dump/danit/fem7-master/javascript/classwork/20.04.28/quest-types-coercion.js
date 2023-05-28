const expressions = [
	"" + 1 + 0,
	"" - 1 + 0,
	true + false,
	6 / "3",
	"2" * "3",
	4 + (5 + "px"),
	"$" + 4 + 5,
	"4" - 2,
	parseInt("4px") - 2,
	-7 / 0,
	"  -9  " + 5,
	"  -9  " - 5,
	null + 1,
	undefined + 1,
	" \t \n" - 2,
	5 + null,
	"5" + null,
	"5" + undefined,
	"5" * undefined,
	12 - "000",
	1 + "000",
];

// console.log(expressions);
// console.log(expressions[20]);
