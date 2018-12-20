const BackboneElement = require('./BackboneElement');

class MeasureReportGroupStratifierStratum extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MeasureReportGroupStratifierStratum';
		Object.assign(this, opt);
	}

	// This is a MeasureReportGroupStratifierStratum resource
	static get __resourceType() {
		return 'MeasureReportGroupStratifierStratum';
	}

	// The value for this stratum, expressed as a string. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.
	get value() {
		return this.__value;
	}

	set value(new_value) {
		this.__value = new_value;
	}

	// The populations that make up the stratum, one for each type of population appropriate to the measure.
	get population() {
		return this.__population;
	}

	set population(new_value) {
		const MeasureReportGroupStratifierStratumPopulation = require('./MeasureReportGroupStratifierStratumPopulation');
		this.__population = Array.isArray(new_value)
			? new_value.map(val => new MeasureReportGroupStratifierStratumPopulation(val))
			: [new MeasureReportGroupStratifierStratumPopulation(new_value)];
	}

	// The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.
	get measureScore() {
		return this.__measureScore;
	}

	set measureScore(new_value) {
		this.__measureScore = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			value: this.__value,
			population: this.__population && this.__population.map(v => v.toJSON()),
			measureScore: this.__measureScore,
		});
	}
}

module.exports = MeasureReportGroupStratifierStratum;
