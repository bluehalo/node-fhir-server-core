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

	// The patient being assessed.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// The clinician performing the assessment.
	get assessor() {
		return this.__assessor;
	}

	set assessor(new_value) {
		const Reference = require('./Reference');
		this.__assessor = new Reference(new_value);
	}

	// Identifies the workflow status of the assessment.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// The point in time at which the assessment was concluded (not when it was recorded).
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

	// A summary of the context and/or cause of the assessment - why / where was it peformed, and what patient events/sstatus prompted it.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// A reference to the last assesment that was conducted bon this patient. Assessments are often/usually ongoing in nature; a care provider (practitioner or team) will make new assessments on an ongoing basis as new data arises or the patient\'s conditions changes.
	get previous() {
		return this.__previous;
	}

	set previous(new_value) {
		const Reference = require('./Reference');
		this.__previous = new Reference(new_value);
	}

	// This a list of the general problems/conditions for a patient.
	get problem() {
		return this.__problem;
	}

	set problem(new_value) {
		const Reference = require('./Reference');
		this.__problem = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The request or event that necessitated this assessment. This may be a diagnosis, a Care Plan, a Request Referral, or some other resource.
	get triggerCodeableConcept() {
		return this.__triggerCodeableConcept;
	}

	set triggerCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__triggerCodeableConcept = new CodeableConcept(new_value);
	}

	// The request or event that necessitated this assessment. This may be a diagnosis, a Care Plan, a Request Referral, or some other resource.
	get triggerReference() {
		return this.__triggerReference;
	}

	set triggerReference(new_value) {
		const Reference = require('./Reference');
		this.__triggerReference = new Reference(new_value);
	}

	// One or more sets of investigations (signs, symptions, etc.). The actual grouping of investigations vary greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
	get investigations() {
		return this.__investigations;
	}

	set investigations(new_value) {
		const ClinicalImpressionInvestigations = require('./ClinicalImpressionInvestigations');
		this.__investigations = Array.isArray(new_value)
			? new_value.map(val => new ClinicalImpressionInvestigations(val))
			: [new ClinicalImpressionInvestigations(new_value)];
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
		this.__protocol = new_value;
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

	// Diagnoses/conditions resolved since the last assessment.
	get resolved() {
		return this.__resolved;
	}

	set resolved(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__resolved = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Diagnosis considered not possible.
	get ruledOut() {
		return this.__ruledOut;
	}

	set ruledOut(new_value) {
		const ClinicalImpressionRuledOut = require('./ClinicalImpressionRuledOut');
		this.__ruledOut = Array.isArray(new_value)
			? new_value.map(val => new ClinicalImpressionRuledOut(val))
			: [new ClinicalImpressionRuledOut(new_value)];
	}

	// Estimate of likely outcome.
	get prognosis() {
		return this.__prognosis;
	}

	set prognosis(new_value) {
		this.__prognosis = new_value;
	}

	// Plan of action after assessment.
	get plan() {
		return this.__plan;
	}

	set plan(new_value) {
		const Reference = require('./Reference');
		this.__plan = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Actions taken during assessment.
	get action() {
		return this.__action;
	}

	set action(new_value) {
		const Reference = require('./Reference');
		this.__action = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			patient: this.__patient && this.__patient.toJSON(),
			assessor: this.__assessor && this.__assessor.toJSON(),
			status: this.__status,
			date: this.__date,
			description: this.__description,
			previous: this.__previous && this.__previous.toJSON(),
			problem: this.__problem && this.__problem.map(v => v.toJSON()),
			triggerCodeableConcept: this.__triggerCodeableConcept && this.__triggerCodeableConcept.toJSON(),
			triggerReference: this.__triggerReference && this.__triggerReference.toJSON(),
			investigations: this.__investigations && this.__investigations.map(v => v.toJSON()),
			protocol: this.__protocol,
			summary: this.__summary,
			finding: this.__finding && this.__finding.map(v => v.toJSON()),
			resolved: this.__resolved && this.__resolved.map(v => v.toJSON()),
			ruledOut: this.__ruledOut && this.__ruledOut.map(v => v.toJSON()),
			prognosis: this.__prognosis,
			plan: this.__plan && this.__plan.map(v => v.toJSON()),
			action: this.__action && this.__action.map(v => v.toJSON()),
		});
	}
}

module.exports = ClinicalImpression;
