// class User {
// 	constructor(nameValue) {
// 		this.name = nameValue;
// 		this.city = "Kyiv";
// 	}
// 	sayHi() {
// 		console.log(this.name);
// 		console.log();
// 	}
// }
// class Admin extends User {
// 	constructor(nameValue, status) {
// 		super(nameValue);
// 		this.status = status;
// 	}
// }

// let admin = new Admin("Uasya", "online");
// admin.sayHi();
// console.log(admin.name);
// console.log(admin.city);
// console.log(admin.status);
// ////////////////////

// function UserFn(name) {
// 	this.name = name;
// 	this.sayHi = function () {
// 		console.log(this.name);
// 	};
// }
// let user2 = new UserFn("Иван");
// user2.sayHi();
///////
// function foo() {}
// let bar = { a: "a2" };
// foo.prototype = bar; // Object {a: "a"}
// const baz = Object.create(bar); // Object {a: "a"}
// console.log(baz instanceof foo); // true. oops.

// const fooObj = new foo();
// // console.log(fooObj.a);

// foo.prototype.showA = function () {
// 	console.log(this.a);
// };

// fooObj.showA();
// console.log(fooObj.__proto__ === foo.prototype);
// console.log(baz.__proto__ === fooObj.__proto__);

// TASK 1, 2

// class User {
// 	constructor(role, login, email, password) {
// 		this.role = role;
// 		this.login = login;
// 		this.email = email;
// 		this.password = password;
// 	}
// 	isValidEmail() {
// 		let email = this.email.trim();
// 		if (email.includes(".") && email.includes("@") && !email.includes(" ")) {
// 			console.log("email is valide");
// 		} else {
// 			console.log("email is invalide");
// 		}
// 	}
// 	set role(role) {
// 		let roles = ["super admin", "admin", "main manager", "content manager"];
// 		if (roles.includes(role)) {
// 			this._role = role;
// 		} else {
// 			this._role = "guest";
// 			console.log("Wrong role. Role is set to guest");
// 		}
// 	}
// 	get role() {
// 		return this._role;
// 	}
// 	set login(login) {
// 		if (login.length < 3) {
// 			this._login = "user";
// 			console.log("Wrong login. Login is set to user");
// 		} else {
// 			this._login = login;
// 		}
// 	}
// 	get login() {
// 		return this._login;
// 	}
// 	getPasswordStrength(password) {
// 		let charNumsReg = new RegExp("\\w+");
// 		let charReg = new RegExp("[A-Za-z]");
// 		let numsReg = new RegExp("\\d+");
// 		let specCharReg = new RegExp("[_^$%#@*&]");

// 		console.log(password.match(specCharReg));
// 		console.log(password.match(numsReg));
// 		console.log(password.match(charReg));
// 		console.log(password.match(charNumsReg));

// 		if (password.length < 6 && !password.match(charNumsReg)) {
// 			return "Week password";
// 		}
// 		if (
// 			password.length > 6 &&
// 			password.match(numsReg) &&
// 			password.match(charReg) &&
// 			!password.match(specCharReg)
// 		) {
// 			return "Medium password";
// 		}
// 		if (
// 			password.length > 6 &&
// 			password.match(numsReg) &&
// 			password.match(charReg) &&
// 			password.match(specCharReg)
// 		) {
// 			return "Strong password";
// 		}
// 	}
// }
// let user1 = new User("user", "Vasiya", " vasiya@ukr.net ", "AB$$aaaa");
// user1.isValidEmail();
// console.log(user1.getPasswordStrength(user1.password));

// TASK 3

class CreateButton {
	constructor({ text, id, classList, specClass }) {
		this.text = text;
		this.id = id;
		this.classList = classList;
		this.specClass = specClass;
	}
	render() {
		let btn = document.createElement("button");
		btn.classList.add(...this.classList);
		btn.id = this.id;
		btn.textContent = this.text;
		return btn;
	}
	handleClick() {
		let specClass = this.specClass;
		document.getElementById(this.id).addEventListener("click", function () {
			this.classList.toggle(specClass);
		});
	}
}
let button = new CreateButton({
	text: "BUTTON",
	id: "btn",
	classList: ["btn-primary", "btn"],
	specClass: "active",
});
let root = document.getElementById("root");

root.append(button.render());
button.handleClick();
