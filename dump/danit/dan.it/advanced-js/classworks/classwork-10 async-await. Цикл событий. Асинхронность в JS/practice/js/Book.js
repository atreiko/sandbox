export default class Book {
	constructor({ author, name, price }) {
		this.author = author;
		this.title = name;
		this.price = price;
	}
	render() {
		const author = document.createElement("h2");
		const title = document.createElement("p");
		const price = document.createElement("p");
		const wrapper = document.createElement("div");
		author.textContent = this.author;
		title.textContent = this.title;
		price.textContent = this.price;
		wrapper.append(author, title, price);
		root.append(wrapper);
	}
}
