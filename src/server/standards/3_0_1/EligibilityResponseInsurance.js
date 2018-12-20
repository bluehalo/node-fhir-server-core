const BackboneElement = require('./BackboneElement');

class EligibilityResponseInsurance extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'EligibilityResponseInsurance';
		Object.assign(this, opt);
	}

	// This is a EligibilityResponseInsurance resource
	static get __resourceType() {
		return 'EligibilityResponseInsurance';
	}

	// A suite of updated or additional Coverages from the Insurer.
	get coverage() {
		return this.__coverage;
	}

	set coverage(new_value) {
		const Reference = require('./Reference');
		this.__coverage = new Reference(new_value);
	}

	// The contract resource which may provide more detailed information.
	get contract() {
		return this.__contract;
	}

	set contract(new_value) {
		const Reference = require('./Reference');
		this.__contract = new Reference(new_value);
	}

	// Benefits and optionally current balances by Category.
	get benefitBalance() {
		return this.__benefitBalance;
	}

	set benefitBalance(new_value) {
		const EligibilityResponseInsuranceBenefitBalance = require('./EligibilityResponseInsuranceBenefitBalance');
		this.__benefitBalance = Array.isArray(new_value)
			? new_value.map(val => new EligibilityResponseInsuranceBenefitBalance(val))
			: [new EligibilityResponseInsuranceBenefitBalance(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			coverage: this.__coverage && this.__coverage.toJSON(),
			contract: this.__contract && this.__contract.toJSON(),
			benefitBalance: this.__benefitBalance && this.__benefitBalance.map(v => v.toJSON()),
		});
	}
}

module.exports = EligibilityResponseInsurance;
