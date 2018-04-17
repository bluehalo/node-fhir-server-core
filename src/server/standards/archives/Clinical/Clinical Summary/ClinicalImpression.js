const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Reference = require('./types/Reference');
const Period = require('./types/Period');
const Annotation = require('./types/Annotation');

class Finding {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// item[x]		1..1		What was found
	// Condition/Problem/Diagnosis Codes (Example)
	// itemCodeableConcept			CodeableConcept
	set itemCodeableConcept(itemCodeableConcept) {
		this._itemCodeableConcept = new CodeableConcept(itemCodeableConcept);
	}

	get itemCodeableConcept() {
		return this._itemCodeableConcept;
	}

	// itemReference			Reference
	set itemReference(itemReference) {
		this._itemReference = new Reference(itemReference);
	}

	get itemReference() {
		return this._itemReference;
	}

	// basis		0..1	string	Which investigations support finding
	set basis(basis) {
		this._basis = basis;
	}

	get basis() {
		return this._basis;
	}

	toJSON() {
		return {
			itemCodeableConcept: this._itemCodeableConcept,
			itemReference: this._itemReference,
			basis: this._basis,
		};
	}
}

class Investigation {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// code		1..1	CodeableConcept	A name/code for the set
	// Investigation Type (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// item		0..*	Reference(Observation | QuestionnaireResponse | FamilyMemberHistory | DiagnosticReport | RiskAssessment | ImagingStudy)	Record of a specific investigation
	set item(item) {
		if (Array.isArray(item)) {
			this._item = item.map((i) => new Reference(i));
		} else {
			this._item = [new Reference(item)];
		}
	}

	get item() {
		return this._item;
	}

	toJSON() {
		return {
			code: this._code,
			item: this._item,
		};
	}
}

class ClinicalImpression extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'ClinicalImpression';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	Business identifier
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

	// status	?!Σ	1..1	code	draft | completed | entered-in-error
	// ClinicalImpressionStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// code	Σ	0..1	CodeableConcept	Kind of assessment performed
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// description	Σ	0..1	string	Why/how the assessment was performed
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// subject	Σ	1..1	Reference(Patient | Group)	Patient or group assessed
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// context	Σ	0..1	Reference(Encounter | EpisodeOfCare)	Encounter or Episode created from
	set context(context) {
		this._context = new Reference(context);
	}

	get context() {
		return this._context;
	}

	// effective[x]	Σ	0..1		Time of assessment
	// effectiveDateTime			dateTime
	set effectiveDateTime(effectiveDateTime) {
		this._effectiveDateTime = effectiveDateTime;
	}

	get effectiveDateTime() {
		return this._effectiveDateTime;
	}

	// effectivePeriod			Period
	set effectivePeriod(effectivePeriod) {
		this._effectivePeriod = new Period(effectivePeriod);
	}

	get effectivePeriod() {
		return this._effectivePeriod;
	}

	// date	Σ	0..1	dateTime	When the assessment was documented
	set date(date) {
		this._date = date;
	}

	get date() {
		return this._date;
	}

	// assessor	Σ	0..1	Reference(Practitioner)	The clinician performing the assessment
	set assessor(assessor) {
		this._assessor = new Reference(assessor);
	}

	get assessor() {
		return this._assessor;
	}

	// previous		0..1	Reference(ClinicalImpression)	Reference to last assessment
	set previous(previous) {
		this._previous = new Reference(previous);
	}

	get previous() {
		return this._previous;
	}

	// problem	Σ	0..*	Reference(Condition | AllergyIntolerance)	Relevant impressions of patient state
	set problem(problem) {
		if (Array.isArray(problem)) {
			this._problem = problem.map((i) => new Reference(i));
		} else {
			this._problem = [new Reference(problem)];
		}
	}

	get problem() {
		return this._problem;
	}

	// protocol		0..*	uri	Clinical Protocol followed
	set protocol(protocol) {
		this._protocol = [].concat(protocol);
	}

	get protocol() {
		return this._protocol;
	}

	// summary		0..1	string	Summary of the assessment
	set summary(summary) {
		this._summary = summary;
	}

	get summary() {
		return this._summary;
	}

	// prognosisCodeableConcept		0..*	CodeableConcept	Estimate of likely outcome
	// Clinical Impression Prognosis (Example)
	set prognosisCodeableConcept(prognosisCodeableConcept) {
		if (Array.isArray(prognosisCodeableConcept)) {
			this._prognosisCodeableConcept = prognosisCodeableConcept.map((i) => new CodeableConcept(i));
		} else {
			this._prognosisCodeableConcept = [new CodeableConcept(prognosisCodeableConcept)];
		}
	}

	get prognosisCodeableConcept() {
		return this._prognosisCodeableConcept;
	}

	// prognosisReference		0..*	Reference(RiskAssessment)	RiskAssessment expressing likely outcome
	set prognosisReference(prognosisReference) {
		if (Array.isArray(prognosisReference)) {
			this._prognosisReference = prognosisReference.map((i) => new Reference(i));
		} else {
			this._prognosisReference = [new Reference(prognosisReference)];
		}
	}

	get prognosisReference() {
		return this._prognosisReference;
	}

	// action		0..*	Reference(ReferralRequest | ProcedureRequest | Procedure | MedicationRequest | Appointment)	Action taken as part of assessment procedure
	set action(action) {
		if (Array.isArray(action)) {
			this._action = action.map((i) => new Reference(i));
		} else {
			this._action = [new Reference(action)];
		}
	}

	get action() {
		return this._action;
	}

	// note		0..*	Annotation	Comments made about the ClinicalImpression
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

	// investigation		0..*	BackboneElement	One or more sets of investigations (signs, symptions, etc.)
	set investigation(investigation) {
		if (Array.isArray(investigation)) {
			this._investigation = investigation.map((i) => new Investigation(i));
		} else {
			this._investigation = [new Investigation(investigation)];
		}
	}

	get investigation() {
		return this._investigation;
	}

	// finding		0..*	BackboneElement	Possible or likely findings and diagnoses
	set finding(finding) {
		if (Array.isArray(finding)) {
			this._finding = finding.map((i) => new Finding(i));
		} else {
			this._finding = [new Finding(finding)];
		}
	}

	get finding() {
		return this._finding;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			code: this._code,
			description: this._description,
			subject: this._subject,
			context: this._context,
			effectiveDateTime: this._effectiveDateTime,
			effectivePeriod: this._effectivePeriod,
			date: this._date,
			assessor: this._assessor,
			previous: this._previous,
			problem: this._problem,
			protocol: this._protocol,
			summary: this._summary,
			prognosisCodeableConcept: this._prognosisCodeableConcept,
			prognosisReference: this._prognosisReference,
			action: this._action,
			note: this._note,
			investigation: this._investigation,
			finding: this._finding,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.ClinicalImpression = ClinicalImpression;
module.exports.Investigation = Investigation;
module.exports.Finding = Finding;
