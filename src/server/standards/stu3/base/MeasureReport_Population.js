const BackboneElement = require('./BackboneElement');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');

class MeasureReport_Population extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'MeasureReport_Population';
	}

	// The identifier of the population being reported, as defined by the population element of the measure.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// The type of the population.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new CodeableConcept(new_value);
	}

	// The number of members of the population.
	get count () {
		return this._count;
	}

	set count ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field count`);
		}
		this._count = new_value;
	}

	// This element refers to a List of patient level MeasureReport resources, one for each patient in this population.
	get patients () {
		return this._patients;
	}

	set patients ( new_value ) {
		this._patients = new Reference(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			identifier: this._identifier,
			code: this._code,
			count: this._count,
			patients: this._patients
		});
	}

}

module.exports = MeasureReport_Population;
