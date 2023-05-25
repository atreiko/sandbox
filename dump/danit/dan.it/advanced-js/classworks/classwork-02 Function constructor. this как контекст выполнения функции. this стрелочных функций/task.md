/\*

TASK 1

-  Напишите функцию-конструктор, создающую объект, реализующий такой функционал:
   у нас на странице есть вопрос. Пр первом клике на него под ним открывается
   ответ на вопрос. При повтором - ответ прячется. Разметку вы найдете в
   файле.--> <a href="" class="question">Девиз дома Баратеонов</a>-->

       <div id="root"></div>

           const questionText = "Девиз дома Баратеонов";
           const questionAnswer = "Нам ярость!";

\*/

/\* TASK 2

-  Создайте функцию-конструтор объекта `stopwatch` согласно описанию: 1.
   Свойства объекта: - `_time`: время; - `container`: ссылка на DOM-элемент,
   внутри которого нужно выводить время. 1. Методы объекта: - `start`, `stop`,
   `reset`, работающие с его свойствами. - `setTime` и `getTime`. `setTime`
   будет получать новое значение времени в качестве аргумента, и проверять,
   является ли оно положительным целым числом. Если да - то свойству `_time`
   будет присвоено значение аргумента, переданного в метод `setTime` и метод
   вернет ответ объект вида: `{ status: "success", }`

       Если же аргумент не удовлетворяет критериям, то возвращать объект вида:
       ```
       {
       status: "error",
       message: "argument must be positive integer"
       }
       ```
       Метод же `getTime` будет просто возвращать значение свойства `_time` для использования его вне методов объектов.

       <p id="time"></p>
       <button id="start-time">Start</button>
       <button id="stop-time">Stop</button>
       <button id="reset-time">Reset</button>


          function Stopwatch(container) {


          }

          const startBtn = document.getElementById('start-time');
          const stopBtn = document.getElementById('stop-time');
          const resetBtn = document.getElementById('reset-time');

          const stopWatchContainer = document.getElementById('time');
          const stopwatch = new Stopwatch(stopWatchContainer);

          startBtn.addEventListener('click', stopwatch.start.bind(stopwatch));
          stopBtn.addEventListener('click', stopwatch.stop.bind(stopwatch));
          resetBtn.addEventListener('click', stopwatch.reset.bind(stopwatch));

\*/
