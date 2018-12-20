const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class VisionPrescription extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'VisionPrescription';
		Object.assign(this, opt);
	}

	// This is a VisionPrescription resource
	static get __resourceType() {
		return 'VisionPrescription';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__VisionPrescription = new_value;
	}

	// Business identifier which may be used by other parties to reference or identify the prescription.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// The status of the resource instance.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// A link to a resource representing the person to whom the vision products will be supplied.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// A link to a resource that identifies the particular occurrence of contact between patient and health care provider.
	get encounter() {
		return this.__encounter;
	}

	set encounter(new_value) {
		const Reference = require('./Reference');
		this.__encounter = new Reference(new_value);
	}

	// The date (and perhaps time) when the prescription was written.
	get dateWritten() {
		return this.__dateWritten;
	}

	set dateWritten(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field dateWritten`);
		}
		this.__dateWritten = new_value;
	}

	// The healthcare professional responsible for authorizing the prescription.
	get prescriber() {
		return this.__prescriber;
	}

	set prescriber(new_value) {
		const Reference = require('./Reference');
		this.__prescriber = new Reference(new_value);
	}

	// Can be the reason or the indication for writing the prescription.
	get reasonCodeableConcept() {
		return this.__reasonCodeableConcept;
	}

	set reasonCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reasonCodeableConcept = new CodeableConcept(new_value);
	}

	// Can be the reason or the indication for writing the prescription.
	get reasonReference() {
		return this.__reasonReference;
	}

	set reasonReference(new_value) {
		const Reference = require('./Reference');
		this.__reasonReference = new Reference(new_value);
	}

	// Deals with details of the dispense part of the supply specification.
	get dispense() {
		return this.__dispense;
	}

	set dispense(new_value) {
		const VisionPrescriptionDispense = require('./VisionPrescriptionDispense');
		this.__dispense = Array.isArray(new_value)
			? new_value.map(val => new VisionPrescriptionDispense(val))
			: [new VisionPrescriptionDispense(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			status: this.__status,
			patient: this.__patient && this.__patient.toJSON(),
			encounter: this.__encounter && this.__encounter.toJSON(),
			dateWritten: this.__dateWritten,
			prescriber: this.__prescriber && this.__prescriber.toJSON(),
			reasonCodeableConcept: this.__reasonCodeableConcept && this.__reasonCodeableConcept.toJSON(),
			reasonReference: this.__reasonReference && this.__reasonReference.toJSON(),
			dispense: this.__dispense && this.__dispense.map(v => v.toJSON()),
		});
	}
}

module.exports = VisionPrescription;
