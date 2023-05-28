'use strict';
const h1 = document.body.firstElementChild;

// console.log(document.body.children);
// const comment = document.body.childNodes[3];
// console.log(comment.data);

console.log('innerText:', h1.innerText);
// textContent вернет весь текст, в т.ч. скрытый
console.log('textContent:', h1.textContent);
// innerHTML вернет в том числе еще и HTML-тэги
// innerHTML имеет смысл только элементов, которые имеют закрывающий тэг
console.log('innerHTML:', h1.innerHTML);
// outerHTML вернет еще и HTML-тэги самого элемента
console.log('outerHTML:', h1.outerHTML);

// h1.innerHTML = '<b>inserted through innerHTML</b>';
// h1.textContent = '<b>inserted through textContent</b>';

h1.outerHTML = '<h2>inserted through outerHTML</h2>';
console.log(h1); // все еще содержит h1
console.log(document.body.children); // в body теперь h2
