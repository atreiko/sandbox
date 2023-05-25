'use strict';

const btn = document.querySelector('#find__btn');
console.log(btn);
const find = document.querySelector('.find');
const ul = document.createElement('ul');
ul.classList.add('find__list')

btn.addEventListener('click', getIp);

function getIp(event) {
    event.preventDefault()
    fetch('https://api.ipify.org/?format=json')
        .then(response => {
            return response.json()
        })
        .then(result => {
            const ip = result.ip;
            console.log(ip);
            return ip;
        })
        .then((ip) => {
            fetch(`http://ip-api.com/json/${ip}`)
                .then(response => {
                    return response.json()
                })
                .then(result => {
                    console.log(result);
                    ul.innerHTML = `<li> Continent: ${result.timezone}</li>
                    <li> Country: ${result.country}</li>
                    <li> Region: ${result.region}</li>
                    <li> City: ${result.city}</li>
                    <li> District: ${result.zip}</li>`;
                    find.append(ul);
                })
        })
}