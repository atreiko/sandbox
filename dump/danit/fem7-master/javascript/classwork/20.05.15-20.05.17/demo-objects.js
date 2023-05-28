'use strict';
/* способы создания объектов и записи свойства */

// Литеральная нотация (literal - буквальный")
const user = {
  name: 'Carl',
  age: 16,
  // ключ: значение
  // key: value
};

// пары ключ: значение также называют свойствами, или полями объекта
// ключ назыают также именем св-ва
// свойства разделяются запятыми
// после последнего св-ва можно ставить запятую, в современном JS ошибки не будет (так проще менять их порядок)

/* другие способы (для справки; редко используются) */
// с помощью функции-конструктора
const object1 = new Object();
// метод Object.create()
const object2 = Object.create({});

/* 2 СПОСОБА ОБРАТИТЬСЯ К СВОЙСТВУ */
console.log(user.name);
console.log(user['name']);

// этиим же способами можно добавлять свойства в существующий объект или перезаписывать их
user.sex = 'male';
console.log(user.sex);

user['name'] = 'Donald';
console.log(user.name);

// ЗАЧЕМ НУЖЕН СПОСОБ С КВАДРАТНЫМИ СКОБКАМИ?
// позволяет создавать и получать свойства, имена которых содержат пробелы
const student = {
  name: 'Сarl',
  age: 16,
  'has hobby': true,
};
console.log(student['has hobby']);
// console.log(user.has hobby) // ОШИБКА!

// позволяет динамически обращаться к именам свойств
let propertyName = 'age';
// let propertyName = 'name';

console.log(student[propertyName]);
// console.log(student.propertyName);

// ВЫЧИСЛЯЕМОЕ СВОЙСТВО
let fruit = 'apple';
let number = 10;

let bag = {
  [fruit]: number, // имя свойства будет взято из переменной fruit
};

console.log(bag.apple);

// ЗАПИСЬ ПЕРЕМЕННОЙ В ОДНОИМЕННОЕ СВОЙСТВО
const teacher = 'Yaroslav';
const coordinator = 'Daria';

const group = {
  coordinator: coordinator,
  teacher,
};

console.log(group.coordinator);
console.log(group.teacher);
