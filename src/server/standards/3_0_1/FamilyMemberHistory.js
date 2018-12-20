const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const DateScalar = require('./scalars/Date.scalar');

class FamilyMemberHistory extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'FamilyMemberHistory';
		Object.assign(this, opt);
	}

	// This is a FamilyMemberHistory resource
	static get __resourceType() {
		return 'FamilyMemberHistory';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__FamilyMemberHistory = new_value;
	}

	// This records identifiers associated with this family member history record that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// A protocol or questionnaire that was adhered to in whole or in part by this event.
	get definition() {
		return this.__definition;
	}

	set definition(new_value) {
		const Reference = require('./Reference');
		this.__definition = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// A code specifying the status of the record of the family history of a specific family member.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// If true, indicates the taking of an individual family member\'s history did not occur. The notDone element should not be used to document negated conditions, such as a family member that did not have a condition.
	get notDone() {
		return this.__notDone;
	}

	set notDone(new_value) {
		this.__notDone = new_value;
	}

	// Describes why the family member\'s history is absent.
	get notDoneReason() {
		return this.__notDoneReason;
	}

	set notDoneReason(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__notDoneReason = new CodeableConcept(new_value);
	}

	// The person who this history concerns.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// The date (and possibly time) when the family member history was taken.
	get date() {
		return this.__date;
	}

	set date(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this.__date = new_value;
	}

	// This will either be a name or a description; e.g. \'Aunt Susan\', \'my cousin with the red hair\'.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// The type of relationship this person has to the patient (father, mother, brother etc.).
	get relationship() {
		return this.__relationship;
	}

	set relationship(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__relationship = new CodeableConcept(new_value);
	}

	// Administrative Gender - the gender that the relative is considered to have for administration and record keeping purposes.
	get gender() {
		return this.__gender;
	}

	set gender(new_value) {
		this.__gender = new_value;
	}

	// The actual or approximate date of birth of the relative.
	get bornPeriod() {
		return this.__bornPeriod;
	}

	set bornPeriod(new_value) {
		const Period = require('./Period');
		this.__bornPeriod = new Period(new_value);
	}

	// The actual or approximate date of birth of the relative.
	get bornDate() {
		return this.__bornDate;
	}

	set bornDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field bornDate`);
		}
		this.__bornDate = new_value;
	}

	// The actual or approximate date of birth of the relative.
	get bornString() {
		return this.__bornString;
	}

	set bornString(new_value) {
		this.__bornString = new_value;
	}

	// The age of the relative at the time the family member history is recorded.
	get ageAge() {
		return this.__ageAge;
	}

	set ageAge(new_value) {
		const Age = require('./Age');
		this.__ageAge = new Age(new_value);
	}

	// The age of the relative at the time the family member history is recorded.
	get ageRange() {
		return this.__ageRange;
	}

	set ageRange(new_value) {
		const Range = require('./Range');
		this.__ageRange = new Range(new_value);
	}

	// The age of the relative at the time the family member history is recorded.
	get ageString() {
		return this.__ageString;
	}

	set ageString(new_value) {
		this.__ageString = new_value;
	}

	// If true, indicates that the age value specified is an estimated value.
	get estimatedAge() {
		return this.__estimatedAge;
	}

	set estimatedAge(new_value) {
		this.__estimatedAge = new_value;
	}

	// Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
	get deceasedBoolean() {
		return this.__deceasedBoolean;
	}

	set deceasedBoolean(new_value) {
		this.__deceasedBoolean = new_value;
	}

	// Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
	get deceasedAge() {
		return this.__deceasedAge;
	}

	set deceasedAge(new_value) {
		const Age = require('./Age');
		this.__deceasedAge = new Age(new_value);
	}

	// Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
	get deceasedRange() {
		return this.__deceasedRange;
	}

	set deceasedRange(new_value) {
		const Range = require('./Range');
		this.__deceasedRange = new Range(new_value);
	}

	// Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
	get deceasedDate() {
		return this.__deceasedDate;
	}

	set deceasedDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field deceasedDate`);
		}
		this.__deceasedDate = new_value;
	}

	// Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record.
	get deceasedString() {
		return this.__deceasedString;
	}

	set deceasedString(new_value) {
		this.__deceasedString = new_value;
	}

	// Describes why the family member history occurred in coded or textual form.
	get reasonCode() {
		return this.__reasonCode;
	}

	set reasonCode(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reasonCode = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Indicates a Condition, Observation, AllergyIntolerance, or QuestionnaireResponse that justifies this family member history event.
	get reasonReference() {
		return this.__reasonReference;
	}

	set reasonReference(new_value) {
		const Reference = require('./Reference');
		this.__reasonReference = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// This property allows a non condition-specific note to the made about the related person. Ideally, the note would be in the condition property, but this is not always possible.
	get note() {
		return this.__note;
	}

	set note(new_value) {
		const Annotation = require('./Annotation');
		this.__note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition.
	get condition() {
		return this.__condition;
	}

	set condition(new_value) {
		const FamilyMemberHistoryCondition = require('./FamilyMemberHistoryCondition');
		this.__condition = Array.isArray(new_value)
			? new_value.map(val => new FamilyMemberHistoryCondition(val))
			: [new FamilyMemberHistoryCondition(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			definition: this.__definition && this.__definition.map(v => v.toJSON()),
			status: this.__status,
			notDone: this.__notDone,
			notDoneReason: this.__notDoneReason && this.__notDoneReason.toJSON(),
			patient: this.__patient && this.__patient.toJSON(),
			date: this.__date,
			name: this.__name,
			relationship: this.__relationship && this.__relationship.toJSON(),
			gender: this.__gender,
			bornPeriod: this.__bornPeriod && this.__bornPeriod.toJSON(),
			bornDate: this.__bornDate,
			bornString: this.__bornString,
			ageAge: this.__ageAge && this.__ageAge.toJSON(),
			ageRange: this.__ageRange && this.__ageRange.toJSON(),
			ageString: this.__ageString,
			estimatedAge: this.__estimatedAge,
			deceasedBoolean: this.__deceasedBoolean,
			deceasedAge: this.__deceasedAge && this.__deceasedAge.toJSON(),
			deceasedRange: this.__deceasedRange && this.__deceasedRange.toJSON(),
			deceasedDate: this.__deceasedDate,
			deceasedString: this.__deceasedString,
			reasonCode: this.__reasonCode && this.__reasonCode.map(v => v.toJSON()),
			reasonReference: this.__reasonReference && this.__reasonReference.map(v => v.toJSON()),
			note: this.__note && this.__note.map(v => v.toJSON()),
			condition: this.__condition && this.__condition.map(v => v.toJSON()),
		});
	}
}

module.exports = FamilyMemberHistory;
