'use strict';
/* Копирование по значению и по ссылке */

// примитивы копируются по значению (т.е. буквально создается копия)
let message = 'Hello!';

let phrase = message;
console.log(phrase); // во phrase скопировалось значение message
phrase = 'Goodbye!';
console.log(message); // первоначальный message не изменился

// т.о. для объектов копируется только ссылка на них
let teacher = {
  name: 'Yaroslav',
};

let myMailLink = teacher;

myMailLink.news = 'Quarantine is over!';
console.log(teacher.news);

let user = {
  name: 'John',
};
let admin = user;
admin.name = 'Arthur';

// обе ссылки указывают на один объект с одним и тем же именем, т.е. это по сути один объект
console.log(user.name);
console.log(admin.name);

user.name = 'Kate';
console.log(user.name);
console.log(admin.name);

console.log(user === admin);

// объекты равны, если это один и тот же объект.
// т.е. 2 переменные, содержащие ссылки на один объект, будут равны
let a = {};
let b = {}; // два независимых объекта

console.log(a === b); // false

// Объект может быть изменен, даже если объявлен с помощью const
// const налагает запрет на переопределение переменной,
// но в случае с объектами, если мы меняем свойство, у нас в переменной все еще остается тот же самый объект

const obj = {
  a: 1,
  b: 2,
};

const obj2 = {
  c: 1,
  d: 2,
};

obj.a = 3;
console.log(obj);
// а вот переопределить константу не получится
// obj = obj2; // ОШИБКА
