// function sumAsync(a, b) {
// 	setTimeout(() => {
// 		console.log(a + b);
// 	}, 100);
// }
// sumAsync(3, 3);

// function sum(a, b) {
// 	console.log(a + b);
// }
// sum(2, 3);

// const promise1 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("foo");
// 		reject(new Error("Error"));
// 		// throw new Error("Error");
// 	}, 300);
// });
// promise1
// 	.then((value) => {
// 		console.log(value);
// 	})
// 	.then(() => {
// 		console.log(promise1);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// console.log("end promise");

// var isMomHappy = true;

// var willIGetNewPhone = new Promise(function (resolve, reject) {
// 	if (isMomHappy) {
// 		var phone = {
// 			brand: "Samsung",
// 			color: "black",
// 		};
// 		resolve(phone); // Всё выполнено
// 	} else {
// 		var reason = new Error("mom is not happy");
// 		reject(reason); // reject
// 	}
// });
// var askMom = function () {
// 	willIGetNewPhone
// 		.then(function (fulfilled) {
// 			// yay, you got a new phone
// 			console.log(fulfilled);
// 			// output: { brand: 'Samsung', color: 'black' }
// 		})
// 		.catch(function (error) {
// 			// oops, mom don't buy it
// 			console.log(error.message);
// 			// output: 'mom is not happy'
// 		});
// };

// askMom();

// var showOff = function (phone) {
// 	return new Promise(function (resolve, reject) {
// 		var message =
// 			"Hey friend, I have a new " +
// 			phone.color +
// 			" " +
// 			phone.brand +
// 			" phone";
// 		resolve(message);
// 	});
// // };
// var showOff = function (mabila) {
// 	var message =
// 		"Hey friend, I have a new " +
// 		mabila.color +
// 		" " +
// 		mabila.brand +
// 		" phone";
// 	return new Promise((resolve, rej) => {
// 		// resolve(message);
// 		rej(new Error("i cant showOff :("));
// 	});
// };
// var askMom = function () {
// 	willIGetNewPhone
// 		.then(showOff) // связываем || выполнить showOff если "mom happy"
// 		.then(function (fulfilled) {
// 			console.log(fulfilled);
// 			// output: 'Hey friend, I have a new black Samsung phone.'
// 		})
// 		.catch(function (error) {
// 			// oops, mom don't buy it
// 			console.log(error.message);
// 			// output: 'mom is not happy'
// 		});
// };
// askMom();

// VAR 3

// const isMomHappy = true;
// // Промис
// const willIGetNewPhone = new Promise((resolve, reject) => {
// 	if (isMomHappy) {
// 		const phone = {
// 			brand: "Samsung",
// 			color: "black",
// 		};
// 		resolve(phone);
// 	} else {
// 		const reason = new Error("mom is not happy");
// 		reject(reason);
// 	}
// });
// // 2й промис
// async function showOff(phone) {
// 	return new Promise((resolve, reject) => {
// 		var message =
// 			"Hey friend, I have a new " +
// 			phone.color +
// 			" " +
// 			phone.brand +
// 			" phone";

// 		resolve(message);
// 	});
// }
// // Вызываем промис
// async function askMom() {
// 	try {
// 		console.log("before asking Mom");

// 		let phone = await willIGetNewPhone;
// 		let message = await showOff(phone);

// 		console.log(message);
// 		console.log("after asking mom");
// 	} catch (error) {
// 		console.log(error.message);
// 	}
// }
// (async () => {
// 	await askMom();
// })();

const reqURL = "https://swapi.dev/api/films/";

function myAsyncFunction(url) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open("GET", url);

		xhr.onload = () => resolve(xhr.response);
		xhr.onerror = () => reject(xhr.statusText);
		xhr.send();
	});
}
myAsyncFunction(reqURL)
	.then(function (response) {
		let info = JSON.parse(response);
		filmPusher(info);
	})
	.catch(function (error) {
		alert(error);
	});

let listCreator = function () {
	let ul = document.createElement("ul");
	let li = document.createElement("li");
	let title = document.createElement("h3");
	let episode = document.createElement("p");
	let openingCrawl = document.createElement("p");
	li.append(episode, title, openingCrawl);
	return { ul, li };
};
let filmPusher = function ({ results }) {
	const { ul, li } = listCreator();
	results.forEach((item, index) => {
		const { title, episode_id, opening_crawl } = item;
		let listItem = li.cloneNode(true);
		listItem.children[1].textContent = title;
		listItem.children[0].textContent = episode_id;
		listItem.children[2].textContent = opening_crawl;
		console.log(listItem.children);
		ul.append(listItem);
	});
	document.body.append(ul);
};

const obj = {
	email: "test@gmail.com",
	password: "testUser",
};

const request = new XMLHttpRequest();

request.open("POST", "http://shop.danit.com.ua/login");
request.setRequestHeader("Content-type", "application/json; charset=utf8"); // Указываем серверу, что данные будут передавать в формате JSON и в кодировке UTF-8

request.onreadystatechange = function () {
	if (request.readyState === 4 && request.status === 200) {
		let res = JSON.parse(request.response);
		console.log(res);
	}
};

request.send(JSON.stringify(obj));
