const DomainResource = require('./types/DomainResource');
const Meta = require('./types/Meta');
const Code = require('./types/Code');
const Narrative = require('./uscore/types/Narrative');
const Resource = require('./types/Resource');
const Extension = require('./types/Extension');
const Identifier = require('./uscore/types/Identifier');
const CodeableConcept = require('./types/CodeableConcept');
const Reference = require('./types/Reference');
const Period = require('./types/Period');
const Range = require('./types/Range');
const Annotation = require('./types/Annotation');

class Stage {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// id		0..1	string	xml:id (or equivalent in JSON)
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// extension		0..*	Extension	Additional Content defined by implementations
	set extension(extension) {
		if (Array.isArray(extension)) {
			this._extension = extension.map((i) => new Extension(i));
		} else {
			this._extension = [new Extension(extension)];
		}
	}

	get extension() {
		return this._extension;
	}

	// modifierExtension	?!Î£	0..*	Extension	Extensions that cannot be ignored
	set modifierExtension(modifierExtension) {
		if (Array.isArray(modifierExtension)) {
			this._modifierExtension = modifierExtension.map((i) => new Extension(i));
		} else {
			this._modifierExtension = [new Extension(modifierExtension)];
		}
	}

	get modifierExtension() {
		return this._modifierExtension;
	}

	// summary	I	0..1	CodeableConcept	Simple summary (disease specific)
	// Binding: Condition Stage (example)
	set summary(summary) {
		this._summary = new CodeableConcept(summary);
	}

	get summary() {
		return this._summary;
	}

	// assessment	I	0..*	Reference(ClinicalImpression), Reference(DiagnosticReport), Reference(Observation)	Formal record of assessment
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
			id: this._id,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			summary: this._summary,
			assessment: this._assessment,
		};
	}
}

class Evidence {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// id		0..1	string	xml:id (or equivalent in JSON)
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// extension		0..*	Extension	Additional Content defined by implementations
	set extension(extension) {
		if (Array.isArray(extension)) {
			this._extension = extension.map((i) => new Extension(i));
		} else {
			this._extension = [new Extension(extension)];
		}
	}

	get extension() {
		return this._extension;
	}

	// modifierExtension	?!Î£	0..*	Extension	Extensions that cannot be ignored
	set modifierExtension(modifierExtension) {
		if (Array.isArray(modifierExtension)) {
			this._modifierExtension = modifierExtension.map((i) => new Extension(i));
		} else {
			this._modifierExtension = [new Extension(modifierExtension)];
		}
	}

	get modifierExtension() {
		return this._modifierExtension;
	}

	// code	Î£I	0..*	CodeableConcept	Manifestation/symptom
	// Binding: Manifestation and Symptom Codes (example)
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

	// detail	Î£I	0..*	Reference(Resource)	Supporting information found elsewhere
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
			id: this._id,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			code: this._code,
			detail: this._detail,
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

	// id	Î£	0..1	id	Logical id of this artifact
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// meta	Î£	0..1	Meta	Metadata about the resource
	set meta(meta) {
		this._meta = new Meta(meta);
	}

	get meta() {
		return this._meta;
	}

	// implicitRules	?!Î£	0..1	uri	A set of rules under which this content was created
	set implicitRules(implicitRules) {
		this._implicitRules = implicitRules;
	}

	get implicitRules() {
		return this._implicitRules;
	}

	// language		0..1	code	Language of the resource content
	// Binding: Common Languages (extensible)
	set language(language) {
		this._language = new Code(language);
	}

	get language() {
		return this._language;
	}

	// text	I	0..1	Narrative	Text summary of the resource, for human interpretation
	set text(text) {
		this._text = new Narrative(text);
	}

	get text() {
		return this._text;
	}

	// contained		0..*	Resource	Contained, inline Resources
	set contained(contained) {
		if (Array.isArray(contained)) {
			this._contained = contained.map((i) => new Resource(i));
		} else {
			this._contained = [new Resource(contained)];
		}
	}

	get contained() {
		return this._contained;
	}

	// extension		0..*	Extension	Additional Content defined by implementations
	set extension(extension) {
		if (Array.isArray(extension)) {
			this._extension = extension.map((i) => new Extension(i));
		} else {
			this._extension = [new Extension(extension)];
		}
	}

	get extension() {
		return this._extension;
	}

	// modifierExtension	?!	0..*	Extension	Extensions that cannot be ignored
	set modifierExtension(modifierExtension) {
		if (Array.isArray(modifierExtension)) {
			this._modifierExtension = modifierExtension.map((i) => new Extension(i));
		} else {
			this._modifierExtension = [new Extension(modifierExtension)];
		}
	}

	get modifierExtension() {
		return this._modifierExtension;
	}

	// identifier	Î£	0..*	Identifier	External Ids for this condition
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

	// clinicalStatus	?!Î£I	0..1	code	active | recurrence | inactive | remission | resolved
	// Binding: Condition Clinical Status Codes (required)
	set clinicalStatus(clinicalStatus) {
		this._clinicalStatus = new Code(clinicalStatus);
	}

	get clinicalStatus() {
		return this._clinicalStatus;
	}

	// verificationStatus	?!Î£I	1..1	code	provisional | differential | confirmed | refuted | entered-in-error | unknown
	// Binding: ConditionVerificationStatus (required)
	set verificationStatus(verificationStatus) {
		this._verificationStatus = new Code(verificationStatus);
	}

	get verificationStatus() {
		return this._verificationStatus;
	}

	// category	S	1..*	CodeableConcept	problem-list-item | encounter-diagnosis
	// Binding: US Core Condition Category Codes (preferred)
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
	// Binding: Condition/Diagnosis Severity (preferred)
	set severity(severity) {
		this._severity = new CodeableConcept(severity);
	}

	get severity() {
		return this._severity;
	}

	// code	SÎ£	1..1	CodeableConcept	Identification of the condition, problem or diagnosis
	// Binding: Problem Value Set (extensible)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// bodySite	Î£	0..*	CodeableConcept	Anatomical location, if relevant
	// Binding: SNOMED CT Body Structures (example)
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

	// subject	SÎ£	1..1	Reference(US Core Patient Profile)	Who has the condition?
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// context	Î£	0..1	Reference(Encounter), Reference(EpisodeOfCare)	Encounter or episode when condition first asserted
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

	// assertedDate	Î£	0..1	dateTime	Date record was believed accurate
	set assertedDate(assertedDate) {
		this._assertedDate = assertedDate;
	}

	get assertedDate() {
		return this._assertedDate;
	}

	// asserter	Î£	0..1	Reference(Practitioner), Reference(Patient), Reference(RelatedPerson)	Person who asserts this condition
	set asserter(asserter) {
		this._asserter = new Reference(asserter);
	}

	get asserter() {
		return this._asserter;
	}

	// stage	I	0..1	BackboneElement	Stage/grade, usually assessed formally
	// con-1: Stage SHALL have summary or assessment
	set stage(stage) {
		this._stage = new Stage(stage);
	}

	get stage() {
		return this._stage;
	}

	// evidence	I	0..*	BackboneElement	Supporting evidence
	// con-2: evidence SHALL have code or details
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

	toJSON() {
		const json = {
			id: this._id,
			meta: this._meta,
			implicitRules: this._implicitRules,
			language: this._language,
			text: this._text,
			contained: this._contained,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
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
			stage: this._stage,
			evidence: this._evidence,
			note: this._note,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Condition = Condition;
module.exports.Evidence = Evidence;
module.exports.Stage = Stage;
