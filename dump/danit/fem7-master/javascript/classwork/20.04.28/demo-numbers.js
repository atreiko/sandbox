/* ЧИСЛА */

/* частичное считывание из строки */
console.log(Number("12px"));
// методы parseFloat / parseInt считывают число, пока не встретят символ, который не соответствует числу
// возвращают то, что удалось считать
console.log(parseInt("12.22px"));
// parseFloat движется дальше если встречает точку(считает ее разделителем дробной части)
console.log(parseFloat("12.22px"));
console.log(parseFloat("12.22.33px"));

/* считывание других форматов */
console.log(Number("ff"));
console.log(parseInt("ff"));
// даем подсказку, что здесь 16-ричный формат
console.log(Number("0xff"));
console.log(parseInt("0xff"));
console.log(parseInt("ff", 16));
// посчитает, что 255 - это запись в 16-ричном формате
console.log(parseInt(255, 16));

/* Целое или дробное */
console.log(Number.isInteger(2.22));
console.log(Number.isInteger(2));
console.log(Number.isInteger(2.0));

/* Округление до целого */
console.log(Math.round(2.5));
console.log(Math.floor(2.5));
console.log(Math.ceil(2.1));
// отбрасывает дробную часть
console.log(Math.trunc(23.88555));

/* Округление до разряда */

// округляет до количества знаков после запятой, в отличие от Math.round возвращает строку
console.log(+(2.5).toFixed(0));
console.log(Math.round(2.5));

// toPrecision округляет до определенного числа значащих цифр (т.е начиная с первой слевой, отличной от нуля)
console.log((25.526).toPrecision(4));
console.log((0.000123).toPrecision(4));

// При округлении некоторых чисел, представленных бесконечными дробями в бинарной форме, возможны ошибки из-за потери точности
console.log((6.35).toString(2));
console.log((6.35).toFixed(1));
console.log((6.35 * 10).toFixed(0) / 10);

// Math.random генерирует случайное число от 0 до 1 (не включая 1)
console.log(Math.random());

/* определение NaN */
// все NaN разные
console.log(NaN == NaN);
console.log(NaN === NaN);

// способы определить NaN
console.log(isNaN(NaN));
console.log(Number.isNaN(NaN));
console.log(Object.is(NaN, NaN));

// обычный isNaN сначала преобразует к числу
console.log(isNaN(true));
// поэтому для строк может вернуть true (isNaN возникает в результате преобразования)
console.log(isNaN("строка"));
console.log(Number.isNaN("number"));
