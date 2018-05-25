const Element = require('./Element');
const Coding = require('./Coding');

class CodeableConcept extends Element {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'CodeableConcept';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'CodeableConcept';
	}

	// A reference to a code defined by a terminology system.
	get coding () {
		return this._coding;
	}

	set coding ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._coding = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.
	get text () {
		return this._text;
	}

	set text ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._text = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			coding: this.coding.map(v => v.toJSON()),
			text: this.text
		});
	}

}

module.exports = CodeableConcept;
