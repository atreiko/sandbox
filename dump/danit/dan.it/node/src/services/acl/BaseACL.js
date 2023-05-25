export default class {
	constructor(accessList, chapter = null) {
		this.accessList = accessList;
		this.chapter = chapter;
	}

	validateAccessRule(rule) {
		if (!this.chapter) {
			return false;
		}

		return !!this.accessList[this.chapter][rule];
	}

	canDelete() {
		return this.validateAccessRule('delete');
	}

	canCreate() {
		return this.validateAccessRule('create');
	}

	canUpdate() {
		return this.validateAccessRule('update');
	}
}