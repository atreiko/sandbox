//! --------- = = --------- = = --------- = = --------- = = 
// function Cat(name, color) {
//     this.name = name
//     this.color = color
// }
// //@ Создаем прототип метод voice для Cat
// Cat.prototype.voice = function() {
//     console.log(`Cat ${this.name} says mvav`);
// }
// //@ Создаем объект cat на конструктре Cat
// //@ В его [[Prototype]] будет доступен метод voice
// const cat = new Cat('Kot', 'white')

// console.log(Cat.prototype); //* {voice: ƒ, constructor: ƒ}
// console.log(cat);           //* Cat {name: 'Kot', color: 'white'}
// console.log(cat.voice());   //* Cat Kot says mvav

// console.log(cat.constructor); //* ƒ Cat(name, color) {
//                               //*     this.name = name
//                               //*     this.color = color
//                               //* }

// console.log(Cat.prototype === cat.__proto__); //* true

//! --------- = = --------- = = --------- = = --------- = = 
//@ Добавим в прототип объекта skin и legs
function Person() {}
Person.prototype.legs = 2
Person.prototype.skin =  'white'

const person = new Person()
person.name = 'Artem'

console.log('skin' in person); //* true
console.log(person.legs);      //* 2

console.log(person.hasOwnProperty('name')); //* true
console.log(person.hasOwnProperty('skin')); //* false
//@ person будет иметь name: "Artem", а в прототипе legs и skin
console.log(person);
//*     Person {name: 'Artem'}
//*     name: "Artem"
//*         [[Prototype]]: Object
//*             legs: 2
//*             skin: "white"
//*             constructor: ƒ Person()
//*             [[Prototype]]: Object

//! --------- = = --------- = = --------- = = --------- = = 
//@ Создать прототип через Object.create
const proto = {year: 2021}
const myYear = Object.create(proto)
console.log(myYear); //* Мы создали пустой объект 
