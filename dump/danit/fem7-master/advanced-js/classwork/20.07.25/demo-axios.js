/* eslint-disable no-undef */
// fetch

function example1() {
  fetch('https://danit.com.ua/free-towns-list-json')
    .then((response) => {
      return response.json();
    })
    .then((result) => console.log(result));

  // axios
  axios.get('https://danit.com.ua/free-towns-list-json').then((response) => {
    // console.log(response);
    console.log(response.data);
    // автоматически записывает результат в св-во data,
    // нет необходимости вызывать response.json()
  });
}
// example1();

function example2() {
  fetch('http://danit.com.ua/dragons-list-jsn')
    .then((response) => {
      if (!response.ok) throw new Error(`Код ответа - неправильный`);
      return response.json();
    })
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

  axios
    .get('http://danit.com.ua/dragons-list-jsn')
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
}
// example2();

function example3() {
  fetch('http://danit.com.ua/login', {
    method: 'POST',
    body: JSON.stringify({
      login: 'Mandor',
      password: 'Savall',
    }),
  })
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

  axios
    .post('http://danit.com.ua/login', {
      login: 'Mandor',
      password: 'Savall',
    })
    // автоматически конвертирует в JSON, нет необходимости вызывать JSON.stringify
    // .post это отдельный метод, а не свойство в опциях
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
}
// example3();

function example4() {
  fetch('https://jsonplaceholder.typicode.com/todos/100000')
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then((data) => console.log('data', data))
    .catch((error) => {
      console.log('error', error);
    });
  // error Error: Not Found

  axios
    .get('https://jsonplaceholder.typicode.com/todos/100000')
    .then((response) => {
      console.log('response', response);
    })
    .catch((error) => {
      console.log('error', error);
    });
  //
}
// example4();

function example5() {
  // позволяет создавать инстансы класса с определенными настройками
  const req = axios.create({
    baseURL: 'http://danit.com.ua',
  });

  req
    .get('/westeros-great-houses-json')
    .then((response) => console.log('response', response.data));

  req
    .get('/free-towns-list-json')
    .then((response) => console.log('response', response.data));
}
example5();
