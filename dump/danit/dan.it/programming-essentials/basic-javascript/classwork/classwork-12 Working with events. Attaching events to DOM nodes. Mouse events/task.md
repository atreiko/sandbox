/\*\*

- Задание 1.
-
- Написать скрипт, который создаст элемент button с текстом «Войти».
-
- При клике по кнопке выводить alert с сообщением: «Добро пожаловать!».
  \*/
  /\*\*
- Задание 2.
-
- Улучшить скрипт из предыдущего задания.
-
- При наведении на кнопку указателем мыши, выводить alert с сообщением:
- «При клике по кнопке вы войдёте в систему.».
-
- Сообщение должно выводиться один раз.
-
- Условия:
- - Решить задачу грамотно.
    \*/
    /\*\*
- Задание 3.
-
- Создать элемент h1 с текстом «Добро пожаловать!».
-
- Под элементом h1 добавить элемент button c текстом «Раскрасить».
-
- При клике по кнопке менять цвет каждой буквы элемента h1 на случайный.
  \*/

/_ Дано _/
const PHRASE = 'Добро пожаловать!';

function getRandomColor() {
const r = Math.floor(Math.random() _ 255);
const g = Math.floor(Math.random() _ 255);
const b = Math.floor(Math.random() \* 255);

return `rgb(${r}, ${g}, ${b})`;
}
/\*\*

- Задание 4.
-
- Улучшить скрипт из предыдущего задания.
-
- При каждом движении курсора по странице
- менять цвет каждой буквы элемента h1 на случайный.
  \*/

/_ Дано _/
const PHRASE = 'Добро пожаловать!';

function getRandomColor() {
const r = Math.floor(Math.random() _ 255);
const g = Math.floor(Math.random() _ 255);
const b = Math.floor(Math.random() \* 255);

return `rgb(${r}, ${g}, ${b})`;
}