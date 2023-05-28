function getAge(birthday) {
  const birthdayArr = birthday.split('.');
  //  простым вариантом было бы:
  //   if (birthdayArr.length !== 3) {
  //     return false;
  //   }

  try {
    const birthdayArr = birthday.split('.');
    console.log(birthdayArr);
    if (birthdayArr.length !== 3) {
      throw new SyntaxError('Неправильный формат, должен быть: дд.мм.гггг');
    }
  } catch (err) {
    if (err.name === 'SyntaxError') {
      console.log('Неправильный формат данных');
    }
    throw err;
    // return e;
  }
  return birthdayArr;
}
/*
создание объекта = {}
спрашиваешь день рождения
    вызываешь функцию которая превращает день рождения в возраст
    гггг, мм, дд
        функция считающая возраст внутри себя вызывает функцию конвертации строки в правильный формат
        если функция вернула ошибку, то ты создаешь свою ошибку и пробрасываешь ее вверх
        свои же собственные ошибки функция вычисления возраста пробрасывает вверх
*/
try {
  const birthday = prompt('Введите ваш день рождения');
  // if(!birthday) {
  //     throw new Error("Поле не заполнено!");
  // }
  const age = getAge(birthday);
  // throw new Error
  // if(!age) {
  //     throw new SyntaxError("Неправильный формат, должен быть: дд.мм.гггг");
  // }
  // throw e;
} catch (error) {
  if (error.message === 'Поле не заполнено!') {
    const birthday = prompt('Введите данные!');
  } else {
    const birthday = prompt('Введите данные в правильном формате!');
  }
  console.log(`Произошла ошибка ${error.name}. Подробнее - ${error.message}`);
}
