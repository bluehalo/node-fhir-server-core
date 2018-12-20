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

	// A plan, proposal or order that is fulfilled in whole or in part by this event.
	get basedOn() {
		return this.__basedOn;
	}

	set basedOn(new_value) {
		const Reference = require('./Reference');
		this.__basedOn = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A larger event of which this particular event is a component or step.
	get partOf() {
		return this.__partOf;
	}

	set partOf(new_value) {
		const Reference = require('./Reference');
		this.__partOf = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The encounter or episode of care that establishes the context for this MedicationStatement.
	get context() {
		return this.__context;
	}

	set context(new_value) {
		const Reference = require('./Reference');
		this.__context = new Reference(new_value);
	}

	// A code representing the patient or other source\'s judgment about the state of the medication used that this statement is about.  Generally this will be active or completed.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Indicates where type of medication statement and where the medication is expected to be consumed or administered.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__category = new CodeableConcept(new_value);
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

	// The person or organization that provided the information about the taking of this medication. Note: Use derivedFrom when a MedicationStatement is derived from other resources, e.g Claim or MedicationRequest.
	get informationSource() {
		return this.__informationSource;
	}

	set informationSource(new_value) {
		const Reference = require('./Reference');
		this.__informationSource = new Reference(new_value);
	}

	// The person, animal or group who is/was taking the medication.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// Allows linking the MedicationStatement to the underlying MedicationRequest, or to other information that supports or is used to derive the MedicationStatement.
	get derivedFrom() {
		return this.__derivedFrom;
	}

	set derivedFrom(new_value) {
		const Reference = require('./Reference');
		this.__derivedFrom = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// Indicator of the certainty of whether the medication was taken by the patient.
	get taken() {
		return this.__taken;
	}

	set taken(new_value) {
		this.__taken = new_value;
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
	get reasonCode() {
		return this.__reasonCode;
	}

	set reasonCode(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reasonCode = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Condition or observation that supports why the medication is being/was taken.
	get reasonReference() {
		return this.__reasonReference;
	}

	set reasonReference(new_value) {
		const Reference = require('./Reference');
		this.__reasonReference = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// Provides extra information about the medication statement that is not conveyed by the other attributes.
	get note() {
		return this.__note;
	}

	set note(new_value) {
		const Annotation = require('./Annotation');
		this.__note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// Indicates how the medication is/was or should be taken by the patient.
	get dosage() {
		return this.__dosage;
	}

	set dosage(new_value) {
		const Dosage = require('./Dosage');
		this.__dosage = Array.isArray(new_value) ? new_value.map(val => new Dosage(val)) : [new Dosage(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			basedOn: this.__basedOn && this.__basedOn.map(v => v.toJSON()),
			partOf: this.__partOf && this.__partOf.map(v => v.toJSON()),
			context: this.__context && this.__context.toJSON(),
			status: this.__status,
			category: this.__category && this.__category.toJSON(),
			medicationCodeableConcept: this.__medicationCodeableConcept && this.__medicationCodeableConcept.toJSON(),
			medicationReference: this.__medicationReference && this.__medicationReference.toJSON(),
			effectiveDateTime: this.__effectiveDateTime,
			effectivePeriod: this.__effectivePeriod && this.__effectivePeriod.toJSON(),
			dateAsserted: this.__dateAsserted,
			informationSource: this.__informationSource && this.__informationSource.toJSON(),
			subject: this.__subject && this.__subject.toJSON(),
			derivedFrom: this.__derivedFrom && this.__derivedFrom.map(v => v.toJSON()),
			taken: this.__taken,
			reasonNotTaken: this.__reasonNotTaken && this.__reasonNotTaken.map(v => v.toJSON()),
			reasonCode: this.__reasonCode && this.__reasonCode.map(v => v.toJSON()),
			reasonReference: this.__reasonReference && this.__reasonReference.map(v => v.toJSON()),
			note: this.__note && this.__note.map(v => v.toJSON()),
			dosage: this.__dosage && this.__dosage.map(v => v.toJSON()),
		});
	}
}

module.exports = MedicationStatement;
