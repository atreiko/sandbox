console.log("Hello world!");

const a = true;

const surname = 5;
const fullName = `John ${surname}`;
fullName;

console.log(fullName);
// однострочный коммент

const x = -5 / 0;
x;
/* многострочный
коммент */
const wrong = 0 / 0;
wrong;

const stillWrong = wrong + 1;
stillWrong;

const negativeZero = -5 / Infinity;
console.log(negativeZero);
negativeZero;

const d = true;
const c = false;

const big = 1223827879879840238708798787982n;

let y;
y;

let nothing = null;

const obj = {
	prop: "name",
	prop2: 25,
};

let id = Symbol();
let id2 = Symbol();

obj;

let func = () => {};

const typed = typeof func;
typed;

//сложение
const sum = 1 + "2";
sum;

const strSum = "a" + "bcde";
strSum;

const unaryPlus = -"3";
unaryPlus;

const minus = 12 - "3";
minus;

let n = 1;
let m = 2;
let h = 3 - (n = m + 1);
m;
n;
h;

const root = 2 ** 3;
root;

const mod = 7 % 3;
mod;

let increment = 1;
increment;

const incremented = increment++;
incremented;
increment;

let shorthand = 10;
shorthand = shorthand + 2;
shorthand += 2;
shorthand;

const expression = 1 + 2 * 10 - 4;
expression;
