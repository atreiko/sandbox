import BaseErrorHandler from './ErrorHandler';

export default class UnAuthorizedErrorHandler extends BaseErrorHandler {
	constructor(message) {
		super(message, 401);
	}
}