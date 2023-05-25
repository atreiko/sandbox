
export default class ErrorHandler extends Error {
	/***
	 * @desc
	 */
	constructor(message, code = 500) {
		super(message);

		this.code = code;
	}
}