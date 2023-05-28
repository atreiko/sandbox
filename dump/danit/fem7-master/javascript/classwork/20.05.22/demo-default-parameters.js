'use strict';
/* DEFAULT PARAMETERS */

// СПОСОБЫ ЗАДАНИЯ ДЕФОЛТОВ
function hasDefaults(arg, arg2, arg3 = 'default') {
  // 1й способ - присваиваем default, если аргумент логически не равен false.
  // 0, null, false, '' будут включать default, что обычно не нужно
  arg = arg || 'default';
  console.log(arg);

  // 2й способ - присваиваем default, если аргумент не равен undefined
  arg2 = arg2 !== undefined ? arg2 : 'default';
  console.log(arg2);

  // 3й способ (современный) - используем parameter defaults
  console.log(arg3);
}

hasDefaults('value', 'value', 'value');
hasDefaults();
hasDefaults(null, null, null);
hasDefaults(0, 0, 0);
hasDefaults(false, false, false);
hasDefaults('', '', '');
hasDefaults(NaN, NaN, NaN);

// параметры по умолчанию вычисляются каждый раз в момент вызова функции (а не в момент ее создания);
let value = 0;
function test(arg = value) {
  return arg;
}
console.log(test());

value = 1;
console.log(test());

// параметры доступны в следующих за ними параметрах по умолчанию
function greet(name, greeting, message = `${greeting}, ${name}!`) {
  return message;
}

console.log(greet('David', 'Hi'));
console.log(greet('David', 'Hi', 'Happy Birthday!'));
// console.log(greet());

// можно использовать внешние функции для вычисления параметров по умолчанию
{
  function getDefault() {
    return 'default';
  }

  function hasDefault(arg = getDefault()) {
    return arg;
  }

  console.log(hasDefault());
}

// внутренние функции работать не будут, они создаются уже после вычисления параметров по умолчанию
{
  function hasDefault(arg = getDefault()) {
    function getDefault() {
      return 'default';
    }

    return arg;
  }

  // console.log(hasDefault()); // getDefault is not defined
}

function test2(a, c, optionBag) {
  console.log(a);
  console.log(c);
  console.log(optionBag.b);
  console.log(optionBag.d);
}

let a = 1;
let b = 2; // опциональный
let c = 3;
let d = 4; // опциональный
test2(a, c, {
  b: b,
  // d: d,
});

{
  // необязательные параметры имеет смысл передавать в функцию как объекты, т.е. option bag
  // потому что обычный способ передачи требует соблюдения порядка аргументов, если одного из них нет, соблюсти порядок не получится
  function receivesOptionBag(requiredArg, optionalArgs) {
    console.log(requiredArg);
    if (optionalArgs.optionalArg1) console.log(optionalArgs.optionalArg1);
    if (optionalArgs.optionalArg2) console.log(optionalArgs.optionalArg2);
    if (optionalArgs.optionalArg3) console.log(optionalArgs.optionalArg3);
  }

  receivesOptionBag('I am required!', {
    optionalArg1: 'I am optional!',
    optionalArg3: 'I am optional too!',
  });

  // если не передать optionBag вообще и не задать дефолт, будет ошибка
  // console.log(receivesOptionBag('I am required!'));
}

{
  // поэтому можно задать как дефолт пустой объект
  function receivesOptionBag(requiredArg, optionalArgs = {}) {
    console.log(requiredArg);
    if (optionalArgs.optionalArg1) console.log(optionalArgs.optionalArg1);
    if (optionalArgs.optionalArg2) console.log(optionalArgs.optionalArg2);
    if (optionalArgs.optionalArg3) console.log(optionalArgs.optionalArg3);
  }

  receivesOptionBag('I am required!');
}

{
  // индивидуальные дефолты для отдельных параметров таким образом задать не получится, только для всех сразу
  function receivesOptionBag(
    requiredArg,
    optionalArgs = {
      optionalArg1: 'optionalArg1default',
      optionalArg2: 'optionalArg2default',
    },
  ) {
    console.log(requiredArg);
    if (optionalArgs.optionalArg1) console.log(optionalArgs.optionalArg1);
    if (optionalArgs.optionalArg2) console.log(optionalArgs.optionalArg2);
    if (optionalArgs.optionalArg3) console.log(optionalArgs.optionalArg3);
  }

  receivesOptionBag('I am required!', {
    optionalArg1: 'I am optional!',
    optionalArg3: 'I am optional too!',
  });
  // receivesOptionBag('I am required!');
  // дефолт для второго опционального аргумента не сработает, т.к. объект передан и дефолтный параметр не отрабатывает вообще
}

{
  // для задания индивидуальных дефолтов для отдельных параметров можно использовать деструктуризацию + дефолты
  function receivesOptionBag(
    requiredArg,
    {
      optionalArg1 = 'optionalArg1default',
      optionalArg2 = 'optionalArg2default',
      optionalArg3 = 'optionalArg3default',
    } = {},
  ) {
    console.log(requiredArg);
    console.log(optionalArg1);
    console.log(optionalArg2);
    console.log(optionalArg3);
  }

  receivesOptionBag('I am required!', {
    optionalArg1: 'I am optional!',
    optionalArg3: 'I am optional too!',
  });
}
