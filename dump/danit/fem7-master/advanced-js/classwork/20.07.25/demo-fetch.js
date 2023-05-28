// Fetch - это встроенный метод для отправки запросов на сервер, который возвращает промисы

// например, можно подгружать и выводить какую-то информацию по мере необходимости
// или подгружать части страницы в зависимости от каких-то условий (в.т.ч. устройства)
// или при прокрутке подгружать товары из длинного каталога

function getExample() {
  // сетевую активность можно посмотреть в devTools на вкладке network - XHR
  const request = fetch('https://danit.com.ua/dragons-list-json');
  // если напрямую пройдем по ссылке в браузере, увидим результат

  // получили промис в состоянии 'Pending'
  console.log(request);

  request
    .then((response) => {
      // промис выполнился (сервер прислал заголовки ответа). Можно проверить статус
      // console.log(response);
      if (!response.ok) throw new Error('Страница не найдена');
      // сам контент содержится в св-ве body, но чтобы получить его в удобном нам виде, надо использовать один из методов, например, .json()
      return response.json(); // считываем body как json (результат аналогичен JSON.parse)
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}
getExample();
// отправка POST-запроса

function postExample() {
  fetch('http://danit.com.ua/login', {
    method: 'POST',
    body: JSON.stringify({
      login: 'Mandor',
      password: 'Savall',
    }),
  })
    .then((response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
// postExample()
