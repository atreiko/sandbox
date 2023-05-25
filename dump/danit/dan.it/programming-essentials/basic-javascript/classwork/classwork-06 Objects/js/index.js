"use strict";

// const userName = "Uasya";
// const userLastName = "Pupkin";
// const userAge = 18;

// const user = {
// 	name: "Uasya",
// 	"last name": "Pupkin",
// 	age: 18,
// 	getFullName: function () {
// 		return `${this.name} ${this["last name"]}`;
// 	},
// };

// // user.name = "Uasya";
// // user = "Uasya";
// console.log(user.getFullName());
// console.log(user["last name"]);
// console.log(user["name"]);
// console.log(user.name);

// const user = {name: "uasya"};
// const user4 = new Object({ name: "uasya" });
// console.log(user4);
// const user5 = Object.create(Object.prototype);

const user22 = {
	set name(value) {
		if (value.length < 2) {
			return "Error";
		} else {
			this._name = value;
		}
	},
	get name() {
		return this._name;
	},
	gender: "empty string",
	setGender: function (value) {
		this.gender = value;
	},
	getGender() {
		console.log(this.gender);
	},
	family: {
		closest: {
			children: 3,
			parents: 2,
		},
	},
};
// user.setGender("male");
// user.getGender();
console.log(user22);
for (const key in user22) {
	console.log(`${key} - ${user22[key]}`);
}

// for (const iterator of object) {}
for (const iterator of user22) {
	console.log(iterator);
}
// user.name = "Uasya";

// const user2 = user;
// const user2 = Object.assign({}, user);

// user2.name = "Petya";

// console.log(user.name);
// console.log(user2.name);
// console.log(user2);
// console.log(typeof user2);

// user2.setGender("female");
// user2.getGender();

// user2.age = 3;

// function UserCreator(name, lastName, age) {
// 	this.name = name;
// 	this.lastName = lastName;
// 	this.age = age;
// 	this.getAge = function () {
// 		console.log(this.age);
// 	};
// }

// const user3 = new UserCreator("Vovan", "Pchelkin", 22);

// console.log(user3);

// console.log(user3 instanceof Object);
// console.log(typeof user3);
// console.log(null instanceof Object);
// console.log(typeof null);

const user = {
	name: "Rick",
	"last name": "Willson",
	prof: "guitarplayer",
	sayHi() {
		console.log(`Привет меня зовут ${this.name} ${this["last name"]}`);
	},
	propertyValueChange(propertyName, propertyValue) {
		// this.propertyName => create a new property with name "propertyName"
		/*
        propertyName => "last name"
        propertyValue => "Alisa"
        this[propertyName] => this["last name"]
        this[propertyName] = propertyValue => this["last name"] = "Alisa"
        */

		// let countFlag = 0;

		// for (const key in this) {
		// 	if (propertyName === key) {
		// 		this[propertyName] = propertyValue;
		// 		countFlag++;
		// 	}
		// }

		// if (countFlag === 0) {
		// 	console.log("Property is not exist");
		// }

		if (this.hasOwnProperty(propertyName)) {
			this[propertyName] = propertyValue;
		} else {
			console.log("Property is not exist");
		}
	},
	addNewProperty(newProperty, newValue) {
		if (this.hasOwnProperty(newProperty)) {
			console.log("Error");
		} else {
			this[newProperty] = newValue;
		}
	},
};
user.sayHi();
user.propertyValueChange("last-name", "Alisa");
user.sayHi();
user.addNewProperty("name", 58);
console.log(user);
