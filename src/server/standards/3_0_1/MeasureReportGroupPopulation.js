const BackboneElement = require('./BackboneElement');

class MeasureReportGroupPopulation extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MeasureReportGroupPopulation';
		Object.assign(this, opt);
	}

	// This is a MeasureReportGroupPopulation resource
	static get __resourceType() {
		return 'MeasureReportGroupPopulation';
	}

	// The identifier of the population being reported, as defined by the population element of the measure.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// The type of the population.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// The number of members of the population.
	get count() {
		return this.__count;
	}

	set count(new_value) {
		this.__count = new_value;
	}

	// This element refers to a List of patient level MeasureReport resources, one for each patient in this population.
	get patients() {
		return this.__patients;
	}

	set patients(new_value) {
		const Reference = require('./Reference');
		this.__patients = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			identifier: this.__identifier && this.__identifier.toJSON(),
			code: this.__code && this.__code.toJSON(),
			count: this.__count,
			patients: this.__patients && this.__patients.toJSON(),
		});
	}
}

module.exports = MeasureReportGroupPopulation;
