// function logging() {
// 	for (let index = 0; index < 10000; index++) {
// 		console.log("for");
// 	}
// 	setTimeout(() => {
// 		alert("timer");
// 	}, 500);
// 	for (let index = 0; index < 10000; index++) {
// 		console.log("for 2");
// 	}
// 	// clearTimeout(timer);
// }
// logging();
// const timer = setTimeout(logging, 2000);
// setInterval(logging, 1000);

// const name = "ROman";

// sessionStorage.setItem("name", name);
// localStorage.setItem("name", name);
// console.log(sessionStorage);
// console.log(localStorage);

// const name2 = localStorage.getItem("name");
// console.log(name2);

// console.log(localStorage.key(0));

// localStorage.clear();
// console.log(localStorage);
// const user = {
// 	name: name,
// 	age: 18,
// 	fn() {
// 		console.log(this.name);
// 	},
// 	userInfo: {
// 		name: name,
// 		age: 18,
// 		userInfo2: {
// 			name: name,
// 			age: 18,
// 		},
// 	},
// };
// const arr = [1, 2, 3, 5, 6];
// let temp;

// temp = JSON.stringify(user);
// console.log(temp);
// console.log(typeof temp);

// sessionStorage.setItem("user", temp);

// temp = sessionStorage.getItem("user");
// console.log(temp);
// console.log(typeof temp);

// const userFromTemp = JSON.parse(temp);
// console.log(userFromTemp);
// console.log(typeof userFromTemp);

// sessionStorage.setItem("arr", arr);
// sessionStorage.setItem("arr2", JSON.stringify(arr));

// sessionStorage.getItem("arr");

// console.log(sessionStorage);

// const favs =
// 	'[{"title":"Пленка полиэтиленовая строительная","image":"assets/images/tovar/plenka-dlya-mulchirovaniya/stroitelnaya-plenka.jpg","price":"от 580 грн.","url":"https://skytechpolymer.com.ua/ru/stroitelnaya-polietilenovaya-plenka-3-m-80-mkm.html","dataProductId":"946","dataProductName":"Пленка полиэтиленовая строительная"},{"title":"Первичная полиэтиленовая пленка","image":"assets/images/tovar/plenka-dlya-mulchirovaniya/polietilen.jpg","price":"от 840 грн.","url":"https://skytechpolymer.com.ua/ru/prozrachnaya-polietilenovaya-plenka-3-m-30-mkm.html","dataProductId":"957","dataProductName":"Первичная полиэтиленовая пленка"}]';

// let temp = JSON.parse(favs);

// console.log(temp);

const reminder = document.getElementById("reminder");
const seconds = document.getElementById("seconds");
const form = document.getElementById("form");
const btn = document.getElementById("btn");

form.addEventListener("submit", function (event) {
	event.preventDefault();
	// form.submit();
	if (reminder.value.trim() === "") {
		alert("Ведите текст напоминания.");
		return;
	}
	if (seconds.value <= 1) {
		alert("Время задержки должно быть больше одной секунды.");
		return;
	}

	btn.setAttribute("disabled", "true");

	setTimeout(function () {
		alert(reminder.value);
		form.reset();
		reminder.focus();
		btn.removeAttribute("disabled");
	}, seconds.value * 1000);
});
