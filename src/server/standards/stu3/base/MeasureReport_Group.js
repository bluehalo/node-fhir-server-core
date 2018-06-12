const BackboneElement = require('./BackboneElement');
const Identifier = require('./Identifier');
const MeasureReport_Population = require('./MeasureReport_Population');
const MeasureReport_Stratifier = require('./MeasureReport_Stratifier');

class MeasureReport_Group extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'MeasureReport_Group';
	}

	// The identifier of the population group as defined in the measure definition.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// The populations that make up the population group, one for each type of population appropriate for the measure.
	get population () {
		return this._population;
	}

	set population ( new_value ) {
		this._population = Array.isArray(new_value) ? new_value.map(val => new MeasureReport_Population(val)) : [new MeasureReport_Population(new_value)];
	}

	// The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.
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

	// When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
	get stratifier () {
		return this._stratifier;
	}

	set stratifier ( new_value ) {
		this._stratifier = Array.isArray(new_value) ? new_value.map(val => new MeasureReport_Stratifier(val)) : [new MeasureReport_Stratifier(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			identifier: this._identifier,
			population: this._population,
			measureScore: this._measureScore,
			stratifier: this._stratifier
		});
	}

}

module.exports = MeasureReport_Group;
