import Element from "../forms/components/element.js";



class ModalWindow extends Element {
    modal = {
        class: "modal-window",
    };
    closeBtn = {
        tag: "span",
        class: "",
        content: "&#10006",
        handler: {
            event: "click",
            func: function(e) {
                this.closest(".modal").style.display = "none";
                this.parentElement.remove()
                document.body.classList.remove('scroll-hidden');
            },
        },
    };


    render() {
        const { modal, closeBtn } = this;
        const modalWindow = this.createElement("div", modal);
        const close = new Element(closeBtn);

        modalWindow.append(
            close.render(),

        );
        close.handler();

        return modalWindow;
    }
}
export default ModalWindow;