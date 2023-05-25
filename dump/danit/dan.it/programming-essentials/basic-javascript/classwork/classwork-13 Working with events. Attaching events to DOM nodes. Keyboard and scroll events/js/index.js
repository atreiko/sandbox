"use strict";

const btn = document.getElementById("btn");
const input = document.getElementById("text");
const p = document.getElementById("text-output");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	let data = new FormData(form);

	console.log(data);
	console.log(data.values());
	for (var value of data.values()) {
		console.log(value);
	}
});
// input.addEventListener("blur", function (evt) {
// 	console.log(input.value);
// });

// document.addEventListener("click", (e) => {
// 	console.log(e);
// });
// document.addEventListener("keydown", (evt) => {
// 	console.log(evt);
// });

// document.addEventListener("keypress", (evt) => {
// 	console.log(evt);
// });
// document.addEventListener("keyup", (evt) => {
// 	console.log(evt);
// });

// p.textContent = input.value;
