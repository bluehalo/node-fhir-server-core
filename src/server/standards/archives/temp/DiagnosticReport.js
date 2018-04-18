const DomainResource = require('./types/DomainResource');
const Meta = require('./types/Meta');
const Code = require('./types/Code');
const Narrative = require('./types/Narrative');
const Resource = require('./types/Resource');
const Extension = require('./types/Extension');
const Identifier = require('./types/Identifier');
const Reference = require('./types/Reference');
const CodeableConcept = require('./types/CodeableConcept');
const Period = require('./types/Period');
const Attachment = require('./types/Attachment');

class Image {
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

	// modifierExtension	?!Σ	0..*	Extension	Extensions that cannot be ignored
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

	// comment		0..1	string	Comment about the image (e.g. explanation)
	set comment(comment) {
		this._comment = comment;
	}

	get comment() {
		return this._comment;
	}

	// link	Σ	1..1	Reference(Media)	Reference to the image source
	set link(link) {
		this._link = new Reference(link);
	}

	get link() {
		return this._link;
	}

	toJSON() {
		return {
			id: this._id,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			comment: this._comment,
			link: this._link,
		};
	}
}

class Performer {
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

	// modifierExtension	?!Σ	0..*	Extension	Extensions that cannot be ignored
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

	// role	Σ	0..1	CodeableConcept	Type of performer
	// Binding: Procedure Performer Role Codes (example)
	set role(role) {
		this._role = new CodeableConcept(role);
	}

	get role() {
		return this._role;
	}

	// actor	SΣ	1..1	Reference(US Core Practitioner Profile), Reference(US Core Organization Core Profile)	Practitioner or Organization participant
	set actor(actor) {
		this._actor = new Reference(actor);
	}

	get actor() {
		return this._actor;
	}

	toJSON() {
		return {
			id: this._id,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			role: this._role,
			actor: this._actor,
		};
	}
}

class DiagnosticReport extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'DiagnosticReport';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// id	Σ	0..1	id	Logical id of this artifact
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// meta	Σ	0..1	Meta	Metadata about the resource
	set meta(meta) {
		this._meta = new Meta(meta);
	}

	get meta() {
		return this._meta;
	}

	// implicitRules	?!Σ	0..1	uri	A set of rules under which this content was created
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

	// identifier	Σ	0..*	Identifier	Business identifier for report
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

	// basedOn		0..*	Reference(CarePlan), Reference(ImmunizationRecommendation), Reference(MedicationRequest), Reference(NutritionOrder), Reference(ProcedureRequest), Reference(ReferralRequest)	What was requested
	set basedOn(basedOn) {
		if (Array.isArray(basedOn)) {
			this._basedOn = basedOn.map((i) => new Reference(i));
		} else {
			this._basedOn = [new Reference(basedOn)];
		}
	}

	get basedOn() {
		return this._basedOn;
	}

	// status	?!SΣ	1..1	code	registered | partial | preliminary | final +
	// Binding: DiagnosticReportStatus (required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// category	SΣ	1..1	CodeableConcept	Service category
	// Binding: Diagnostic Service Section Codes (example)
	// Required Pattern: {"coding":[{"system":"http://hl7.org/fhir/v2/0074","code":"LAB"}]}
	set category(category) {
		this._category = new CodeableConcept(category);
	}

	get category() {
		return this._category;
	}

	// code	SΣ	1..1	CodeableConcept	US Core Laboratory Report Order Code
	// Binding: LOINC Diagnostic Report Codes (extensible)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// subject	SΣ	1..1	Reference(US Core Patient Profile)	The subject of the report - usually, but not always, the patient
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// context	Σ	0..1	Reference(Encounter), Reference(EpisodeOfCare)	Health care event when test ordered
	set context(context) {
		this._context = new Reference(context);
	}

	get context() {
		return this._context;
	}

	// effective[x]	Σ	0..1		Clinically relevant time/time-period for report
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

	// issued	SΣ	1..1	instant	DateTime this version was released
	set issued(issued) {
		this._issued = issued;
	}

	get issued() {
		return this._issued;
	}

	// performer	SΣI	0..*	BackboneElement	Participants in producing the report
	set performer(performer) {
		if (Array.isArray(performer)) {
			this._performer = performer.map((i) => new Performer(i));
		} else {
			this._performer = [new Performer(performer)];
		}
	}

	get performer() {
		return this._performer;
	}

	// specimen		0..*	Reference(Specimen)	Specimens this report is based on
	set specimen(specimen) {
		if (Array.isArray(specimen)) {
			this._specimen = specimen.map((i) => new Reference(i));
		} else {
			this._specimen = [new Reference(specimen)];
		}
	}

	get specimen() {
		return this._specimen;
	}

	// result	S	0..*	Reference(US Core Results Profile)	Observations - simple, or complex nested groups
	set result(result) {
		if (Array.isArray(result)) {
			this._result = result.map((i) => new Reference(i));
		} else {
			this._result = [new Reference(result)];
		}
	}

	get result() {
		return this._result;
	}

	// imagingStudy		0..*	Reference(ImagingStudy), Reference(ImagingManifest)	Reference to full details of imaging associated with the diagnostic report
	set imagingStudy(imagingStudy) {
		if (Array.isArray(imagingStudy)) {
			this._imagingStudy = imagingStudy.map((i) => new Reference(i));
		} else {
			this._imagingStudy = [new Reference(imagingStudy)];
		}
	}

	get imagingStudy() {
		return this._imagingStudy;
	}

	// image	SΣI	0..*	BackboneElement	Key images associated with this report
	set image(image) {
		if (Array.isArray(image)) {
			this._image = image.map((i) => new Image(i));
		} else {
			this._image = [new Image(image)];
		}
	}

	get image() {
		return this._image;
	}

	// conclusion		0..1	string	Clinical Interpretation of test results
	set conclusion(conclusion) {
		this._conclusion = conclusion;
	}

	get conclusion() {
		return this._conclusion;
	}

	// codedDiagnosis		0..*	CodeableConcept	Codes for the conclusion
	// Binding: SNOMED CT Clinical Findings (example)
	set codedDiagnosis(codedDiagnosis) {
		if (Array.isArray(codedDiagnosis)) {
			this._codedDiagnosis = codedDiagnosis.map((i) => new CodeableConcept(i));
		} else {
			this._codedDiagnosis = [new CodeableConcept(codedDiagnosis)];
		}
	}

	get codedDiagnosis() {
		return this._codedDiagnosis;
	}

	// presentedForm	S	0..*	Attachment	Entire report as issued
	set presentedForm(presentedForm) {
		if (Array.isArray(presentedForm)) {
			this._presentedForm = presentedForm.map((i) => new Attachment(i));
		} else {
			this._presentedForm = [new Attachment(presentedForm)];
		}
	}

	get presentedForm() {
		return this._presentedForm;
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
			basedOn: this._basedOn,
			status: this._status,
			category: this._category,
			code: this._code,
			subject: this._subject,
			context: this._context,
			effectiveDateTime: this._effectiveDateTime,
			effectivePeriod: this._effectivePeriod,
			issued: this._issued,
			performer: this._performer,
			specimen: this._specimen,
			result: this._result,
			imagingStudy: this._imagingStudy,
			image: this._image,
			conclusion: this._conclusion,
			codedDiagnosis: this._codedDiagnosis,
			presentedForm: this._presentedForm,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.DiagnosticReport = DiagnosticReport;
module.exports.Performer = Performer;
module.exports.Image = Image;
