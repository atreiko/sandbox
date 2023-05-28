import fs from 'fs';
// встроенный метод NodeJS для чтения файлов
fs.promises.readFile('demo.json').then((json) => console.log(JSON.parse(json)));

// JSON - общий формат, использующийся для хранения данных, файлов конфигурации и обмена данными в интернете
// с ним может работать большинство языков программирования
// по сути дела это строка, поэтому метод для превращения в JSON называется stringify
/* Похож на синтаксис объектов в JS, но есть особенности:
- только двойные кавычки
- кавычки обязательны для ключей
- не разрешены "висячие" запятые
- не разрешены комменты
- поддерживает в качестве значений:
    Объекты { ... }
    Массивы [ ... ]
    Примитивы:
        строки,
        числа,
        логические значения true/false,
        null.
- не может хранить: функции, символы, undefined (при конвертации JSON.stringify пропускает такие св-ва)
*/
const data = {
  name: 'Sara',
  age: 23,
  gender: 'Female',
  department: 'History',
  car: 'Honda',
};

console.log(JSON.stringify(data));
