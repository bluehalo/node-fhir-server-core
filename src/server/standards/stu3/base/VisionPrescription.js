const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const VisionPrescription_Dispense = require('./VisionPrescription_Dispense');

class VisionPrescription extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'VisionPrescription';
	}

	// This is a VisionPrescription resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['VisionPrescription'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Business identifier which may be used by other parties to reference or identify the prescription.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// The status of the resource instance.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field status`);
		}
		this._status = new_value;
	}

	// A link to a resource representing the person to whom the vision products will be supplied.
	get patient () {
		return this._patient;
	}

	set patient ( new_value ) {
		this._patient = new Reference(new_value);
	}

	// A link to a resource that identifies the particular occurrence of contact between patient and health care provider.
	get encounter () {
		return this._encounter;
	}

	set encounter ( new_value ) {
		this._encounter = new Reference(new_value);
	}

	// The date (and perhaps time) when the prescription was written.
	get dateWritten () {
		return this._dateWritten;
	}

	set dateWritten ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field dateWritten`);
		}
		this._dateWritten = new_value;
	}

	// The healthcare professional responsible for authorizing the prescription.
	get prescriber () {
		return this._prescriber;
	}

	set prescriber ( new_value ) {
		this._prescriber = new Reference(new_value);
	}

	// Can be the reason or the indication for writing the prescription.
	get reasonCodeableConcept () {
		return this._reasonCodeableConcept;
	}

	set reasonCodeableConcept ( new_value ) {
		this._reasonCodeableConcept = new CodeableConcept(new_value);
	}

	// Can be the reason or the indication for writing the prescription.
	get reasonReference () {
		return this._reasonReference;
	}

	set reasonReference ( new_value ) {
		this._reasonReference = new Reference(new_value);
	}

	// Deals with details of the dispense part of the supply specification.
	get dispense () {
		return this._dispense;
	}

	set dispense ( new_value ) {
		this._dispense = Array.isArray(new_value) ? new_value.map(val => new VisionPrescription_Dispense(val)) : [new VisionPrescription_Dispense(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier,
			status: this._status,
			patient: this._patient,
			encounter: this._encounter,
			dateWritten: this._dateWritten,
			prescriber: this._prescriber,
			reasonCodeableConcept: this._reasonCodeableConcept,
			reasonReference: this._reasonReference,
			dispense: this._dispense
		});
	}

}

module.exports = VisionPrescription;
