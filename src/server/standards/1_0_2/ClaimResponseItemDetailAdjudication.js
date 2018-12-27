const BackboneElement = require('./BackboneElement');

class ClaimResponseItemDetailAdjudication extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ClaimResponseItemDetailAdjudication';
		Object.assign(this, opt);
	}

	// This is a ClaimResponseItemDetailAdjudication resource
	static get __resourceType() {
		return 'ClaimResponseItemDetailAdjudication';
	}

	// Code indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const Coding = require('./Coding');
		this.__code = new Coding(new_value);
	}

	// Monetary amount associated with the code.
	get amount() {
		return this.__amount;
	}

	set amount(new_value) {
		const Quantity = require('./Quantity');
		this.__amount = new Quantity(new_value);
	}

	// A non-monetary value for example a percentage. Mutually exclusive to the amount element above.
	get value() {
		return this.__value;
	}

	set value(new_value) {
		this.__value = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code && this.__code.toJSON(),
			amount: this.__amount && this.__amount.toJSON(),
			value: this.__value,
		});
	}
}

module.exports = ClaimResponseItemDetailAdjudication;
