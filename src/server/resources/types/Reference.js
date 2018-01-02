class Reference {
	constructor(obj) {
		Object.assign(this, obj);
	}

	set reference(reference) {
		this._reference = reference;
	}

	get reference() {
		return this._reference;
	}

	toJSON() {
		return {
			reference: this._reference
		};
	}
}

module.exports = Reference;
