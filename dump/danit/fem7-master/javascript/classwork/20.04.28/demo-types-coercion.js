/* Преобразования примитивных типов */

// ЧИСЛОВОЕ

// числовое - явное:
console.log(typeof Number("25"));
// числовое - фокус: унарный +
console.log(+"25");
console.log(-"25");
console.log(typeof +"25");

console.log(Number(undefined));
console.log(Number(0));
console.log(Number(true));
console.log(Number(false));
// пробелы и спец символы не учитываются
console.log(Number(" 25 \n"));
// пустая строка дает 0
console.log(Number(""));
// ошибка преобразования к числу дает NaN
console.log(Number("not a number"));

// числовое - неявное: при математических операциях * / - +
console.log(4 / "2");
console.log(4 + true);
// если один из операндов строка, то ко второму применяется строчное преобразование
console.log(4 + "true");

// СТРОЧНОЕ

// строчное - явное:
console.log(typeof String(22));
// строчное - фокус: сложение со строкой
console.log(22 + "");
// строчное - автоматическое: при сложении со строкой, в функциях, выводящих информацию в консоль
console.log(22 + "22");
// метод toString  - кроме null и undefined
console.log(typeof true.toString());
console.log(typeof (12).toString());
console.log(typeof 2222n.toString());
console.log(typeof Symbol("id").toString());

// ЛОГИЧЕСКОЕ

// логическое - явное
console.log(Boolean(1));
// все true, кроме:
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(NaN));
// !
console.log(Boolean(" "));
console.log(Boolean("0"));
