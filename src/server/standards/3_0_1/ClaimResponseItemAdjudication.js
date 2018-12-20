const BackboneElement = require('./BackboneElement');

class ClaimResponseItemAdjudication extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ClaimResponseItemAdjudication';
		Object.assign(this, opt);
	}

	// This is a ClaimResponseItemAdjudication resource
	static get __resourceType() {
		return 'ClaimResponseItemAdjudication';
	}

	// Code indicating: Co-Pay, deductible, eligible, benefit, tax, etc.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__category = new CodeableConcept(new_value);
	}

	// Adjudication reason such as limit reached.
	get reason() {
		return this.__reason;
	}

	set reason(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reason = new CodeableConcept(new_value);
	}

	// Monetary amount associated with the code.
	get amount() {
		return this.__amount;
	}

	set amount(new_value) {
		const Money = require('./Money');
		this.__amount = new Money(new_value);
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
			category: this.__category && this.__category.toJSON(),
			reason: this.__reason && this.__reason.toJSON(),
			amount: this.__amount && this.__amount.toJSON(),
			value: this.__value,
		});
	}
}

module.exports = ClaimResponseItemAdjudication;
