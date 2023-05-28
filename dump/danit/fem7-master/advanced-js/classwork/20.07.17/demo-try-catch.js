// undefinedObject.foo();

// Конструкция try...catch позволяет "отлавливать" ошибки в коде и продолжать выполнение кода, если ошибка произошла
// саму ошибку можно обработать в блоке catch используя информацию, которая передается с первым аргументом (объект ошибки)
try {
  // undefinedObject.foo();
  throw new Error('error happened!');
} catch (err) {
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
}
/* JavaScript-движок сначала читает код, а затем исполняет его.
Ошибки, которые возникают во время фазы чтения, называются ошибками парсинга.
 Их нельзя обработать (изнутри этого кода), потому что движок не понимает код.
Таким образом, try..catch может обрабатывать только ошибки, которые возникают в корректном коде.
Такие ошибки называют «ошибками во время выполнения», а иногда «исключениями». (exceptions) */

// см. в дебаггере VScode объект ошибки
// caught exceptions
// uncaught exceptions

console.log('Continue execution');

// Блок try & catch можно использовать, если мы предполагаем, что код может отработать неправильно
// например, мы обрабатываем какие-то внешние данные, которые зависят не от нас, полученные с сервера или через prompt от пользователя

/* Свои ошибки */
// let error = new ReferenceError(message);
// собственные ошибки удобно использовать, чтобы обработать потом где-то в другом месте

// если наткнулись на баг (т.е. обнарудили вероятность ошибки в данном месте)
// в функции добавляем проверку и бросаем ошибку
function erraneous(arg) {
  if (!arg) throw new Error('argument is undefined');
  if (!(typeof arg === 'number' && isFinite(arg)))
    throw new Error('argument must be a number');
  console.log(arg);
}

// в другом месте кода, там, где выполняем непосредственно используем функцию erraneous
function usesErraneous(arg) {
  // prompt user for data
  const receivedData = arg;
  try {
    erraneous(receivedData);
  } catch (e) {
    console.log(e);
    if (e.message === 'argument must be a number')
      console.error('invalid argument passed');
    else throw e;
    // если неизвестная ошибка или ошибка, которую мы хотим обработать выше в коде, пробрасываем
  }
}

try {
  usesErraneous('334');
  usesErraneous();
} catch (e) {
  // обрабатываем все проброшенные ошибки на верхнем уровне
  console.log(e);
}

// блок finally
// срабатывает всегда. код внутри finally гарантированно выполняется,
// даже если внутри try произошел return или throw (что должно было бы привести к моментальному выходу из функции, внутри которой прописан try & catch)

{
  function example() {
    let num = 35;

    let diff, result;

    function fib(n) {
      if (n < 0 || Math.trunc(n) != n) {
        throw new Error('Должно быть целое неотрицательное число');
      }
      return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    }

    let start = Date.now();

    try {
      result = fib(num);
    } catch (e) {
      result = 0;
    } finally {
      diff = Date.now() - start;
    }

    console.log(result || 'возникла ошибка');
    console.log(`Выполнение заняло ${diff}ms`);
  }
  example();
}

// window.onerror
// process.on("uncaughtException")
