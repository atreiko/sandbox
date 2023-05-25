// Написать алгоритм, который берет массив и перемещает все нули в конец
// сохраняя порядок дргуих элементов

let reducer = (acc, val) => {
  return val === 0 ? [...acc, val] : [val, ...acc];
};
let moveZero = (arr) => arr.reduceRight(reducer, []);
console.log(moveZero([false, 1, 2, 3, 0, 1, 3, 0, 'a', true]));
