'use strict';

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError('Invalid attempt to spread non-iterable instance');
}

function _iterableToArray(iter) {
  if (
    Symbol.iterator in Object(iter) ||
    Object.prototype.toString.call(iter) === '[object Arguments]'
  )
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
}

// Написать алгоритм, который берет массив и перемещает все нули в конец
// сохраняя порядок дргуих элементов
var reducer = function reducer(acc, val) {
  return val === 0
    ? [].concat(_toConsumableArray(acc), [val])
    : [val].concat(_toConsumableArray(acc));
};

var moveZero = function moveZero(arr) {
  return arr.reduceRight(reducer, []);
};

console.log(moveZero([false, 1, 2, 3, 0, 1, 3, 0, 'a', true]));
