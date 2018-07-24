const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const MedicationDispense_Performer = require('./MedicationDispense_Performer');
const Quantity = require('./Quantity');
const Annotation = require('./Annotation');
const Dosage = require('./Dosage');
const MedicationDispense_Substitution = require('./MedicationDispense_Substitution');

class MedicationDispense extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'MedicationDispense';
	}

	// This is a MedicationDispense resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['MedicationDispense'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Identifier assigned by the dispensing facility - this is an identifier assigned outside FHIR.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// The procedure that the dispense is done because of.
	get partOf () {
		return this._partOf;
	}

	set partOf ( new_value ) {
		this._partOf = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A code specifying the state of the set of dispense events.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['preparation', 'in-progress', 'on-hold', 'completed', 'entered-in-error', 'stopped'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// Indicates type of medication dispense and where the medication is expected to be consumed or administered.
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		this._category = new CodeableConcept(new_value);
	}

	// Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
	get medicationCodeableConcept () {
		return this._medicationCodeableConcept;
	}

	set medicationCodeableConcept ( new_value ) {
		this._medicationCodeableConcept = new CodeableConcept(new_value);
	}

	// Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
	get medicationReference () {
		return this._medicationReference;
	}

	set medicationReference ( new_value ) {
		this._medicationReference = new Reference(new_value);
	}

	// A link to a resource representing the person or the group to whom the medication will be given.
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = new Reference(new_value);
	}

	// The encounter or episode of care that establishes the context for this event.
	get context () {
		return this._context;
	}

	set context ( new_value ) {
		this._context = new Reference(new_value);
	}

	// Additional information that supports the medication being dispensed.
	get supportingInformation () {
		return this._supportingInformation;
	}

	set supportingInformation ( new_value ) {
		this._supportingInformation = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Indicates who or what performed the event.  It should be assumed that the performer is the dispenser of the medication.
	get performer () {
		return this._performer;
	}

	set performer ( new_value ) {
		this._performer = Array.isArray(new_value) ? new_value.map(val => new MedicationDispense_Performer(val)) : [new MedicationDispense_Performer(new_value)];
	}

	// Indicates the medication order that is being dispensed against.
	get authorizingPrescription () {
		return this._authorizingPrescription;
	}

	set authorizingPrescription ( new_value ) {
		this._authorizingPrescription = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Indicates the type of dispensing event that is performed. For example, Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// The amount of medication that has been dispensed. Includes unit of measure.
	get quantity () {
		return this._quantity;
	}

	set quantity ( new_value ) {
		this._quantity = new Quantity(new_value);
	}

	// The amount of medication expressed as a timing amount.
	get daysSupply () {
		return this._daysSupply;
	}

	set daysSupply ( new_value ) {
		this._daysSupply = new Quantity(new_value);
	}

	// The time when the dispensed product was packaged and reviewed.
	get whenPrepared () {
		return this._whenPrepared;
	}

	set whenPrepared ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field whenPrepared`);
		}
		this._whenPrepared = new_value;
	}

	// The time the dispensed product was provided to the patient or their representative.
	get whenHandedOver () {
		return this._whenHandedOver;
	}

	set whenHandedOver ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field whenHandedOver`);
		}
		this._whenHandedOver = new_value;
	}

	// Identification of the facility/location where the medication was shipped to, as part of the dispense event.
	get destination () {
		return this._destination;
	}

	set destination ( new_value ) {
		this._destination = new Reference(new_value);
	}

	// Identifies the person who picked up the medication.  This will usually be a patient or their caregiver, but some cases exist where it can be a healthcare professional.
	get receiver () {
		return this._receiver;
	}

	set receiver ( new_value ) {
		this._receiver = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Extra information about the dispense that could not be conveyed in the other attributes.
	get note () {
		return this._note;
	}

	set note ( new_value ) {
		this._note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// Indicates how the medication is to be used by the patient.
	get dosageInstruction () {
		return this._dosageInstruction;
	}

	set dosageInstruction ( new_value ) {
		this._dosageInstruction = Array.isArray(new_value) ? new_value.map(val => new Dosage(val)) : [new Dosage(new_value)];
	}

	// Indicates whether or not substitution was made as part of the dispense.  In some cases substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done.
	get substitution () {
		return this._substitution;
	}

	set substitution ( new_value ) {
		this._substitution = new MedicationDispense_Substitution(new_value);
	}

	// Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, duplicate therapy, dosage alert etc.
	get detectedIssue () {
		return this._detectedIssue;
	}

	set detectedIssue ( new_value ) {
		this._detectedIssue = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// True if the dispense was not performed for some reason.
	get notDone () {
		return this._notDone;
	}

	set notDone ( new_value ) {
		this._notDone = new_value;
	}

	// Indicates the reason why a dispense was not performed.
	get notDoneReasonCodeableConcept () {
		return this._notDoneReasonCodeableConcept;
	}

	set notDoneReasonCodeableConcept ( new_value ) {
		this._notDoneReasonCodeableConcept = new CodeableConcept(new_value);
	}

	// Indicates the reason why a dispense was not performed.
	get notDoneReasonReference () {
		return this._notDoneReasonReference;
	}

	set notDoneReasonReference ( new_value ) {
		this._notDoneReasonReference = new Reference(new_value);
	}

	// A summary of the events of interest that have occurred, such as when the dispense was verified.
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
			partOf: this._partOf,
			status: this._status,
			category: this._category,
			medicationCodeableConcept: this._medicationCodeableConcept,
			medicationReference: this._medicationReference,
			subject: this._subject,
			context: this._context,
			supportingInformation: this._supportingInformation,
			performer: this._performer,
			authorizingPrescription: this._authorizingPrescription,
			type: this._type,
			quantity: this._quantity,
			daysSupply: this._daysSupply,
			whenPrepared: this._whenPrepared,
			whenHandedOver: this._whenHandedOver,
			destination: this._destination,
			receiver: this._receiver,
			note: this._note,
			dosageInstruction: this._dosageInstruction,
			substitution: this._substitution,
			detectedIssue: this._detectedIssue,
			notDone: this._notDone,
			notDoneReasonCodeableConcept: this._notDoneReasonCodeableConcept,
			notDoneReasonReference: this._notDoneReasonReference,
			eventHistory: this._eventHistory
		});
	}

}

module.exports = MedicationDispense;
