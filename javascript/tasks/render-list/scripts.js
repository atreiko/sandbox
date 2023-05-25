const books = [
    {
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

const container = document.querySelector('.container')
const ul = document.createElement('ul')

container.prepend(ul)

function renderList(obj) {
    const { author, name, price } = obj;
    let count = 0;
    for (k in obj) if (obj.hasOwnProperty(k)) count++;

    let li = `<li class='first'>${name}<ul><li class='second'>Author: ${author}</li><li class='third'>Price: ${price}</li></ul></li>`;

    try {
        if(!name || !price || !author)  throw new Error('Incomplete data')
    } catch (error) {
        console.log(error.message)
    }

    ul.innerHTML += li
}

books.forEach(obj => renderList(obj))
