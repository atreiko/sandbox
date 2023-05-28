'use strict';
// все передаваемые в функцию аргументы содержатся в псевдомассиве arguments
// даже если они не были явно указаны как параметры
function test() {
  console.log(arguments);
  console.log(arguments[0]);
  console.log(arguments.length);
  // arguments не имеет методов массива (но имеет length  числовые индексы, поэтому это псевдомассив)
  // его можно перебрать через for...of
  for (const arg of arguments) console.log(arg);
  const result = Array.from(arguments).map((e) => {
    console.log(e);
    return e + 1;
  });
}

test('first', 'second', 'third');

// иногда функция может вызываться с различным количеством аргументов
// и мы должны по-разному обрабатывать такие ситуации
// в этом случае можно либо анализировать объект arguments
{
  function test(a, b) {
    if (arguments[2]) console.log('extra argument passed!');
    if (arguments[3]) console.log('too many arguments');
  }
  test(1, 2, 3, 4);
}

/* ...REST */
// но удобнее использовать оператор ...rest, который собирает все оставшиеся после себя аргументы в один массив
// преимущества по сравнению с arguments:
// - мы можем управлять, какие параметры попадут в rest, а какие- в отдельные переменные
// - это настоящий массив
{
  function test(a, b, ...rest) {
    if (rest[0]) console.log('extra argument passed!');
    if (rest[1]) console.log('too many arguments');
    rest.forEach((a) => {
      return console.log(a);
    });
  }
  test(1, 2, 3, 4);
}
// после rest бессмысленно указывать какие-либо еще параметры, потому что все аргументы все равно "проглотит" rest
// a, b, ...rest, d  // d не имеет смысла

/* !!! ПРОДВИНУТЫЙ УРОВЕНЬ !!! */
/* Стрелочные функции не имеют своего arguments, т.е. внутри них arguments будет содержать аргументы, кооторые получила родительская функция
Это можно использовать при создании оберток для "проброса" аргументов в модифицированную версию функции */
function defer(fn, ms) {
  return function deferredVersionOfFn_ItsArgumentsWillBePassedToOriginalFn() {
    setTimeout(() => fn.apply(this, arguments), ms);
  };
}

function sayHi(who) {
  console.log('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred('John'); // выводит "Hello, John" через 2 секунды
