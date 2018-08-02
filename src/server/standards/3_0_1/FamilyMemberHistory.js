const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const Period = require('./Period');
const Age = require('./Age');
const Range = require('./Range');
const Annotation = require('./Annotation');
const FamilyMemberHistory_Condition = require('./FamilyMemberHistory_Condition');

class FamilyMemberHistory extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'FamilyMemberHistory';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'FamilyMemberHistory';
	}

	// This is a FamilyMemberHistory resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['FamilyMemberHistory'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// This records identifiers associated with this family member history record that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// A protocol or questionnaire that was adhered to in whole or in part by this event.
	get definition () {
		return this._definition;
	}

	set definition ( new_value ) {
		this._definition = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A code specifying the status of the record of the family history of a specific family member.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['partial', 'completed', 'entered-in-error', 'health-unknown'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// If true, indicates the taking of an individual family member's history did not occur. The notDone element should not be used to document negated conditions, such as a family member that did not have a condition.
	get notDone () {
		return this._notDone;
	}

	set notDone ( new_value ) {
		this._notDone = new_value;
	}

	// Describes why the family member's history is absent.
	get notDoneReason () {
		return this._notDoneReason;
	}

	set notDoneReason ( new_value ) {
		this._notDoneReason = new CodeableConcept(new_value);
	}

	// The person who this history concerns.
	get patient () {
		return this._patient;
	}

	set patient ( new_value ) {
		this._patient = new Reference(new_value);
	}

	// The date (and possibly time) when the family member history was taken.
	get date () {
		return this._date;
	}

	set date ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this._date = new_value;
	}

	// This will either be a name or a description; e.g. "Aunt Susan", "my cousin with the red hair".
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// The type of relationship this person has to the patient (father, mother, brother etc.).
	get relationship () {
		return this._relationship;
	}

	set relationship ( new_value ) {
		this._relationship = new CodeableConcept(new_value);
	}

	// Administrative Gender - the gender that the relative is considered to have for administration and record keeping purposes.
	get gender () {
		return this._gender;
	}

	set gender ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['male', 'female', 'other', 'unknown'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field gender`);
		}
		this._gender = new_value;
	}

	// The actual or approximate date of birth of the relative.
	get bornPeriod () {
		return this._bornPeriod;
	}

	set bornPeriod ( new_value ) {
		this._bornPeriod = new Period(new_value);
	}

	// The actual or approximate date of birth of the relative.
	get bornDate () {
		return this._bornDate;
	}

	set bornDate ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field bornDate`);
		}
		this._bornDate = new_value;
	}

	// The actual or approximate date of birth of the relative.
	get bornString () {
		return this._bornString;
	}

	set bornString ( new_value ) {
		this._bornString = new_value;
	}

	// The age of the relative at the time the family member history is recorded.
	get ageAge () {
		return this._ageAge;
	}

	set ageAge ( new_value ) {
		this._ageAge = new Age(new_value);
	}

	// The age of the relative at the time the family member history is recorded.
	get ageRange () {
		return this._ageRange;
	}

	set ageRange ( new_value ) {
		this._ageRange = new Range(new_value);
	}

	// The age of the relative at the time the family member history is recorded.
	get ageString () {
		return this._ageString;
	}

	set ageString ( new_value ) {
		this._ageString = new_value;
	}

	// If true, indicates that the age value specified is an estimated value.
	get estimatedAge () {
		return this._estimatedAge;
	}

	set estimatedAge ( new_value ) {
		this._estimatedAge = new_value;
	}

	// Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
	get deceasedBoolean () {
		return this._deceasedBoolean;
	}

	set deceasedBoolean ( new_value ) {
		this._deceasedBoolean = new_value;
	}

	// Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
	get deceasedAge () {
		return this._deceasedAge;
	}

	set deceasedAge ( new_value ) {
		this._deceasedAge = new Age(new_value);
	}

	// Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
	get deceasedRange () {
		return this._deceasedRange;
	}

	set deceasedRange ( new_value ) {
		this._deceasedRange = new Range(new_value);
	}

	// Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
	get deceasedDate () {
		return this._deceasedDate;
	}

	set deceasedDate ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field deceasedDate`);
		}
		this._deceasedDate = new_value;
	}

	// Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
	get deceasedString () {
		return this._deceasedString;
	}

	set deceasedString ( new_value ) {
		this._deceasedString = new_value;
	}

	// Describes why the family member history occurred in coded or textual form.
	get reasonCode () {
		return this._reasonCode;
	}

	set reasonCode ( new_value ) {
		this._reasonCode = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Indicates a Condition, Observation, AllergyIntolerance, or QuestionnaireResponse that justifies this family member history event.
	get reasonReference () {
		return this._reasonReference;
	}

	set reasonReference ( new_value ) {
		this._reasonReference = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// This property allows a non condition-specific note to the made about the related person. Ideally, the note would be in the condition property, but this is not always possible.
	get note () {
		return this._note;
	}

	set note ( new_value ) {
		this._note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
	get condition () {
		return this._condition;
	}

	set condition ( new_value ) {
		this._condition = Array.isArray(new_value) ? new_value.map(val => new FamilyMemberHistory_Condition(val)) : [new FamilyMemberHistory_Condition(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.map(v => v.toJSON()),
			definition: this._definition && this._definition.map(v => v.toJSON()),
			status: this._status,
			notDone: this._notDone,
			notDoneReason: this._notDoneReason && this._notDoneReason.toJSON(),
			patient: this._patient && this._patient.toJSON(),
			date: this._date,
			name: this._name,
			relationship: this._relationship && this._relationship.toJSON(),
			gender: this._gender,
			bornPeriod: this._bornPeriod && this._bornPeriod.toJSON(),
			bornDate: this._bornDate,
			bornString: this._bornString,
			ageAge: this._ageAge && this._ageAge.toJSON(),
			ageRange: this._ageRange && this._ageRange.toJSON(),
			ageString: this._ageString,
			estimatedAge: this._estimatedAge,
			deceasedBoolean: this._deceasedBoolean,
			deceasedAge: this._deceasedAge && this._deceasedAge.toJSON(),
			deceasedRange: this._deceasedRange && this._deceasedRange.toJSON(),
			deceasedDate: this._deceasedDate,
			deceasedString: this._deceasedString,
			reasonCode: this._reasonCode && this._reasonCode.map(v => v.toJSON()),
			reasonReference: this._reasonReference && this._reasonReference.map(v => v.toJSON()),
			note: this._note && this._note.map(v => v.toJSON()),
			condition: this._condition && this._condition.map(v => v.toJSON())
		});
	}

}

module.exports = FamilyMemberHistory;
