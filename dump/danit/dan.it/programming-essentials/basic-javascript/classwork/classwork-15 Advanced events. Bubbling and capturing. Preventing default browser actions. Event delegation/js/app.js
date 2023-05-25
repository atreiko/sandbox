"use strict";

// const link = document.querySelectorAll(".link");
// const wrapper = document.querySelector("#wrapper");

// if (wrapper) {
// 	wrapper.addEventListener(
// 		"click",
// 		(evt) => {
// 			console.log("Click on wrapper");
// 			// console.log(evt);
// 			// console.log(evt.target);
// 		},
// 		false
// 	);
// 	wrapper.addEventListener(
// 		"click",
// 		(evt) => {
// 			evt.preventDefault();
// 			console.log("Click on wrapper (true)");
// 			evt.stopPropagation();
// 			console.log(evt);
// 			console.log(evt.target);
// 		},
// 		true
// 	);
// }
// link.addEventListener(
// 	"click",
// 	(evt) => {
// 		evt.preventDefault();
// 		console.log("Click on link (true)");
// 		// console.log(evt);
// 	},
// 	true
// );
// link.addEventListener(
// 	"click",
// 	(evt) => {
// 		evt.preventDefault();
// 		console.log("Click on link");
// 		// console.log(evt);
// 	},
// 	false
// );

// document.body.addEventListener(
// 	"click",
// 	(evt) => {
// 		console.log("Click on body");
// 		// console.log(evt);
// 	},
// 	false
// );

// document.body.addEventListener(
// 	"click",
// 	(evt) => {
// 		console.log("Click on body (true)");
// 		// evt.stopPropagation();

// 		// console.log(evt);
// 	},
// 	true
// );

// task 1
// const menu = document.querySelector("#menu");
// menu.addEventListener("click", (evt) => {
// 	evt.preventDefault();
// 	console.log(evt.target);

// 	const li = menu.querySelectorAll("li");
// 	li.forEach((item) => {
// 		item.classList.remove("active");
// 	});

// 	console.log(li);
// 	evt.target.closest("li").classList.add("active");
// });

Array.from(document.querySelectorAll(".close-btn")).forEach((el) => {
	el.addEventListener(
		"click",
		(e) => {
			e.stopPropagation();
			console.log(e.target);
		},
		false
	);
});

const massages = document.getElementById("messages");
massages.addEventListener(
	"click",
	function (event) {
		console.log(event.target);
		if (event.target.closest(".close-btn")) {
			event.target.closest(".pane").setAttribute("hidden", "");
		}
	},
	true
);
console.log(sessionStorage);
console.log(localStorage);
