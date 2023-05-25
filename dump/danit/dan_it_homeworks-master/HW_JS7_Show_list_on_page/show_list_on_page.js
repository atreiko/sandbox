'use strict';

const array = ['hello', 'world', 'Kiev', ['my', 'town'], 'Kharkiv',
    { "name": "item 1" },
    { "name": "item 2" },
    { "name": "item 3" },
    { "name": "item 4" },
    'Odessa', 'Lviv',
];

const container = document.createElement('div');

document.body.prepend(container);
container.style.cssText = `
    font-size: 25px;
    font-weight: bold;
    background: coral;`

function showOnListPage(arr) {
    let elem = arr.map((item) => {
        let li;

        if (Array.isArray(item)) {
            li = `<li> ${showOnListPage(item)} </li>`;
        } else if (typeof item === 'object') {
            let entries = Object.entries(item).map(([key, value]) => `${key} : ${value}`);
            li = `<li>${showOnListPage(entries)}</li>`;
            console.log(entries);
        } else {
            li = `<li>${item}</li>`;
        }
        return li;
    }).join('')
    let ul = `<ul>${elem}</ul>`;
    return ul;
}

container.innerHTML = showOnListPage(array);

let intervalId;

function createTimer(duration, display) {
    let timer = duration - 1;
    let seconds;
    display.textContent = duration;
    intervalId = setInterval(function() {
        seconds = parseInt(timer % 60, 10);
        if (seconds < 10) {
            seconds = "0" + seconds;
        } else {
            seconds = seconds;
        }
        display.textContent = seconds;
        if (--timer < 0) {
            clearInterval(intervalId);
            container.innerHTML = '';
        }
    }, 1000);
}

window.onload = function() {
    let tenSeconds = 60 / 6;
    let display = document.createElement('div');
    container.append(display);

    display.style.cssText = `
    border: 2px solid red;
    background: blue;
    color: white;
    display: inline-block;
    padding: 10px;
    font-size: 30px;`

    createTimer(tenSeconds, display);
}