"use strict";
// const root = document.getElementById("root");

// for (let index = 0; index < 10; index++) {
// 	const div = document.createElement("div");
// 	div.textContent = index;
// 	const color = `rgb(
//         ${Math.floor(Math.random() * 255)},
//         ${Math.floor(Math.random() * 255)},
//         ${Math.floor(Math.random() * 255)})`;

// 	div.setAttribute("data-color", color);

// 	div.style.color = div.getAttribute("data-color");
// 	// div.style.color = color;
// 	div.style.fontWeight = "700";
// 	div.style.fontSize = "40px";

// 	root.prepend(div);
// }

// const divs = document.getElementsByTagName("div");
// console.log(divs);

// Array.from(divs).forEach((element) => {
// 	console.log(element.textContent);
// });

// Array.from(divs).forEach((element, index) => {
// 	element.className = `element_${index}`;
// });

// const fifthDiv = document.getElementsByClassName("element_4")[0];

// let className = fifthDiv.getAttribute("class");
// console.log(className);
// fifthDiv.setAttribute("id", "el-4");

// Array.from(divs).forEach((element, index) => {
// 	if (index % 2 === 0) {
// 		element.remove();
// 	}
// });

// for (let index = 0; index < 5; index++) {
// 	divs[index].remove();
// }

// Array.from(divs).forEach((element) => {
// 	console.log(element.textContent);
// });

// console.log(fifthDiv);
// console.log(`fifthDiv.style.width: ${fifthDiv.style.width}`);
// console.log(`fifthDiv.offsetWidth: ${fifthDiv.offsetWidth}`);

// console.log(`document.body.scrollHeight: ${document.body.scrollHeight}`);
// console.log(`document.body.scrollWidth: ${document.body.scrollWidth}`);

// console.log(`document.body.clientHeight: ${document.body.clientHeight}`);
// console.log(`document.body.clientWidth: ${document.body.clientWidth}`);

// console.log(`fifthDiv.scrollTop: ${fifthDiv.scrollTop}`);
// console.log(`fifthDiv.getBoundingClientRect().top:`);
// console.log(fifthDiv.getBoundingClientRect());

// console.log(`document.body.scrollTop: ${document.body.scrollTop}`);

// console.log(`window.innerWidth: ${window.innerWidth}`);
// console.log(`window.innerHeight: ${window.innerHeight}`);
// console.log(`window.pageYOffset: ${window.pageYOffset}`);
// console.log(`window.pageXOffset: ${window.pageXOffset}`);

function getSquare(size, color, index) {
	let square = document.createElement("div");
	square.style.cssText = `height: ${size}px; width: ${size}px; background-color: rgb(${color})`;
	square.setAttribute("class", `square-${index}`);
	return square;
}

function createSquares() {
	let count;
	let size;
	let color;
	do {
		count = prompt("Enter count Square");
		if (+count > 10) {
			alert("Error, count > 10");
			continue;
		}
	} while (typeof +count !== "number" || isNaN(+count));
	for (let index = 0; index < count; index++) {
		do {
			size = prompt("Enter square's size in px");
		} while (typeof +size !== "number" || isNaN(+size));
		do {
			// Вводим 3 числа от 0 до 255 через запятую
			color = prompt("Enter square's color (0...255, 0...255, 0...255)");
			let colorParts = color.split(", ");
			if (
				colorParts[0] >= 0 &&
				colorParts[0] <= 255 &&
				colorParts[1] >= 0 &&
				colorParts[1] <= 255 &&
				colorParts[2] >= 0 &&
				colorParts[2] <= 255
			) {
				break;
			}
		} while (true);

		let square = getSquare(size, color, index);
		document.body.prepend(square);
	}
}

createSquares();
