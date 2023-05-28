// https://medium.com/@ankitkamboj18/is-javascript-synchronous-or-asynchronous-what-the-hell-is-a-promise-302ee008dfcd
/* ТЕРМИНОЛОГИЯ

Синхронный - выполняющийся "с оглядкой" на другой код, в определенном порядке.
  обычно имеется в виду означает, что инструкции в коде выполняются последовательно, в том порядке,  котором прописаны.

Асинхронный - выполняющийся независимо от основного кода.
  Такой код выполняется параллельно с основным (в другом потоке) и позволяет "разгрузить" освноной поток и ускорить общее время выполнения кода
  например, атрибут async означает параллельную загрузку скрипта без привязки к основному процессу парсинга страницы

Однопоточный (single-threaded) - задействующий только одно ядро процессора для вычислений.
  это означает, что одновременно может выполняться только одна операция.
  "can do 1 thing at a time" - может делать одну вещь одновременно
  Основной движок Javascript ("runtime" - например, V8) сам по себе однопоточен.
  Признаком этого является наличие только 1-го call stack,
  внутри которого все добавленные в него элементы выполняются синхронно.

  Однако, есть т.н. Web APIs - по сути дела это отдельное приложение, написанное на JS,
  но которое выполняется в отдельном потоке и может взаимодействовать с основным движком JS (V8)
  WebAPI являются DOM, SetTimeout, AJAX и т.д, они предоставляются браузером, т.е. браузер содержит движок, содержит определенные WebAPI и позволяет им взаимодействовать
  так что все API доступны в JS в виде глобальных объектов.

  Node.JS тоже содержит движок V8 + вместо WebAPI C++ API(например, для операции доступа к диску - чтение / запись файлов - являются отдельным API)
  И вот методы этих API являются асинхронными, потому что могут выполняться независимо в отдельном потоке.

  - все обработчики относятся к DOM и они тоже живут в WEBAPI добавляются в очередь
  - setTimeout не гарантирует мгновенного выполнения, если call stack будет занят к моменту, когда будильник сработает, коллбэк выполнится позже

  Мы не можем точно знать, когда завершится выполнение асинхонного кода, например, при получении с сервера
  это может занять разное время в зависимости от скорости сети.
  И нет способа определить из основного потока, когда асинхронный код закончит работу.
  Поэтому если мы хотим запланировать выполнение какого-то кода после окончания асинхронной функции, мы должны передать его как в асинхронную функцию как коллбэк,
  чтобы этот код мог вызвать наш коллбэк, когда закончит работу.

Блокирование - ожидание конца выполнения какой-либо операции (в этот момент не можем предпринимать больше никких действий, они не будут обрабатываться)
non-blocking.

// 🕮 <cyberbiont> 63c38f70-83bf-47fa-b527-c400762d742b.md
*/

/* мы не хотим ждать, пока закончится процесс, отнимающий время (в данном случае ожидание 5с)
сразу переходим к выполнению следующего кода, а функции, который мы хотим выполнить после процесса
передаем как коллбэк, и через какое-то время она выполняется, когда процесс закончится */

// коллбэк
function callbackExample() {
  console.log('Hi');
  // setTimeout работает асинхронно, основной код не ждет его выполнения и переходит сразу к выполнению console.log('fem7')
  setTimeout(() => console.log('There'), 5000);
  // код, который мы хотим, чтобы выполнился после отработки асинхронного кода (в данном случае, его работа состоит в том, чтобы отсчитать 5 с) мы передаем как функцию-коллбэк и асинхронный код ее вызовет, когда закнчит считать
  console.log('fem7');
}
// callbackExample();

/* Как из асинхронного кода сообщить, все ли прошло удачно или код завершился с ошибкой?
callback обычно принимает два аргумента, первый - ошибка (если она произошла, иначе null)
и второй - результат.
потом внутри коллбэка мы можем проверить, с какими аргументами он был вызван и среагировать как надо */

// что, если наш коллбэк тоже асинхронный, и после него тоже надо сделать какую-то работу?

function callbackHellExample() {
  console.log('Hi');

  setTimeout(function callback() {
    console.log('1st setTimeout finished');

    setTimeout(function callback() {
      console.log('2nd setTimeout finished');

      setTimeout(function callback() {
        console.log('3rd setTimeout finished');
      }, 5000);
    }, 2000);
  }, 3000);
}
// callbackHellExample();
// 🕮 <cyberbiont> cd5eb9f5-bd0d-4f90-8be3-4c4ac85d3f75.md
// 🕮 <cyberbiont> 0454dfe9-e491-46d7-8692-aed634f61660.md

/* чтобы с этим как-то бороться, придумали более удобный способ управления асинхронным кодом - Promises
Promise это специальный объект, который связывает асинхронный ("создающий") код и синхронный ("потребляющий")
вместо того, чтобы принимать функцию снаружи и потом вызывать ее (callback),
асинхонный код сам возвращает нам специальный объект, который выступает "посредником":
с одной стороны, у него есть ссылка на коллбэк, который он отдает в асинхронный код,
а с другой стороны, внешний (синхронного) код может использовать этот объект, чтобы узнать, закончил ли работу асинхронный код по статусу объекта (промиса)
*/
// 🕮 <cyberbiont> 9031e863-da72-45d6-9eed-fe026580650a.md

function basicExample() {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('done!'), 1000);
  });

  // resolve запустит первую функцию, переданную в .then
  // вторым аргументом then может принимать функцию, использующуюся для обработки, если возникает ошибка (Промис получил состояние 'rejected')
  promise.then(
    (result) => console.log(result), // выведет "done!" через одну секунду
    (error) => console.log(error), // не будет запущена
  );
}
// basicExample();

// Схема работы Promise (внутреннее устройство объекта)
/* promise1 = {
  status: "Pending".
  result: undefined,
  resolve(resultValue) {
      this.status = "fullfiled"; // выполнен корректно
      this.result = resultValue;
  },
  reject(errMessage) {
      this.status = "rejected"; выполнен с ошибкой
      this.result = errMessage;
  }
}; */

function visaExample() {
  function getVisa(passport) {
    return new Promise(function (resolve, reject) {
      // функция-исполнитель (executor)
      // внутри происходит что-то асинхронное, например, setTimeout
      const forbiddenNames = ['Rick', 'Morty'];

      setTimeout(function checkDocuments() {
        // ждем проверки документов
        // когда мы заканчиваем выполнение, мы должны вызвать или resolve, или reject
        if (passport.isValid && !forbiddenNames.includes(passport.name))
          resolve({
            type: 'visa',
            name: passport.name,
          });
        else
          reject(
            new Error(
              'visa request rejected, your passport is not valid or your name is on the forbidden list',
            ),
          );
      }, 3000);
    });
  }

  getVisa({
    name: 'Joe',
    isValid: true,
  })
    .then((visa) => {
      // показываем готовую визу друзьям
      console.log(visa);
      return visa;
    })
    /* вызов then тоже (неявно) возвращает промис (см. подсказку Intellisense)
    - успешно завершенный с результатом, который вернул сallback через return,
    или отклоненный, если возникла ошибка, с результатом ошибки */
    .then((visa) => {
      const money = 3000;
      // показываем шефу визу, берем отпуск на работе и получаем отпускные
      if (!visa) throw new Error('вам не дали отпуск!');
      else return money;
    })
    // ... бронируем отель...
    .then((money) => {
      if (!money) throw new Error('не хватает денег на билеты!');
      // покупаем билеты
      const ticket = {
        type: 'ticket',
        timeToFlight: 2000,
      };
      return ticket;
    })
    .then((ticket) => {
      // ждем рейса
      // обработчик then в свою очередь может явно возвращать новый промис,если в нем что-то происходит асинхронно
      // setTimeout принимает callback, но промис сама по себе не возвращает, поэтому мы это делаем сами
      return new Promise((resolve, reject) =>
        setTimeout(() => {
          ticket.timeToFlight = 0;
          // confirm
          resolve(ticket);
        }, ticket.timeToFlight),
      );
    })
    .then((ticket) => {
      if (!ticket) throw new Error('нельзя лететь без билета!');
      else console.log('Вы в самолете!');
      // летим!
    })
    .catch((error) => {
      // обрабатываем ошибку, если что-то пошло не так
      // сюда пробрасываются ошибки из всей цепочки, где бы ошибка не возникла
      console.log(error);
    })
    .finally(() => {
      // запостить в фейсбук историю как вы пытались слетать в отпуск
    });

  /* getVisa({
    name: 'Joe',
    isValid: true,
  })
    .then(getMoney)
    .then(buyTicket)
    .then(fly);

  function getMoney(visa) {
    if (visa) return 1000;
    else throw new Error('вам не дали отпуск!');
  }

  function buyTicket(money) {
    if (money >= 1000) return 'ticket';
    else throw new Error('не хватает денег на билеты!');
  }

  function fly(ticket) {
    if (ticket) console.log('Вы в самолете!');
    else throw new Error('нельзя лететь без билета!');
  } */
}
// visaExample();

/* PROMISE API */
/* Promise.all, Promise.allSettled, Promise.race, Promise.resolve, Promise.reject */

/* Promise.all */
// имеется массив данных, надо выполнить с каждым элементом массива операции параллельно
const arr = [
  { name: 'a', time: 2000 },
  { name: 'b', time: 1000 },
  { name: 'c', time: 3000 },
];
const results = Promise.all(
  arr.map((elem) => {
    return new Promise((res) => setTimeout(() => res(elem.name), elem.time));
  }),
).then((result) => console.log(result));

/* Promise.race вернет только 'b', т.к. тот выполнится первым */
console.log(results); // pending

/* Promise.resolve
имеет смысл использовать для "оборачивания" результата в промис,
чтобы унифицировать интерфейс */
{
  const cache = new Map();

  // эта функция должна возвращать промис в любом случае, мы хотим быть уверены, что можем приерпить .then к ее результату
  function loadCached(url) {
    // но вероятен сценарий когда результат получаем напрямую, а не в виде промиса
    // тогда оборачиваем в промис самостоятельно
    if (cache.has(url)) {
      return Promise.resolve(cache.get(url)); // (*)
    }

    return fetch(url)
      .then((response) => response.text())
      .then((text) => {
        cache.set(url, text);
        return text;
      });
  }

  // loadCached.then((result) => console.log(result));
}
