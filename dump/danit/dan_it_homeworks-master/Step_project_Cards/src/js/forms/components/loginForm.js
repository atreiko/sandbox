import Input from "./input.js";
import { Element } from "../components/index.js";
import { login } from "../../ajax/ajax.js";
import { CreateBtn, EnterBtn } from "../components/buttons.js";

class LoginForm extends Input {
    loginProps = {
        tag: "input",
        type: "email",
        placeholder: "Введите логин",
        required: true,
    };
    passwordProps = {
        tag: "input",
        type: "password",
        placeholder: "Введите пароль",
        required: true,
    };
    submitProps = {
        tag: "button",
        type: "submit",
        content: "Войти",
        class: "enter-window__form-btn",
    };
    render(atr = {}) {
        const form = this.createElement("form", atr);
        const { loginProps, passwordProps, submitProps } = this;

        form.append(
            new Input(loginProps).render(),
            new Input(passwordProps).render(),
            new Element(submitProps).render()
        );

        form.addEventListener("submit", hadlerLoginForm);
        async function hadlerLoginForm(ev) {
            ev.preventDefault();
            await login();

            if (sessionStorage.getItem("token")) {
                const modalWindow = this.closest(".modal");
                modalWindow.style.display = "none";
                modalWindow.querySelector(".modal-window").remove();
                EnterBtn.replaceWith(CreateBtn);
                window.location.reload();
            }
            document.body.classList.remove('scroll-hidden');
        }
        return form
    }

}

export default LoginForm;