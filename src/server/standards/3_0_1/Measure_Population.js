const BackboneElement = require('./BackboneElement');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');

class Measure_Population extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Measure_Population';
	}

	// A unique identifier for the population criteria. This identifier is used to report data against this criteria within the measure report.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// The type of population criteria.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new CodeableConcept(new_value);
	}

	// Optional name or short description of this population.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// The human readable description of this population criteria.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// The name of a valid referenced CQL expression (may be namespaced) that defines this population criteria.
	get criteria () {
		return this._criteria;
	}

	set criteria ( new_value ) {
		this._criteria = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			identifier: this._identifier && this._identifier.toJSON(),
			code: this._code && this._code.toJSON(),
			name: this._name,
			description: this._description,
			criteria: this._criteria
		});
	}

}

module.exports = Measure_Population;
