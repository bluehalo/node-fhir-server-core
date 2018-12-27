const BackboneElement = require('./BackboneElement');

class MeasureGroup extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MeasureGroup';
		Object.assign(this, opt);
	}

	// This is a MeasureGroup resource
	static get __resourceType() {
		return 'MeasureGroup';
	}

	// A unique identifier for the group. This identifier will used to report data for the group in the measure report.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// Optional name or short description of this group.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// The human readable description of this population group.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// A population criteria for the measure.
	get population() {
		return this.__population;
	}

	set population(new_value) {
		const MeasureGroupPopulation = require('./MeasureGroupPopulation');
		this.__population = Array.isArray(new_value)
			? new_value.map(val => new MeasureGroupPopulation(val))
			: [new MeasureGroupPopulation(new_value)];
	}

	// The stratifier criteria for the measure report, specified as either the name of a valid CQL expression defined within a referenced library, or a valid FHIR Resource Path.
	get stratifier() {
		return this.__stratifier;
	}

	set stratifier(new_value) {
		const MeasureGroupStratifier = require('./MeasureGroupStratifier');
		this.__stratifier = Array.isArray(new_value)
			? new_value.map(val => new MeasureGroupStratifier(val))
			: [new MeasureGroupStratifier(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			identifier: this.__identifier && this.__identifier.toJSON(),
			name: this.__name,
			description: this.__description,
			population: this.__population && this.__population.map(v => v.toJSON()),
			stratifier: this.__stratifier && this.__stratifier.map(v => v.toJSON()),
		});
	}
}

module.exports = MeasureGroup;
