import Visit from './doctor.js'
import EditVisitModal from "../modals/editVisitModal.js";
import { CardioForm } from "../forms/indexForms.js";

class VisitCardiologist extends Visit {
    constructor(visit) {
        super(visit);
        this.content.bloodPressure = visit.pressure;

        this.content.weightIndex = visit['mass-index']
        this.content.prevDiseases = visit.diseases;
        this.content.age = visit.age;
    }
    showMore() {
        super.showMoreMain();
        const moreInfo = document.createElement('div');
        moreInfo.classList.add('visit__more-info');
        moreInfo.innerHTML = `<div class="visit-cards__patient-age">
            <span class="visit-cards__patient-age-label">Возраст пациента</span>
            <span class="visit-cards__patient-age-info">${this.content.age}</span>
      </div>
      <div class="visit-cards__patient-pressure">
            <span class="visit-cards__patient-pressure-label">Обычное давление</span>
            <span class="visit-cards__patient-pressure-info">${this.content.bloodPressure}</span>
      </div>
      <div class="visit-cards__patient-diseases">
            <span class="visit-cards__patient-diseases-label">Перенесенные заболевания сердечно-сосудистой системы</span>
            <span class="visit-cards__patient-diseases-info">${this.content.prevDiseases}</span>
      </div>
      
      <div class="visit-cards__patient-weight-index">
            <span class="visit-cards__patient-weight-index-label">Индекс массы тела</span>
            <span class="visit-cards__patient-weight-index-info">${this.content.weightIndex}</span>
      </div>`;
        this._visitCard.querySelector('.visit__btn-more').after(moreInfo);
    }
    editVisit() {
        const modalWindow = super.editVisit();
        const editModal = new EditVisitModal().render(this);
        editModal.append(new CardioForm().render());
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
        modalWindow.querySelector('[name="pressure"]').value = this.bloodPressure
        modalWindow.querySelector('[name="mass-index"]').value = this.content.weightIndex
        modalWindow.querySelector('[name="diseases"]').value = this.content.prevDiseases



        modalWindow.append(
            editModal
        );

        return modalWindow;
    }


}

export default VisitCardiologist