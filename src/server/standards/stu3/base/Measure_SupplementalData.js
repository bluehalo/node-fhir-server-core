const BackboneElement = require('./BackboneElement');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');

class Measure_SupplementalData extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Measure_SupplementalData';
	}

	// An identifier for the supplemental data.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// An indicator of the intended usage for the supplemental data element. Supplemental data indicates the data is additional information requested to augment the measure information. Risk adjustment factor indicates the data is additional information used to calculate risk adjustment factors when applying a risk model to the measure calculation.
	get usage () {
		return this._usage;
	}

	set usage ( new_value ) {
		this._usage = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The criteria for the supplemental data. This must be the name of a valid expression defined within a referenced library, and defines the data to be returned for this element.
	get criteria () {
		return this._criteria;
	}

	set criteria ( new_value ) {
		this._criteria = new_value;
	}

	// The supplemental data to be supplied as part of the measure response, specified as a valid FHIR Resource Path.
	get path () {
		return this._path;
	}

	set path ( new_value ) {
		this._path = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			identifier: this._identifier,
			usage: this._usage,
			criteria: this._criteria,
			path: this._path
		});
	}

}

module.exports = Measure_SupplementalData;
