const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const UriScalar = require('./scalars/Uri.scalar');

class ClinicalImpression extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ClinicalImpression';
		Object.assign(this, opt);
	}

	// This is a ClinicalImpression resource
	static get __resourceType() {
		return 'ClinicalImpression';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__ClinicalImpression = new_value;
	}

	// A unique identifier assigned to the clinical impression that remains consistent regardless of what server the impression is stored on.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// Identifies the workflow status of the assessment.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Categorizes the type of clinical assessment performed.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// A summary of the context and/or cause of the assessment - why / where was it performed, and what patient events/status prompted it.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// The patient or group of individuals assessed as part of this record.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// The encounter or episode of care this impression was created as part of.
	get context() {
		return this.__context;
	}

	set context(new_value) {
		const Reference = require('./Reference');
		this.__context = new Reference(new_value);
	}

	// The point in time or period over which the subject was assessed.
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

	// The point in time or period over which the subject was assessed.
	get effectivePeriod() {
		return this.__effectivePeriod;
	}

	set effectivePeriod(new_value) {
		const Period = require('./Period');
		this.__effectivePeriod = new Period(new_value);
	}

	// Indicates when the documentation of the assessment was complete.
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

	// The clinician performing the assessment.
	get assessor() {
		return this.__assessor;
	}

	set assessor(new_value) {
		const Reference = require('./Reference');
		this.__assessor = new Reference(new_value);
	}

	// A reference to the last assesment that was conducted bon this patient. Assessments are often/usually ongoing in nature; a care provider (practitioner or team) will make new assessments on an ongoing basis as new data arises or the patient\'s conditions changes.
	get previous() {
		return this.__previous;
	}

	set previous(new_value) {
		const Reference = require('./Reference');
		this.__previous = new Reference(new_value);
	}

	// This a list of the relevant problems/conditions for a patient.
	get problem() {
		return this.__problem;
	}

	set problem(new_value) {
		const Reference = require('./Reference');
		this.__problem = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// One or more sets of investigations (signs, symptions, etc.). The actual grouping of investigations vary greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
	get investigation() {
		return this.__investigation;
	}

	set investigation(new_value) {
		const ClinicalImpressionInvestigation = require('./ClinicalImpressionInvestigation');
		this.__investigation = Array.isArray(new_value)
			? new_value.map(val => new ClinicalImpressionInvestigation(val))
			: [new ClinicalImpressionInvestigation(new_value)];
	}

	// Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.
	get protocol() {
		return this.__protocol;
	}

	set protocol(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field protocol`);
		}
		this.__protocol = Array.isArray(new_value) ? new_value : [new_value];
	}

	// A text summary of the investigations and the diagnosis.
	get summary() {
		return this.__summary;
	}

	set summary(new_value) {
		this.__summary = new_value;
	}

	// Specific findings or diagnoses that was considered likely or relevant to ongoing treatment.
	get finding() {
		return this.__finding;
	}

	set finding(new_value) {
		const ClinicalImpressionFinding = require('./ClinicalImpressionFinding');
		this.__finding = Array.isArray(new_value)
			? new_value.map(val => new ClinicalImpressionFinding(val))
			: [new ClinicalImpressionFinding(new_value)];
	}

	// Estimate of likely outcome.
	get prognosisCodeableConcept() {
		return this.__prognosisCodeableConcept;
	}

	set prognosisCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__prognosisCodeableConcept = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// RiskAssessment expressing likely outcome.
	get prognosisReference() {
		return this.__prognosisReference;
	}

	set prognosisReference(new_value) {
		const Reference = require('./Reference');
		this.__prognosisReference = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// Action taken as part of assessment procedure.
	get action() {
		return this.__action;
	}

	set action(new_value) {
		const Reference = require('./Reference');
		this.__action = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Commentary about the impression, typically recorded after the impression itself was made, though supplemental notes by the original author could also appear.
	get note() {
		return this.__note;
	}

	set note(new_value) {
		const Annotation = require('./Annotation');
		this.__note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			status: this.__status,
			code: this.__code && this.__code.toJSON(),
			description: this.__description,
			subject: this.__subject && this.__subject.toJSON(),
			context: this.__context && this.__context.toJSON(),
			effectiveDateTime: this.__effectiveDateTime,
			effectivePeriod: this.__effectivePeriod && this.__effectivePeriod.toJSON(),
			date: this.__date,
			assessor: this.__assessor && this.__assessor.toJSON(),
			previous: this.__previous && this.__previous.toJSON(),
			problem: this.__problem && this.__problem.map(v => v.toJSON()),
			investigation: this.__investigation && this.__investigation.map(v => v.toJSON()),
			protocol: this.__protocol,
			summary: this.__summary,
			finding: this.__finding && this.__finding.map(v => v.toJSON()),
			prognosisCodeableConcept: this.__prognosisCodeableConcept && this.__prognosisCodeableConcept.map(v => v.toJSON()),
			prognosisReference: this.__prognosisReference && this.__prognosisReference.map(v => v.toJSON()),
			action: this.__action && this.__action.map(v => v.toJSON()),
			note: this.__note && this.__note.map(v => v.toJSON()),
		});
	}
}

module.exports = ClinicalImpression;
