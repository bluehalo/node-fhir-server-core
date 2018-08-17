const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');

class PaymentReconciliation_ProcessNote extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'PaymentReconciliation_ProcessNote';
	}

	// The note purpose: Print/Display.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// The note text.
	get text () {
		return this._text;
	}

	set text ( new_value ) {
		this._text = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this._type && this._type.toJSON(),
			text: this._text
		});
	}

}

module.exports = PaymentReconciliation_ProcessNote;
