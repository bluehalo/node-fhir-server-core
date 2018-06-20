const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Money = require('./Money');

class ClaimResponse_Adjudication extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ClaimResponse_Adjudication';
	}

	// Code indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		this._category = new CodeableConcept(new_value);
	}

	// Adjudication reason such as limit reached.
	get reason () {
		return this._reason;
	}

	set reason ( new_value ) {
		this._reason = new CodeableConcept(new_value);
	}

	// Monetary amount associated with the code.
	get amount () {
		return this._amount;
	}

	set amount ( new_value ) {
		this._amount = new Money(new_value);
	}

	// A non-monetary value for example a percentage. Mutually exclusive to the amount element above.
	get value () {
		return this._value;
	}

	set value ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field value`);
		}
		this._value = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			category: this._category,
			reason: this._reason,
			amount: this._amount,
			value: this._value
		});
	}

}

module.exports = ClaimResponse_Adjudication;
