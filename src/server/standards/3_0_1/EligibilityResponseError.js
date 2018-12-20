const BackboneElement = require('./BackboneElement');

class EligibilityResponseError extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'EligibilityResponseError';
		Object.assign(this, opt);
	}

	// This is a EligibilityResponseError resource
	static get __resourceType() {
		return 'EligibilityResponseError';
	}

	// An error code,from a specified code system, which details why the eligibility check could not be performed.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code && this.__code.toJSON(),
		});
	}
}

module.exports = EligibilityResponseError;
