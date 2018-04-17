const Element = require('./Element');
const Code = require('./Code');


class Narrative extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// status		1..1	code	generated | extensions | additional | empty R!
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// div	I	1..1	xhtml	Limited xhtml content
	set div(div) {
		this._div = div;
	}

	get div() {
		return this._div;
	}

	toJSON() {
		const json = {
			status: this._status,
			div: this._div
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = Narrative;
