const BackboneElement = require('./BackboneElement');

class ImmunizationRecommendationRecommendationProtocol extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ImmunizationRecommendationRecommendationProtocol';
		Object.assign(this, opt);
	}

	// This is a ImmunizationRecommendationRecommendationProtocol resource
	static get __resourceType() {
		return 'ImmunizationRecommendationRecommendationProtocol';
	}

	// Indicates the nominal position in a series of the next dose.  This is the recommended dose number as per a specified protocol.
	get doseSequence() {
		return this.__doseSequence;
	}

	set doseSequence(new_value) {
		this.__doseSequence = new_value;
	}

	// Contains the description about the protocol under which the vaccine was administered.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Indicates the authority who published the protocol.  For example, ACIP.
	get authority() {
		return this.__authority;
	}

	set authority(new_value) {
		const Reference = require('./Reference');
		this.__authority = new Reference(new_value);
	}

	// One possible path to achieve presumed immunity against a disease - within the context of an authority.
	get series() {
		return this.__series;
	}

	set series(new_value) {
		this.__series = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			doseSequence: this.__doseSequence,
			description: this.__description,
			authority: this.__authority && this.__authority.toJSON(),
			series: this.__series,
		});
	}
}

module.exports = ImmunizationRecommendationRecommendationProtocol;
