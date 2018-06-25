const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');

class Claim_Diagnosis extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Claim_Diagnosis';
	}

	// Sequence of diagnosis which serves to provide a link.
	get sequence () {
		return this._sequence;
	}

	set sequence ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field sequence`);
		}
		this._sequence = new_value;
	}

	// The diagnosis.
	get diagnosisCodeableConcept () {
		return this._diagnosisCodeableConcept;
	}

	set diagnosisCodeableConcept ( new_value ) {
		this._diagnosisCodeableConcept = new CodeableConcept(new_value);
	}

	// The diagnosis.
	get diagnosisReference () {
		return this._diagnosisReference;
	}

	set diagnosisReference ( new_value ) {
		this._diagnosisReference = new Reference(new_value);
	}

	// The type of the Diagnosis, for example: admitting, primary, secondary, discharge.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The package billing code, for example DRG, based on the assigned grouping code system.
	get packageCode () {
		return this._packageCode;
	}

	set packageCode ( new_value ) {
		this._packageCode = new CodeableConcept(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			sequence: this._sequence,
			diagnosisCodeableConcept: this._diagnosisCodeableConcept,
			diagnosisReference: this._diagnosisReference,
			type: this._type,
			packageCode: this._packageCode
		});
	}

}

module.exports = Claim_Diagnosis;
