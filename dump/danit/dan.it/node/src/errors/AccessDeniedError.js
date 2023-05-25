import BaseErrorHandler from './ErrorHandler';

export default class AccessDeniedErrorHandler extends BaseErrorHandler {
	constructor(message) {
		super(message, 403);
	}
}