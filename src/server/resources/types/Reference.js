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

	set display(display) {
		this._display = display;
	}

	get display() {
		return this._display;
	}

	toJSON() {
		return {
			reference: this._reference,
			display: this._display
		};
	}
}

module.exports = Reference;
