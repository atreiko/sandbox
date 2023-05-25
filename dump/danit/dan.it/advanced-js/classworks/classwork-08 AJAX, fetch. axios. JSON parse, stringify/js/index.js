// const reqURL = "https://swapi.dev/api/films/";

// function myAsyncFunction(url) {
// 	return new Promise((resolve, reject) => {
// 		const xhr = new XMLHttpRequest();
// 		xhr.open("GET", url);

// 		xhr.onload = () => resolve(xhr.response);
// 		xhr.onerror = () => reject(xhr.statusText);
// 		xhr.send();
// 	});
// }
// myAsyncFunction(reqURL)
// 	.then(function (response) {
// 		let info = JSON.parse(response);
// 		console.log(info);
// 	})
// 	.catch(function (error) {
// 		alert(error);
// 	});
// const reqURL = "https://swapi.dev/api/films/";

// const reqURL = "https://ajax.test-danit.com/api/swapi/planets/45";
// const reqURL1 = "https://ajax.test-danit.com/api/swapi/planets/40";

// fetch(reqURL, {
// 	method: "GET",
// })
// 	.then((response) => {
// 		console.log(response);
// 		return response.json();
// 	})
// 	.then((data) => console.log(data))
// 	.catch((error) => console.log(error.message));

// axios
// 	.get(reqURL)
// 	.then(function (response) {
// 		console.log(response);
// 	})
// 	.catch(function (error) {
// 		console.log(error);
// 	});

// axios({
// 	method: "GET",
// 	url: reqURL,
// 	// data: {
// 	//   firstName: 'Fred',
// 	//   lastName: 'Flintstone'
// 	// }
// })
// 	.then(function (response) {
// 		console.log(response);
// 	})
// 	.catch(function (error) {
// 		console.log(error);
// 	});

// axios
// 	.all([axios.get(reqURL), axios.get(reqURL1)])
// 	.then(
// 		axios.spread(({ data }, { data: data1 }) => {
// 			console.log(data);
// 			console.log(data1);
// 		})
// 	)
// 	.catch((error) => {
// 		console.log(error);
// 	});

//TASK1
// const url = "https://ajax.test-danit.com/api/swapi/planets";

// fetch(url)
// 	.then((response) => response.json())
// 	.then((data) => {
// 		data.sort(({ diameter: item1 }, { diameter: item2 }) => item2 - item1);
// 		console.log(data);
// 	})
// 	.catch((error) => console.log(error.message));

// TASK 2
const baseURL = "https://ajax.test-danit.com/api/swapi";
const root = document.getElementById("root");
// const planetNumber = +prompt("Какой номер планеты?");
// console.log(baseURL + "/planets" + "/" + (planetNumber - 1));

// if (planetNumber > 0 && planetNumber < 60) {
// 	axios
// 		.get(baseURL + "/planets" + "/" + (planetNumber - 1))
// 		.then(function ({ data }) {
// 			console.log(data);
// 			const result = document.createElement("table");
// 			for (let key in data) {
// 				let propWrap = document.createElement("tr");
// 				let propName = document.createElement("td");
// 				let propValue = document.createElement("td");
// 				propName.textContent = key;
// 				propValue.textContent = data[key];
// 				propWrap.append(propName, propValue);
// 				result.append(propWrap);
// 				root.append(result);
// 			}
// 		})
// 		.catch(function (error) {
// 			console.log(error);
// 		});
// }

// TASK 3
function getPeople(url) {
	axios
		.get(url)
		.then(function ({ data }) {
			renderPeopleList(data);
			return data;
		})
		.catch(function (error) {
			console.log(error);
		});
}

function renderPeopleList(data) {
	const listNames = document.createElement("ul");
	data.forEach(({ name }) => {
		const nameItem = document.createElement("li");
		nameItem.textContent = name;
		listNames.append(nameItem);
	});
	root.append(listNames);
}

// const peopleData = getPeople(baseURL + "/people");
