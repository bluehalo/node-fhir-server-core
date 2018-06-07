const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const Period = require('./Period');
const MedicationAdministration_Performer = require('./MedicationAdministration_Performer');
const Annotation = require('./Annotation');
const MedicationAdministration_Dosage = require('./MedicationAdministration_Dosage');

class MedicationAdministration extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'MedicationAdministration';
	}

	// This is a MedicationAdministration resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['MedicationAdministration'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// External identifier - FHIR will generate its own internal identifiers (probably URLs) which do not need to be explicitly managed by the resource.  The identifier here is one that would be used by another non-FHIR system - for example an automated medication pump would provide a record each time it operated; an administration while the patient was off the ward might be made with a different system and entered after the event.  Particularly important if these records have to be updated.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// A protocol, guideline, orderset or other definition that was adhered to in whole or in part by this event.
	get definition () {
		return this._definition;
	}

	set definition ( new_value ) {
		this._definition = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A larger event of which this particular event is a component or step.
	get partOf () {
		return this._partOf;
	}

	set partOf ( new_value ) {
		this._partOf = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Will generally be set to show that the administration has been completed.  For some long running administrations such as infusions it is possible for an administration to be started but not completed or it may be paused while some other process is under way.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['in-progress', 'on-hold', 'completed', 'entered-in-error', 'stopped', 'unknown'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// Indicates the type of medication administration and where the medication is expected to be consumed or administered.
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		this._category = new CodeableConcept(new_value);
	}

	// Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
	get medicationCodeableConcept () {
		return this._medicationCodeableConcept;
	}

	set medicationCodeableConcept ( new_value ) {
		this._medicationCodeableConcept = new CodeableConcept(new_value);
	}

	// Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
	get medicationReference () {
		return this._medicationReference;
	}

	set medicationReference ( new_value ) {
		this._medicationReference = new Reference(new_value);
	}

	// The person or animal or group receiving the medication.
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = new Reference(new_value);
	}

	// The visit, admission or other contact between patient and health care provider the medication administration was performed as part of.
	get context () {
		return this._context;
	}

	set context ( new_value ) {
		this._context = new Reference(new_value);
	}

	// Additional information (for example, patient height and weight) that supports the administration of the medication.
	get supportingInformation () {
		return this._supportingInformation;
	}

	set supportingInformation ( new_value ) {
		this._supportingInformation = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
	get effectiveDateTime () {
		return this._effectiveDateTime;
	}

	set effectiveDateTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field effectiveDateTime`);
		}
		this._effectiveDateTime = new_value;
	}

	// A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.
	get effectivePeriod () {
		return this._effectivePeriod;
	}

	set effectivePeriod ( new_value ) {
		this._effectivePeriod = new Period(new_value);
	}

	// The individual who was responsible for giving the medication to the patient.
	get performer () {
		return this._performer;
	}

	set performer ( new_value ) {
		this._performer = Array.isArray(new_value) ? new_value.map(val => new MedicationAdministration_Performer(val)) : [new MedicationAdministration_Performer(new_value)];
	}

	// Set this to true if the record is saying that the medication was NOT administered.
	get notGiven () {
		return this._notGiven;
	}

	set notGiven ( new_value ) {
		this._notGiven = new_value;
	}

	// A code indicating why the administration was not performed.
	get reasonNotGiven () {
		return this._reasonNotGiven;
	}

	set reasonNotGiven ( new_value ) {
		this._reasonNotGiven = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// A code indicating why the medication was given.
	get reasonCode () {
		return this._reasonCode;
	}

	set reasonCode ( new_value ) {
		this._reasonCode = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Condition or observation that supports why the medication was administered.
	get reasonReference () {
		return this._reasonReference;
	}

	set reasonReference ( new_value ) {
		this._reasonReference = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The original request, instruction or authority to perform the administration.
	get prescription () {
		return this._prescription;
	}

	set prescription ( new_value ) {
		this._prescription = new Reference(new_value);
	}

	// The device used in administering the medication to the patient.  For example, a particular infusion pump.
	get device () {
		return this._device;
	}

	set device ( new_value ) {
		this._device = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Extra information about the medication administration that is not conveyed by the other attributes.
	get note () {
		return this._note;
	}

	set note ( new_value ) {
		this._note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// Describes the medication dosage information details e.g. dose, rate, site, route, etc.
	get dosage () {
		return this._dosage;
	}

	set dosage ( new_value ) {
		this._dosage = new MedicationAdministration_Dosage(new_value);
	}

	// A summary of the events of interest that have occurred, such as when the administration was verified.
	get eventHistory () {
		return this._eventHistory;
	}

	set eventHistory ( new_value ) {
		this._eventHistory = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier,
			definition: this._definition,
			partOf: this._partOf,
			status: this._status,
			category: this._category,
			medicationCodeableConcept: this._medicationCodeableConcept,
			medicationReference: this._medicationReference,
			subject: this._subject,
			context: this._context,
			supportingInformation: this._supportingInformation,
			effectiveDateTime: this._effectiveDateTime,
			effectivePeriod: this._effectivePeriod,
			performer: this._performer,
			notGiven: this._notGiven,
			reasonNotGiven: this._reasonNotGiven,
			reasonCode: this._reasonCode,
			reasonReference: this._reasonReference,
			prescription: this._prescription,
			device: this._device,
			note: this._note,
			dosage: this._dosage,
			eventHistory: this._eventHistory
		});
	}

}

module.exports = MedicationAdministration;
