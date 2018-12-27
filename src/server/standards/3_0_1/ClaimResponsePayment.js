const BackboneElement = require('./BackboneElement');
const DateScalar = require('./scalars/Date.scalar');

class ClaimResponsePayment extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ClaimResponsePayment';
		Object.assign(this, opt);
	}

	// This is a ClaimResponsePayment resource
	static get __resourceType() {
		return 'ClaimResponsePayment';
	}

	// Whether this represents partial or complete payment of the claim.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// Adjustment to the payment of this transaction which is not related to adjudication of this transaction.
	get adjustment() {
		return this.__adjustment;
	}

	set adjustment(new_value) {
		const Money = require('./Money');
		this.__adjustment = new Money(new_value);
	}

	// Reason for the payment adjustment.
	get adjustmentReason() {
		return this.__adjustmentReason;
	}

	set adjustmentReason(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__adjustmentReason = new CodeableConcept(new_value);
	}

	// Estimated payment data.
	get date() {
		return this.__date;
	}

	set date(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this.__date = new_value;
	}

	// Payable less any payment adjustment.
	get amount() {
		return this.__amount;
	}

	set amount(new_value) {
		const Money = require('./Money');
		this.__amount = new Money(new_value);
	}

	// Payment identifier.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type && this.__type.toJSON(),
			adjustment: this.__adjustment && this.__adjustment.toJSON(),
			adjustmentReason: this.__adjustmentReason && this.__adjustmentReason.toJSON(),
			date: this.__date,
			amount: this.__amount && this.__amount.toJSON(),
			identifier: this.__identifier && this.__identifier.toJSON(),
		});
	}
}

module.exports = ClaimResponsePayment;
