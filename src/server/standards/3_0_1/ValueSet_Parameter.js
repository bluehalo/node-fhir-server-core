const BackboneElement = require('./BackboneElement');

class ValueSet_Parameter extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ValueSet_Parameter';
	}

	// The name of the parameter.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// The value of the parameter.
	get valueString () {
		return this._valueString;
	}

	set valueString ( new_value ) {
		this._valueString = new_value;
	}

	// The value of the parameter.
	get valueBoolean () {
		return this._valueBoolean;
	}

	set valueBoolean ( new_value ) {
		this._valueBoolean = new_value;
	}

	// The value of the parameter.
	get valueInteger () {
		return this._valueInteger;
	}

	set valueInteger ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueInteger`);
		}
		this._valueInteger = new_value;
	}

	// The value of the parameter.
	get valueDecimal () {
		return this._valueDecimal;
	}

	set valueDecimal ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueDecimal`);
		}
		this._valueDecimal = new_value;
	}

	// The value of the parameter.
	get valueUri () {
		return this._valueUri;
	}

	set valueUri ( new_value ) {
		this._valueUri = new_value;
	}

	// The value of the parameter.
	get valueCode () {
		return this._valueCode;
	}

	set valueCode ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueCode`);
		}
		this._valueCode = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			name: this._name,
			valueString: this._valueString,
			valueBoolean: this._valueBoolean,
			valueInteger: this._valueInteger,
			valueDecimal: this._valueDecimal,
			valueUri: this._valueUri,
			valueCode: this._valueCode
		});
	}

}

module.exports = ValueSet_Parameter;
