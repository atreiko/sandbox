'use strict';
/* global $ */

// JQuery - это Javascript-библиотека
// надстройка над стандартными методами JS
// import $ from 'jquery';

// добавляем на страницу с помощью CDN или через npm

// JQuery добавляет глобальный объект (window) функцию $.

// кроссплатформенность
// более короткие имена методов
// методы для часто встречающихся задач
// плагины
// практически все делается методами (не св-ва, например, $().width())
// методы jQuery обычно что-то полезное передают в качестве this, поэтому лучше не использовать стрелочные функции

// синтаксис: $(selector).action();

/* ПОИСК */
// $() работает как document.querySelectorAll(). Тоже возвращает не-живую коллекцию.
// селекторы почти те же же самые (есть небольшие различия, например :first вместо :first-of-type)
const $h1 = $('#heading');
console.log($h1);

// возвращается коллекция элементов со специальными методами
const $paragraphs = $('#demo p');
console.log($paragraphs);
// можно перебирать с помощью метода each.
// i и value в обратном порядке по сравнению с forEach!
$paragraphs.each(function (i, value) {
  // this === value
  // если хотим использовать this, нельзя использовать стрелочную функцию, т.к. они не имеют своего this
  console.log('each', i, value);
});

for (let $p of $paragraphs) console.log('for...of', $p);
// forEach не сработает, т.к. $paragraphs это не массив

// но можно конвертировать в массив
$paragraphs.toArray().forEach(function (value, i) {
  // console.log(this); // undefined
  // могли бы использовать стрелочную функцию, т.к. this все равно не определен
  console.log('forEach', value, i);
});

// объект jquery это всегда коллекция, и методы, которые мы вызываем, будут работать на всех элементах коллекции
// например remove()
// $paragraphs.remove(); удалит все параграфы
// это удобно, т.к. мы можем не задумываться, работает мы с одним элементом или со многими

// чтобы выбрать определенные элементы из коллекции - надо отфильтровать
console.log('3rd element', $('p').eq(3)); // получаем только 3й элемент
console.log('with class', $('p').filter('.needle'));
console.log('without class', $('p').not('.needle'));

// чтобы получить "чистый" DOM-элемент;
console.log('DOM element', $paragraphs[0]);
console.log('DOM element', $paragraphs.get(0));

// получаем "чистый" DOM-элемент
const paragraph = $('p').get(0);
// теперь можем использовать с ним стандартные DOM-методы - но не методы jQuery
// p.addEventListener('click', () => {
//   console.log('click');
// });

/* Чтобы не путаться, где объект JQuery, а где обычный DOM-элемент,
можно добавлять приставку $ к именам переменных, которые сохраняют JQuery-объекты */

// преобразуем снова в объект JQuery
const $paragraph = $(paragraph);
console.log('$p', $paragraph); // теперь можем вызывать специальные методы Jquery

// p.on('dblclick', () => {
//   console.log('dblclick');
// });

/* TRAVERSING */
// document.querySelector('#demo').querySelectorAll('.needle');

const needle = $('#demo').find('.needle');
console.log(needle);
// вернет всех "соседей - и перед, и после
console.log(needle.siblings());

/* СОБЫТИЯ */
// document.ready
// JQuery-аналог
// document.addEventListener('DOMContentLoaded', function() {});
// $(document).ready(function () {
// });

// обработчики событий

$('#events button').click(function () {
  console.log('click');
});

/* $('#events button').on('mouseenter mouseleave', function (event) {
  console.log(event.type);
}); */

$('button').on({
  mouseenter,
  mouseleave,
});

$('button').hover(mouseenter, mouseleave);

function mouseleave() {
  // this у нас представляет собой "чистый" DOM-элемент,
  //  поэтому нужно обернуть его в $(), чтобы использовать методы Jquery
  console.log('mouseleave');
  $(this).css('background-color', 'lightgray');
}

function mouseenter() {
  console.log('mouseenter');
  $(this).css('background-color', 'lightblue');
}

// HTML
const $h = $('#demo-2 h1');
console.log($h.text());
// get / set text (a la textContent)
$h.text('newText');
// get / set html (a la innerHTML)
$h.html(`<h2>newText</h2>`);
// get / set attribute (a la getAttribute / setAttribute)
console.log($h.attr('id'));

/* методы для вставки - работают так же. как и нативные JS-аналоги
append()
prepend()
after()
before()
*/

$h.after(`<h3>newHeading</h3>`);
// remove() может работать как фильтр, если передаем селектор $("p").remove(".test, .demo")

/* СLASSES, STYLES */
const $ps = $('p');
$ps.addClass('blue');
$ps.eq(3).toggleClass('blue');
$ps.eq(5).removeClass('blue');

$ps
  .filter('.needle')
  .css({ 'text-decoration': 'underline', 'font-style': 'italic' });
// el.style['font-style'] = 'italic';
// el.style['text-decoration'] = 'underline';
// console.log($ps.eq(1).css('text-decoration'));

/* Метрики */
const $parent = $('#parent');
const $child = $('#child');
console.log($child.width()); // content (без padding и border) - всегда, независимо от box-sizing
console.log($child.innerWidth()); // content + padding
console.log($child.outerWidth()); // content + padding + border
console.log($child.outerWidth(true)); // content + padding + border + margin

/* Анимации */
// show / hide
$('#js-hide').click(function () {
  $('p').hide(); // фактически убирает height до 0
  // откройте инспектор DevTools и посмотрите медленно
});

$('#js-show').click(function () {
  $('p').show();
});

$('#js-toggle').click(function () {
  $('p').toggle(5000);
});

$('#js-fade-in').click(function () {
  console.log(this);
  $('#div1').fadeIn();
  $('#div2').fadeIn('slow');
  $('#div3').fadeIn(3000);
});

$('#js-fade-out').click(function () {
  $('#div1').fadeOut();
  $('#div2').fadeOut('slow');
  $('#div3').fadeOut(3000);
});

$('#js-fade-toggle').click(function () {
  $('#div1').fadeToggle();
  $('#div2').fadeToggle('slow');
  $('#div3').fadeToggle(3000);
});

$('#js-fade-to').click(function () {
  $('#div1').fadeTo('slow', 0.15);
  $('#div2').fadeTo('slow', 0.4);
  $('#div3').fadeTo('slow', 0.7);
});

// альтернативный способ: переключение классов + CSS transition
/* $('#js-fade-to').click(function () {
  $('#div1').addClass('faded');
  $('#div2').addClass('faded');
  $('#div3').addClass('faded');
}); */

$('#js-slide-toggle').click(function () {
  $('#panel').slideToggle('slow');
});

$('#js-slide-down').click(function () {
  $('#panel').slideDown('slow');
});

$('#js-slide-up').click(function () {
  $('#panel').slideUp('slow');
});

$('#js-animate').click(function () {
  $('#animate-me').animate(
    {
      left: '500px',
      opacity: '0.5',
      height: 'toggle',
      width: '150px',
    },
    5000,
  );
});

// чейнинг
// $('#panel')
//   .css({ background: 'red', border: '1px solid black' })
//   .slideUp(2000)
//   .slideDown(2000)
//   .fadeTo(0.7);

/* Плагины */
// isotope
$('.portfolio-item').isotope({
  itemSelector: '.item',
  layoutMode: 'fitRows',
});

$('.portfolio-menu ul').on('click', 'li', function (event) {
  // можно было бы иcпользовать this, т.к.в Jquery this содержит event.target при делегировании
  $(event.target).siblings().removeClass('active');
  $(event.target).addClass('active');

  const selector = $(event.target).attr('data-filter');
  $('.portfolio-item').isotope({
    filter: selector,
  });
  return false;
});
