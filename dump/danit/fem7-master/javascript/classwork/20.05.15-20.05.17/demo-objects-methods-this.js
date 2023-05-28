'use strict';

/* МЕТОДЫ */
{
  let user = {
    sayHi: function () {
      console.log('Привет');
    },
    sayHiShort() {
      // то же самое, что и "sayHi: function()"
      console.log('Привет');
    },
  };

  user.sayHi();
  user.sayHiShort();
}

/* THIS */
{
  let student = {
    name: 'Джон',
    age: 30,

    sayHi() {
      console.log(this.name);
    },

    sayGoodbye() {
      console.log(this.name);
    },
  };

  // student.sayHi()

  // let admin = user;
  // user = null; // обнулим переменную, теперь она не хранит ссылку на объект.

  // admin.sayHi();
}

/* This не привязан к функции, он дает ей ссылку на контекст,в котором она исполняется */
{
  function sayHi() {
    console.log(this.name);
  }
  // sayHi();

  let user = {
    name: 'Джон',
    f: sayHi,
  };

  let admin = {
    name: 'Админ',
    f: sayHi,
  };

  // используем одну и ту же функцию в двух объектах
  // user.f = sayHi;
  // admin.f = sayHi;

  // вызовы функции, приведённые ниже, имеют разное значение this
  // "this" внутри функции является ссылкой на объект, который указан "перед точкой"
  user.f(); // Джон  (this == user)
  admin.f(); // Админ  (this == admin)

  // admin['f'](); // Админ (неважен способ доступа к методу - через точку или квадратные скобки
}

/* ПОТЕРЯ КОНТЕКСТА */
// Если функция вызывается не как метод объекта, а просто как sayHi(),
// происходит потеря контекста (т.е. this внутри неё будет ==undefined (или window в старом стандарте)).

const obj = {
  func() {
    console.log(this);
  },
};
obj.func(); // тут все нормально

const func = obj.func; // достали функцию из объекта и записали в переменную
func(); // вызвали ее (контекст undefined, т.к. вызов без точки - функция находится вне объекта)

{
  const a = 2;

  function myFunc() {
    console.log(a);
  }

  console.log(a);
}
