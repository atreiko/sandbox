export default class Server {
	constructor(url) {
		this.url = url;
	}
	async request(method, query, data) {
		const response = await fetch(this.url + query, {
			method: method,
			body: JSON.stringify(data),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		});
		const value = await response.json();
		return value;
	}
}
