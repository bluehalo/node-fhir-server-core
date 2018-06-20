const BackboneElement = require('./BackboneElement');
const MeasureReport_Population1 = require('./MeasureReport_Population1');

class MeasureReport_Stratum extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'MeasureReport_Stratum';
	}

	// The value for this stratum, expressed as a string. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.
	get value () {
		return this._value;
	}

	set value ( new_value ) {
		this._value = new_value;
	}

	// The populations that make up the stratum, one for each type of population appropriate to the measure.
	get population () {
		return this._population;
	}

	set population ( new_value ) {
		this._population = Array.isArray(new_value) ? new_value.map(val => new MeasureReport_Population1(val)) : [new MeasureReport_Population1(new_value)];
	}

	// The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.
	get measureScore () {
		return this._measureScore;
	}

	set measureScore ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field measureScore`);
		}
		this._measureScore = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			value: this._value,
			population: this._population,
			measureScore: this._measureScore
		});
	}

}

module.exports = MeasureReport_Stratum;
