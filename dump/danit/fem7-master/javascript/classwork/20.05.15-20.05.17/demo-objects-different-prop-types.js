'use strict';

const calculatedKeyNameVariable = 'calculatedKey';

// const method = function () {
// 	return null;
// };

const obj = {
  stringValue: 'Carl',
  numberValue: 16,
  booleanValue: true,
  prop: 12,
  undefinedValue: undefined,
  1: true, // 1 преобразуется в строку
  'key with whitespace': true,
  $keyStartingWith$: true,
  _keyStartingWith_: true,
  [calculatedKeyNameVariable]: true,
  dynamicMethod: method1,
  propertyContainsFunction: function () {
    return 'function was called';
  },
  methodName() {
    return 'method was called';
  },
  nestedObject: {
    key1: 182,
    key2: 50,
  },
  [Symbol('some key')]: true,
};

console.log(obj.undefinedValue);
console.log('undefinedValue' in obj);

console.log(obj[calculatedKeyNameVariable]);
console.log(obj.calculatedKey);

console.log(obj.propertyContainsFunction());
console.log(obj.methodName());

console.log(obj.nestedObject.key1);
console.log(obj.nestedObject.key2);
