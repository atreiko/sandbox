// как сделать из массива переменные?
const fullName = 'Edgar Allan Poe';

const arr = fullName.split(' ');
console.log(arr);

{
  const name = arr[0];
  const middleName = arr[1];
  const surname = arr[2];
  console.log(name);
  console.log(surname);
  // не самый удобный способ
}

{
  // деструктуризация:
  const [name, middleName, surname] = arr;
  console.log(name);
  console.log(surname);
}

{
  // можно пропускать значения
  const [firstName, , title] = [
    'Julius',
    'Caesar',
    'Consul',
    'of the Roman Republic',
  ];
  console.log(title);
}

{
  // работает с любым перебираемым (итерируемым) типом данных (как же как и оператор ...spread)
  const [firstLetter, secondLetter] = 'abc';
  console.log(firstLetter);
}

{
  /* удобно использовать с for..of и Object.entries */
  const user = {
    name: 'Petya',
    age: 30,
    occupation: 'Dan.IT student',
  };

  for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
  }
}

{
  // можно присваивать в уже существующие переменные
  // например, чтобы поменять местами значения двух переменных:
  let a = 1;
  let b = 3;

  [a, b] = [b, a];

  console.log(a);
  console.log(b);
}

/* можно использовать ...rest */
{
  const [one, two, ...rest] = [1, 2, 3, 4, 5];
  console.log(one);
  console.log(two);
  console.log(rest);
}

/* значения по умолчанию */
{
  let [a = 5, b = 7] = [1];
  console.log(a);
  console.log(b);
}

{
  // деструктуризация вложенных массивов
  const [a, b, c] = [1, ['foo', 'bar'], 2];
  console.log(a, b, c);
}
{
  // деструктуризация вложенных массивов
  const [a, [b, c], d] = [1, ['foo', 'bar'], 2];
  console.log(a, b, c, d);
}

// 🕮 <cyberbiont> 1d27f745-cb75-44a0-9e82-570c6f2bdc00.md
