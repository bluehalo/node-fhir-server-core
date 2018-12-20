const BackboneElement = require('./BackboneElement');

class MeasureGroupPopulation extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MeasureGroupPopulation';
		Object.assign(this, opt);
	}

	// This is a MeasureGroupPopulation resource
	static get __resourceType() {
		return 'MeasureGroupPopulation';
	}

	// A unique identifier for the population criteria. This identifier is used to report data against this criteria within the measure report.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// The type of population criteria.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// Optional name or short description of this population.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// The human readable description of this population criteria.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// The name of a valid referenced CQL expression (may be namespaced) that defines this population criteria.
	get criteria() {
		return this.__criteria;
	}

	set criteria(new_value) {
		this.__criteria = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			identifier: this.__identifier && this.__identifier.toJSON(),
			code: this.__code && this.__code.toJSON(),
			name: this.__name,
			description: this.__description,
			criteria: this.__criteria,
		});
	}
}

module.exports = MeasureGroupPopulation;
