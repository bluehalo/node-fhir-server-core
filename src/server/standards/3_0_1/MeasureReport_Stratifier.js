const BackboneElement = require('./BackboneElement');
const Identifier = require('./Identifier');
const MeasureReport_Stratum = require('./MeasureReport_Stratum');

class MeasureReport_Stratifier extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'MeasureReport_Stratifier';
	}

	// The identifier of this stratifier, as defined in the measure definition.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
	get stratum () {
		return this._stratum;
	}

	set stratum ( new_value ) {
		this._stratum = Array.isArray(new_value) ? new_value.map(val => new MeasureReport_Stratum(val)) : [new MeasureReport_Stratum(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			identifier: this._identifier && this._identifier.toJSON(),
			stratum: this._stratum && this._stratum.map(v => v.toJSON())
		});
	}

}

module.exports = MeasureReport_Stratifier;
