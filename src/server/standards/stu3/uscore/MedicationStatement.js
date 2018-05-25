const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const Period = require('./Period');
const Annotation = require('./Annotation');
const Dosage = require('./Dosage');

class MedicationStatement extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'MedicationStatement';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'MedicationStatement';
	}

	// This is a MedicationStatement resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['MedicationStatement'];
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
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// A plan, proposal or order that is fulfilled in whole or in part by this event.
	get basedOn () {
		return this._basedOn;
	}

	set basedOn ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._basedOn = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A larger event of which this particular event is a component or step.
	get partOf () {
		return this._partOf;
	}

	set partOf ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._partOf = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The encounter or episode of care that establishes the context for this MedicationStatement.
	get context () {
		return this._context;
	}

	set context ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._context = new Reference(new_value);
	}

	// A code representing the patient or other source's judgment about the state of the medication used that this statement is about.  Generally this will be active or completed.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['active', 'completed', 'entered-in-error', 'intended', 'stopped', 'on-hold'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// Indicates where type of medication statement and where the medication is expected to be consumed or administered.
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._category = new CodeableConcept(new_value);
	}

	// Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
	get medicationCodeableConcept () {
		return this._medicationCodeableConcept;
	}

	set medicationCodeableConcept ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._medicationCodeableConcept = new CodeableConcept(new_value);
	}

	// Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.
	get medicationReference () {
		return this._medicationReference;
	}

	set medicationReference ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._medicationReference = new Reference(new_value);
	}

	// The interval of time during which it is being asserted that the patient was taking the medication (or was not taking, when the wasNotGiven element is true).
	get effectiveDateTime () {
		return this._effectiveDateTime;
	}

	set effectiveDateTime ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field effectiveDateTime`);
		}
		this._effectiveDateTime = new_value;
	}

	// The interval of time during which it is being asserted that the patient was taking the medication (or was not taking, when the wasNotGiven element is true).
	get effectivePeriod () {
		return this._effectivePeriod;
	}

	set effectivePeriod ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._effectivePeriod = new Period(new_value);
	}

	// The date when the medication statement was asserted by the information source.
	get dateAsserted () {
		return this._dateAsserted;
	}

	set dateAsserted ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field dateAsserted`);
		}
		this._dateAsserted = new_value;
	}

	// The person or organization that provided the information about the taking of this medication. Note: Use derivedFrom when a MedicationStatement is derived from other resources, e.g Claim or MedicationRequest.
	get informationSource () {
		return this._informationSource;
	}

	set informationSource ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._informationSource = new Reference(new_value);
	}

	// The person, animal or group who is/was taking the medication.
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._subject = new Reference(new_value);
	}

	// Allows linking the MedicationStatement to the underlying MedicationRequest, or to other information that supports or is used to derive the MedicationStatement.
	get derivedFrom () {
		return this._derivedFrom;
	}

	set derivedFrom ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._derivedFrom = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Indicator of the certainty of whether the medication was taken by the patient.
	get taken () {
		return this._taken;
	}

	set taken ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['y', 'n', 'unk', 'na'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field taken`);
		}
		this._taken = new_value;
	}

	// A code indicating why the medication was not taken.
	get reasonNotTaken () {
		return this._reasonNotTaken;
	}

	set reasonNotTaken ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._reasonNotTaken = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// A reason for why the medication is being/was taken.
	get reasonCode () {
		return this._reasonCode;
	}

	set reasonCode ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._reasonCode = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Condition or observation that supports why the medication is being/was taken.
	get reasonReference () {
		return this._reasonReference;
	}

	set reasonReference ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._reasonReference = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Provides extra information about the medication statement that is not conveyed by the other attributes.
	get note () {
		return this._note;
	}

	set note ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// Indicates how the medication is/was or should be taken by the patient.
	get dosage () {
		return this._dosage;
	}

	set dosage ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._dosage = Array.isArray(new_value) ? new_value.map(val => new Dosage(val)) : [new Dosage(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this.resourceType,
			identifier: this.identifier.map(v => v.toJSON()),
			basedOn: this.basedOn.map(v => v.toJSON()),
			partOf: this.partOf.map(v => v.toJSON()),
			context: this.context && this.context.toJSON(),
			status: this.status,
			category: this.category && this.category.toJSON(),
			medicationCodeableConcept: this.medicationCodeableConcept && this.medicationCodeableConcept.toJSON(),
			medicationReference: this.medicationReference && this.medicationReference.toJSON(),
			effectiveDateTime: this.effectiveDateTime,
			effectivePeriod: this.effectivePeriod && this.effectivePeriod.toJSON(),
			dateAsserted: this.dateAsserted,
			informationSource: this.informationSource && this.informationSource.toJSON(),
			subject: this.subject && this.subject.toJSON(),
			derivedFrom: this.derivedFrom.map(v => v.toJSON()),
			taken: this.taken,
			reasonNotTaken: this.reasonNotTaken.map(v => v.toJSON()),
			reasonCode: this.reasonCode.map(v => v.toJSON()),
			reasonReference: this.reasonReference.map(v => v.toJSON()),
			note: this.note.map(v => v.toJSON()),
			dosage: this.dosage.map(v => v.toJSON())
		});
	}

}

module.exports = MedicationStatement;
