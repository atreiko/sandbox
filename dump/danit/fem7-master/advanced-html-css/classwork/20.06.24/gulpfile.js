/* импортируем gulp для доступа к его методам */
const gulp = require('gulp');

/* функция, которая станет таском */
async function hello() {
  console.log('hello bro!');
}

/* устаревший способ объявления тасков - через gulp.task */
gulp.task('oldschool', hello);

/* современный способ - все функции, которые экспортируются из gulpfile.js, становится таском
нужно экспортировать функцию, иначе будет ошибка */
exports.hello = hello;

const test1 = (done) => {
  // throw new Error('error in test');

  let count = 3;
  const counter = setInterval(() => {
    console.log(`test 1: ${count}`);
    if (count === 0) {
      clearInterval(counter);
      console.log('done');
      done();
    } else count--;
  }, 1000);
};

const test2 = (done) => {
  let count = 3;

  const counter = setInterval(() => {
    console.log(`test 2: ${count}`);
    if (count === 0) {
      clearInterval(counter);
      console.log('done');
      done();
    } else count--;
  }, 1000);
};

exports.test1 = test1;
exports.test2 = test2;

/* "составные" таски - подзадачи будут выполняться параллельно (одновременно) или последовательно */
exports.ser = gulp.series(test1, test2);
exports.par = gulp.parallel(test1, test2);

// стандартный синтаксис задач по обработке файлов
function myGulpTask() {
  return gulp.src('source_files_glob') // путь к файлам-исходникам
  .pipe(plugin_name()) // прогоняем их через плагин
  .pipe(gulp.dest('destination_directory_glob')) // путь к папке, куда помещаем конечные файлы
}

// Gulp сам только ставит задачи, находит и перемещает файлы - все остальное за него делают другие модули
function move() {
  return gulp.src(['./src/**/*.html']) // путь к файлам-исходникам
  .pipe(gulp.dest('./dist')); // путь к папке, куда помещаем конечные файлы
}

function watch() {
  gulp.watch('./src/**/*.html', move);
  console.log('watching for files...')
  /* эта задача как бы "подвисает" и не заканчивается, пока мы ее вручную не "убьем" т.к. она в фоновом режиме следит за файлами */
  /* поэтому в series после watch ставить что-то еще бесполезно, до такой задачи очеедь не дойдет и она не выполнится */
}

exports.move = move;
exports.watch = watch;
