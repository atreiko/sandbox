import BaseACL from './BaseACL';

export default class extends BaseACL {
	constructor(accessList) {
		super(accessList, 'users');
	}
}