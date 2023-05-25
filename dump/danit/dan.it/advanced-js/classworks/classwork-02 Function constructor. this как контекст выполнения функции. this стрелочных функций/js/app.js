// function constructorImitation(name, age) {
// 	return {
// 		name,
// 		age,
// 		parent: {
// 			dadName: "Petro",
// 			motherName: "Olha",
// 		},
// 		sayHi: function () {
// 			console.log(`Hello, ${this.name}`);
// 		},
// 	};
// }

// const user = constructorImitation("Uasya", 23);
// console.log(user);

// function User(name, age) {
// 	this.name = name;
// 	this.age = age;
// 	this.sayHi = function () {
// 		console.log(`Hello, ${this.name}`);
// 	};
// }
// const user2 = new User("Vasilisa", 18);
// console.log(user2);

// user2.sayHi(); // Vasilisa
// user.sayHi.call(user2, []); // Vasilisa
// user.sayHi.bind(user2)(); // Vasilisa

// getParents.apply(user.parent);

// function getParents() {
// 	console.log(`${this.dadName}, ${this.motherName}`);
// }

// // const getParents = function () {
// // 	console.log(`${this.dadName}, ${this.motherName}`);
// // };

// const arr = [1, 2, 3, 4];

// function arrFilter() {
// 	return this.filter((el) => el >= 3);
// }

// // console.log(arrFilter(arr));
// const user3 = {};
// user3.name = "Uas";

// arr.__proto__.arrFilter = arrFilter;
// console.log(typeof arr.__proto__);
// console.log(typeof Array.prototype);
// console.log(arr.__proto__ === Array.prototype);
// // Array.prototype.arrFilter = arrFilter;

// // arr.__proto__ === Array.prototype
// // __proto__ - link to prototype property of Constructor
// console.log(arr.arrFilter());

// const arr2 = [2, 6, 7, 8];
// console.log(arr2.arrFilter());

// task1
// const questionText = "Девиз дома Баратеонов";
// const questionAnswer = "Нам ярость!";

// const link = document.querySelector(".question");

// function Questions(link, questionAnswer) {
// 	this.flag = false;
// 	this.checkFlag = function () {
// 		this.flag = !this.flag;
// 	};
// 	this.answerToggle = function () {
// 		link.addEventListener("click", this.linkClickHandler);
// 	};
// 	this.linkClickHandler = (e) => {
// 		e.preventDefault();
// 		if (this.flag) {
// 			this.answerLink.remove();
// 		} else {
// 			this.answerLink = document.createElement("p");
// 			this.answerLink.textContent = questionAnswer;
// 			let root = document.getElementById("root");
// 			root.append(this.answerLink);
// 		}
// 		this.checkFlag();
// 	};
// }

// const question = new Questions(link, questionAnswer);

// question.answerToggle();
// console.log(question);

// TASK 2

function Stopwatch(time, link) {
	this._time = time;
	this.container = link;
	this.start = function () {
		let date = new Date();
	};
	this.stop = function () {};
	this.reset = function () {};
	this.setTime = function (time) {
		let status = "Error";
		if (time > 0 && time % 1 === 0) {
			this._time = time;
			status = "Success";
			return { status: status };
		}
		return { status: status, message: "argument must be positive integer" };
	};
	this.getTime = function () {
		return this._time;
	};
}

const startBtn = document.getElementById("start-time");
const stopBtn = document.getElementById("stop-time");
const resetBtn = document.getElementById("reset-time");

const stopWatchContainer = document.getElementById("time");
const stopwatch = new Stopwatch(stopWatchContainer);

startBtn.addEventListener("click", stopwatch.start.bind(stopwatch));
stopBtn.addEventListener("click", stopwatch.stop.bind(stopwatch));
resetBtn.addEventListener("click", stopwatch.reset.bind(stopwatch));
