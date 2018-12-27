const BackboneElement = require('./BackboneElement');

class EligibilityResponseInsuranceBenefitBalance extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'EligibilityResponseInsuranceBenefitBalance';
		Object.assign(this, opt);
	}

	// This is a EligibilityResponseInsuranceBenefitBalance resource
	static get __resourceType() {
		return 'EligibilityResponseInsuranceBenefitBalance';
	}

	// Dental, Vision, Medical, Pharmacy, Rehab etc.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__category = new CodeableConcept(new_value);
	}

	// Dental: basic, major, ortho; Vision exam, glasses, contacts; etc.
	get subCategory() {
		return this.__subCategory;
	}

	set subCategory(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__subCategory = new CodeableConcept(new_value);
	}

	// True if the indicated class of service is excluded from the plan, missing or False indicated the service is included in the coverage.
	get excluded() {
		return this.__excluded;
	}

	set excluded(new_value) {
		this.__excluded = new_value;
	}

	// A short name or tag for the benefit, for example MED01, or DENT2.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// A richer description of the benefit, for example \'DENT2 covers 100% of basic, 50% of major but exclused Ortho, Implants and Costmetic services\'.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Network designation.
	get network() {
		return this.__network;
	}

	set network(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__network = new CodeableConcept(new_value);
	}

	// Unit designation: individual or family.
	get unit() {
		return this.__unit;
	}

	set unit(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__unit = new CodeableConcept(new_value);
	}

	// The term or period of the values such as \'maximum lifetime benefit\' or \'maximum annual vistis\'.
	get term() {
		return this.__term;
	}

	set term(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__term = new CodeableConcept(new_value);
	}

	// Benefits Used to date.
	get financial() {
		return this.__financial;
	}

	set financial(new_value) {
		const EligibilityResponseInsuranceBenefitBalanceFinancial = require('./EligibilityResponseInsuranceBenefitBalanceFinancial');
		this.__financial = Array.isArray(new_value)
			? new_value.map(val => new EligibilityResponseInsuranceBenefitBalanceFinancial(val))
			: [new EligibilityResponseInsuranceBenefitBalanceFinancial(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			category: this.__category && this.__category.toJSON(),
			subCategory: this.__subCategory && this.__subCategory.toJSON(),
			excluded: this.__excluded,
			name: this.__name,
			description: this.__description,
			network: this.__network && this.__network.toJSON(),
			unit: this.__unit && this.__unit.toJSON(),
			term: this.__term && this.__term.toJSON(),
			financial: this.__financial && this.__financial.map(v => v.toJSON()),
		});
	}
}

module.exports = EligibilityResponseInsuranceBenefitBalance;
