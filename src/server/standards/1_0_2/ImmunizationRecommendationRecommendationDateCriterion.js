const BackboneElement = require('./BackboneElement');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class ImmunizationRecommendationRecommendationDateCriterion extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ImmunizationRecommendationRecommendationDateCriterion';
		Object.assign(this, opt);
	}

	// This is a ImmunizationRecommendationRecommendationDateCriterion resource
	static get __resourceType() {
		return 'ImmunizationRecommendationRecommendationDateCriterion';
	}

	// Date classification of recommendation.  For example, earliest date to give, latest date to give, etc.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// The date whose meaning is specified by dateCriterion.code.
	get value() {
		return this.__value;
	}

	set value(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field value`);
		}
		this.__value = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code && this.__code.toJSON(),
			value: this.__value,
		});
	}
}

module.exports = ImmunizationRecommendationRecommendationDateCriterion;
