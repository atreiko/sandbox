'use strict';

const books = [{
        author: "Скотт Бэккер",
        name: "Тьма, что приходит прежде",
        price: 70
    },
    {
        author: "Скотт Бэккер",
        name: "Воин-пророк",
    },
    {
        name: "Тысячекратная мысль",
        price: 70
    },
    {
        author: "Скотт Бэккер",
        name: "Нечестивый Консульт",
        price: 70
    },
    {
        author: "Дарья Донцова",
        name: "Детектив на диете",
        price: 40
    },
    {
        author: "Дарья Донцова",
        name: "Дед Снегур и Морозочка",
    }
];

const root = document.querySelector('#root');

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function createElement(arr) {
    arr.map((item) => {
        if (item.hasOwnProperty('author') && item.hasOwnProperty('name') && item.hasOwnProperty('price')) {
            const ul = document.createElement('ul');
            ul.classList.add('js-list')

            const { author, name, price } = item;
            ul.innerHTML = `<li class="js-list-item">${author}</li>
                <li class="js-list-item">${name}</li>
                <li class="js-list-item">${price}</li>`;
            root.append(ul);
        }
        try {
            if (!item.hasOwnProperty('author')) {
                throw new ValidationError(`Property 'author' is not specified. Please enter correct data and try again!`);
            }
            if (!item.hasOwnProperty('name')) {
                throw new ValidationError(`Property 'name' is not specified. Please enter correct data and try again!`);
            }
            if (!item.hasOwnProperty('price')) {
                throw new ValidationError(`Property 'price' is not specified. Please enter correct data and try again!`);
            }
        } catch (error) {
            if (error instanceof ValidationError) {
                console.log('Incorrect data: ' + error.message);
                console.log(error.name);
            } else {
                throw error;
            }
        }
    })
}

createElement(books);