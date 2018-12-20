const BackboneElement = require('./BackboneElement');
const UnsignedIntScalar = require('./scalars/UnsignedInt.scalar');

class ExplanationOfBenefitBenefitBalanceFinancial extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ExplanationOfBenefitBenefitBalanceFinancial';
		Object.assign(this, opt);
	}

	// This is a ExplanationOfBenefitBenefitBalanceFinancial resource
	static get __resourceType() {
		return 'ExplanationOfBenefitBenefitBalanceFinancial';
	}

	// Deductable, visits, benefit amount.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// Benefits allowed.
	get allowedUnsignedInt() {
		return this.__allowedUnsignedInt;
	}

	set allowedUnsignedInt(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UnsignedIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field allowedUnsignedInt`);
		}
		this.__allowedUnsignedInt = new_value;
	}

	// Benefits allowed.
	get allowedString() {
		return this.__allowedString;
	}

	set allowedString(new_value) {
		this.__allowedString = new_value;
	}

	// Benefits allowed.
	get allowedMoney() {
		return this.__allowedMoney;
	}

	set allowedMoney(new_value) {
		const Money = require('./Money');
		this.__allowedMoney = new Money(new_value);
	}

	// Benefits used.
	get usedUnsignedInt() {
		return this.__usedUnsignedInt;
	}

	set usedUnsignedInt(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UnsignedIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field usedUnsignedInt`);
		}
		this.__usedUnsignedInt = new_value;
	}

	// Benefits used.
	get usedMoney() {
		return this.__usedMoney;
	}

	set usedMoney(new_value) {
		const Money = require('./Money');
		this.__usedMoney = new Money(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type && this.__type.toJSON(),
			allowedUnsignedInt: this.__allowedUnsignedInt,
			allowedString: this.__allowedString,
			allowedMoney: this.__allowedMoney && this.__allowedMoney.toJSON(),
			usedUnsignedInt: this.__usedUnsignedInt,
			usedMoney: this.__usedMoney && this.__usedMoney.toJSON(),
		});
	}
}

module.exports = ExplanationOfBenefitBenefitBalanceFinancial;
