const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Age = require('./Age');
const Period = require('./Period');
const Range = require('./Range');
const Annotation = require('./Annotation');
const AllergyIntolerance_Reaction = require('./AllergyIntolerance_Reaction');

class AllergyIntolerance extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'AllergyIntolerance';
	}

	// This is a AllergyIntolerance resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['AllergyIntolerance'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// This records identifiers associated with this allergy/intolerance concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// The clinical status of the allergy or intolerance.
	get clinicalStatus () {
		return this._clinicalStatus;
	}

	set clinicalStatus ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['active', 'inactive', 'resolved'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field clinicalStatus`);
		}
		this._clinicalStatus = new_value;
	}

	// Assertion about certainty associated with the propensity, or potential risk, of a reaction to the identified substance (including pharmaceutical product).
	get verificationStatus () {
		return this._verificationStatus;
	}

	set verificationStatus ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['unconfirmed', 'confirmed', 'refuted', 'entered-in-error'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field verificationStatus`);
		}
		this._verificationStatus = new_value;
	}

	// Identification of the underlying physiological mechanism for the reaction risk.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['allergy', 'intolerance'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	// Category of the identified substance.
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['food', 'medication', 'environment', 'biologic'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field category`);
		}
		this._category = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Estimate of the potential clinical harm, or seriousness, of the reaction to the identified substance.
	get criticality () {
		return this._criticality;
	}

	set criticality ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['low', 'high', 'unable-to-assess'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field criticality`);
		}
		this._criticality = new_value;
	}

	// Code for an allergy or intolerance statement (either a positive or a negated/excluded statement).  This may be a code for a substance or pharmaceutical product that is considered to be responsible for the adverse reaction risk (e.g., "Latex"), an allergy or intolerance condition (e.g., "Latex allergy"), or a negated/excluded code for a specific substance or class (e.g., "No latex allergy") or a general or categorical negated statement (e.g.,  "No known allergy", "No known drug allergies").
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new CodeableConcept(new_value);
	}

	// The patient who has the allergy or intolerance.
	get patient () {
		return this._patient;
	}

	set patient ( new_value ) {
		this._patient = new Reference(new_value);
	}

	// Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
	get onsetDateTime () {
		return this._onsetDateTime;
	}

	set onsetDateTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field onsetDateTime`);
		}
		this._onsetDateTime = new_value;
	}

	// Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
	get onsetAge () {
		return this._onsetAge;
	}

	set onsetAge ( new_value ) {
		this._onsetAge = new Age(new_value);
	}

	// Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
	get onsetPeriod () {
		return this._onsetPeriod;
	}

	set onsetPeriod ( new_value ) {
		this._onsetPeriod = new Period(new_value);
	}

	// Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
	get onsetRange () {
		return this._onsetRange;
	}

	set onsetRange ( new_value ) {
		this._onsetRange = new Range(new_value);
	}

	// Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
	get onsetString () {
		return this._onsetString;
	}

	set onsetString ( new_value ) {
		this._onsetString = new_value;
	}

	// The date on which the existance of the AllergyIntolerance was first asserted or acknowledged.
	get assertedDate () {
		return this._assertedDate;
	}

	set assertedDate ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field assertedDate`);
		}
		this._assertedDate = new_value;
	}

	// Individual who recorded the record and takes responsibility for its content.
	get recorder () {
		return this._recorder;
	}

	set recorder ( new_value ) {
		this._recorder = new Reference(new_value);
	}

	// The source of the information about the allergy that is recorded.
	get asserter () {
		return this._asserter;
	}

	set asserter ( new_value ) {
		this._asserter = new Reference(new_value);
	}

	// Represents the date and/or time of the last known occurrence of a reaction event.
	get lastOccurrence () {
		return this._lastOccurrence;
	}

	set lastOccurrence ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field lastOccurrence`);
		}
		this._lastOccurrence = new_value;
	}

	// Additional narrative about the propensity for the Adverse Reaction, not captured in other fields.
	get note () {
		return this._note;
	}

	set note ( new_value ) {
		this._note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// Details about each adverse reaction event linked to exposure to the identified substance.
	get reaction () {
		return this._reaction;
	}

	set reaction ( new_value ) {
		this._reaction = Array.isArray(new_value) ? new_value.map(val => new AllergyIntolerance_Reaction(val)) : [new AllergyIntolerance_Reaction(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier,
			clinicalStatus: this._clinicalStatus,
			verificationStatus: this._verificationStatus,
			type: this._type,
			category: this._category,
			criticality: this._criticality,
			code: this._code,
			patient: this._patient,
			onsetDateTime: this._onsetDateTime,
			onsetAge: this._onsetAge,
			onsetPeriod: this._onsetPeriod,
			onsetRange: this._onsetRange,
			onsetString: this._onsetString,
			assertedDate: this._assertedDate,
			recorder: this._recorder,
			asserter: this._asserter,
			lastOccurrence: this._lastOccurrence,
			note: this._note,
			reaction: this._reaction
		});
	}

}

module.exports = AllergyIntolerance;
