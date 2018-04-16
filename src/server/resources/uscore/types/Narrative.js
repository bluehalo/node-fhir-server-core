const Element = require('./types/Element');
const Code = require('./types/Code');

class Narrative extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// id		0..1	string	xml:id (or equivalent in JSON)
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// status	S	1..1	code	generated | extensions | additional | empty
	// Binding: Narrative Status (required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// div	I	1..1	xhtml	Limited xhtml content
	// txt-1: The narrative SHALL contain only the basic html formatting elements and attributes described in chapters 7-11 (except section 4 of chapter 9) and 15 of the HTML 4.0 standard, <a> elements (either name or href), images and internally contained style attributes
	// txt-2: The narrative SHALL have some non-whitespace content
	set div(div) {
		this._div = div;
	}

	get div() {
		return this._div;
	}

	toJSON() {
		const json = {
			id: this._id,
			status: this._status,
			div: this._div,
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = Narrative;
