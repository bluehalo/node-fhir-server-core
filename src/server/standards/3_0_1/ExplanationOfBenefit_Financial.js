const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Money = require('./Money');

class ExplanationOfBenefit_Financial extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ExplanationOfBenefit_Financial';
	}

	// Deductable, visits, benefit amount.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// Benefits allowed.
	get allowedUnsignedInt () {
		return this._allowedUnsignedInt;
	}

	set allowedUnsignedInt ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[0]|([1-9][0-9]*)/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field allowedUnsignedInt`);
		}
		this._allowedUnsignedInt = new_value;
	}

	// Benefits allowed.
	get allowedString () {
		return this._allowedString;
	}

	set allowedString ( new_value ) {
		this._allowedString = new_value;
	}

	// Benefits allowed.
	get allowedMoney () {
		return this._allowedMoney;
	}

	set allowedMoney ( new_value ) {
		this._allowedMoney = new Money(new_value);
	}

	// Benefits used.
	get usedUnsignedInt () {
		return this._usedUnsignedInt;
	}

	set usedUnsignedInt ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[0]|([1-9][0-9]*)/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field usedUnsignedInt`);
		}
		this._usedUnsignedInt = new_value;
	}

	// Benefits used.
	get usedMoney () {
		return this._usedMoney;
	}

	set usedMoney ( new_value ) {
		this._usedMoney = new Money(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this._type && this._type.toJSON(),
			allowedUnsignedInt: this._allowedUnsignedInt,
			allowedString: this._allowedString,
			allowedMoney: this._allowedMoney && this._allowedMoney.toJSON(),
			usedUnsignedInt: this._usedUnsignedInt,
			usedMoney: this._usedMoney && this._usedMoney.toJSON()
		});
	}

}

module.exports = ExplanationOfBenefit_Financial;
