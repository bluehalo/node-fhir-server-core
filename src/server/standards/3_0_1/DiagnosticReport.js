const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const InstantScalar = require('./scalars/Instant.scalar');

class DiagnosticReport extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DiagnosticReport';
		Object.assign(this, opt);
	}

	// This is a DiagnosticReport resource
	static get __resourceType() {
		return 'DiagnosticReport';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__DiagnosticReport = new_value;
	}

	// Identifiers assigned to this report by the performer or other systems.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// Details concerning a test or procedure requested.
	get basedOn() {
		return this.__basedOn;
	}

	set basedOn(new_value) {
		const Reference = require('./Reference');
		this.__basedOn = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The status of the diagnostic report as a whole.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// A code that classifies the clinical discipline, department or diagnostic service that created the report (e.g. cardiology, biochemistry, hematology, MRI). This is used for searching, sorting and display purposes.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__category = new CodeableConcept(new_value);
	}

	// A code or name that describes this diagnostic report.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// The subject of the report. Usually, but not always, this is a patient. However diagnostic services also perform analyses on specimens collected from a variety of other sources.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// The healthcare event  (e.g. a patient and healthcare provider interaction) which this DiagnosticReport per is about.
	get context() {
		return this.__context;
	}

	set context(new_value) {
		const Reference = require('./Reference');
		this.__context = new Reference(new_value);
	}

	// The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself.
	get effectiveDateTime() {
		return this.__effectiveDateTime;
	}

	set effectiveDateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field effectiveDateTime`);
		}
		this.__effectiveDateTime = new_value;
	}

	// The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself.
	get effectivePeriod() {
		return this.__effectivePeriod;
	}

	set effectivePeriod(new_value) {
		const Period = require('./Period');
		this.__effectivePeriod = new Period(new_value);
	}

	// The date and time that this version of the report was released from the source diagnostic service.
	get issued() {
		return this.__issued;
	}

	set issued(new_value) {
		// Throw if new value does not match the pattern
		let pattern = InstantScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field issued`);
		}
		this.__issued = new_value;
	}

	// Indicates who or what participated in producing the report.
	get performer() {
		return this.__performer;
	}

	set performer(new_value) {
		const DiagnosticReportPerformer = require('./DiagnosticReportPerformer');
		this.__performer = Array.isArray(new_value)
			? new_value.map(val => new DiagnosticReportPerformer(val))
			: [new DiagnosticReportPerformer(new_value)];
	}

	// Details about the specimens on which this diagnostic report is based.
	get specimen() {
		return this.__specimen;
	}

	set specimen(new_value) {
		const Reference = require('./Reference');
		this.__specimen = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Observations that are part of this diagnostic report. Observations can be simple name/value pairs (e.g. \'atomic\' results), or they can be grouping observations that include references to other members of the group (e.g. \'panels\').
	get result() {
		return this.__result;
	}

	set result(new_value) {
		const Reference = require('./Reference');
		this.__result = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// One or more links to full details of any imaging performed during the diagnostic investigation. Typically, this is imaging performed by DICOM enabled modalities, but this is not required. A fully enabled PACS viewer can use this information to provide views of the source images.
	get imagingStudy() {
		return this.__imagingStudy;
	}

	set imagingStudy(new_value) {
		const Reference = require('./Reference');
		this.__imagingStudy = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).
	get image() {
		return this.__image;
	}

	set image(new_value) {
		const DiagnosticReportImage = require('./DiagnosticReportImage');
		this.__image = Array.isArray(new_value)
			? new_value.map(val => new DiagnosticReportImage(val))
			: [new DiagnosticReportImage(new_value)];
	}

	// Concise and clinically contextualized impression / summary of the diagnostic report.
	get conclusion() {
		return this.__conclusion;
	}

	set conclusion(new_value) {
		this.__conclusion = new_value;
	}

	// Codes for the conclusion.
	get codedDiagnosis() {
		return this.__codedDiagnosis;
	}

	set codedDiagnosis(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__codedDiagnosis = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Rich text representation of the entire result as issued by the diagnostic service. Multiple formats are allowed but they SHALL be semantically equivalent.
	get presentedForm() {
		return this.__presentedForm;
	}

	set presentedForm(new_value) {
		const Attachment = require('./Attachment');
		this.__presentedForm = Array.isArray(new_value)
			? new_value.map(val => new Attachment(val))
			: [new Attachment(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			basedOn: this.__basedOn && this.__basedOn.map(v => v.toJSON()),
			status: this.__status,
			category: this.__category && this.__category.toJSON(),
			code: this.__code && this.__code.toJSON(),
			subject: this.__subject && this.__subject.toJSON(),
			context: this.__context && this.__context.toJSON(),
			effectiveDateTime: this.__effectiveDateTime,
			effectivePeriod: this.__effectivePeriod && this.__effectivePeriod.toJSON(),
			issued: this.__issued,
			performer: this.__performer && this.__performer.map(v => v.toJSON()),
			specimen: this.__specimen && this.__specimen.map(v => v.toJSON()),
			result: this.__result && this.__result.map(v => v.toJSON()),
			imagingStudy: this.__imagingStudy && this.__imagingStudy.map(v => v.toJSON()),
			image: this.__image && this.__image.map(v => v.toJSON()),
			conclusion: this.__conclusion,
			codedDiagnosis: this.__codedDiagnosis && this.__codedDiagnosis.map(v => v.toJSON()),
			presentedForm: this.__presentedForm && this.__presentedForm.map(v => v.toJSON()),
		});
	}
}

module.exports = DiagnosticReport;
