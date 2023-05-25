"use strict";

// window.addEventListener("DOMContentLoaded", (event) => {
// 	const clickHandler = () => {
// 		alert("click");
// 	};

// 	const onClickBtn = () => {
// 		alert("click 2");
// 	};

// 	const btn = document.getElementById("click-me");
// 	// btn.onclick = clickHandler;

// 	// console.log(btn);

// 	// btn.onclick = clickHandler2;
// 	// console.log(btn);

// 	// btn.addEventListener("click", clickHandler);
// 	// btn.addEventListener("click", clickHandler2);

// 	// btn.addEventListener("click", function (evt) {
// 	// 	// console.log(evt);
// 	// 	// console.log(Event);
// 	// 	// onClickBtn();
// 	// 	// clickHandler();
// 	// 	console.log(this);
// 	// 	console.log(evt.target);
// 	// });

// 	// const btnWrp = document.getElementById("btn-wrap");

// 	// btnWrp.addEventListener("mouseover", onClickBtn);
// });

// const root = document.getElementById("root");

// const fragmentHTML = document.createDocumentFragment();
// const arr = [];
// const clickHandler = (evt) => {
// 	console.log(evt);
// 	const element = evt.target;
// 	// element.style.backgroundColor = "yellow";
// 	alert(`li clicked ${element.textContent}`);
// 	element.removeEventListener("click", clickHandler);
// };

// for (let i = 0; i < 10; i++) {
// 	const li = document.createElement("li");
// 	li.textContent = i;

// 	// li.addEventListener("click", clickHandler);
// 	li.onclick = clickHandler;

// 	fragmentHTML.prepend(li);
// 	// arr.push(li);
// }
// const list = document.createElement("ul");
// root.prepend(list);
// // list.append(...arr); // ...arr === arr[1], arr2], ... , arr[length - 1]
// list.append(fragmentHTML);

// document.body.innerHTML = "";

// const btn = document.createElement("button");
const root = document.getElementById("root");

// btn.textContent = "Enter";

// btn.addEventListener("click", function () {
// 	alert("Добро пожаловать!");
// });

// const mouseoverHandler = function () {
// 	alert("При клике по кнопке вы войдёте в систему");
// 	btn.removeEventListener("mouseover", mouseoverHandler);
// };

// btn.addEventListener("mouseover", mouseoverHandler);

// root.prepend(btn);

const PHRASE = "Добро пожаловать!";

function getRandomColor() {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);

	return `rgb(${r}, ${g}, ${b})`;
}

const title = document.createElement("h1");
title.textContent = PHRASE;

const btn = document.createElement("button");
btn.textContent = "Раскрасить";

btn.addEventListener("click", function () {
	let newArr = PHRASE.split("").map((item) => {
		let span = document.createElement("span");
		span.textContent = item;
		span.style.color = getRandomColor();
		return span;
	});
	// console.log(newArr);
	const fragment = document.createDocumentFragment();
	// newArr.forEach((el) => {
	// 	fragment.append(el);
	// });
	fragment.append(...newArr);

	title.innerHTML = "";
	title.append(fragment);
});

root.append(title);
root.append(btn);
