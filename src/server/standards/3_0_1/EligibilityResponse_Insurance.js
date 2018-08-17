const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');
const EligibilityResponse_BenefitBalance = require('./EligibilityResponse_BenefitBalance');

class EligibilityResponse_Insurance extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'EligibilityResponse_Insurance';
	}

	// A suite of updated or additional Coverages from the Insurer.
	get coverage () {
		return this._coverage;
	}

	set coverage ( new_value ) {
		this._coverage = new Reference(new_value);
	}

	// The contract resource which may provide more detailed information.
	get contract () {
		return this._contract;
	}

	set contract ( new_value ) {
		this._contract = new Reference(new_value);
	}

	// Benefits and optionally current balances by Category.
	get benefitBalance () {
		return this._benefitBalance;
	}

	set benefitBalance ( new_value ) {
		this._benefitBalance = Array.isArray(new_value) ? new_value.map(val => new EligibilityResponse_BenefitBalance(val)) : [new EligibilityResponse_BenefitBalance(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			coverage: this._coverage && this._coverage.toJSON(),
			contract: this._contract && this._contract.toJSON(),
			benefitBalance: this._benefitBalance && this._benefitBalance.map(v => v.toJSON())
		});
	}

}

module.exports = EligibilityResponse_Insurance;
