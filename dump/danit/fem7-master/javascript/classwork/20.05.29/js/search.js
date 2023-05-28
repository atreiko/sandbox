'use strict';

/* МЕТОДЫ .query... */
let elems = document.querySelectorAll('.myClass');
// получили псевдомассив
console.log('search results for myClass:', elems);
// итерация
for (const el of elems) el.style.border = '1px solid blue';
// elems.forEach((el) => (el.style = 'border: 1px solid blue;'));

// querySelector возвращает только первый найденный элемент и заканчивает поиск.
let elem = document.querySelector('.myClass');
console.log(elem);
elem.style.background = 'yellow';

// можно использовать на элементе, чтобы искать только внутри него
const ul = document.querySelector('ul');
const ulSearchResults = ul.querySelectorAll('.myClass');
console.log('search results in ul only:', ulSearchResults);
for (const elem of ulSearchResults) elem.style.outline = '2px solid red';

/* МЕТОДЫ .get...By */
// при использовании не нужно указывать . # и.т.д (метод уже знает, что он ищет - класс или id)
let unique = document.getElementById('unique');
unique.style.textDecoration = 'underline';

elems = document.getElementsByClassName('myClass');
console.log(`getElementsByClassName('myClass'):`, elems);
// // используем for...of для итерации (метода forEach нет)
for (let el of elems) el.style.fontStyle = 'italic';
// Array.from(elems).map((el) => console.log(el));

const lis = document.getElementsByTagName('li');
console.log('lis', lis);

const li = document.createElement('li');
li.textContent = 'new li';
document.querySelector('ul').insertAdjacentElement('afterbegin', li);
console.log(lis);

/* ДОПОЛНИТЕЛЬНЫЕ МЕТОДЫ */
{
  // contains  - проверяет, является ли элемент потомком другого элемента
  let ul = document.querySelector('ul');
  console.log(ul);
  console.log(ul.contains(ul.querySelector('.myClass')));
  console.log(ul.contains(document.querySelector('#unique')));

  // closest ищет ближайшего родителя
  console.log(document.querySelector('li').closest('.someClass'));
  // matches проверяет, соответствует ли элемент селектору
  console.log(ul.firstElementChild.matches('li'));
}
