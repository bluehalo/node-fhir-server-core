const BackboneElement = require('./BackboneElement');
const DateScalar = require('./scalars/Date.scalar');

class ExplanationOfBenefitAccident extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ExplanationOfBenefitAccident';
		Object.assign(this, opt);
	}

	// This is a ExplanationOfBenefitAccident resource
	static get __resourceType() {
		return 'ExplanationOfBenefitAccident';
	}

	// Date of an accident which these services are addressing.
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

	// Type of accident: work, auto, etc.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// Where the accident occurred.
	get locationAddress() {
		return this.__locationAddress;
	}

	set locationAddress(new_value) {
		const Address = require('./Address');
		this.__locationAddress = new Address(new_value);
	}

	// Where the accident occurred.
	get locationReference() {
		return this.__locationReference;
	}

	set locationReference(new_value) {
		const Reference = require('./Reference');
		this.__locationReference = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			date: this.__date,
			type: this.__type && this.__type.toJSON(),
			locationAddress: this.__locationAddress && this.__locationAddress.toJSON(),
			locationReference: this.__locationReference && this.__locationReference.toJSON(),
		});
	}
}

module.exports = ExplanationOfBenefitAccident;
