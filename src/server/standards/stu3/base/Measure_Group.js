const BackboneElement = require('./BackboneElement');
const Identifier = require('./Identifier');
const Measure_Population = require('./Measure_Population');
const Measure_Stratifier = require('./Measure_Stratifier');

class Measure_Group extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Measure_Group';
	}

	// A unique identifier for the group. This identifier will used to report data for the group in the measure report.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// Optional name or short description of this group.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// The human readable description of this population group.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// A population criteria for the measure.
	get population () {
		return this._population;
	}

	set population ( new_value ) {
		this._population = Array.isArray(new_value) ? new_value.map(val => new Measure_Population(val)) : [new Measure_Population(new_value)];
	}

	// The stratifier criteria for the measure report, specified as either the name of a valid CQL expression defined within a referenced library, or a valid FHIR Resource Path.
	get stratifier () {
		return this._stratifier;
	}

	set stratifier ( new_value ) {
		this._stratifier = Array.isArray(new_value) ? new_value.map(val => new Measure_Stratifier(val)) : [new Measure_Stratifier(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			identifier: this._identifier,
			name: this._name,
			description: this._description,
			population: this._population,
			stratifier: this._stratifier
		});
	}

}

module.exports = Measure_Group;
