// Дебаггеры
'use strict';
const global = 'I am a global variable';
{
  const block = 'I am a block variable';
  function test(a, b, c) {
    const local = 'I am a local variable';
    const sum = a + b + c;
    const result = `local value: ${local}. Sum of the arguments: ${sum}`;
    return result;
  }

  test(1, 2, 3);
  test(4, 5, 6);
  test(7, 8, 9);
}
