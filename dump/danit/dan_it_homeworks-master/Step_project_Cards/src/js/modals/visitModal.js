import { Element } from "../forms/components/index.js";
import { Input } from "../forms/components/index.js";
import { CardioForm, DentistForm, TherapistForm } from "../forms/indexForms.js";
import Modal from "./modal.js";
import renderCards from "../script.js";
import { saveVisitOnBase } from "../ajax/ajax.js";

class VisitModal extends Modal {
    select = {
        tag: "select",
        name: "doctor",
        class: "modal-window__doctors",
        label: "Выберите врача",
        options: {
            none: "Выберите врача",
            cardio: "Кардиолог",
            dentist: "Дантист",
            therapist: "Терапевт",
        },
        handler: {
            event: "change",
            func: function(e) {
                let value = this.value;
                const cardioForm = new CardioForm().render();
                const therapistForm = new TherapistForm().render();
                const dentistForm = new DentistForm().render();
                switch (value) {
                    case "Кардиолог":
                        if (this.nextElementSibling) this.nextElementSibling.remove();

                        this.after(cardioForm);

                        this.setAttribute("form", "cardio");
                        break;
                    case "Терапевт":
                        if (this.nextElementSibling) this.nextElementSibling.remove();
                        this.after(therapistForm);
                        this.setAttribute("form", "therapist");
                        break;
                    case "Дантист":
                        if (this.nextElementSibling) this.nextElementSibling.remove();
                        this.after(dentistForm);
                        this.setAttribute("form", "dentist");
                        break;
                    default:
                        if (this.nextElementSibling) this.nextElementSibling.remove();
                        const warning = new Element({
                            tag: "span",
                            class: "warning",

                            content: "выберите врача",
                        }).render();
                        this.after(warning);
                        break; //
                }
            },
        },
    };


    title = {
        tag: "h3",
        class: "modal-window__title",
        content: "Создание визита",
    };

    render() {
        const { select, title } = this;
        const modalWindow = super.render();
        const doctorsList = new Input(select);

        modalWindow.append(new Element(title).render(), doctorsList.render());
        doctorsList.handler();
        modalWindow.classList.add("visit-modal");

        modalWindow.addEventListener("submit", async function saveVisit(ev) {
            ev.preventDefault();
            let visit = {};

            this.querySelectorAll("input, textarea, select").forEach((elem) => {
                visit[elem.name] = elem.value;
            });
            this.closest("#create-modal-window").style.display = "none";

            this.querySelector('[name="doctor"]').value = "Выберите врача";
           
            this.querySelector('form').remove()
            const data = await saveVisitOnBase(visit);

            renderCards(data);
            document.body.classList.remove('scroll-hidden');
            modalWindow.remove()

        });
        return modalWindow;
    }
}
export default VisitModal;