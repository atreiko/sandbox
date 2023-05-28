/* СТРОКИ */

// обратные кавычки позволяют избежать необходимости экранировать другой вид кавычек
const hello = 'Hello!';
console.log(`${hello} I'm fine!`);
// обратный слэш нужно экранировать еще одним обратным слэшем даже в обратных кавычках
console.log(`С:\\Program Files\\Folder`);
// спецсимволы: табуляция
console.log(`\tI am tabulated! (watch console output)`);

// доступ к символам
console.log('string'.length);

const st = 'string';
// нумерация символов начинается с 0 (как и элементов в массиве)
console.log(st[0]);
console.log('string'[8]);

// устаревший метод - charAt
console.log('string'.charAt(0));
console.log('string'.charAt(8));

// split
console.log('site.com.ua'.split('.'));
console.log('string'.split(''));

/* МЕТОДЫ */

// РЕГИСТР
console.log('Interface'.toUpperCase());
console.log('Interface'.toLowerCase());

// "набор" строки
console.log('?'.repeat(10));
console.log('string'.padEnd(9, '!'));
console.log('  string  '.trim());

// перебор символов
for (const char of 'any string') console.log(char);

for (let i = 0; i < st.length; i++) {
  console.log(st[i]);
}

// ПОИСК ПОДСТРОКИ
let str = 'Widget with id';
// indexOf - возвращает позицию совпадаения или -1, если ничего не найдено
console.log(str.indexOf('Widget')); // 0, потому что подстрока 'Widget' найдена в начале
console.log(str.indexOf('widget')); // -1, совпадений нет, поиск чувствителен к регистру
console.log(str.indexOf('id'));
console.log(str.indexOf('id', 2)); // начинаем с третьего символа
// возвращает последнее найденное совпадение (т.е. первое с конца)
// нумерация позиции символа все так же остается с начала слова!
console.log(str.lastIndexOf('id'));
console.log(str.lastIndexOf('id', 10));

// НАЛИЧИЕ ПОДСТРОКИ
// с использованием indexOf:
// в случае отсутствия совпадений возвращается -1, поэтому надо проверять на -1
console.log('string'.indexOf('str'));
console.log(Boolean('string'.indexOf('str')));
console.log('string'.indexOf('str') !== -1);
// трюк с побитовым оператором НЕ (~):
console.log(~'string'.indexOf('str'));

// современный способ
console.log('string'.includes('str'));
console.log('string'.includes('ring', 2));
console.log('string'.startsWith('str'));
console.log('string'.endsWith('g'));

// ВЗЯТИЕ ПОДСТРОКИ
// slice
// можно думать о каждом аргументе как о количестве символов, после которого мы делаем "разрез"
console.log('stringify'.slice(2, 4));
console.log('stringify'.slice(5));
// символы могут отсчитываться с конца
console.log('stringify'.slice(-4, -1));

// substring
console.log('stringify'.substring(2, 4));
console.log('stringify'.substring(4, 2));
// отрицательные значения равнозначны 0
console.log('stringify'.substring(-2, 2));
console.log('stringify'.substring(2));

// substr
console.log('stringify'.substr(2, 4));
console.log('stringify'.substr(2));
// length в любом случае отсчитывается слева направо
console.log('stringify'.substr(-4, 4));

// Unicode and emoji
console.log('Unicode symbols \u2604 \u30C4');
// emoji
console.log(String.fromCodePoint(0x1f354));
console.log('🍔'.length);
// диакрит. знаки
console.log('S\u0307');
console.log('S\u0307\u0323');
