const comparison = [
	"true" == true,
	"true" === true,
	true > false,
	!!"false" == !!"true",
	!!"false" === !!"true",
	NaN == 0,
	NaN == NaN,
	NaN === NaN,
	Object.is(NaN, NaN),
	Infinity == -Infinity,
	Infinity === -Infinity,
	0 == -0,
	0 === -0,
	Object.is(0, -0),
	null == 0,
	null == null,
	null == undefined,
	null === undefined,
	null == "\n0\n ",
	null === +"\n0\n",
	isNaN("number") == Number.isNaN("number"),
	isNaN("0") == Number.isNaN("0"),
	"ель" > "сосна",
	"земля" > "Земля",
	"3" > "12",
	"3" - "1" > "12",
	"3" + "1" > "12",
	12 >= 24 >= 18,
];

console.log(line(2));

function line(number) {
	return comparison[number - 2];
}
