import * as models from '../models';

export default class {
	constructor() {
		this.models = models;

		console.log(models);
	}

	find() {
		throw new Error('Method find should be defined.');
	}
}