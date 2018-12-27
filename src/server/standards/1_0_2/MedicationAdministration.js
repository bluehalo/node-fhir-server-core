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

	// Will generally be set to show that the administration has been completed.  For some long running administrations such as infusions it is possible for an administration to be started but not completed or it may be paused while some other process is under way.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// The person or animal receiving the medication.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// The individual who was responsible for giving the medication to the patient.
	get practitioner() {
		return this.__practitioner;
	}

	set practitioner(new_value) {
		const Reference = require('./Reference');
		this.__practitioner = new Reference(new_value);
	}

	// The visit, admission or other contact between patient and health care provider the medication administration was performed as part of.
	get encounter() {
		return this.__encounter;
	}

	set encounter(new_value) {
		const Reference = require('./Reference');
		this.__encounter = new Reference(new_value);
	}

	// The original request, instruction or authority to perform the administration.
	get prescription() {
		return this.__prescription;
	}

	set prescription(new_value) {
		const Reference = require('./Reference');
		this.__prescription = new Reference(new_value);
	}

	// Set this to true if the record is saying that the medication was NOT administered.
	get wasNotGiven() {
		return this.__wasNotGiven;
	}

	set wasNotGiven(new_value) {
		this.__wasNotGiven = new_value;
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
	get reasonGiven() {
		return this.__reasonGiven;
	}

	set reasonGiven(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reasonGiven = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// A specific date/time or interval of time during which the administration took place (or did not take place, when the \'notGiven\' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
	get effectiveTimeDateTime() {
		return this.__effectiveTimeDateTime;
	}

	set effectiveTimeDateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field effectiveTimeDateTime`);
		}
		this.__effectiveTimeDateTime = new_value;
	}

	// A specific date/time or interval of time during which the administration took place (or did not take place, when the \'notGiven\' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
	get effectiveTimePeriod() {
		return this.__effectiveTimePeriod;
	}

	set effectiveTimePeriod(new_value) {
		const Period = require('./Period');
		this.__effectiveTimePeriod = new Period(new_value);
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
		this.__note = new_value;
	}

	// Describes the medication dosage information details e.g. dose, rate, site, route, etc.
	get dosage() {
		return this.__dosage;
	}

	set dosage(new_value) {
		const MedicationAdministrationDosage = require('./MedicationAdministrationDosage');
		this.__dosage = new MedicationAdministrationDosage(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			status: this.__status,
			patient: this.__patient && this.__patient.toJSON(),
			practitioner: this.__practitioner && this.__practitioner.toJSON(),
			encounter: this.__encounter && this.__encounter.toJSON(),
			prescription: this.__prescription && this.__prescription.toJSON(),
			wasNotGiven: this.__wasNotGiven,
			reasonNotGiven: this.__reasonNotGiven && this.__reasonNotGiven.map(v => v.toJSON()),
			reasonGiven: this.__reasonGiven && this.__reasonGiven.map(v => v.toJSON()),
			effectiveTimeDateTime: this.__effectiveTimeDateTime,
			effectiveTimePeriod: this.__effectiveTimePeriod && this.__effectiveTimePeriod.toJSON(),
			medicationCodeableConcept: this.__medicationCodeableConcept && this.__medicationCodeableConcept.toJSON(),
			medicationReference: this.__medicationReference && this.__medicationReference.toJSON(),
			device: this.__device && this.__device.map(v => v.toJSON()),
			note: this.__note,
			dosage: this.__dosage && this.__dosage.toJSON(),
		});
	}
}

module.exports = MedicationAdministration;
