const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Money = require('./Money');
const Identifier = require('./Identifier');

class ExplanationOfBenefit_Payment extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ExplanationOfBenefit_Payment';
	}

	// Whether this represents partial or complete payment of the claim.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// Adjustment to the payment of this transaction which is not related to adjudication of this transaction.
	get adjustment () {
		return this._adjustment;
	}

	set adjustment ( new_value ) {
		this._adjustment = new Money(new_value);
	}

	// Reason for the payment adjustment.
	get adjustmentReason () {
		return this._adjustmentReason;
	}

	set adjustmentReason ( new_value ) {
		this._adjustmentReason = new CodeableConcept(new_value);
	}

	// Estimated payment date.
	get date () {
		return this._date;
	}

	set date ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this._date = new_value;
	}

	// Payable less any payment adjustment.
	get amount () {
		return this._amount;
	}

	set amount ( new_value ) {
		this._amount = new Money(new_value);
	}

	// Payment identifer.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this._type && this._type.toJSON(),
			adjustment: this._adjustment && this._adjustment.toJSON(),
			adjustmentReason: this._adjustmentReason && this._adjustmentReason.toJSON(),
			date: this._date,
			amount: this._amount && this._amount.toJSON(),
			identifier: this._identifier && this._identifier.toJSON()
		});
	}

}

module.exports = ExplanationOfBenefit_Payment;
