const BackboneElement = require('./BackboneElement');

class MeasureReportGroup extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MeasureReportGroup';
		Object.assign(this, opt);
	}

	// This is a MeasureReportGroup resource
	static get __resourceType() {
		return 'MeasureReportGroup';
	}

	// The identifier of the population group as defined in the measure definition.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// The populations that make up the population group, one for each type of population appropriate for the measure.
	get population() {
		return this.__population;
	}

	set population(new_value) {
		const MeasureReportGroupPopulation = require('./MeasureReportGroupPopulation');
		this.__population = Array.isArray(new_value)
			? new_value.map(val => new MeasureReportGroupPopulation(val))
			: [new MeasureReportGroupPopulation(new_value)];
	}

	// The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.
	get measureScore() {
		return this.__measureScore;
	}

	set measureScore(new_value) {
		this.__measureScore = new_value;
	}

	// When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
	get stratifier() {
		return this.__stratifier;
	}

	set stratifier(new_value) {
		const MeasureReportGroupStratifier = require('./MeasureReportGroupStratifier');
		this.__stratifier = Array.isArray(new_value)
			? new_value.map(val => new MeasureReportGroupStratifier(val))
			: [new MeasureReportGroupStratifier(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			identifier: this.__identifier && this.__identifier.toJSON(),
			population: this.__population && this.__population.map(v => v.toJSON()),
			measureScore: this.__measureScore,
			stratifier: this.__stratifier && this.__stratifier.map(v => v.toJSON()),
		});
	}
}

module.exports = MeasureReportGroup;
