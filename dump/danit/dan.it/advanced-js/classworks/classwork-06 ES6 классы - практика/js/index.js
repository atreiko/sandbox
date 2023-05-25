"use strict";

// class Patient {
// 	constructor({fullName, birthDate, gender}) {
// 		this.fullName = fullName;
// 		this.birthDate = birthDate;
// 		this.gender = gender;
// 	}
// }

// class CardioPatient extends Patient {
// 	constructor({fullName, birthDate, gender, averagePressure, cardioProblems}) {
// 		super(fullName, birthDate, gender);
// 		this.averagePressure = averagePressure;
// 		this.cardioProblems = cardioProblems;
// 	}
// }
// class DentalPatient extends Patient {
// 	constructor({fullName, birthDate, gender, visitDate, currentTreatment}) {
// 		super(fullName, birthDate, gender);
// 		this.visitDate = visitDate;
// 		this.currentTreatment = currentTreatment;
// 	}
// }

// const cardioPatient = new CardioPatient(
// 	"Uasya",
// 	"05.02.2026",
// 	"male",
// 	"75/125",
// 	"none"
// );
// console.log(cardioPatient);

//====================  TASK 2  ======================//
const btnReg = document.getElementById("open-register-modal");
const btnLog = document.getElementById("open-login-modal");

class Modal {
	constructor(id, className) {
		this.id = id;
		this.className = className;
		this._closeBtn = null;
		this.wrapper = this.render();
	}
	render() {
		const wrapper = document.createElement("div");
		wrapper.classList.add(...this.className);
		wrapper.id = this.id;

		const modal = document.createElement("div");
		modal.className = "modal-content";

		const span = document.createElement("span");
		span.className = "close";
		span.innerHTML = "&times;";
		this._closeBtn = span;

		const form = document.createElement("form");
		form.id = "register-form";
		form.setAttribute("action", "#");

		const submitBtn = this._createSubmit();

		form.append(...this._renderInputs(), submitBtn);
		modal.append(span, form);
		wrapper.append(modal);

		return wrapper;
	}
	_createInput(type, name, placeholder, required) {
		const input = document.createElement("input");
		input.setAttribute("type", type);
		input.setAttribute("name", name);
		input.setAttribute("placeholder", placeholder);
		if (required) {
			input.setAttribute("required", required);
		}
		return input;
	}
	toggleClass(className) {
		this.wrapper.classList.toggle(className);
	}
	closeBtnHandler() {
		this._closeBtn.addEventListener("click", () => {
			this.toggleClass("active");
		});
	}
}

class RegisterModal extends Modal {
	constructor(id, className) {
		super(id, className);
	}
	_createSubmit() {
		const submitBtn = document.createElement("input");
		submitBtn.setAttribute("type", "submit");
		submitBtn.setAttribute("value", "Регистрация");
		return submitBtn;
	}
	_renderInputs() {
		const login = this._createInput("text", "login", "Ваш логин", true);
		const email = this._createInput("email", "email", "Ваш email", true);
		const password = this._createInput(
			"password",
			"password",
			"Ваш пароль",
			true
		);
		const repeatPassword = this._createInput(
			"password",
			"repeat-password",
			"Повторите пароль",
			true
		);
		return [login, email, password, repeatPassword];
	}
}

class LoginModal extends Modal {
	constructor(id, className) {
		super(id, className);
	}
	_renderInputs() {
		const login = this._createInput("text", "login", "Ваш логин", true);
		const password = this._createInput(
			"password",
			"password",
			"Ваш пароль",
			true
		);
		return [login, password];
	}
	_createSubmit() {
		const submitBtn = document.createElement("input");
		submitBtn.setAttribute("type", "submit");
		submitBtn.setAttribute("value", "Вход");
		return submitBtn;
	}
}

let reg = new RegisterModal("registration", ["class1", "class2", "modal"]);
reg.closeBtnHandler();

let log = new LoginModal("login", ["class1", "class2", "modal"]);
log.closeBtnHandler();

let root = document.getElementById("root");

btnReg.addEventListener("click", function () {
	root.append(reg.wrapper);
	reg.toggleClass("active");
});

btnLog.addEventListener("click", function () {
	root.append(log.wrapper);
	log.toggleClass("active");
});
