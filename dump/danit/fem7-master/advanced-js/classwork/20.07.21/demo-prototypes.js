/*
В программировании наследование - это полезный механизм, который помогает следовать принципу DRY (do not repet yourself)
Если нам нужно создать объект, в целом похожий на другой, но немного отличающийся,
то полностью копировать все содержимое другого объекта неудобно и не в духе DRY,
С помощью наследования мы можем взять за основу исходный объект и повторно использовать его для создания нового объекта,
просто добавить то, чего нам не хватает, или переопределить какие-то свойства и методы.
Это похоже на то как работает extend в SASS, например.
*/

/*
В основе наследования в Javascript лежат прототипы.
Cуществует скрытое свойство [[Prototype]].
которое равно либо null, или ссылается на другой объект.
Если мы хотим обращаемся к свойству или методу в объекте, а оно отсутствует -
Javascript попытается найти его в объекте, на который ссылается свойство [[Prototype]].
*/
// 🕮 <cyberbiont> b8a15bb0-4b36-47a5-b0bc-4bc83f287352.md

/* Способы задать [[Prototype]] */
{
  // setPropotypeOf / getPrototypeOf / ObjectCreate
  const bank = {
    money: 1000,
  };

  const pocket = {};

  Object.setPrototypeOf(pocket, bank);

  console.log(pocket.money);
  console.log(Object.getPrototypeOf(pocket));

  // теперь pocket прототипно наследует от bank
}
{
  // старое нестандартное __proto__
  // на самом деле setter/getter для [[Prototype]], т.е. это по сути функция
  // проверяет, что мы присваиваем именно object или null, иначе не срабатывает
  const bank = {
    money: 1000,
  };

  const pocket = {};
  // pocket.__proto__ = 'bank'; // undefined
  pocket.__proto__ = bank; // __proto__ как setter
  console.log(pocket.money);

  console.log(Object.getPrototypeOf(pocket));
  console.log(pocket.__proto__); // __proto__ как getter
  // т.к. оно выглядит как обычное св-во, c его использованием возможны подводные камни,
  // например можно случайно перезаписать прототип, поэтому рекомендуется использовать новые методы
}

{
  // лучше всего задавать прототип сразу при создании объекта, для этого есть метод Object.create()
  const bank = {
    money: 1000,
    getMoney() {
      console.log(this.money);
    },
  };
  const pocket = Object.create(bank);
  // pocket.money = 5000;
  console.log(pocket.money);
  pocket.getMoney();

  // Примечание: оbject.create также принимает вторым аргументом объект дескрипторов свойств

  // можно создать объект без прототипа
  // 🕮 <cyberbiont> 7ed2e1bc-11b5-4158-96bd-51c1b9455b82.md
  const bareObject = Object.create(null);

  const obj = {};
  const arr = [];
}
/*
- в JS нет множественного наследования, т.е объект не может наследовать от двух объектов (св-во [[Prototype] одно])
- круговые ссылки запрещены
- прототип используется только при чтении свойств, запись/удаление производится в сам объект
- на работу this наследование не влияет, т.е. thi равен объекту перед точкой, где бы функция не находилась, в прототипе или самом объекте
*/

{
  /* цикл for...in перебирает свойства в т.ч. из прототипа (единственный способ, который это делает)
  чтобы отфильтровать собственные св-ва, можно использовать obj.hasOwnProperty(key)
  */
  const animal = {
    eats: true,
  };

  const rabbit = {
    jumps: true,
  };
  Object.setPrototypeOf(rabbit, animal);

  for (const prop in rabbit) {
    // eslint-disable-next-line no-prototype-builtins
    const isOwn = rabbit.hasOwnProperty(prop);

    if (isOwn) console.log(`Own: ${prop}`);
    // Own: jumps
    else console.log(`Inherited: ${prop}`); // Inherited: eats
  }
}

{
  /* задание наследования при использовании функции-конструктора

  Свойство функции-конструктора (!) prototype определяет,
  на какой объект будет ссылаться [[Prototype]] создаваемых этой функцией при вызове через new объектов
  т.о prototype имеет смысл использовать только на функции-конструкторе,
  в отличие от __proto__ или метода Object.setPrototypeOf, которые задают прототип непосредственно для уже готового объекта,
  что в целом не рекомендуется (ломаются оптимизации движка)

  Установка Rabbit.prototype = animal буквально говорит интерпретатору следующее:
  "При создании объекта через new Rabbit() запиши ему animal в [[Prototype]]".
  */

  const animal = {
    eats: true,
  };

  function Rabbit(name) {
    this.name = name;
  }
  Rabbit.prototype = animal;
  // Rabbit.prototype.constructor = Rabbit;

  console.log(Rabbit);

  const rabbit = new Rabbit('White Rabbit');
  console.log(rabbit);
  //  rabbit.__proto__ == animal
  console.log(Object.getPrototypeOf(rabbit));

  console.log(rabbit.eats); // true
  console.log(rabbit.constructor);

  const rabbit2 = new rabbit.constructor('new rabbit');
  console.log(rabbit2);
  // по умолчанию у функции есть prototype со свойством constructor,
  // которое ссылается на саму функцию
  function User(name) {
    this.name = name;
  }
  const user = new User('Arnold');
  console.log(User.prototype); // см. вывод в сайдбаре Quokkи
  console.log(User.prototype.constructor);
  /* можем использовать свойство constructor существующего объекта для создания нового такого же типа
  при переназначении св-ва prototype целиком можно потерять св-во constructor (похоже как со св-вом style DOM-элементов)
  */
}

{
  /* добавление методов в прототип */

  /* сам дефолтный объект с методами, на который ссылается [[Prototype]] объектов,
  хранится в свойстве функции-конструктора, и мы можем добавлять туда методы */

  function User(name) {
    this.name = name;

    // 🕮 <cyberbiont> c695b8d4-e836-4091-9cbb-d87c360b1ed3.md
    /* так выглядело бы добавление метода непосредственно в объект
     */
    // this.sayHi = function () {
    //   console.log(this.name);
    // };
  }
  // Но лучше хранить методы в прототипе
  User.prototype.sayHi = function () {
    console.log(this.name);
  };

  User.prototype.sayBy = function () {
    console.log('By' + this.name);
  };
  // не самая удобная конструкция, если добавлять много методов, поэтому на смену такому способу пришли ES6 классы
}

/* встроенные прототипы */
/* все объекты наследуют от объекта
иерархия наследования встроенных объектов
https://learn.javascript.ru/native-prototypes#drugie-vstroennye-prototipy

см. в дебаггере иерархию

можно добавлять методы во встроенные прототипы, но это не рекомендуется из-за потенциальных конфликтов,
кроме полифиллов
*/
{
  // заимствование из прототипа
  const obj = {
    0: 'Hello',
    1: 'world!',
    length: 2,
  };

  console.log(Array.prototype.join.call(obj, ','));
  console.log([].join.call(obj, ','));

  const arr = [];
  console.log(arr instanceof Array);
  Object.setPrototypeOf(arr, null);
  // arr.join();
  console.log(arr instanceof Array);
}
