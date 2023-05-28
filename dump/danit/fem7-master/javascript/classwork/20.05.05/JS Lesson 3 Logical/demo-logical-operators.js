/* ЛОГИЧЕСКИЕ ОПЕРАТОРЫ */

// || (ИЛИ)

// возвращает первый истинный оператор
console.log(0 || 1 || 2);

// || может использоваться для задания дефолта
let name;
name = name || 25;
console.log(name);
// но если передан аргументом 0, то все равно присвоится значение 1, т.к. 0 логически равен false. Это плохо

// вариант, который учитывает 0
name = name !== undefined ? name : "default name";
console.log(name);

// сокращенные вычисления
let x;
true || (x = 1);
console.log(x); // undefined, потому что (x = 1) не вычисляется

let y;
true && (y = 3);
console.log(y); // 3, т.к. вторая часть выражения вычислилась

/* как проверить перемннную на равенство нескольким значениям */
// т.к. приоритет === больше, чем у ||, то вычисляется сначала ===
const a = 3;

// плохой вариант, в любом случае будет true, т.к. 2 все равно сработает, даже если a = 3
if (a === 1 || 2) console.log("a is valid");
// плохой вариант, 1 || 2 вернет 1, т.е. если a будет == 2, не сработает
if (a === (1 || 2)) console.log("a is valid");
// правильный вариант
if (a === 1 || a === 2) console.log("a is valid");
