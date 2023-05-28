// 🕮 <cyberbiont> eb158ce7-068a-4d71-891c-2753c7a556a8.md
'use strict';

// вспомним область видимости переменных. как это реализовано?
{
  // Пример 0.
  // Что выведет этот пример?
  let name = 'John';

  function sayHi() {
    const greeting = 'Hello';
    console.log(`${greeting},  ${name}!`);
  }

  name = 'Alex';
  const greeting = 'Hi';

  sayHi();
}

/* каждые фигурные скобки (блок кода), например, тело функции, создают свою область видимости,
переменные внутри которой не доступны снаружи.
но изнутри мы можем обратиться к внешней переменной */

/* при создании каждая функция получает ссылку (скрытое свойство) [[Environment]] на внешнюю область видимости (лексическое окружение),
в которой она будет искать переменные,
если не найдет их локально. Даже если мы передадим функцию куда-то как аргумент и вызовем ее оттуда,
она будет искать переменные именно на "исторической родине" в месте своего рождения, а не там, где мы ее вызывали.
В этом отличие от this, которое устанавливается в зависимости от способа вызовы функции, т.е. мы можем на него влиять впоследствии
сама функция и все переменные, к которым она имеет доступ, назывется замыканием. Когда говорят "хранить данные в замыкании",
имеется в виду хранить их во внешнем блоке кода относительно функции, откуда она сможет их прочитать при помощи ссылки [[Environment]]
*/

{
  /* Пример 1 - возврат вложенной функции */
  function makeFn() {
    const x = 2;

    return function closureFn() {
      // const x = 'foo';
      console.log(x);
      return x;
    };
  }

  const closureFn = makeFn();
  // куда бы мы не передавали и как бы не вызывали, значение переменной из замыкания останется прежним
  closureFn();
  [null].forEach(closureFn);
  setTimeout(closureFn, 1000);
}

{
  /* Пример 2 - метод объекта, создаваемого через конструктор */

  function User(name) {
    this.name = name;

    this.sayHi = function () {
      console.log(this.name);
      console.log(name);
    };
  }

  const harry = new User('Harry');
  const ron = new User('Ron');

  harry.sayHi();
  // взятая из другого объекта функция подхватит новый this, но будет иметь прежнее значение переменной из замыкания
  ron.sayHi = harry.sayHi;
  ron.sayHi();
}

/* у каждой функции есть связанный с ней специальный объект LexicalEnvironment
все переменные, объявленные внутри фигурных скобок, а также аргументы, которые получает функция, хранятся в
в объекте Environment record. */
{
  function makeCounter() {
    // makeCounter[[Environment]] - ссылается на глобальное лексическое окружение
    let count = 0;

    return function counter() {
      return count++; // есть доступ к внешней переменной "count"
    };
  }

  // мы никак не можем получить доступ к count снаружи,
  // можем изменять ее только через функции counter и counter2, которые имеют к ней доступ через замыкание

  const counter = makeCounter();
  console.log(counter());
  console.log(counter());
  console.log(counter());

  const counter2 = makeCounter();
  console.log(counter2());
}

// counter и counter2 ведут счет независимо. каким образом? ведь вроде бы указывают на одну и ту же область видимости?

/* Внутренний механизм */

/* между работой с переменными и со свойствами объекта нет разницы,
потому что по сути все переменные являются свойствами специальных служебных объектов
например аргументы функции можно получить через объект arguments
но другие служебные объекты напрямую не доступны (скрыты) */

/* в момент рождения функции (когда JS узнает о ее существовании,
  для Function Declaration это в начале выполнения скрипта / родительской функции)
  ей устанавливается ссылка на лексическое окружение родителя.
  Области видимости, доступная функции, определяется структурой кода (вложенностью фигурных скобок в нем),
  и так как сама структура кода не меняется в процессе выполнения скрипта, то [[Environment]] прописывается один раз и потом не меняется
  */

/* В МОМЕНТ ВЫЗОВА функции для нее создается специальный объект Execution Context (контекст выполнения)
контекст уже учитывает "текущее положение дел", он содержит:
- Execution Context:
  - текущее значение This (определяется способом, которым была вызвана функция, указывает на объект перед точкой)
  - Lexical Environment:
    - Environment Record - объект с текущими значениями всех локальных переменных и аргументов внутри функции.
      каждый Lexical Environment соответствует какому-то блоку кода внутри фигурных скобок
    - [[Environment]] - из соответствующего свойства - ссылка на внешний Lexical Environment функции
        (не той, которая вызвала нашу функцию, а той, внутри которой она была объявлена!)
        но в случае с примером про counter'ы, новый counter объявляется непосредственно в результате вызова makeCounter
        и так как каждый раз при вызове создается новый объект лексического окружения, то при каждом вызове makeCounter
        будет создаваться новая функция counter, [[environment]] которой будет указывать на отдельный Lexical Enviroronment, привязанный к текущему
        вызову makeCounter.

Поиск происходит по цепочке объектов Lexical Environment, связанных через [[Environment]]
Т.к. лексическое окружение создается всегда "свежее" в момент вызова, переменные в замыкании будут иметь актуальные значения?
поэтому см. задачу 0 - выведется последнее значение.
*/

/* Call stack
  функции вызывают друг друга, и в момент вызова вложенной функции выполнение родительской приостанавливается,
  execution content "откладывается", сохраняется в call stack до момента, пока не понадобится.
  с ним запоминается строка и символ, на котором находится выполнение кода.
  для новой функции создается свой новый контекст выполнения и т.д. Процесс продолжается пока не будет возвращен результат
  и потом контексты достаются из стека в обратном порядке.
  См. пример в дебаггере VSCode.
*/
