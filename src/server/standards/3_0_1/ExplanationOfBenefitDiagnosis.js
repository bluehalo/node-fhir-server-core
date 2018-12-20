const BackboneElement = require('./BackboneElement');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');

class ExplanationOfBenefitDiagnosis extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ExplanationOfBenefitDiagnosis';
		Object.assign(this, opt);
	}

	// This is a ExplanationOfBenefitDiagnosis resource
	static get __resourceType() {
		return 'ExplanationOfBenefitDiagnosis';
	}

	// Sequence of diagnosis which serves to provide a link.
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

	// The diagnosis.
	get diagnosisCodeableConcept() {
		return this.__diagnosisCodeableConcept;
	}

	set diagnosisCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__diagnosisCodeableConcept = new CodeableConcept(new_value);
	}

	// The diagnosis.
	get diagnosisReference() {
		return this.__diagnosisReference;
	}

	set diagnosisReference(new_value) {
		const Reference = require('./Reference');
		this.__diagnosisReference = new Reference(new_value);
	}

	// The type of the Diagnosis, for example: admitting, primary, secondary, discharge.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// The package billing code, for example DRG, based on the assigned grouping code system.
	get packageCode() {
		return this.__packageCode;
	}

	set packageCode(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__packageCode = new CodeableConcept(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			sequence: this.__sequence,
			diagnosisCodeableConcept: this.__diagnosisCodeableConcept && this.__diagnosisCodeableConcept.toJSON(),
			diagnosisReference: this.__diagnosisReference && this.__diagnosisReference.toJSON(),
			type: this.__type && this.__type.map(v => v.toJSON()),
			packageCode: this.__packageCode && this.__packageCode.toJSON(),
		});
	}
}

module.exports = ExplanationOfBenefitDiagnosis;
