import Element from "./element.js";
import VisitModal from "../../modals/visitModal.js";
import LoginModal from "../../modals/loginModal.js";

const createVisitWindow = document.querySelector(".modal");
const visitModal = new VisitModal().render();

const CreateBtn = new Element({
    tag: "button",
    content: "Создать визит",
    class: "btn-list__item btn-list__item--create",
}).render();

const EnterBtn = new Element({
    tag: "button",
    content: "Войти",
    class: "btn-list__item btn-list__item--sign-in",
}).render();
EnterBtn.addEventListener("click", () => {
    const loginModal = new LoginModal().render();
    createVisitWindow.append(loginModal);
    createVisitWindow.style.display = "block";
    document.body.classList.add('scroll-hidden');
});
CreateBtn.addEventListener("click", function handlerCreateBtn() {
    createVisitWindow.append(visitModal);
    createVisitWindow.style.display = "block";
    document.body.classList.add('scroll-hidden');
});

export { CreateBtn, EnterBtn }