// после загрузки DOM

const baseURI = "http://localhost:3000/";
const root = document.getElementById("root");

getQuery("posts")
	.then((data) => postRender(data))
	.catch((error) => {
		alert(error.message);
	});

const createPostForm = document.getElementById("create-post");
createPostForm.addEventListener("submit", createPost);

function createPost(e) {
	e.preventDefault();
	console.log(this.elements);

	const {
		author: authorField,
		title: titleField,
		intro: introField,
		text: textField,
		date: dateField,
	} = this.elements;
	// validation
	const data = {
		author: authorField.value,
		title: titleField.value,
		intro: introField.value,
		text: textField.value,
		date: dateField.value,
	};
	// console.log(data);
	postQuery(data, "posts")
		.then((data) => getQuery("posts"))
		.then((data) => postRender(data))
		.catch((error) => {
			alert(error.message);
		});
}

function postRender(data) {
	// console.log(data);

	root.textContent = "";

	data.forEach(
		({
			author: authorField,
			title: titleField,
			intro: introField,
			date: dateField,
		}) => {
			const article = document.createElement("article");
			const title = document.createElement("h3");
			const buttonEdit = document.createElement("button");
			const intro = document.createElement("p");
			const date = document.createElement("span");
			const author = document.createElement("span");

			title.textContent = titleField;
			intro.textContent = introField;
			date.textContent = dateField;
			author.textContent = authorField;
			buttonEdit.textContent = "Edit";
			buttonEdit.addEventListener("click", function () {
				// всплыла форма с данными статьи. Изменили данные, нажали в форме сабмит, получили измененные данные с формы
				// имитируем полученные данные
				const data = {
					author: "authorField.value",
					title: "titleField.value",
					intro: "introField.value",
					text: "textField.value",
					date: "dateField.value",
				};

				// как-то мы получили ID нужного поста
				const id = "3";
				putQuery(data, "posts", id)
					.then((data) => getQuery("posts"))
					.then((data) => postRender(data))
					.catch((error) => {
						alert(error.message);
					});
			});
			article.append(buttonEdit, title, intro, date, author);
			root.append(article);
		}
	);
}

function postQuery(data, queryType) {
	return fetch(baseURI + queryType, {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	})
		.then((response) => response.json())
		.catch((error) => {
			throw new Error(error.message);
		});
}

function getQuery(queryType) {
	return fetch(baseURI + queryType)
		.then((response) => response.json())
		.catch((error) => {
			throw new Error(error.message);
		});
}

function putQuery(data, queryType, queryNumber) {
	return fetch(baseURI + queryType + "/" + queryNumber, {
		method: "PUT",
		body: JSON.stringify(data),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	}).then((response) => response.json());
}

// putQuery().then((json) => console.log(json))

// fetch('http://localhost:3000/posts/1', {
//   method: 'DELETE',
// })

// This is equivalent to /comments?postId=1
// fetch('http://localhost:3000/posts/1/comments')
//   .then((response) => response.json())
//   .then((json) => console.log(json))
