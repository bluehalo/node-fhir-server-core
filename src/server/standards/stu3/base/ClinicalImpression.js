const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Period = require('./Period');
const ClinicalImpression_Investigation = require('./ClinicalImpression_Investigation');
const ClinicalImpression_Finding = require('./ClinicalImpression_Finding');
const Annotation = require('./Annotation');

class ClinicalImpression extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ClinicalImpression';
	}

	// This is a ClinicalImpression resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['ClinicalImpression'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// A unique identifier assigned to the clinical impression that remains consistent regardless of what server the impression is stored on.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// Identifies the workflow status of the assessment.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['draft', 'completed', 'entered-in-error'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// Categorizes the type of clinical assessment performed.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new CodeableConcept(new_value);
	}

	// A summary of the context and/or cause of the assessment - why / where was it performed, and what patient events/status prompted it.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// The patient or group of individuals assessed as part of this record.
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = new Reference(new_value);
	}

	// The encounter or episode of care this impression was created as part of.
	get context () {
		return this._context;
	}

	set context ( new_value ) {
		this._context = new Reference(new_value);
	}

	// The point in time or period over which the subject was assessed.
	get effectiveDateTime () {
		return this._effectiveDateTime;
	}

	set effectiveDateTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field effectiveDateTime`);
		}
		this._effectiveDateTime = new_value;
	}

	// The point in time or period over which the subject was assessed.
	get effectivePeriod () {
		return this._effectivePeriod;
	}

	set effectivePeriod ( new_value ) {
		this._effectivePeriod = new Period(new_value);
	}

	// Indicates when the documentation of the assessment was complete.
	get date () {
		return this._date;
	}

	set date ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this._date = new_value;
	}

	// The clinician performing the assessment.
	get assessor () {
		return this._assessor;
	}

	set assessor ( new_value ) {
		this._assessor = new Reference(new_value);
	}

	// A reference to the last assesment that was conducted bon this patient. Assessments are often/usually ongoing in nature; a care provider (practitioner or team) will make new assessments on an ongoing basis as new data arises or the patient's conditions changes.
	get previous () {
		return this._previous;
	}

	set previous ( new_value ) {
		this._previous = new Reference(new_value);
	}

	// This a list of the relevant problems/conditions for a patient.
	get problem () {
		return this._problem;
	}

	set problem ( new_value ) {
		this._problem = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// One or more sets of investigations (signs, symptions, etc.). The actual grouping of investigations vary greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
	get investigation () {
		return this._investigation;
	}

	set investigation ( new_value ) {
		this._investigation = Array.isArray(new_value) ? new_value.map(val => new ClinicalImpression_Investigation(val)) : [new ClinicalImpression_Investigation(new_value)];
	}

	// Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.
	get protocol () {
		return this._protocol;
	}

	set protocol ( new_value ) {
		this._protocol = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// A text summary of the investigations and the diagnosis.
	get summary () {
		return this._summary;
	}

	set summary ( new_value ) {
		this._summary = new_value;
	}

	// Specific findings or diagnoses that was considered likely or relevant to ongoing treatment.
	get finding () {
		return this._finding;
	}

	set finding ( new_value ) {
		this._finding = Array.isArray(new_value) ? new_value.map(val => new ClinicalImpression_Finding(val)) : [new ClinicalImpression_Finding(new_value)];
	}

	// Estimate of likely outcome.
	get prognosisCodeableConcept () {
		return this._prognosisCodeableConcept;
	}

	set prognosisCodeableConcept ( new_value ) {
		this._prognosisCodeableConcept = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// RiskAssessment expressing likely outcome.
	get prognosisReference () {
		return this._prognosisReference;
	}

	set prognosisReference ( new_value ) {
		this._prognosisReference = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Action taken as part of assessment procedure.
	get action () {
		return this._action;
	}

	set action ( new_value ) {
		this._action = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Commentary about the impression, typically recorded after the impression itself was made, though supplemental notes by the original author could also appear.
	get note () {
		return this._note;
	}

	set note ( new_value ) {
		this._note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
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
			investigation: this._investigation,
			protocol: this._protocol,
			summary: this._summary,
			finding: this._finding,
			prognosisCodeableConcept: this._prognosisCodeableConcept,
			prognosisReference: this._prognosisReference,
			action: this._action,
			note: this._note
		});
	}

}

module.exports = ClinicalImpression;
