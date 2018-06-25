const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const ImmunizationRecommendation_Recommendation = require('./ImmunizationRecommendation_Recommendation');

class ImmunizationRecommendation extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ImmunizationRecommendation';
	}

	// This is a ImmunizationRecommendation resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['ImmunizationRecommendation'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// A unique identifier assigned to this particular recommendation record.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// The patient the recommendations are for.
	get patient () {
		return this._patient;
	}

	set patient ( new_value ) {
		this._patient = new Reference(new_value);
	}

	// Vaccine administration recommendations.
	get recommendation () {
		return this._recommendation;
	}

	set recommendation ( new_value ) {
		this._recommendation = Array.isArray(new_value) ? new_value.map(val => new ImmunizationRecommendation_Recommendation(val)) : [new ImmunizationRecommendation_Recommendation(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier,
			patient: this._patient,
			recommendation: this._recommendation
		});
	}

}

module.exports = ImmunizationRecommendation;
