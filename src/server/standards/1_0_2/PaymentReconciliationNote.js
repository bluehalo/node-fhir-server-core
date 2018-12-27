const BackboneElement = require('./BackboneElement');

class PaymentReconciliationNote extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'PaymentReconciliationNote';
		Object.assign(this, opt);
	}

	// This is a PaymentReconciliationNote resource
	static get __resourceType() {
		return 'PaymentReconciliationNote';
	}

	// The note purpose: Print/Display.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const Coding = require('./Coding');
		this.__type = new Coding(new_value);
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

module.exports = PaymentReconciliationNote;
