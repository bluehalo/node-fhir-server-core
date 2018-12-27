const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class MedicationStatement extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MedicationStatement';
		Object.assign(this, opt);
	}

	// This is a MedicationStatement resource
	static get __resourceType() {
		return 'MedicationStatement';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__MedicationStatement = new_value;
	}

	// External identifier - FHIR will generate its own internal identifiers (probably URLs) which do not need to be explicitly managed by the resource.  The identifier here is one that would be used by another non-FHIR system - for example an automated medication pump would provide a record each time it operated; an administration while the patient was off the ward might be made with a different system and entered after the event.  Particularly important if these records have to be updated.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// The person or animal who is/was taking the medication.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// The person who provided the information about the taking of this medication.
	get informationSource() {
		return this.__informationSource;
	}

	set informationSource(new_value) {
		const Reference = require('./Reference');
		this.__informationSource = new Reference(new_value);
	}

	// The date when the medication statement was asserted by the information source.
	get dateAsserted() {
		return this.__dateAsserted;
	}

	set dateAsserted(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field dateAsserted`);
		}
		this.__dateAsserted = new_value;
	}

	// A code representing the patient or other source\'s judgment about the state of the medication used that this statement is about.  Generally this will be active or completed.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Set this to true if the record is saying that the medication was NOT taken.
	get wasNotTaken() {
		return this.__wasNotTaken;
	}

	set wasNotTaken(new_value) {
		this.__wasNotTaken = new_value;
	}

	// A code indicating why the medication was not taken.
	get reasonNotTaken() {
		return this.__reasonNotTaken;
	}

	set reasonNotTaken(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reasonNotTaken = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// A reason for why the medication is being/was taken.
	get reasonForUseCodeableConcept() {
		return this.__reasonForUseCodeableConcept;
	}

	set reasonForUseCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reasonForUseCodeableConcept = new CodeableConcept(new_value);
	}

	// A reason for why the medication is being/was taken.
	get reasonForUseReference() {
		return this.__reasonForUseReference;
	}

	set reasonForUseReference(new_value) {
		const Reference = require('./Reference');
		this.__reasonForUseReference = new Reference(new_value);
	}

	// The interval of time during which it is being asserted that the patient was taking the medication (or was not taking, when the wasNotGiven element is true).
	get effectiveDateTime() {
		return this.__effectiveDateTime;
	}

	set effectiveDateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field effectiveDateTime`);
		}
		this.__effectiveDateTime = new_value;
	}

	// The interval of time during which it is being asserted that the patient was taking the medication (or was not taking, when the wasNotGiven element is true).
	get effectivePeriod() {
		return this.__effectivePeriod;
	}

	set effectivePeriod(new_value) {
		const Period = require('./Period');
		this.__effectivePeriod = new Period(new_value);
	}

	// Provides extra information about the medication statement that is not conveyed by the other attributes.
	get note() {
		return this.__note;
	}

	set note(new_value) {
		this.__note = new_value;
	}

	// Allows linking the MedicationStatement to the underlying MedicationOrder, or to other information that supports the MedicationStatement.
	get supportingInformation() {
		return this.__supportingInformation;
	}

	set supportingInformation(new_value) {
		const Reference = require('./Reference');
		this.__supportingInformation = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
	get medicationCodeableConcept() {
		return this.__medicationCodeableConcept;
	}

	set medicationCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__medicationCodeableConcept = new CodeableConcept(new_value);
	}

	// Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
	get medicationReference() {
		return this.__medicationReference;
	}

	set medicationReference(new_value) {
		const Reference = require('./Reference');
		this.__medicationReference = new Reference(new_value);
	}

	// Indicates how the medication is/was used by the patient.
	get dosage() {
		return this.__dosage;
	}

	set dosage(new_value) {
		const MedicationStatementDosage = require('./MedicationStatementDosage');
		this.__dosage = Array.isArray(new_value)
			? new_value.map(val => new MedicationStatementDosage(val))
			: [new MedicationStatementDosage(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			patient: this.__patient && this.__patient.toJSON(),
			informationSource: this.__informationSource && this.__informationSource.toJSON(),
			dateAsserted: this.__dateAsserted,
			status: this.__status,
			wasNotTaken: this.__wasNotTaken,
			reasonNotTaken: this.__reasonNotTaken && this.__reasonNotTaken.map(v => v.toJSON()),
			reasonForUseCodeableConcept: this.__reasonForUseCodeableConcept && this.__reasonForUseCodeableConcept.toJSON(),
			reasonForUseReference: this.__reasonForUseReference && this.__reasonForUseReference.toJSON(),
			effectiveDateTime: this.__effectiveDateTime,
			effectivePeriod: this.__effectivePeriod && this.__effectivePeriod.toJSON(),
			note: this.__note,
			supportingInformation: this.__supportingInformation && this.__supportingInformation.map(v => v.toJSON()),
			medicationCodeableConcept: this.__medicationCodeableConcept && this.__medicationCodeableConcept.toJSON(),
			medicationReference: this.__medicationReference && this.__medicationReference.toJSON(),
			dosage: this.__dosage && this.__dosage.map(v => v.toJSON()),
		});
	}
}

module.exports = MedicationStatement;
