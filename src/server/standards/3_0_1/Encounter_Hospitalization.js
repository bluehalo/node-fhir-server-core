const BackboneElement = require('./BackboneElement');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');

class Encounter_Hospitalization extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Encounter_Hospitalization';
	}

	// Pre-admission identifier.
	get preAdmissionIdentifier () {
		return this._preAdmissionIdentifier;
	}

	set preAdmissionIdentifier ( new_value ) {
		this._preAdmissionIdentifier = new Identifier(new_value);
	}

	// The location from which the patient came before admission.
	get origin () {
		return this._origin;
	}

	set origin ( new_value ) {
		this._origin = new Reference(new_value);
	}

	// From where patient was admitted (physician referral, transfer).
	get admitSource () {
		return this._admitSource;
	}

	set admitSource ( new_value ) {
		this._admitSource = new CodeableConcept(new_value);
	}

	// Whether this hospitalization is a readmission and why if known.
	get reAdmission () {
		return this._reAdmission;
	}

	set reAdmission ( new_value ) {
		this._reAdmission = new CodeableConcept(new_value);
	}

	// Diet preferences reported by the patient.
	get dietPreference () {
		return this._dietPreference;
	}

	set dietPreference ( new_value ) {
		this._dietPreference = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Special courtesies (VIP, board member).
	get specialCourtesy () {
		return this._specialCourtesy;
	}

	set specialCourtesy ( new_value ) {
		this._specialCourtesy = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Any special requests that have been made for this hospitalization encounter, such as the provision of specific equipment or other things.
	get specialArrangement () {
		return this._specialArrangement;
	}

	set specialArrangement ( new_value ) {
		this._specialArrangement = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Location to which the patient is discharged.
	get destination () {
		return this._destination;
	}

	set destination ( new_value ) {
		this._destination = new Reference(new_value);
	}

	// Category or kind of location after discharge.
	get dischargeDisposition () {
		return this._dischargeDisposition;
	}

	set dischargeDisposition ( new_value ) {
		this._dischargeDisposition = new CodeableConcept(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			preAdmissionIdentifier: this._preAdmissionIdentifier && this._preAdmissionIdentifier.toJSON(),
			origin: this._origin && this._origin.toJSON(),
			admitSource: this._admitSource && this._admitSource.toJSON(),
			reAdmission: this._reAdmission && this._reAdmission.toJSON(),
			dietPreference: this._dietPreference && this._dietPreference.map(v => v.toJSON()),
			specialCourtesy: this._specialCourtesy && this._specialCourtesy.map(v => v.toJSON()),
			specialArrangement: this._specialArrangement && this._specialArrangement.map(v => v.toJSON()),
			destination: this._destination && this._destination.toJSON(),
			dischargeDisposition: this._dischargeDisposition && this._dischargeDisposition.toJSON()
		});
	}

}

module.exports = Encounter_Hospitalization;
