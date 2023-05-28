// Date - встроенный объект/функция для работы с датами

/* Создание новой даты */
// Возможны различные аргументы для new Date();
// 1. Без аргументов: время сейчас
const now = new Date();
console.log(now);
console.log(now);
// в now будет новое время каждый раз, отрабатывает скрипт
// сохраняем через ctrl S и секунды добавляются

// 2. timestamp - количество миллисекунд, прошедших с 1.01.1970 UTC+0
// преобразуется в обычную дату и обратно
const nowTimestamp = now.getTime();
console.log(nowTimestamp);
console.log(+now);
console.log(Number(now));
console.log(new Date(nowTimestamp));
console.log(new Date(60 * 60 * 1000));
// 3 datestring
// если время не указано, устанавливается на полночь по Гринвичу и сдвигается соответственно локальному часовому поясу
console.log(new Date('2020-05-19'));
// console.log(new Date('2020-05-19:'));

// 4 year, month, date, hours, minutes, seconds, ms
// месяцы нумеруются начиная с нуля
console.log(new Date(2020, 4, 19));

/* Получение компонентов даты из готового Date  */
// в соответствии с местным часовым поясом:
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate()); // число месяца
console.log(now.getDay()); // день недели, воскресенье = 0
console.log(now.getHours()); // console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

console.log(now.getUTCHours()); // показывают время в UTC+0
// Установка компонентов даты
// аналогичные методы, только вместо get... set. Тоже есть UTC-варианты. возвращают таймстамп
// console.log(now.setHours(12));
console.log(now);
console.log(now.getHours());

// автоисправление
let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
console.log(date); // ...1st Feb 2013!

console.log(now.getMinutes());
now.setMinutes(now.getMinutes() + 120);
console.log(now);

// т.к. Date преобразуется в таймстамп при числовом преобразовании, можем вычитать даты
const HOUR = 1000 * 60 * 60;
console.log((now - date) / HOUR);

// но лучше сразу создать текущую дату в виде таймстампа - метод Date.now()

/* СОЗДАНИЕ ДАТЫ В ВИДЕ ТАЙМСТАМПА */
// Date.now
console.log(Date.now());
// Date.parse - из строки
console.log(Date.parse('2012-01-26T13:51:50.417-07:00'));
// getTime - из объекта Date
console.log(now.getTime());
console.log(Date.UTC(2020, 04, 19, 12));
