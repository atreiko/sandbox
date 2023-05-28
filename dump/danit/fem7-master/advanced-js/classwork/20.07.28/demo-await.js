// промисифицированный setTimeout - эту функцию будем использовать далее в разных примерах
function getTimeoutPromise(time = 1000) {
  return new Promise(resolve => {
    setTimeout(() => resolve(1), time);
  });
}

/* Синтаксис async для разных типов функций */
{
  async function funcDecName() {}
  const funcExprName = async function () {};
  const arrowFuncName = async () => {};

  /* Асинхронные методы работают точно так же, как и функции */
  const obj = {
    async method() {},
  };

  class MyClass {
    async wait() {
      const result = await getTimeoutPromise();
      return result;
    }
  }
  // new MyClass().wait().then(console.log); // 1
}

/* внутри async-функции можно использовать ключевое слово await
ждет, пока промис справа от него не выполнится, и возвращает результат промиса
 */
{
  async function f() {
    const number = await getTimeoutPromise();
    const result = await getTimeoutPromise(number * 1000); // будет ждать, пока промис не выполнится (*)
    console.log(result); // "готово!"
  }
  // f();
}

// функция, перед объявлением которой стоит ключевое слово async, автоматически всегда возвращает промис

const examples = {
  value: {
    async value() {
      return 1;
    },

    async undef() {},
  },

  error: {
    async error() {
      throw new Error('error has been thrown!');
    },
  },

  await: {
    async rejected() {
      await Promise.reject(new Error('error has been thrown via await'));
      // генерирует ошибку примерно аналогично throw new Error (ошибку можно поймать с помощью try/ catch)
    },

    async resolved() {
      await Promise.resolve('was resolved initially');
      // генерирует ошибку примерно аналогично throw new Error (ошибку можно поймать с помощью try/ catch)
    },

    async pending() {
      await new Promise((resolve, reject) => {
        setTimeout(reject, 1000);
      });
      // ошибка будет брошена через 1с
    },

    async unthrown() {
      Promise.reject(new Error('эта ошибка не будет брошена'));
      // если нет await, ошибка не будет брошена, т.к. промис не выполняется и не возвращается
      // аналогично как если бы функция была пуста (воpвращается fulfilled промис со значением undefined)
    },
  },

  return: {
    async resolved() {
      const promise = Promise.resolve(1);
      console.log(promise);
      return promise;
    },

    async rejected() {
      const promise = Promise.reject(new Error('my error message'));
      console.log(promise);
      return promise;
    },

    async pending() {
      const promise = getTimeoutPromise();
      console.log(promise);
      return promise;
    },
  },
};

function logReturnValue(fn) {
  console.log(fn(), fn.name);
}

function runAndCatch(fn) {
  // т.к. возвращается промис, можем использовать .catch для перехвата ошибок в функции
  fn().then(console.log).catch(console.log);
}

/* Если возвращаем из async функции значение, оно оборачивается в fulfilled промис */
// runExample(examples.value.value);
// runExample(examples.value.undef);

/* Если возвращаем из async функции промис, он оборачивается в pending промис
То же самое, если внутри функции есть промисы, перед которыми стоит await
*/
logReturnValue(examples.return.resolved);
// logReturnValue(examples.return.pending);
// logReturnValue(examples.return.rejected);

/* Если функция выбрасывает ошибку, она оборачивается в rejected промис
этот rejected промис надо обработать с помощью .catch или await + try/catch
иначе будет сгенерирована глобальная ошибка unhandledrejection */
// logReturnValue(examples.error.error); // будет unhandledrejection
// runAndCatch(examples.error.error); // обработали, unhandledrejection не будет

/* если внутри функции есть промисы, перед которыми стоит await, возвращается pending промис
даже если это Promise.reject(), await об этом еще не знает
*/

logReturnValue(examples.await.resolved);
logReturnValue(examples.await.rejected);
logReturnValue(examples.await.pending);

// runAndCatch(examples.await.rejected);
// runAndCatch(examples.await.pending); // catch срабатывает через 1с
// runAndCatch(examples.await.resolved);
/* undefined, т.к. мы не возвращаем промис из функции,
соответственно значение, возвращаемое await, пропадает
 вместо того чтобы стать значением возвращаемого async-функцией промиса */

/* если перед промисом нет await, ошибка не будет генерирована, т.к. промис не выполнится */
// logReturnValue(examples.error.unthrown);

/* т.о. использование await в случае, если и так возвращается промис, излишне */
async function returnsPromise() {
  return getTimeoutPromise();
  // return await getTimeoutPromise(); // так делать не надо
}

/* async нельзя использовать на корневом уровне вложенности, т.к. снаружи не будет async-функции */
// const result = await getTimeoutPromise(); // SYNTAX ERROR

/* Можно обернуть этот код в IIFE, тогда будет работать */
(async () => {
  const result = await getTimeoutPromise();
})();

/* Обработка ошибок при использовании await */

// await promise "преобразует" промис в обычный синхронный код
// если промис завершается удачно - возвращается результат
// если промис отклонен - выбрасывается ошибка, т.е. неявно происходит throw new Error()
{
  {
    // поэтому ошибки в await ловим с помощью try / catch
    async function rejectsPromise() {
      try {
        await Promise.reject(new Error('Упс!'));
        // throw new Error('упс!'); // эффект тот же
      } catch (e) {
        console.log(e);
      }
    }
    // rejectsPromise();
  }

  {
    // ошибки на async-функции (если не поймали внутри) ловим с помошью .catch
    async function rejectsPromise() {
      await Promise.reject(new Error('Упс!'));
    }
    // rejectsPromise().catch(console.log);
  }

  {
    // или же опять await + try / catch
    async function rejectsPromise() {
      await Promise.reject(new Error('Упс!'));
    }

    // (async function () {
    //   try {
    //     await rejectsPromise();
    //   } catch (e) {
    //     console.log(e);
    //   }
    // })();
  }
}

/* Практический пример */

/*
Представьте себе ситуацию - вы чтобы получить информацию об отдельном товаре, вы отправляете AJAX-запрос по адресу "http://danit.com.ua/products/1" и в  ответ получаете с бэкэнда объект, описывающий товар. Это объет вида:
{
    "name": "Lenovo X120S",
    "category": 1
}
Вам нужно вывести товар на экран. Но вы же не можете вывести вместо категории ее номер! Поэтому вы должны
отправить еще один AJAX-запрос - на адрес "http://danit.com.ua/categories/:categoryID",
чтобы узнать название категории по номером 1.
А поскольку вы не знаете номер категории,
то вы должны сначала получить первый ответ (объект, описывающий товар),
взять из него поле category, и с его помощью отправить второй AJAX-запрос на адрес "http://danit.com.ua/categories/${category}".
То есть у вас будет AJAX-запрос внутри другого AJAX-запроса - а иначе нельзя, потому что второй запрос зависит от первого.
без async/await, с помощью then это выглядит так:
*/
function printProduct(product) {
  document.body.insertAdjacentHTML(
    'beforeend',
    `<p>Название: ${product.name}. Категория: ${product.category}`,
  );
}

function getProductUsingThen(url = 'http://danit.com.ua/products/1') {
  fetch(url)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      const { category } = result;
      // следующий fetch приходится вызывать внутри then
      fetch(`http://danit.com.ua/categories/${category}`)
        .then(response => response.json())
        .then(name => {
          const product = {
            name: result.name,
            category: name,
          };
          printProduct(product);
        });
    });
}

// await позволяет избавиться от вложенных запросов
async function getProductUsingAwait(url = 'http://danit.com.ua/products/1') {
  const response = await fetch(url);
  const productInfo = await response.json(); // в переменной productInfo будет хранится объект, описывающий товар, а не промис с режиме ожидаения
  const { category } = productInfo;

  const response2 = await fetch(`http://danit.com.ua/categories/${category}`); // используя полученный из переменной productInfo номер категории, формируем новый AJAX-запрос - но не внутри предыдущего, а после его
  const name = await response2.json(); // в переменную name сохранится строка с названием категории
  const product = {
    name: productInfo.name,
    category: name,
  };
  printProduct(product);
}

// getProductUsingThen();
// getProductUsingAwait();
