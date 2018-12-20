const DomainResource = require('./DomainResource');

class ImmunizationRecommendation extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ImmunizationRecommendation';
		Object.assign(this, opt);
	}

	// This is a ImmunizationRecommendation resource
	static get __resourceType() {
		return 'ImmunizationRecommendation';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__ImmunizationRecommendation = new_value;
	}

	// A unique identifier assigned to this particular recommendation record.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// The patient the recommendations are for.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// Vaccine administration recommendations.
	get recommendation() {
		return this.__recommendation;
	}

	set recommendation(new_value) {
		const ImmunizationRecommendationRecommendation = require('./ImmunizationRecommendationRecommendation');
		this.__recommendation = Array.isArray(new_value)
			? new_value.map(val => new ImmunizationRecommendationRecommendation(val))
			: [new ImmunizationRecommendationRecommendation(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			patient: this.__patient && this.__patient.toJSON(),
			recommendation: this.__recommendation && this.__recommendation.map(v => v.toJSON()),
		});
	}
}

module.exports = ImmunizationRecommendation;
