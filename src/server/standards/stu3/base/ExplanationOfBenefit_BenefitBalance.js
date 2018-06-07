const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const ExplanationOfBenefit_Financial = require('./ExplanationOfBenefit_Financial');

class ExplanationOfBenefit_BenefitBalance extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ExplanationOfBenefit_BenefitBalance';
	}

	// Dental, Vision, Medical, Pharmacy, Rehab etc.
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		this._category = new CodeableConcept(new_value);
	}

	// Dental: basic, major, ortho; Vision exam, glasses, contacts; etc.
	get subCategory () {
		return this._subCategory;
	}

	set subCategory ( new_value ) {
		this._subCategory = new CodeableConcept(new_value);
	}

	// True if the indicated class of service is excluded from the plan, missing or False indicated the service is included in the coverage.
	get excluded () {
		return this._excluded;
	}

	set excluded ( new_value ) {
		this._excluded = new_value;
	}

	// A short name or tag for the benefit, for example MED01, or DENT2.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// A richer description of the benefit, for example 'DENT2 covers 100% of basic, 50% of major but exclused Ortho, Implants and Costmetic services'.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// Network designation.
	get network () {
		return this._network;
	}

	set network ( new_value ) {
		this._network = new CodeableConcept(new_value);
	}

	// Unit designation: individual or family.
	get unit () {
		return this._unit;
	}

	set unit ( new_value ) {
		this._unit = new CodeableConcept(new_value);
	}

	// The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual vistis'.
	get term () {
		return this._term;
	}

	set term ( new_value ) {
		this._term = new CodeableConcept(new_value);
	}

	// Benefits Used to date.
	get financial () {
		return this._financial;
	}

	set financial ( new_value ) {
		this._financial = Array.isArray(new_value) ? new_value.map(val => new ExplanationOfBenefit_Financial(val)) : [new ExplanationOfBenefit_Financial(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			category: this._category,
			subCategory: this._subCategory,
			excluded: this._excluded,
			name: this._name,
			description: this._description,
			network: this._network,
			unit: this._unit,
			term: this._term,
			financial: this._financial
		});
	}

}

module.exports = ExplanationOfBenefit_BenefitBalance;
