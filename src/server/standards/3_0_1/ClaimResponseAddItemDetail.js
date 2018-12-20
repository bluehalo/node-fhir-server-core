const BackboneElement = require('./BackboneElement');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');

class ClaimResponseAddItemDetail extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ClaimResponseAddItemDetail';
		Object.assign(this, opt);
	}

	// This is a ClaimResponseAddItemDetail resource
	static get __resourceType() {
		return 'ClaimResponseAddItemDetail';
	}

	// The type of reveneu or cost center providing the product and/or service.
	get revenue() {
		return this.__revenue;
	}

	set revenue(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__revenue = new CodeableConcept(new_value);
	}

	// Health Care Service Type Codes  to identify the classification of service or benefits.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__category = new CodeableConcept(new_value);
	}

	// A code to indicate the Professional Service or Product supplied.
	get service() {
		return this.__service;
	}

	set service(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__service = new CodeableConcept(new_value);
	}

	// Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours.
	get modifier() {
		return this.__modifier;
	}

	set modifier(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__modifier = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// The fee charged for the professional service or product..
	get fee() {
		return this.__fee;
	}

	set fee(new_value) {
		const Money = require('./Money');
		this.__fee = new Money(new_value);
	}

	// A list of note references to the notes provided below.
	get noteNumber() {
		return this.__noteNumber;
	}

	set noteNumber(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field noteNumber`);
		}
		this.__noteNumber = Array.isArray(new_value) ? new_value : [new_value];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			revenue: this.__revenue && this.__revenue.toJSON(),
			category: this.__category && this.__category.toJSON(),
			service: this.__service && this.__service.toJSON(),
			modifier: this.__modifier && this.__modifier.map(v => v.toJSON()),
			fee: this.__fee && this.__fee.toJSON(),
			noteNumber: this.__noteNumber,
		});
	}
}

module.exports = ClaimResponseAddItemDetail;
