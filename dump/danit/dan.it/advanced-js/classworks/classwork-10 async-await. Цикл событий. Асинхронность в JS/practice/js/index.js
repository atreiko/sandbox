import Server from "./Server.js";
import Book from "./Book.js";

const baseURI = "http://localhost:5500/";
const root = document.getElementById("root");

const srv = new Server(baseURI);
// srv.request("GET", null, "posts");
const createBookForm = document.getElementById("createBookForm");
createBookForm.addEventListener("submit", onCreateBookFormSubmit);

const searchBookForm = document.getElementById("searchBookForm");
searchBookForm.addEventListener("submit", onSearchBookFormSubmit);

const getBooksBtn = document.getElementById("getAllBooks");
getBooksBtn.addEventListener("click", getBooksBtnHandler);

function getBooksBtnHandler() {
	srv.request("GET", "posts").then((data) => {
		// localStorage.setItem("data", JSON.stringify(data));
		root.textContent = "";
		data.forEach((bookData) => {
			const book = new Book(bookData);
			book.render();
		});
	});
}

function onCreateBookFormSubmit(event) {
	event.preventDefault();

	const { author, title, price } = this.elements;
	console.log(author);
	const data = {
		author: author.value,
		name: title.value,
		price: price.value,
	};
	srv.request("POST", "posts", data).then((data) => {
		const book = new Book(data);
		book.render();
	});
}

async function onSearchBookFormSubmit(event) {
	event.preventDefault();
	const {
		search: { value: searchValue },
	} = this.elements;
	// console.log(localStorage.getItem("data"));
	srv.request("GET", "posts").then((data) => {
		const resultArr = data.filter(
			({ author, name, price }) =>
				author === searchValue ||
				name === searchValue ||
				price === searchValue
		);
		root.textContent = "";
		resultArr.forEach((bookData) => {
			const book = new Book(bookData);
			book.render();
		});
	});

	// const resultArr = [];
	// const authorRequest = await srv
	// 	.request("GET", `posts?author=${searchValue}`)
	// 	.then((data) => {
	// 		console.log(data);
	// 		resultArr.push(...data);
	// 	});
	// const nameRequest = await srv
	// 	.request("GET", `posts?name=${searchValue}`)
	// 	.then((data) => {
	// 		console.log(data);
	// 		resultArr.push(...data);
	// 	});
	// const priceRequest = await srv
	// 	.request("GET", `posts?price=${searchValue}`)
	// 	.then((data) => {
	// 		console.log(data);
	// 		resultArr.push(...data);
	// 	});
	// // console.log(resultArr);
	// const result = new Set(resultArr);
	// console.log(result);
}

// let data = srv.request("GET", null, "posts");
// data.then((data) => {
// 	localStorage.setItem("data", JSON.stringify(data));
// });
// console.log(localStorage.getItem("data"));
// console.log(localStorage);
// const books = new Book();
