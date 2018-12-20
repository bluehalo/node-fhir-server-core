const BackboneElement = require('./BackboneElement');

class ProcessResponseProcessNote extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ProcessResponseProcessNote';
		Object.assign(this, opt);
	}

	// This is a ProcessResponseProcessNote resource
	static get __resourceType() {
		return 'ProcessResponseProcessNote';
	}

	// The note purpose: Print/Display.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// The note text.
	get text() {
		return this.__text;
	}

	set text(new_value) {
		this.__text = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type && this.__type.toJSON(),
			text: this.__text,
		});
	}
}

module.exports = ProcessResponseProcessNote;
