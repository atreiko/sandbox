import { Element } from "../forms/components/index.js";


import Modal from "./modal.js";
import renderCards from "../script.js";
import { editVisitOnBase } from "../ajax/ajax.js";

class EditVisitModal extends Modal {
    title = {
        tag: "h3",
        class: "modal-title",
        content: "Изменить визит",
    };

    render(card) {
        const { title } = this;
        const modalWindow = super.render();

        modalWindow.append(new Element(title).render());

        modalWindow.classList.add("visit-modal");

        modalWindow.addEventListener("submit", async function editVisit(ev) {
            document.body.classList.remove('scroll-hidden');
            ev.preventDefault();
            let visit = {};
            visit.doctor = card.doctor;
            this.querySelectorAll("input, textarea, select").forEach((elem) => {
                visit[elem.name] = elem.value;
            });
            this.closest("#create-modal-window").style.display = "none";

            this.remove();
            const data = await editVisitOnBase(card.id, visit);

            document.getElementById(`${card.id}`).remove()

            renderCards(data.data);

        });
        return modalWindow;
    }
}
export default EditVisitModal;