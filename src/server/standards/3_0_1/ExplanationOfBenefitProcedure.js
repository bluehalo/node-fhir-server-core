const BackboneElement = require('./BackboneElement');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class ExplanationOfBenefitProcedure extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ExplanationOfBenefitProcedure';
		Object.assign(this, opt);
	}

	// This is a ExplanationOfBenefitProcedure resource
	static get __resourceType() {
		return 'ExplanationOfBenefitProcedure';
	}

	// Sequence of procedures which serves to order and provide a link.
	get sequence() {
		return this.__sequence;
	}

	set sequence(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field sequence`);
		}
		this.__sequence = new_value;
	}

	// Date and optionally time the procedure was performed .
	get date() {
		return this.__date;
	}

	set date(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this.__date = new_value;
	}

	// The procedure code.
	get procedureCodeableConcept() {
		return this.__procedureCodeableConcept;
	}

	set procedureCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__procedureCodeableConcept = new CodeableConcept(new_value);
	}

	// The procedure code.
	get procedureReference() {
		return this.__procedureReference;
	}

	set procedureReference(new_value) {
		const Reference = require('./Reference');
		this.__procedureReference = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			sequence: this.__sequence,
			date: this.__date,
			procedureCodeableConcept: this.__procedureCodeableConcept && this.__procedureCodeableConcept.toJSON(),
			procedureReference: this.__procedureReference && this.__procedureReference.toJSON(),
		});
	}
}

module.exports = ExplanationOfBenefitProcedure;
