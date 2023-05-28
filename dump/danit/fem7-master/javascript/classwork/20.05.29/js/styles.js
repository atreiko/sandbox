'use strict';

const unique = document.querySelector('#unique');

unique.style.cssText = `
  text-decoration: underline;
  background: yellow;
`;
// cssText перезаписывает полностью св-во style, т.е. все стили, назначенные до этого, пропадут
// хорошо использовать cssText при создании элемента, когда других св-в еще нет

unique.style.color = 'red';
unique.style.fontWeight = 'bold';
unique.style.border = '2px solid black';
unique.style.fontSize = '1.5em';
unique.style.display = 'none';

// getComputedStyle показывает вычисленные абсолютные значения, которые фактически применяются к элементам
console.log(getComputedStyle(unique).fontSize); // 36px
console.log(getComputedStyle(unique).border); // empty string, - работают только полные имена свойств
console.log(getComputedStyle(unique).borderTopWidth); // 2px - так работает

// чтобы сбросить свойство, надо присвоить пустую строку!
unique.style.border = '';
