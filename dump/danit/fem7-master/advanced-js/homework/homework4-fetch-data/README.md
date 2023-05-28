## Теоретический вопрос
Обьясните своими словами, что такое AJAX и чем он полезен при разработке на Javascript. 

## Задание
Написать программу "Я тебя по айпи вычислю"

#### Технические требования:
- Создать простую HTML страницу с кнопкой `Вычислить по IP`.
- По нажатию на кнопку - отправить AJAX запрос по адресу `https://api.ipify.org/?format=json`, получить оттуда IP адрес клиента.
- Узнав IP адрес, отправить запрос на сервис `https://ip-api.com/` и получить информацию о физическом адресе.
- Под кнопкой вывести на страницу информацию, полученную из последнего запроса - континент, страна, регион, город, район города.

## Примечание
Задание должно быть выполнено на "чистом" Javascript без использования библиотек типа Jquery или React.

#### Литература:
- [Использование Fetch на MDN](https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch)
- [Fetch](https://learn.javascript.ru/fetch)
- [Документация сервиса ip-api.com](http://ip-api.com/docs/api:json)