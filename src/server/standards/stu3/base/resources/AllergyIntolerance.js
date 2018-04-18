const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Code = require('../types/Code');
const CodeableConcept = require('../types/CodeableConcept');
const Reference = require('../types/Reference');
const Period = require('../types/Period');
const Range = require('../types/Range');
const Annotation = require('../types/Annotation');

class Reaction {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// substance		0..1	CodeableConcept	Specific substance or pharmaceutical product considered to be responsible for event
	// Substance Code (Example)
	set substance(substance) {
		this._substance = new CodeableConcept(substance);
	}

	get substance() {
		return this._substance;
	}

	// manifestation		1..*	CodeableConcept	Clinical symptoms/signs associated with the Event
	// SNOMED CT Clinical Findings (Example)
	set manifestation(manifestation) {
		if (Array.isArray(manifestation)) {
			this._manifestation = manifestation.map((i) => new CodeableConcept(i));
		} else {
			this._manifestation = [new CodeableConcept(manifestation)];
		}
	}

	get manifestation() {
		return this._manifestation;
	}

	// description		0..1	string	Description of the event as a whole
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// onset		0..1	dateTime	Date(/time) when manifestations showed
	set onset(onset) {
		this._onset = onset;
	}

	get onset() {
		return this._onset;
	}

	// severity		0..1	code	mild | moderate | severe (of event as a whole)
	// AllergyIntoleranceSeverity (Required)
	set severity(severity) {
		this._severity = new Code(severity);
	}

	get severity() {
		return this._severity;
	}

	// exposureRoute		0..1	CodeableConcept	How the subject was exposed to the substance
	// SNOMED CT Route Codes (Example)
	set exposureRoute(exposureRoute) {
		this._exposureRoute = new CodeableConcept(exposureRoute);
	}

	get exposureRoute() {
		return this._exposureRoute;
	}

	// note		0..*	Annotation	Text about event not captured in other fields
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
			substance: this._substance,
			manifestation: this._manifestation,
			description: this._description,
			onset: this._onset,
			severity: this._severity,
			exposureRoute: this._exposureRoute,
			note: this._note,
		};
	}
}

class AllergyIntolerance extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'AllergyIntolerance';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	External ids for this item
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

	// clinicalStatus	?!ΣI	0..1	code	active | inactive | resolved
	// AllergyIntoleranceClinicalStatus (Required)
	set clinicalStatus(clinicalStatus) {
		this._clinicalStatus = new Code(clinicalStatus);
	}

	get clinicalStatus() {
		return this._clinicalStatus;
	}

	// verificationStatus	?!ΣI	1..1	code	unconfirmed | confirmed | refuted | entered-in-error
	// AllergyIntoleranceVerificationStatus (Required)
	set verificationStatus(verificationStatus) {
		this._verificationStatus = new Code(verificationStatus);
	}

	get verificationStatus() {
		return this._verificationStatus;
	}

	// type	Σ	0..1	code	allergy | intolerance - Underlying mechanism (if known)
	// AllergyIntoleranceType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// category	Σ	0..*	code	food | medication | environment | biologic
	// AllergyIntoleranceCategory (Required)
	set category(category) {
		if (Array.isArray(category)) {
			this._category = category.map((i) => new Code(i));
		} else {
			this._category = [new Code(category)];
		}
	}

	get category() {
		return this._category;
	}

	// criticality	Σ	0..1	code	low | high | unable-to-assess
	// AllergyIntoleranceCriticality (Required)
	set criticality(criticality) {
		this._criticality = new Code(criticality);
	}

	get criticality() {
		return this._criticality;
	}

	// code	Σ	0..1	CodeableConcept	Code that identifies the allergy or intolerance
	// AllergyIntolerance Substance/Product, Condition and Negation Codes (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// patient	Σ	1..1	Reference(Patient)	Who the sensitivity is for
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// onset[x]		0..1		When allergy or intolerance was identified
	// onsetDateTime			dateTime
	set onsetDateTime(onsetDateTime) {
		this._onsetDateTime = onsetDateTime;
	}

	get onsetDateTime() {
		return this._onsetDateTime;
	}

	// onsetAge			Age
	set onsetAge(onsetAge) {
		this._onsetAge = onsetAge;
	}

	get onsetAge() {
		return this._onsetAge;
	}

	// onsetPeriod			Period
	set onsetPeriod(onsetPeriod) {
		this._onsetPeriod = new Period(onsetPeriod);
	}

	get onsetPeriod() {
		return this._onsetPeriod;
	}

	// onsetRange			Range
	set onsetRange(onsetRange) {
		this._onsetRange = new Range(onsetRange);
	}

	get onsetRange() {
		return this._onsetRange;
	}

	// onsetString			string
	set onsetString(onsetString) {
		this._onsetString = onsetString;
	}

	get onsetString() {
		return this._onsetString;
	}

	// assertedDate		0..1	dateTime	Date record was believed accurate
	set assertedDate(assertedDate) {
		this._assertedDate = assertedDate;
	}

	get assertedDate() {
		return this._assertedDate;
	}

	// recorder		0..1	Reference(Practitioner | Patient)	Who recorded the sensitivity
	set recorder(recorder) {
		this._recorder = new Reference(recorder);
	}

	get recorder() {
		return this._recorder;
	}

	// asserter	Σ	0..1	Reference(Patient | RelatedPerson | Practitioner)	Source of the information about the allergy
	set asserter(asserter) {
		this._asserter = new Reference(asserter);
	}

	get asserter() {
		return this._asserter;
	}

	// lastOccurrence		0..1	dateTime	Date(/time) of last known occurrence of a reaction
	set lastOccurrence(lastOccurrence) {
		this._lastOccurrence = lastOccurrence;
	}

	get lastOccurrence() {
		return this._lastOccurrence;
	}

	// note		0..*	Annotation	Additional text not captured in other fields
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

	// reaction		0..*	BackboneElement	Adverse Reaction Events linked to exposure to substance
	set reaction(reaction) {
		if (Array.isArray(reaction)) {
			this._reaction = reaction.map((i) => new Reaction(i));
		} else {
			this._reaction = [new Reaction(reaction)];
		}
	}

	get reaction() {
		return this._reaction;
	}

	toJSON() {
		const json = {
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
			reaction: this._reaction,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.AllergyIntolerance = AllergyIntolerance;
module.exports.Reaction = Reaction;
