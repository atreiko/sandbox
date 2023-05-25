import Element from "../forms/components/element.js";
import { LoginForm } from "../forms/components/index.js";
import Modal from "./modal.js"


class LoginModal extends Modal {

    render() {

        const modalWindow = super.render()
        modalWindow.append(
            new Element({
                tag: "h3",
                class: "modal-window__title",
                content: "Введите логин и пароль",
            }).render(),
            new LoginForm().render({ class: "enter-window__form" }),
        )

        return modalWindow;
    }
}
export default LoginModal;