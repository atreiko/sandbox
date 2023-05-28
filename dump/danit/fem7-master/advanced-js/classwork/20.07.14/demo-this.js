const doug = {
  name: 'Doug',
  surname: 'Hurley',
  birthDate: '1966-11-21',
  pulse: 80,
  bloodPressure: [130, 90],
  bodyTemperature: 36.6,

  getFullName() {
    return `${this.name} ${this.surname}`;
  },

  getHealthStatus(write = true) {
    const [SBP, DBP] = this.bloodPressure;
    if (
      this.bodyTemperature >= 37 ||
      SBP > 145 ||
      SBP - DBP > 60 ||
      SBP - DBP < 35
    ) {
      this.status = 'attention needed';
    } else {
      this.status = 'healthy';
    }
    return this.status;
  },
};

console.log(doug.getHealthStatus());
console.log(doug.getFullName());
console.log(doug.testProp);

// т.к. мы можем передавать функции и копировать их из одного объекта в другой, или передавать как аргументы-коллбэки,
// для того, чтобы функция была универсальной, this определяется только непосредственно в момент вызова функции, т.е. он указывает на объект перед точкой
// если мы скопируем функцию в другой объкт и вызовем ее оттуда, this будет указывать на объект, в котором находится функция
// таким образом мы можем создавать универсальные функции, которые будут работать с разными объектами и искать нужные данные в том объекта, где в данный момент находятся.
// т.е. например тонометру все равно, на каком человеке он надет, на кого вы его наденете - у того он покажет пульс и давление.

const bob = {
  name: 'Robert',
  surname: 'Benhken',
  birthDate: '1970-28-08',
  pulse: 70,
  bloodPressure: [125, 75],
  bodyTemperature: 37.6,
  getFullName: getFullName,
};

function getFullName() {
  return `${this.name} ${this.surname}`;
}

console.log(bob.getFullName());

bob.getHealthStatus = doug.getHealthStatus;

console.log(bob.getHealthStatus());

/* CALL */
// если мы не хотим непосредственно, копировать метод другой объект, мы можем вызвать его в контексте другого объекта с помощью метода call
// дальше идет как обычно список аргументов через запятую
console.log(doug.getHealthStatus.call(bob));
// если у функции есть аругемнты, их можно передать дальше как обычно через запятую
console.log(doug.getHealthStatus.call(bob, 'foo', 'bar', 'baz'));

// есть аналогичный метод apply, который отличается тем, что аргументы должны быть переданы в виде массива.
const args = ['foo', 'bar', 'baz'];
console.log(doug.getHealthStatus.apply(bob, args));
// но это же можно сделать и с помощью оператора rest
console.log(doug.getHealthStatus.call(bob, ...args));

// иногда call применяется для "одалживания" методов
{
  function list() {
    console.log(arguments);
    // ошибка: у arguments нет метода forEach
    // arguments.forEach((el) => console.log(el.name));
    // но можно одолжить у массива и вызвать в контексте arguments
    const x = [].map.call(arguments, (val) => val.getFullName());
    console.log(x);
  }
  list(doug, bob);
}

/* ФУНКЦИИ-КОНCТРУКТОРЫ */

/* у нас разные космонавты, но набор свойств и методов у кажного одинаковый, т.е. было бы неплохо иметь какой-то способ
быстро создавать новых пользователей, не прописывая каждый раз все вручную
такой метод есть - функция-конструктор.

Имя функции-конструктора должно начинаться с большой буквы.
Функция-конструктор должна вызываться при помощи оператора "new".
при этом происходит следующее:
-    Создаётся новый пустой объект, и он присваивается this.
-    Выполняется код функции. Обычно он модифицирует this, добавляет туда новые свойства.
-    Возвращается значение this.

Примеры: new Date();

Функция-конструктор символизирует объект, который она создает, поэтому имя функции принято делать существительным, описывающим тип создаваемого объекта.
чтобы отличить от обычных функций, пишут с большой буквы
*/

/* тут мы записываем в this все что нам надо */
function Cosmonaut(age, name, birthDate, pulse, bloodPressure) {
  this.age = age;
  this.name = name;
  this.birthDate = birthDate;
  this.pulse = pulse;
  this.bloodPressure = bloodPressure;
  this.status = 'healthy';

  this.getHealthStatus = function () {
    const [SBP, DBP] = this.bloodPressure;
    if (
      this.bodyTemperature >= 37 ||
      SBP > 145 ||
      SBP - DBP > 60 ||
      SBP - DBP < 35
    ) {
      this.status = 'attention needed';
    } else {
      this.status = 'healthy';
    }
    return this.status;
  };

  this.getFullName = function () {
    return `${this.name} ${this.surname}`;
  };

  /* возвращать ничего не нужно, функция автоматически вовзвращает this при вызове через new */
}

const dave = new Cosmonaut('Dave', 'Coltrain', '2003-01-03', 60, [122, 60]);
// dave.getHealthStatus();
console.log(dave);

/* если конструктор вызывается без аргументов, круглые скобки можно опустить, но лучше для читаемости все-таки ставить */

/* ! стрелочные функции не могут использоваться как конструкторы, т.к. не имеют своего this. При этом будет ошибка */
