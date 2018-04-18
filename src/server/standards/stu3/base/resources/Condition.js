const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Code = require('../types/Code');
const CodeableConcept = require('../types/CodeableConcept');
const Reference = require('../types/Reference');
const Period = require('../types/Period');
const Range = require('../types/Range');
const Annotation = require('../types/Annotation');

class Evidence {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// code	ΣI	0..*	CodeableConcept	Manifestation/symptom
	// Manifestation and Symptom Codes (Example)
	set code(code) {
		if (Array.isArray(code)) {
			this._code = code.map((i) => new CodeableConcept(i));
		} else {
			this._code = [new CodeableConcept(code)];
		}
	}

	get code() {
		return this._code;
	}

	// detail	ΣI	0..*	Reference(Any)	Supporting information found elsewhere
	set detail(detail) {
		if (Array.isArray(detail)) {
			this._detail = detail.map((i) => new Reference(i));
		} else {
			this._detail = [new Reference(detail)];
		}
	}

	get detail() {
		return this._detail;
	}

	toJSON() {
		return {
			code: this._code,
			detail: this._detail,
		};
	}
}

class Stage {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// summary	I	0..1	CodeableConcept	Simple summary (disease specific)
	// Condition Stage (Example)
	set summary(summary) {
		this._summary = new CodeableConcept(summary);
	}

	get summary() {
		return this._summary;
	}

	// assessment	I	0..*	Reference(ClinicalImpression | DiagnosticReport | Observation)	Formal record of assessment
	set assessment(assessment) {
		if (Array.isArray(assessment)) {
			this._assessment = assessment.map((i) => new Reference(i));
		} else {
			this._assessment = [new Reference(assessment)];
		}
	}

	get assessment() {
		return this._assessment;
	}

	toJSON() {
		return {
			summary: this._summary,
			assessment: this._assessment,
		};
	}
}

class Condition extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Condition';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	External Ids for this condition
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

	// clinicalStatus	?!ΣI	0..1	code	active | recurrence | inactive | remission | resolved
	// Condition Clinical Status Codes (Required)
	set clinicalStatus(clinicalStatus) {
		this._clinicalStatus = new Code(clinicalStatus);
	}

	get clinicalStatus() {
		return this._clinicalStatus;
	}

	// verificationStatus	?!ΣI	0..1	code	provisional | differential | confirmed | refuted | entered-in-error | unknown
	// ConditionVerificationStatus (Required)
	set verificationStatus(verificationStatus) {
		this._verificationStatus = new Code(verificationStatus);
	}

	get verificationStatus() {
		return this._verificationStatus;
	}

	// category		0..*	CodeableConcept	problem-list-item | encounter-diagnosis
	// Condition Category Codes (Example)
	set category(category) {
		if (Array.isArray(category)) {
			this._category = category.map((i) => new CodeableConcept(i));
		} else {
			this._category = [new CodeableConcept(category)];
		}
	}

	get category() {
		return this._category;
	}

	// severity		0..1	CodeableConcept	Subjective severity of condition
	// Condition/Diagnosis Severity (Preferred)
	set severity(severity) {
		this._severity = new CodeableConcept(severity);
	}

	get severity() {
		return this._severity;
	}

	// code	Σ	0..1	CodeableConcept	Identification of the condition, problem or diagnosis
	// Condition/Problem/Diagnosis Codes (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// bodySite	Σ	0..*	CodeableConcept	Anatomical location, if relevant
	// SNOMED CT Body Structures (Example)
	set bodySite(bodySite) {
		if (Array.isArray(bodySite)) {
			this._bodySite = bodySite.map((i) => new CodeableConcept(i));
		} else {
			this._bodySite = [new CodeableConcept(bodySite)];
		}
	}

	get bodySite() {
		return this._bodySite;
	}

	// subject	Σ	1..1	Reference(Patient | Group)	Who has the condition?
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// context	Σ	0..1	Reference(Encounter | EpisodeOfCare)	Encounter or episode when condition first asserted
	set context(context) {
		this._context = new Reference(context);
	}

	get context() {
		return this._context;
	}

	// onset[x]	Σ	0..1		Estimated or actual date, date-time, or age
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

	// abatement[x]	I	0..1		If/when in resolution/remission
	// abatementDateTime			dateTime
	set abatementDateTime(abatementDateTime) {
		this._abatementDateTime = abatementDateTime;
	}

	get abatementDateTime() {
		return this._abatementDateTime;
	}

	// abatementAge			Age
	set abatementAge(abatementAge) {
		this._abatementAge = abatementAge;
	}

	get abatementAge() {
		return this._abatementAge;
	}

	// abatementBoolean			boolean
	set abatementBoolean(abatementBoolean) {
		this._abatementBoolean = abatementBoolean;
	}

	get abatementBoolean() {
		return this._abatementBoolean;
	}

	// abatementPeriod			Period
	set abatementPeriod(abatementPeriod) {
		this._abatementPeriod = new Period(abatementPeriod);
	}

	get abatementPeriod() {
		return this._abatementPeriod;
	}

	// abatementRange			Range
	set abatementRange(abatementRange) {
		this._abatementRange = new Range(abatementRange);
	}

	get abatementRange() {
		return this._abatementRange;
	}

	// abatementString			string
	set abatementString(abatementString) {
		this._abatementString = abatementString;
	}

	get abatementString() {
		return this._abatementString;
	}

	// assertedDate	Σ	0..1	dateTime	Date record was believed accurate
	set assertedDate(assertedDate) {
		this._assertedDate = assertedDate;
	}

	get assertedDate() {
		return this._assertedDate;
	}

	// asserter	Σ	0..1	Reference(Practitioner | Patient | RelatedPerson)	Person who asserts this condition
	set asserter(asserter) {
		this._asserter = new Reference(asserter);
	}

	get asserter() {
		return this._asserter;
	}

	// note		0..*	Annotation	Additional information about the Condition
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

	// stage	I	0..1	BackboneElement	Stage/grade, usually assessed formally
	set stage(stage) {
		this._stage = new Stage(stage);
	}

	get stage() {
		return this._stage;
	}

	// evidence	I	0..*	BackboneElement	Supporting evidence
	set evidence(evidence) {
		if (Array.isArray(evidence)) {
			this._evidence = evidence.map((i) => new Evidence(i));
		} else {
			this._evidence = [new Evidence(evidence)];
		}
	}

	get evidence() {
		return this._evidence;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			clinicalStatus: this._clinicalStatus,
			verificationStatus: this._verificationStatus,
			category: this._category,
			severity: this._severity,
			code: this._code,
			bodySite: this._bodySite,
			subject: this._subject,
			context: this._context,
			onsetDateTime: this._onsetDateTime,
			onsetAge: this._onsetAge,
			onsetPeriod: this._onsetPeriod,
			onsetRange: this._onsetRange,
			onsetString: this._onsetString,
			abatementDateTime: this._abatementDateTime,
			abatementAge: this._abatementAge,
			abatementBoolean: this._abatementBoolean,
			abatementPeriod: this._abatementPeriod,
			abatementRange: this._abatementRange,
			abatementString: this._abatementString,
			assertedDate: this._assertedDate,
			asserter: this._asserter,
			note: this._note,
			stage: this._stage,
			evidence: this._evidence,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Condition = Condition;
module.exports.Stage = Stage;
module.exports.Evidence = Evidence;
