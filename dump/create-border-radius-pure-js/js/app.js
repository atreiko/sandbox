// Inputs Ranges //

const rangeTl = document.getElementById('tlr'),
  rangeTr = document.getElementById('trr'),
  rangeBl = document.getElementById('blr'),
  rangeBr = document.getElementById('brr');
//===============================================

// Inputs Results //

const resultTl = document.getElementById('result-tlr'),
  resultTr = document.getElementById('result-trr'),
  resultBl = document.getElementById('result-blr'),
  resultBr = document.getElementById('result-brr');
//===============================================

const input = document.querySelectorAll('.input');
const cube = document.getElementById('cube');
const total = document.getElementById('totalResult');
const btn = document.getElementById('btn');

// == innerHTML - то, что находится внутри div (содержание)
// Функция, которая меняет значение нашего input (value = 0)
// в зависимости от позиционирования нашего ренжа:
const changeRadius = () => {
  resultTl.innerHTML = rangeTl.value;
  resultTr.innerHTML = rangeTr.value;
  resultBl.innerHTML = rangeBl.value;
  resultBr.innerHTML = rangeBr.value;

  // Обращаемся к cube и заходим в CSS свойство style,
  // а в нем находим свойство border-radius
  // ! Значения углов записываем как в CSS по часовой стрелке
  // Последовательность: range-top-left -> range-top-right -> range-bottom-right -> range-bottom-left
  cube.style.borderRadius =
    rangeTl.value + 'px ' + rangeTr.value + 'px ' + rangeBr.value + 'px ' + rangeBl.value + 'px';
};

const totalResult = () => {
  total.innerHTML =
    rangeTl.value + ' ' + rangeTr.value + ' ' + rangeBr.value + ' ' + rangeBl.value + ' ';
};

for (node of input) {
  node.addEventListener('input', changeRadius);
}

btn.addEventListener('click', totalResult);
