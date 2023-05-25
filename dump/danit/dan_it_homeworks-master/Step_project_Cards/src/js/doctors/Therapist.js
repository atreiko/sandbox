import Visit from './doctor.js'
import EditVisitModal from "../modals/editVisitModal.js";
import { TherapistForm } from "../forms/indexForms.js";
class VisitTherapist extends Visit {
    constructor(visit) {
        super(visit);
        this.content.age = visit.age;
    }
    showMore() {
        super.showMoreMain();
        const moreInfo = document.createElement('div');
        moreInfo.classList.add('visit__more-info')
        moreInfo.innerHTML = `<div class="visit-cards__patient-age">
            <span class="visit-cards__patient-age-label">Возраст пациента</span>
            <span class="visit-cards__patient-age-info">${this.content.age}</span>
      </div>`;
        this._visitCard.querySelector('.visit__btn-more').after(moreInfo);
    }
    editVisit() {
        const modalWindow = super.editVisit();
        const editModal = new EditVisitModal().render(this);
        editModal.append(new TherapistForm().render());
        modalWindow.append(editModal);
        modalWindow.querySelector('[type="submit"]').textContent = "Изменить визит";
        modalWindow.querySelector(
            '[name="name"]'
        ).value = this.content.patientFullName;
       

        modalWindow.querySelector('[name="time"]').value = this.priority
        modalWindow.querySelector('[name="description"]').value = this.description

        modalWindow.querySelector('[name="purpose"]').value = this.title

        modalWindow.querySelector('[name="date-visit"]').value = this.content.visitDate
        modalWindow.querySelector('[name="age"]').value = this.content.age




        modalWindow.append(
            editModal
        );

        return modalWindow;
    }
}

export default VisitTherapist