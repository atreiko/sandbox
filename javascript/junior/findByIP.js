// Написать программу "Я тебя по айпи вычислю" с использованием конструкции async/ await

// Технические требования:

// Создать простую HTML страницу с кнопкой Вычислить по IP.
// По нажатию на кнопку - отправить AJAX запрос по адресу https://api.ipify.org/?format=json, получить оттуда IP адрес клиента.
// Узнав IP адрес, отправить запрос на сервис https://ip-api.com/ и получить информацию о физическом адресе.
// Под кнопкой вывести на страницу информацию, полученную из последнего запроса - континент, страна, регион, город, район города.


const body = document.querySelector('body')
const btn = document.createElement('button')
const wrapper = document.createElement('div')

body.style.cssText = `
    box-sizing: border-box;
    margin: 0;
    padding: 0;
`;

wrapper.style.cssText = `
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #eee;
`;

btn.style.cssText = `
    padding: 1rem;
    font-weight: bold;
`
btn.innerText = `Вычислю по IP!`

body.appendChild(wrapper)
wrapper.appendChild(btn)

async function findByIP() {
    const response = await fetch('https://api.ipify.org/?format=json')
    const data =  await response.json()

    const positionResponse = await fetch(`http://ip-api.com/json/${data.ip}?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city`);
    const infoLocation = await positionResponse.json();
    console.log(infoLocation);

    for (let [key, value] of Object.entries(infoLocation)) {
        console.log(key, value);

        const ul = document.createElement('ul')
        wrapper.appendChild(ul)

        const li = document.createElement('li')
        li.style.cssText = `
            list-style: none;
        `
        li.innerHTML = `${key}: ${value}`

        ul.appendChild(li)
    }
}

btn.addEventListener('click', findByIP)


