const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');

class ImmunizationRecommendation_DateCriterion extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ImmunizationRecommendation_DateCriterion';
	}

	// Date classification of recommendation.  For example, earliest date to give, latest date to give, etc.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new CodeableConcept(new_value);
	}

	// The date whose meaning is specified by dateCriterion.code.
	get value () {
		return this._value;
	}

	set value ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field value`);
		}
		this._value = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			code: this._code && this._code.toJSON(),
			value: this._value
		});
	}

}

module.exports = ImmunizationRecommendation_DateCriterion;
