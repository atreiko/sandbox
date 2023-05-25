import {
    VisitCardiologist,
    VisitDentist,
    VisitTherapist,
} from "./doctors/index.js";
import { getAllCards } from "./ajax/ajax.js";

import { CreateBtn, EnterBtn } from "./forms/components/buttons.js";

//---------cоздание кнопки войти ----------------

document.addEventListener("DOMContentLoaded", onLoad);

function onLoad() {
    const token = sessionStorage.getItem("token");
    const btnContainer = document.querySelector(".header__buttons");

    if (!token) {
        btnContainer.append(EnterBtn);
    } else {
        btnContainer.append(CreateBtn);
    }
}

//---------------------создание карточек----------------------

function renderCards(data) {
    switch (data.doctor) {
        case "Терапевт":
            new VisitTherapist(data).render();
            break;
        case "Кардиолог":
            new VisitCardiologist(data).render();
            break;
        case "Дантист":
            new VisitDentist(data).render();
            break;
    }
}

const filterBtn = document.querySelector(".filter__btn");

filterBtn.addEventListener("click", async(ev) => {
    const inputSearch = document.querySelector(".filter__search").value;
    const statusVisit = document.querySelector("#time-select").value;
    const priorityVisit = document.querySelector(".filter__time > select").value;
    clearCards()
    const response = await getAllCards();

    response.data.forEach((el) => {
        const status =
            new Date() < new Date(el["date-visit"]) ? "Открыт" : "Завершен";
        const { time, ...rest } = el;

        if (time === priorityVisit && statusVisit === status) {
            if (inputSearch) {
                Object.values(rest).filter((item) => {
                    if (item === inputSearch) renderCards(el);
                });
            }
            if (!inputSearch) renderCards(el);
        }
    });
});

function clearCards() {
    const container = document.querySelector(".visit, .container");
    container.querySelectorAll(".visit-cards").forEach((card) => card.remove());
    container.querySelector('.visit__title').classList.toggle('hidden')
}
const clearBtn = document.querySelector(".filter__btn-clr");
clearBtn.addEventListener("click", clearCards);

// ------------удаление модалок вне клика на них-----------------

let modal = document.querySelector('.modal');
modal.addEventListener('click', (e) => {
    let modalWindow = document.querySelector('.modal-window');

    if (e.target.className === "modal") {
        modal.style.display = 'none';
        modalWindow.remove();
        document.body.classList.remove('scroll-hidden');
    }
})

export default renderCards;