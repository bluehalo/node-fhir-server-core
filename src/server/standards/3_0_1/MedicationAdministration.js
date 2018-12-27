const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class MedicationAdministration extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MedicationAdministration';
		Object.assign(this, opt);
	}

	// This is a MedicationAdministration resource
	static get __resourceType() {
		return 'MedicationAdministration';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__MedicationAdministration = new_value;
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

	// A protocol, guideline, orderset or other definition that was adhered to in whole or in part by this event.
	get definition() {
		return this.__definition;
	}

	set definition(new_value) {
		const Reference = require('./Reference');
		this.__definition = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// A larger event of which this particular event is a component or step.
	get partOf() {
		return this.__partOf;
	}

	set partOf(new_value) {
		const Reference = require('./Reference');
		this.__partOf = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Will generally be set to show that the administration has been completed.  For some long running administrations such as infusions it is possible for an administration to be started but not completed or it may be paused while some other process is under way.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Indicates the type of medication administration and where the medication is expected to be consumed or administered.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__category = new CodeableConcept(new_value);
	}

	// Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
	get medicationCodeableConcept() {
		return this.__medicationCodeableConcept;
	}

	set medicationCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__medicationCodeableConcept = new CodeableConcept(new_value);
	}

	// Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
	get medicationReference() {
		return this.__medicationReference;
	}

	set medicationReference(new_value) {
		const Reference = require('./Reference');
		this.__medicationReference = new Reference(new_value);
	}

	// The person or animal or group receiving the medication.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// The visit, admission or other contact between patient and health care provider the medication administration was performed as part of.
	get context() {
		return this.__context;
	}

	set context(new_value) {
		const Reference = require('./Reference');
		this.__context = new Reference(new_value);
	}

	// Additional information (for example, patient height and weight) that supports the administration of the medication.
	get supportingInformation() {
		return this.__supportingInformation;
	}

	set supportingInformation(new_value) {
		const Reference = require('./Reference');
		this.__supportingInformation = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// A specific date/time or interval of time during which the administration took place (or did not take place, when the \'notGiven\' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
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

	// A specific date/time or interval of time during which the administration took place (or did not take place, when the \'notGiven\' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
	get effectivePeriod() {
		return this.__effectivePeriod;
	}

	set effectivePeriod(new_value) {
		const Period = require('./Period');
		this.__effectivePeriod = new Period(new_value);
	}

	// The individual who was responsible for giving the medication to the patient.
	get performer() {
		return this.__performer;
	}

	set performer(new_value) {
		const MedicationAdministrationPerformer = require('./MedicationAdministrationPerformer');
		this.__performer = Array.isArray(new_value)
			? new_value.map(val => new MedicationAdministrationPerformer(val))
			: [new MedicationAdministrationPerformer(new_value)];
	}

	// Set this to true if the record is saying that the medication was NOT administered.
	get notGiven() {
		return this.__notGiven;
	}

	set notGiven(new_value) {
		this.__notGiven = new_value;
	}

	// A code indicating why the administration was not performed.
	get reasonNotGiven() {
		return this.__reasonNotGiven;
	}

	set reasonNotGiven(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reasonNotGiven = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// A code indicating why the medication was given.
	get reasonCode() {
		return this.__reasonCode;
	}

	set reasonCode(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reasonCode = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Condition or observation that supports why the medication was administered.
	get reasonReference() {
		return this.__reasonReference;
	}

	set reasonReference(new_value) {
		const Reference = require('./Reference');
		this.__reasonReference = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// The original request, instruction or authority to perform the administration.
	get prescription() {
		return this.__prescription;
	}

	set prescription(new_value) {
		const Reference = require('./Reference');
		this.__prescription = new Reference(new_value);
	}

	// The device used in administering the medication to the patient.  For example, a particular infusion pump.
	get device() {
		return this.__device;
	}

	set device(new_value) {
		const Reference = require('./Reference');
		this.__device = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Extra information about the medication administration that is not conveyed by the other attributes.
	get note() {
		return this.__note;
	}

	set note(new_value) {
		const Annotation = require('./Annotation');
		this.__note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// Describes the medication dosage information details e.g. dose, rate, site, route, etc.
	get dosage() {
		return this.__dosage;
	}

	set dosage(new_value) {
		const MedicationAdministrationDosage = require('./MedicationAdministrationDosage');
		this.__dosage = new MedicationAdministrationDosage(new_value);
	}

	// A summary of the events of interest that have occurred, such as when the administration was verified.
	get eventHistory() {
		return this.__eventHistory;
	}

	set eventHistory(new_value) {
		const Reference = require('./Reference');
		this.__eventHistory = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			definition: this.__definition && this.__definition.map(v => v.toJSON()),
			partOf: this.__partOf && this.__partOf.map(v => v.toJSON()),
			status: this.__status,
			category: this.__category && this.__category.toJSON(),
			medicationCodeableConcept: this.__medicationCodeableConcept && this.__medicationCodeableConcept.toJSON(),
			medicationReference: this.__medicationReference && this.__medicationReference.toJSON(),
			subject: this.__subject && this.__subject.toJSON(),
			context: this.__context && this.__context.toJSON(),
			supportingInformation: this.__supportingInformation && this.__supportingInformation.map(v => v.toJSON()),
			effectiveDateTime: this.__effectiveDateTime,
			effectivePeriod: this.__effectivePeriod && this.__effectivePeriod.toJSON(),
			performer: this.__performer && this.__performer.map(v => v.toJSON()),
			notGiven: this.__notGiven,
			reasonNotGiven: this.__reasonNotGiven && this.__reasonNotGiven.map(v => v.toJSON()),
			reasonCode: this.__reasonCode && this.__reasonCode.map(v => v.toJSON()),
			reasonReference: this.__reasonReference && this.__reasonReference.map(v => v.toJSON()),
			prescription: this.__prescription && this.__prescription.toJSON(),
			device: this.__device && this.__device.map(v => v.toJSON()),
			note: this.__note && this.__note.map(v => v.toJSON()),
			dosage: this.__dosage && this.__dosage.toJSON(),
			eventHistory: this.__eventHistory && this.__eventHistory.map(v => v.toJSON()),
		});
	}
}

module.exports = MedicationAdministration;
