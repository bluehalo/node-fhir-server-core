const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Reference = require('../types/Reference');
const Code = require('../types/Code');
const CodeableConcept = require('../types/CodeableConcept');
const Period = require('../types/Period');
const Range = require('../types/Range');
const Annotation = require('../types/Annotation');

class Condition {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// code		1..1	CodeableConcept	Condition suffered by relation
	// Condition/Problem/Diagnosis Codes (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// outcome		0..1	CodeableConcept	deceased | permanent disability | etc.
	// Condition Outcome Codes (Example)
	set outcome(outcome) {
		this._outcome = new CodeableConcept(outcome);
	}

	get outcome() {
		return this._outcome;
	}

	// onset[x]		0..1		When condition first manifested
	// onsetAge			Age
	set onsetAge(onsetAge) {
		this._onsetAge = onsetAge;
	}

	get onsetAge() {
		return this._onsetAge;
	}

	// onsetRange			Range
	set onsetRange(onsetRange) {
		this._onsetRange = new Range(onsetRange);
	}

	get onsetRange() {
		return this._onsetRange;
	}

	// onsetPeriod			Period
	set onsetPeriod(onsetPeriod) {
		this._onsetPeriod = new Period(onsetPeriod);
	}

	get onsetPeriod() {
		return this._onsetPeriod;
	}

	// onsetString			string
	set onsetString(onsetString) {
		this._onsetString = onsetString;
	}

	get onsetString() {
		return this._onsetString;
	}

	// note		0..*	Annotation	Extra information about condition
	set note(note) {
		if (Array.isArray(note)) {
			this._note = note.map((i) => new Annotation(i));
		} else {
			this._note = [new Annotation(note)];
		}
	}

	get note() {
		return this._note;
	}

	toJSON() {
		return {
			code: this._code,
			outcome: this._outcome,
			onsetAge: this._onsetAge,
			onsetRange: this._onsetRange,
			onsetPeriod: this._onsetPeriod,
			onsetString: this._onsetString,
			note: this._note,
		};
	}
}

class FamilyMemberHistory extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'FamilyMemberHistory';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	External Id(s) for this record
	set identifier(identifier) {
		if (Array.isArray(identifier)) {
			this._identifier = identifier.map((i) => new Identifier(i));
		} else {
			this._identifier = [new Identifier(identifier)];
		}
	}

	get identifier() {
		return this._identifier;
	}

	// definition	Σ	0..*	Reference(PlanDefinition | Questionnaire)	Instantiates protocol or definition
	set definition(definition) {
		if (Array.isArray(definition)) {
			this._definition = definition.map((i) => new Reference(i));
		} else {
			this._definition = [new Reference(definition)];
		}
	}

	get definition() {
		return this._definition;
	}

	// status	?!Σ	1..1	code	partial | completed | entered-in-error | health-unknown
	// FamilyHistoryStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// notDone	?!Σ	0..1	boolean	The taking of a family member's history did not occur
	set notDone(notDone) {
		this._notDone = notDone;
	}

	get notDone() {
		return this._notDone;
	}

	// notDoneReason	ΣI	0..1	CodeableConcept	subject-unknown | withheld | unable-to-obtain | deferred
	// FamilyHistoryNotDoneReason (Example)
	set notDoneReason(notDoneReason) {
		this._notDoneReason = new CodeableConcept(notDoneReason);
	}

	get notDoneReason() {
		return this._notDoneReason;
	}

	// patient	Σ	1..1	Reference(Patient)	Patient history is about
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// date	Σ	0..1	dateTime	When history was captured/updated
	set date(date) {
		this._date = date;
	}

	get date() {
		return this._date;
	}

	// name	Σ	0..1	string	The family member described
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// relationship	Σ	1..1	CodeableConcept	Relationship to the subject
	// FamilyMember (Example)
	set relationship(relationship) {
		this._relationship = new CodeableConcept(relationship);
	}

	get relationship() {
		return this._relationship;
	}

	// gender	Σ	0..1	code	male | female | other | unknown
	// AdministrativeGender (Required)
	set gender(gender) {
		this._gender = new Code(gender);
	}

	get gender() {
		return this._gender;
	}

	// born[x]	I	0..1		(approximate) date of birth
	// bornPeriod			Period
	set bornPeriod(bornPeriod) {
		this._bornPeriod = new Period(bornPeriod);
	}

	get bornPeriod() {
		return this._bornPeriod;
	}

	// bornDate			date
	set bornDate(bornDate) {
		this._bornDate = bornDate;
	}

	get bornDate() {
		return this._bornDate;
	}

	// bornString			string
	set bornString(bornString) {
		this._bornString = bornString;
	}

	get bornString() {
		return this._bornString;
	}

	// age[x]	ΣI	0..1		(approximate) age
	// ageAge			Age
	set ageAge(ageAge) {
		this._ageAge = ageAge;
	}

	get ageAge() {
		return this._ageAge;
	}

	// ageRange			Range
	set ageRange(ageRange) {
		this._ageRange = new Range(ageRange);
	}

	get ageRange() {
		return this._ageRange;
	}

	// ageString			string
	set ageString(ageString) {
		this._ageString = ageString;
	}

	get ageString() {
		return this._ageString;
	}

	// estimatedAge	?!ΣI	0..1	boolean	Age is estimated?
	set estimatedAge(estimatedAge) {
		this._estimatedAge = estimatedAge;
	}

	get estimatedAge() {
		return this._estimatedAge;
	}

	// deceased[x]	Σ	0..1		Dead? How old/when?
	// deceasedBoolean			boolean
	set deceasedBoolean(deceasedBoolean) {
		this._deceasedBoolean = deceasedBoolean;
	}

	get deceasedBoolean() {
		return this._deceasedBoolean;
	}

	// deceasedAge			Age
	set deceasedAge(deceasedAge) {
		this._deceasedAge = deceasedAge;
	}

	get deceasedAge() {
		return this._deceasedAge;
	}

	// deceasedRange			Range
	set deceasedRange(deceasedRange) {
		this._deceasedRange = new Range(deceasedRange);
	}

	get deceasedRange() {
		return this._deceasedRange;
	}

	// deceasedDate			date
	set deceasedDate(deceasedDate) {
		this._deceasedDate = deceasedDate;
	}

	get deceasedDate() {
		return this._deceasedDate;
	}

	// deceasedString			string
	set deceasedString(deceasedString) {
		this._deceasedString = deceasedString;
	}

	get deceasedString() {
		return this._deceasedString;
	}

	// reasonCode	Σ	0..*	CodeableConcept	Why was family member history performed?
	// SNOMED CT Clinical Findings (Example)
	set reasonCode(reasonCode) {
		if (Array.isArray(reasonCode)) {
			this._reasonCode = reasonCode.map((i) => new CodeableConcept(i));
		} else {
			this._reasonCode = [new CodeableConcept(reasonCode)];
		}
	}

	get reasonCode() {
		return this._reasonCode;
	}

	// reasonReference	Σ	0..*	Reference(Condition | Observation | AllergyIntolerance | QuestionnaireResponse)	Why was family member history performed?
	set reasonReference(reasonReference) {
		if (Array.isArray(reasonReference)) {
			this._reasonReference = reasonReference.map((i) => new Reference(i));
		} else {
			this._reasonReference = [new Reference(reasonReference)];
		}
	}

	get reasonReference() {
		return this._reasonReference;
	}

	// note		0..*	Annotation	General note about related person
	set note(note) {
		if (Array.isArray(note)) {
			this._note = note.map((i) => new Annotation(i));
		} else {
			this._note = [new Annotation(note)];
		}
	}

	get note() {
		return this._note;
	}

	// condition		0..*	BackboneElement	Condition that the related person had
	set condition(condition) {
		if (Array.isArray(condition)) {
			this._condition = condition.map((i) => new Condition(i));
		} else {
			this._condition = [new Condition(condition)];
		}
	}

	get condition() {
		return this._condition;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			definition: this._definition,
			status: this._status,
			notDone: this._notDone,
			notDoneReason: this._notDoneReason,
			patient: this._patient,
			date: this._date,
			name: this._name,
			relationship: this._relationship,
			gender: this._gender,
			bornPeriod: this._bornPeriod,
			bornDate: this._bornDate,
			bornString: this._bornString,
			ageAge: this._ageAge,
			ageRange: this._ageRange,
			ageString: this._ageString,
			estimatedAge: this._estimatedAge,
			deceasedBoolean: this._deceasedBoolean,
			deceasedAge: this._deceasedAge,
			deceasedRange: this._deceasedRange,
			deceasedDate: this._deceasedDate,
			deceasedString: this._deceasedString,
			reasonCode: this._reasonCode,
			reasonReference: this._reasonReference,
			note: this._note,
			condition: this._condition,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.FamilyMemberHistory = FamilyMemberHistory;
module.exports.Condition = Condition;
