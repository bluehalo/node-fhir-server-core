const BackboneElement = require('./BackboneElement');

class ExplanationOfBenefitInsurance extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ExplanationOfBenefitInsurance';
		Object.assign(this, opt);
	}

	// This is a ExplanationOfBenefitInsurance resource
	static get __resourceType() {
		return 'ExplanationOfBenefitInsurance';
	}

	// Reference to the program or plan identification, underwriter or payor.
	get coverage() {
		return this.__coverage;
	}

	set coverage(new_value) {
		const Reference = require('./Reference');
		this.__coverage = new Reference(new_value);
	}

	// A list of references from the Insurer to which these services pertain.
	get preAuthRef() {
		return this.__preAuthRef;
	}

	set preAuthRef(new_value) {
		this.__preAuthRef = Array.isArray(new_value) ? new_value : [new_value];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			coverage: this.__coverage && this.__coverage.toJSON(),
			preAuthRef: this.__preAuthRef,
		});
	}
}

module.exports = ExplanationOfBenefitInsurance;
