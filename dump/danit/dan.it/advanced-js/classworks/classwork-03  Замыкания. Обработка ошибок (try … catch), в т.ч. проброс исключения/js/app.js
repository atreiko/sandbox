// let a = 3,
// 	b = 4;
// // function fn() {
// // 	return a + b;
// // }
// function fn(a) {
// 	if (a < 6) {
// 		a = 6;
// 	}
// 	return function sum(b) {
// 		return a + b;
// 	};
// }

// let sum = fn(a);
// console.log(sum(0));
// console.log(sum(5));
// console.log(sum(12));
// console.log(sum(11));
// console.log(a);

// ======================Task 1

// let btnDec = document.getElementById("decrease-text");
// let btnInc = document.getElementById("increase-text");
// let text = document.getElementById("text");

// let changeTextSize = function ({ style }, fontSize) {
// 	fontSize = parseInt(fontSize);
// 	return function (value) {
// 		fontSize += value;
// 		style.fontSize = fontSize + "px";
// 	};
// };
// // let changeTextSize = function ({ style }, value) {
// // 	let fontSize = parseInt(style.fontSize);
// // 		style.fontSize = fontSize + value + "px";
// // };

// let fn = changeTextSize(text, text.style.fontSize);

// btnInc.addEventListener("click", function () {
// 	fn(3);
// });
// btnDec.addEventListener("click", function () {
// 	fn(-3);
// });
// try {
// 	larevel;
// 	console.log("Try");
// } catch (err) {
// 	console.log(err.name);
// 	console.log(err.message);
// 	console.log(err.stack);
// } finally {
// 	console.log("Finally");
// }

// console.log("Done");

// let json = "{ bad json }";
// try {
// 	let user = JSON.parse(json); // <-- when an error occurs...
// 	console.log(user.name); // doesn't work
// } catch (e) {
// 	// ...the execution jumps here
// 	console.log(
// 		"Our apologies, the data has errors, we'll try to request it once more."
// 	);
// 	console.log(e.name); // SyntaxErrorconsole.log(e.message);
// 	// Unexpected token o in JSON at position 0
// }

// let json = '{"name": "Roman", "age": 30 }'; // incomplete data
// try {
// 	let user = JSON.parse(json); // <-- no errors
// 	if (!user.name) {
// 		throw new Error("Incomplete data: no name");
// 		// passing the message to the constructor
// 	}
// 	localSe;
// 	console.log(user.name);
// } catch (e) {
// 	if (e.name == "SyntaxError") {
// 		console.log("JSON Error: " + e.message);
// 	} else {
// 		throw e; // проброс (*)
// 	}
// 	// console.log(e.name + "- JSON Error: -" + e.message);
// 	// console.log(e.stack);
// 	// JSON Error: Incomplete data: no name
// }

function readData() {
	let json = '{ "age": 30 }';
	let user = JSON.parse(json); // <-- no errors
	try {
		if (!user.name) {
			throw new Error("Incomplete data: no name");
			// passing the message to the constructor
		}
	} catch (e) {
		// ...
		if (e.name != "SyntaxError") {
			throw e; // проброс исключения (не знаю как это обработать)
		}
	}
}

try {
	readData();
} catch (e) {
	switch (e.name) {
	}
	console.log("Внешний catch поймал: " + e); // поймал!
}

console.log("somme tasks...");
