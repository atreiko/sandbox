import BaseErrorHandler from './ErrorHandler';

export default class extends BaseErrorHandler {
	constructor(message) {
		super(message, 422);
	}
}