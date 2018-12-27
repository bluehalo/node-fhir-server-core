const BackboneElement = require('./BackboneElement');

class EncounterHospitalization extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'EncounterHospitalization';
		Object.assign(this, opt);
	}

	// This is a EncounterHospitalization resource
	static get __resourceType() {
		return 'EncounterHospitalization';
	}

	// Pre-admission identifier.
	get preAdmissionIdentifier() {
		return this.__preAdmissionIdentifier;
	}

	set preAdmissionIdentifier(new_value) {
		const Identifier = require('./Identifier');
		this.__preAdmissionIdentifier = new Identifier(new_value);
	}

	// The location from which the patient came before admission.
	get origin() {
		return this.__origin;
	}

	set origin(new_value) {
		const Reference = require('./Reference');
		this.__origin = new Reference(new_value);
	}

	// From where patient was admitted (physician referral, transfer).
	get admitSource() {
		return this.__admitSource;
	}

	set admitSource(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__admitSource = new CodeableConcept(new_value);
	}

	// The admitting diagnosis field is used to record the diagnosis codes as reported by admitting practitioner. This could be different or in addition to the conditions reported as reason-condition(s) for the encounter.
	get admittingDiagnosis() {
		return this.__admittingDiagnosis;
	}

	set admittingDiagnosis(new_value) {
		const Reference = require('./Reference');
		this.__admittingDiagnosis = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// Whether this hospitalization is a readmission and why if known.
	get reAdmission() {
		return this.__reAdmission;
	}

	set reAdmission(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reAdmission = new CodeableConcept(new_value);
	}

	// Diet preferences reported by the patient.
	get dietPreference() {
		return this.__dietPreference;
	}

	set dietPreference(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__dietPreference = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Special courtesies (VIP, board member).
	get specialCourtesy() {
		return this.__specialCourtesy;
	}

	set specialCourtesy(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__specialCourtesy = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Wheelchair, translator, stretcher, etc.
	get specialArrangement() {
		return this.__specialArrangement;
	}

	set specialArrangement(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__specialArrangement = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Location to which the patient is discharged.
	get destination() {
		return this.__destination;
	}

	set destination(new_value) {
		const Reference = require('./Reference');
		this.__destination = new Reference(new_value);
	}

	// Category or kind of location after discharge.
	get dischargeDisposition() {
		return this.__dischargeDisposition;
	}

	set dischargeDisposition(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__dischargeDisposition = new CodeableConcept(new_value);
	}

	// The final diagnosis given a patient before release from the hospital after all testing, surgery, and workup are complete.
	get dischargeDiagnosis() {
		return this.__dischargeDiagnosis;
	}

	set dischargeDiagnosis(new_value) {
		const Reference = require('./Reference');
		this.__dischargeDiagnosis = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			preAdmissionIdentifier: this.__preAdmissionIdentifier && this.__preAdmissionIdentifier.toJSON(),
			origin: this.__origin && this.__origin.toJSON(),
			admitSource: this.__admitSource && this.__admitSource.toJSON(),
			admittingDiagnosis: this.__admittingDiagnosis && this.__admittingDiagnosis.map(v => v.toJSON()),
			reAdmission: this.__reAdmission && this.__reAdmission.toJSON(),
			dietPreference: this.__dietPreference && this.__dietPreference.map(v => v.toJSON()),
			specialCourtesy: this.__specialCourtesy && this.__specialCourtesy.map(v => v.toJSON()),
			specialArrangement: this.__specialArrangement && this.__specialArrangement.map(v => v.toJSON()),
			destination: this.__destination && this.__destination.toJSON(),
			dischargeDisposition: this.__dischargeDisposition && this.__dischargeDisposition.toJSON(),
			dischargeDiagnosis: this.__dischargeDiagnosis && this.__dischargeDiagnosis.map(v => v.toJSON()),
		});
	}
}

module.exports = EncounterHospitalization;
