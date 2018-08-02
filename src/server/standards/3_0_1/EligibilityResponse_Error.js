const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');

class EligibilityResponse_Error extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'EligibilityResponse_Error';
	}

	// An error code,from a specified code system, which details why the eligibility check could not be performed.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new CodeableConcept(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			code: this._code && this._code.toJSON()
		});
	}

}

module.exports = EligibilityResponse_Error;
