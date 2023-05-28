'use strict';

/* Создание элемента */
const el = document.createElement('p');
el.innerHTML = 'Hi! I am the new element';
el.class = 'created';
el.style.color = 'magenta';
console.log(el);

/* Вставка элемента */
document.body.append(el);

// вставка элемента удаляет его с предыдущего места. если мы вставим el на другое место, он удалится с предыдущего:
// document.querySelector('ul').prepend(el);
// но если мы склонируем элемент, появится его копия. чтобы скопировался текст внутри, надо задать true
// const clone = el.cloneNode(true);
// clone.style.color = 'blue';
// document.body.prepend(clone);

// document.body.insertAdjacentElement('afterbegin', el);
// document.body.insertAdjacentElement('beforeend', el);

document.body.insertAdjacentHTML(
  'beforeend',
  /* html */ `<p class="custom">I am inserted with insertAdjacentHTML</p>`,
);

/* Удаление */
// el.remove();

/* Замена */
const anotherEl = document.createElement('div');
anotherEl.innerHTML = 'I will replace you!';
anotherEl.style.color = 'green';
el.replaceWith(anotherEl);
