import { deleteCard } from "../ajax/ajax.js"

class Visit {
    constructor(visit) {
        this.doctor = visit.doctor;
        this.title = visit.purpose;
        this.description = visit.description;
        this.priority = visit.time;
        this.id = visit.id;
        this.content = {};
        this.content.patientFullName = visit.name;
        this.content.visitDate = visit['date-visit'];
        this.status = new Date() < new Date(this.content.visitDate) ? 'Открыт' : 'Завершен';
        this._visitCard = null;
    }

    render(elem) {
        const container = document.querySelector('.visit');
        const noVisitsMsg = document.querySelector('.visit__title');
        noVisitsMsg ? noVisitsMsg.classList.add('hidden') : "";
        const visitCard = document.createElement('div');
        visitCard.classList.add('visit-cards');
        visitCard.id = this.id;
        this._visitCard = visitCard;

        visitCard.innerHTML = `
            <div class="visit-cards__doctor">
                <span class="visit-cards__doctor-title">${this.doctor}</span>
            </div>
            <div class="visit-cards__patient">
                <div class="visit-cards__patient-name">
                    <span class="visit-cards__patient-name-label">ФИО пациента:</span>
                    <span class="visit-cards__patient-name-name">${this.content.patientFullName}</span>
                </div>
                <div class="visit-cards__patient-title hide">
                    <span class="visit-cards__patient-title-label">Цель визита</span>
                    <span class="visit-cards__patient-title-subtitle">${this.title}</span>
                </div>
                <div class="visit-cards__patient-description hide">
                    <span class="visit-cards__patient-description-label">Краткое описание визита</span>
                    <span class="visit-cards__patient-description-info">${this.description}</span>
                </div>
                <div class="visit-cards__patient-priority hide">
                    <span class="visit-cards__patient-priority-label">Срочность визита</span>
                    <span class="visit-cards__patient-priority-info">${this.priority}</span>
                </div>
                <div class="visit-cards__patient-status hide">
                    <span class="visit-cards__patient-status-label">Статус визита</span>
                    <span class="visit-cards__patient-status-info">${this.status}</span>
                </div>
                <div class="visit-cards__patient-visit-date hide">
                    <span class="visit-cards__patient-visit-date-label">Дата визита</span>
                    <span class="visit-cards__patient-visit-date-info">${this.content.visitDate}</span>
                </div>    
                <button class="visit__btn-more">Подробнее о приеме <i class="zmdi zmdi-chevron-down"></i></button>
                <div class="visit__options">
                    <button class="visit__options--edit-btn options-btn">Редактировать</button>
                </div>
                <i class="fas fa-edit visit__options--btn-edit"></i>
                <i class="fas fa-trash-alt visit__options--btn-delete"></i>
            </div>
        </div>`;

        container.prepend(visitCard);

        const showMoreBtn = visitCard.querySelector('.visit__btn-more');
        showMoreBtn.addEventListener('click', () => this.showMore());

        const visitOptionsBtn = visitCard.querySelector('.visit__options--btn-edit');
        visitOptionsBtn.addEventListener('click', () => this.showOptions(visitOptionsBtn));

        const visitDeleteBtn = visitCard.querySelector('.visit__options--btn-delete');
        visitDeleteBtn.addEventListener('click', () => this.deleteVisit());

        const visitEditBtn = visitCard.querySelector('.visit__options--edit-btn');
        visitEditBtn.addEventListener('click', () => {
            this.editVisit();
            document.body.classList.add('scroll-hidden');
        });

        if (this.status === 'Завершен') {
            this._visitCard.classList.add('finished');
        }
        const cardTitle = this._visitCard.querySelector('.visit-cards__doctor')
        if (this.doctor === 'Кардиолог') {
            cardTitle.classList.add('visit-cards__doctor--red');
        }
        if (this.doctor === 'Дантист') {
            cardTitle.classList.add('visit-cards__doctor--blue')
        }
        if (this.doctor === 'Терапевт') {
            cardTitle.classList.add('visit-cards__doctor--green');
        }
    }

    showMoreMain() {
        this._visitCard.querySelector('.visit-cards__patient-title').classList.remove('hide');
        this._visitCard.querySelector('.visit-cards__patient-description').classList.remove('hide');
        this._visitCard.querySelector('.visit-cards__patient-status').classList.remove('hide');
        this._visitCard.querySelector('.visit-cards__patient-priority').classList.remove('hide');
        this._visitCard.querySelector('.visit-cards__patient-visit-date').classList.remove('hide');

        const showMoreBtn = this._visitCard.querySelector('.visit__btn-more');
        showMoreBtn.classList.add('hidden');

        const showLessBtn = document.createElement('button');
        showLessBtn.classList.add('visit__btn-less');
        showLessBtn.innerHTML = `Скрыть подробности <i class="zmdi zmdi-chevron-up"></i>`;

        showLessBtn.addEventListener('click', () => this.showLess(showMoreBtn, showLessBtn));
        this._visitCard.append(showLessBtn);

    }
    showLess(showMoreBtn, showLessBtn) {
        showLessBtn.remove();
        this._visitCard.querySelector('.visit__more-info').remove();
        showMoreBtn.classList.remove('hidden');
        this._visitCard.querySelector('.visit-cards__patient-title').classList.add('hide');
        this._visitCard.querySelector('.visit-cards__patient-description').classList.add('hide');
        this._visitCard.querySelector('.visit-cards__patient-status').classList.add('hide');
        this._visitCard.querySelector('.visit-cards__patient-priority').classList.add('hide');
        this._visitCard.querySelector('.visit-cards__patient-visit-date').classList.add('hide');
    }

    showOptions(visitOptionsBtn) {
        visitOptionsBtn.classList.toggle('visit__options-btn--active');
        const optionBtnArr = this._visitCard.querySelectorAll('.options-btn');
        optionBtnArr.forEach(el => el.classList.toggle('btn_active'));
    }

    deleteVisit() {
        deleteCard(this.id).then(() => {
            this._visitCard.remove();
        });
        this._visitCard.remove();
    }
    editVisit() {
        const createVisitWindow = document.querySelector(".modal");
        createVisitWindow.style.display = "block";
        return createVisitWindow
    }

    static renderAllCards(cards) {
        document.querySelectorAll('.visit-cards').forEach(e => {
            e.remove();
        });
    }
}


export default Visit