import Visit from "./doctor.js";
import EditVisitModal from "../modals/editVisitModal.js";
import { DentistForm } from "../forms/indexForms.js";

class VisitDentist extends Visit {
    constructor(visit) {
        super(visit);
        this.content.lastVisit = visit["last-visit"];
    }
    showMore() {
        super.showMoreMain();
        const moreInfo = document.createElement("div");
        moreInfo.classList.add("visit__more-info");
        moreInfo.innerHTML = `<div class="visit-cards__patient-last-visit">
               <span class="visit-cards__patient-last-visit-label">Дата последнего посещения</span>
               <span class="visit-cards__patient-last-visit-info">${this.content.lastVisit
                 .split("-")
                 .reverse()
                 .join(".")}</span>
            </div>`;
        this._visitCard.querySelector(".visit__btn-more").after(moreInfo);
    }
    editVisit() {
        const modalWindow = super.editVisit();
        const editModal = new EditVisitModal().render(this);
        editModal.append(new DentistForm().render());
        modalWindow.append(editModal);
        modalWindow.querySelector('[type="submit"]').textContent = "Изменить визит";
        modalWindow.querySelector(
            '[name="name"]'
        ).value = this.content.patientFullName;
     

        modalWindow.querySelector('[name="time"]').value = this.priority
        modalWindow.querySelector('[name="description"]').value = this.description

        modalWindow.querySelector('[name="purpose"]').value = this.title

        modalWindow.querySelector('[name="date-visit"]').value = this.content.visitDate
        modalWindow.querySelector('[name="last-visit"]').value = this.content.lastVisit



        modalWindow.append(
            editModal
        );

        return modalWindow;
    }
}

export default VisitDentist;