/* Написать функцию для рекурсивного полного клонирования объекта (без единой передачи по ссылке, 
внутренняя вложенность свойств объекта может быть достаточно большой).

Функция должна успешно копировать свойства в виде объектов и массивов на любом уровне вложенности.

В коде нельзя использовать встроенные механизмы клонирования, такие как функция Object.assign() или спред-оператор. */

"use strict";

const mainObject = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4,
    },
};
console.log(mainObject);

function copyObject(mainObject) {
    let objectCopy;

    if (Array.isArray(mainObject)) {
        objectCopy = [];
    } else {
        objectCopy = {};
    }

    for (let key in mainObject) {
        if (typeof mainObject[key] === "object") {
            objectCopy[key] = copyObject(mainObject[key]);
        } else {
            objectCopy[key] = mainObject[key];
        }
    }
    return objectCopy;
}
console.log(copyObject(mainObject));

let cloneObject = copyObject(mainObject);
console.log(cloneObject);
cloneObject.c.x = 25;
cloneObject.b = [3, 4, 5];