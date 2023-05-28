'use strict';

const unique = document.querySelector('#unique');
unique.className = 'red';

const el = document.querySelector('.myClass');
console.log(el);
// перезапишет все существующие классы
// hasClass.className = 'red';

// лучше просто добавить
el.classList.add('red');

// выведет список всех классов
console.log(el.classList);

// проверка, есть ли такой класс
console.log('has class red?', el.classList.contains('red'));

// заменить класс другим
el.classList.replace('red', 'blue');

// удалить класс
el.classList.remove('blue');
