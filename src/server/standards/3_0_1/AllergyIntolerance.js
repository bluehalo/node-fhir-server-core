const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class AllergyIntolerance extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'AllergyIntolerance';
		Object.assign(this, opt);
	}

	// This is a AllergyIntolerance resource
	static get __resourceType() {
		return 'AllergyIntolerance';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__AllergyIntolerance = new_value;
	}

	// This records identifiers associated with this allergy/intolerance concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// The clinical status of the allergy or intolerance.
	get clinicalStatus() {
		return this.__clinicalStatus;
	}

	set clinicalStatus(new_value) {
		this.__clinicalStatus = new_value;
	}

	// Assertion about certainty associated with the propensity, or potential risk, of a reaction to the identified substance (including pharmaceutical product).
	get verificationStatus() {
		return this.__verificationStatus;
	}

	set verificationStatus(new_value) {
		this.__verificationStatus = new_value;
	}

	// Identification of the underlying physiological mechanism for the reaction risk.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// Category of the identified substance.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		this.__category = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Estimate of the potential clinical harm, or seriousness, of the reaction to the identified substance.
	get criticality() {
		return this.__criticality;
	}

	set criticality(new_value) {
		this.__criticality = new_value;
	}

	// Code for an allergy or intolerance statement (either a positive or a negated/excluded statement).  This may be a code for a substance or pharmaceutical product that is considered to be responsible for the adverse reaction risk (e.g., \'Latex\'), an allergy or intolerance condition (e.g., \'Latex allergy\'), or a negated/excluded code for a specific substance or class (e.g., \'No latex allergy\') or a general or categorical negated statement (e.g.,  \'No known allergy\', \'No known drug allergies\').
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// The patient who has the allergy or intolerance.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
	get onsetDateTime() {
		return this.__onsetDateTime;
	}

	set onsetDateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field onsetDateTime`);
		}
		this.__onsetDateTime = new_value;
	}

	// Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
	get onsetAge() {
		return this.__onsetAge;
	}

	set onsetAge(new_value) {
		const Age = require('./Age');
		this.__onsetAge = new Age(new_value);
	}

	// Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
	get onsetPeriod() {
		return this.__onsetPeriod;
	}

	set onsetPeriod(new_value) {
		const Period = require('./Period');
		this.__onsetPeriod = new Period(new_value);
	}

	// Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
	get onsetRange() {
		return this.__onsetRange;
	}

	set onsetRange(new_value) {
		const Range = require('./Range');
		this.__onsetRange = new Range(new_value);
	}

	// Estimated or actual date,  date-time, or age when allergy or intolerance was identified.
	get onsetString() {
		return this.__onsetString;
	}

	set onsetString(new_value) {
		this.__onsetString = new_value;
	}

	// The date on which the existance of the AllergyIntolerance was first asserted or acknowledged.
	get assertedDate() {
		return this.__assertedDate;
	}

	set assertedDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field assertedDate`);
		}
		this.__assertedDate = new_value;
	}

	// Individual who recorded the record and takes responsibility for its content.
	get recorder() {
		return this.__recorder;
	}

	set recorder(new_value) {
		const Reference = require('./Reference');
		this.__recorder = new Reference(new_value);
	}

	// The source of the information about the allergy that is recorded.
	get asserter() {
		return this.__asserter;
	}

	set asserter(new_value) {
		const Reference = require('./Reference');
		this.__asserter = new Reference(new_value);
	}

	// Represents the date and/or time of the last known occurrence of a reaction event.
	get lastOccurrence() {
		return this.__lastOccurrence;
	}

	set lastOccurrence(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field lastOccurrence`);
		}
		this.__lastOccurrence = new_value;
	}

	// Additional narrative about the propensity for the Adverse Reaction, not captured in other fields.
	get note() {
		return this.__note;
	}

	set note(new_value) {
		const Annotation = require('./Annotation');
		this.__note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// Details about each adverse reaction event linked to exposure to the identified substance.
	get reaction() {
		return this.__reaction;
	}

	set reaction(new_value) {
		const AllergyIntoleranceReaction = require('./AllergyIntoleranceReaction');
		this.__reaction = Array.isArray(new_value)
			? new_value.map(val => new AllergyIntoleranceReaction(val))
			: [new AllergyIntoleranceReaction(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			clinicalStatus: this.__clinicalStatus,
			verificationStatus: this.__verificationStatus,
			type: this.__type,
			category: this.__category,
			criticality: this.__criticality,
			code: this.__code && this.__code.toJSON(),
			patient: this.__patient && this.__patient.toJSON(),
			onsetDateTime: this.__onsetDateTime,
			onsetAge: this.__onsetAge && this.__onsetAge.toJSON(),
			onsetPeriod: this.__onsetPeriod && this.__onsetPeriod.toJSON(),
			onsetRange: this.__onsetRange && this.__onsetRange.toJSON(),
			onsetString: this.__onsetString,
			assertedDate: this.__assertedDate,
			recorder: this.__recorder && this.__recorder.toJSON(),
			asserter: this.__asserter && this.__asserter.toJSON(),
			lastOccurrence: this.__lastOccurrence,
			note: this.__note && this.__note.map(v => v.toJSON()),
			reaction: this.__reaction && this.__reaction.map(v => v.toJSON()),
		});
	}
}

module.exports = AllergyIntolerance;
