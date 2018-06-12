const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class ImmunizationRecommendation_Protocol extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ImmunizationRecommendation_Protocol';
	}

	// Indicates the nominal position in a series of the next dose.  This is the recommended dose number as per a specified protocol.
	get doseSequence () {
		return this._doseSequence;
	}

	set doseSequence ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field doseSequence`);
		}
		this._doseSequence = new_value;
	}

	// Contains the description about the protocol under which the vaccine was administered.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// Indicates the authority who published the protocol.  For example, ACIP.
	get authority () {
		return this._authority;
	}

	set authority ( new_value ) {
		this._authority = new Reference(new_value);
	}

	// One possible path to achieve presumed immunity against a disease - within the context of an authority.
	get series () {
		return this._series;
	}

	set series ( new_value ) {
		this._series = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			doseSequence: this._doseSequence,
			description: this._description,
			authority: this._authority,
			series: this._series
		});
	}

}

module.exports = ImmunizationRecommendation_Protocol;
