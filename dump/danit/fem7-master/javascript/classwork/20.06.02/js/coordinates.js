'use strict';
const el = document.querySelector('.testDiv');
// родительский элемент станет offsetParent, если добавим ему позиционирование
// иначе body
el.parentElement.style.position = 'relative';
console.log('offsetParent', el.offsetParent);

// координаты абсолютного позиционирования тоже входят в offsetTop/ offsetleft
el.style.cssText = `
  position: absolute;
  top: 50px;
  left: 50px;
`;

// координаты относительно родительского элемента, без учета padding и border
// т.е. как при абсолютном позиционировании
// включают margin на элементе + координаты, если он абсолютно спозиционирован
console.log('offsetLeft', el.offsetLeft);
console.log('offsetTop', el.offsetTop);

// ширина элемента включая border (= CSS width при box-sizing = border-box)
console.log('offsetWidth', el.offsetWidth);
console.log('offsetHeight', el.offsetHeight);
console.log('getComputedStyle(el).width', getComputedStyle(el).width);
console.log('getComputedStyle(el).height', getComputedStyle(el).height);

// border + scrollbar (ширина полосы прокрутки) с соответствующей стороны
console.log('clientLeft', el.clientLeft);
console.log('clientTop', el.clientTop);

// content + padding
console.log('clientWidth', el.clientWidth);
console.log('clientHeight', el.clientHeight);

console.log('parentElement.clientHeight', el.parentElement.clientHeight);
console.log(
  'offsetBottom',
  el.parentElement.clientHeight - el.offsetTop - el.offsetHeight,
);

// content + padding + скрытая прокрученная часть элемента
console.log('scrollWidth', el.scrollWidth);
console.log('scrollHeight', el.scrollHeight);

console.log('scrollBottom', el.scrollHeight - el.scrollTop - el.clientHeight);

// WINDOW
// Ширина/высота окна
console.log('window width', document.documentElement.clientWidth);
console.log('window height', document.documentElement.clientHeight);

// ширина / высота документа
console.log('document width', document.documentElement.scrollWidth);
console.log('document height', document.documentElement.scrollHeight);

// текущая прокрутка
console.log('document scroll left', document.scrollingElement.scrollLeft);
console.log('document scroll top', document.scrollingElement.scrollTop);

// альтернативный способ - только для чтения
console.log('window.pageYOffset', window.pageYOffset);

// задание scrollTop позволяет прокрутить страницу
// document.scrollingElement.scrollTop = 200;
// то же самое - прокрутка к абсолютным координатам
globalThis.scrollTo(0, 200);

// прокрутка относительно текущей позиции
globalThis.scrollBy(0, 100);

// Системы координат
const windowCoords = el.getBoundingClientRect();
console.log('window coords', windowCoords);

// y будет отрицательным, т.к. верхний угол элемента находится вне окна выше,т.к. документ прокручен)

const documentCoords = {
  left: windowCoords.left + document.scrollingElement.scrollLeft,
  top: windowCoords.top + document.scrollingElement.scrollTop,
};
console.log('document coords', documentCoords);
