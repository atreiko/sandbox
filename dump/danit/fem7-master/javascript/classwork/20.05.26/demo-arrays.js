'use strict';
/* МАССИВЫ */
/* по сути, это объекты с числовыми индексами в качестве ключей.
а также свойством length и дополнительными методами
т.к. это объекты:
- передаются по ссылке
- могут содержать любые типы данных в качестве значений, в т.ч. объекты - функции и другие массивы
удобно использовать, когда нам важен именно порядок элементов */

/* Синтаксис */
const arr = []; // основный метод создания

// проверка типа
console.log(typeof arr);
console.log(Array.isArray(arr));

// sparse arrays 🕮 <cyberbiont> e45a4843-a507-4938-9998-00fd78ea7d1a.md

const pos = ['first', 'second', 'third'];
// для доступа к значению используются квадратные скобки
// что логично, если иметь в виду, что это объект с ключами - числовыми индексами
// индексы начинаются с нуля, как в строках

console.log(pos[0]);
console.log(pos[1]);
// 🕮 <cyberbiont> c10bfeb7-dfff-4e6b-b9c2-16641382b71e.md

// перезапись значения
pos[0] = 'left';
console.log(pos);

{
  /* length */
  // длина массива на 1 больше индекса последнего элемента в нем
  // как и в строках
  const pos = ['first', 'second', 'third'];
  console.log(pos.length);

  // вывести последни элемент массива
  console.log(pos[pos.length - 1]);

  console.log('string'.length, 'string'[5]);
  // очистка массива
  pos.length = 0;
  console.log(pos);

  const newArr = new Array(5).fill(2);
  console.log(newArr);
}

/* МЕТОДЫ */
{
  /* Перебор массива */
  const array = ['first', 'second', 'third'];

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    console.log(value);
  }

  for (const value of array) console.log(value);
  /* не предоставляет доступа к i */

  array.forEach((value, i, array) => {
    console.log(i, value);
  });
  // не получится использовать break / continue;
  // коллбэк можно задать где-то в другом месте (что удобно)

  // сокращенный вариант

  /* MAP */
  // map перебирает массив и возвращает новый массив с результатами обработки (не мутирует)
  const newArray = array.map((value) => value.toUpperCase());
  console.log(newArray);
  console.log(array);

  const skippedArr = array.map((value, index) => {
    if (index % 2) return;
    return value;
  });

  // 🕮 <cyberbiont> d07e83b8-628b-46f1-b9cd-d5d63b1b94d9.md
  console.log(skippedArr);

  // Reduce 🕮 <cyberbiont> c4f3721b-b767-4dfe-9935-f42d7de29714.md
}

/* ДОБАВЛЕНИЕ, УДАЛЕНИЕ И КОПИРОВАНИЕ ЭЛЕМЕНТОВ */
{
  // Мутируют (изменяют) исходный массив
  const array = ['first', 'second', 'third'];

  console.log(array.push('fourth', 'fifth'));
  console.log(array);

  console.log(array.pop());
  console.log(array);

  // unshift и shift требуют переиндексации элементов, поэтому являются медленными
  console.log(array.unshift('zeroth'));
  console.log(array);

  console.log(array.shift());
  console.log(array);
}
{
  // slice - аналогичен одноименному методу у строк. не мутирующий
  const array = ['first', 'second', 'third'];
  console.log(array.slice(1, 2));
  console.log(array.slice());

  // splice - мутирующий. возвращает массив удаленных элементов
  console.log(array.splice(2));
  console.log(array);

  // второй аргумент - количество элементов подряд, которые надо удалить
  // третий и далее - элементы, которые хотим добавить после удаления
  array.splice(1, 1, 'newSecond');
  console.log(array);

  // если хотим вставить, но ничего не удалять,
  // надо передать логически ложное значение (0, null, false...) вторым аргументом!
  array.splice(1, 0, 'insertedBetween');
  console.log(array);

  // если не указано количество элементов, которое надо удалить, удаляются все элементы до конца массива
  array.splice(1);
  console.log(array);

  // можно использовать отрицательные индексы
  // 🕮 <cyberbiont> 14245682-0ff5-4608-8198-1c387ca6caef.md
}

{
  /* ПОИСК */
  // методы поиска не мутируют массив
  /* аналогично строкам: indexOf/lastIndexOf и includes */
  const array = ['a', 'b', 'c', 41, 'b', false];
  console.log(array.includes('b'));
  console.log(array.indexOf('N'));
  console.log(array.lastIndexOf('b'));
  // методы используют строгое сравнение ===
  console.log(array.indexOf(null));

  /* find / findIndex */
  // возвращают только первое совпадение
  console.log(
    // по сути похоже на indexOf, но можем задавать свое условие, а не просто строгое равенство
    array.findIndex((value, index, array) => {
      // должен вернуть true, если элемент нам подходит
      return typeof value !== 'string';
    }),
  );
  // сокращенная запись
  console.log(array.findIndex((value) => typeof value !== 'string'));
  // find возврашает непосредственно значение
  console.log(array.find((value) => typeof value !== 'string'));

  // some / every  - возвращают true / false если хотя бы один / все элементы соответствуют
  console.log(array.some((value) => typeof value !== 'string'));
  console.log(array.every((value) => typeof value === 'string'));

  /* Filter */
  // возвращает все совпадения. Не мутирует исходный массив
  console.log(array.filter((value) => typeof value === 'string'));
  // console.log(array);
}

{
  /* JOIN */
  // метод, обратный методу split у строк. Часто используются в паре
  const array = ['first', 'second', 'third'];
  const joinedString = array.join('-');
  console.log(joinedString);
  console.log(joinedString.split('-'));
}

/* ПРЕОБРАЗОВАНИЕ */
// reverse, sort - мутируют массив
{
  const arr = [1, 2, 15, 4];
  console.log(arr.reverse());

  console.log(arr.sort());
  // 🕮 <cyberbiont> 95e29506-fcd1-4e38-b988-6925633afa9f.md

  const arr2 = [1, 2, 15, 4];
  // надо передать свой коллбэк для сравнения
  console.log(
    arr2.sort((a, b) => {
      if (a > b) return 1;
      if (a == b) return 0; // порядок не изменится
      if (a < b) return -1;
    }),
  );
  // достаточно, чтобы вернулось любое положительное число, если a > b
  // и отрицательное, если меньше
  // т.е. можно написать так
  const arr3 = [1, 2, 15, 4];
  console.log(arr3.sort((a, b) => a - b));
}

/* FLAT */
{
  const nestedArray = [
    [1, 2],
    [3, 4],
    [5, 6, [7, 8]],
  ];
  console.log(nestedArray.flat());
  console.log(nestedArray.flat(2));
}

// 🕮 <cyberbiont> 30d62e71-be85-45ea-9bd2-29b0910f0fe6.md

// concat
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [6, 7, 8];
console.log(arr1.concat(arr2, arr3));
console.log([].concat(arr1, arr2, arr3));
