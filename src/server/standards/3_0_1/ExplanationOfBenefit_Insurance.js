const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');

class ExplanationOfBenefit_Insurance extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ExplanationOfBenefit_Insurance';
	}

	// Reference to the program or plan identification, underwriter or payor.
	get coverage () {
		return this._coverage;
	}

	set coverage ( new_value ) {
		this._coverage = new Reference(new_value);
	}

	// A list of references from the Insurer to which these services pertain.
	get preAuthRef () {
		return this._preAuthRef;
	}

	set preAuthRef ( new_value ) {
		this._preAuthRef = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			coverage: this._coverage && this._coverage.toJSON(),
			preAuthRef: this._preAuthRef
		});
	}

}

module.exports = ExplanationOfBenefit_Insurance;
