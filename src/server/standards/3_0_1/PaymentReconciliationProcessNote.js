const BackboneElement = require('./BackboneElement');

class PaymentReconciliationProcessNote extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'PaymentReconciliationProcessNote';
		Object.assign(this, opt);
	}

	// This is a PaymentReconciliationProcessNote resource
	static get __resourceType() {
		return 'PaymentReconciliationProcessNote';
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

module.exports = PaymentReconciliationProcessNote;
