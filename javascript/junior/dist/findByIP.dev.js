"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Написать программу "Я тебя по айпи вычислю" с использованием конструкции async/ await
// Технические требования:
// Создать простую HTML страницу с кнопкой Вычислить по IP.
// По нажатию на кнопку - отправить AJAX запрос по адресу https://api.ipify.org/?format=json, получить оттуда IP адрес клиента.
// Узнав IP адрес, отправить запрос на сервис https://ip-api.com/ и получить информацию о физическом адресе.
// Под кнопкой вывести на страницу информацию, полученную из последнего запроса - континент, страна, регион, город, район города.
var body = document.querySelector('body');
var btn = document.createElement('button');
var wrapper = document.createElement('div');
body.style.cssText = "\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n";
wrapper.style.cssText = "\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background-color: #eee;\n";
btn.style.cssText = "\n    padding: 1rem;\n    font-weight: bold;\n";
btn.innerText = "\u0412\u044B\u0447\u0438\u0441\u043B\u044E \u043F\u043E IP!";
body.appendChild(wrapper);
wrapper.appendChild(btn);

function findByIP() {
  var response, data, positionResponse, infoLocation, _i, _Object$entries, _Object$entries$_i, key, value, ul, li;

  return regeneratorRuntime.async(function findByIP$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch('https://api.ipify.org/?format=json'));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(response.json());

        case 5:
          data = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(fetch("http://ip-api.com/json/".concat(data.ip, "?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city")));

        case 8:
          positionResponse = _context.sent;
          _context.next = 11;
          return regeneratorRuntime.awrap(positionResponse.json());

        case 11:
          infoLocation = _context.sent;
          console.log(infoLocation);

          for (_i = 0, _Object$entries = Object.entries(infoLocation); _i < _Object$entries.length; _i++) {
            _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
            console.log(key, value);
            ul = document.createElement('ul');
            wrapper.appendChild(ul);
            li = document.createElement('li');
            li.style.cssText = "\n            list-style: none;\n        ";
            li.innerHTML = "".concat(key, ": ").concat(value);
            ul.appendChild(li);
          }

        case 14:
        case "end":
          return _context.stop();
      }
    }
  });
}

btn.addEventListener('click', findByIP);