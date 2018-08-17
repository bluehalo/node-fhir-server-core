const BackboneElement = require('./BackboneElement');
const Coding = require('./Coding');

class CodeSystem_Property1 extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'CodeSystem_Property1';
	}

	// A code that is a reference to CodeSystem.property.code.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field code`);
		}
		this._code = new_value;
	}

	// The value of this property.
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

	// The value of this property.
	get valueCoding () {
		return this._valueCoding;
	}

	set valueCoding ( new_value ) {
		this._valueCoding = new Coding(new_value);
	}

	// The value of this property.
	get valueString () {
		return this._valueString;
	}

	set valueString ( new_value ) {
		this._valueString = new_value;
	}

	// The value of this property.
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

	// The value of this property.
	get valueBoolean () {
		return this._valueBoolean;
	}

	set valueBoolean ( new_value ) {
		this._valueBoolean = new_value;
	}

	// The value of this property.
	get valueDateTime () {
		return this._valueDateTime;
	}

	set valueDateTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueDateTime`);
		}
		this._valueDateTime = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			code: this._code,
			valueCode: this._valueCode,
			valueCoding: this._valueCoding && this._valueCoding.toJSON(),
			valueString: this._valueString,
			valueInteger: this._valueInteger,
			valueBoolean: this._valueBoolean,
			valueDateTime: this._valueDateTime
		});
	}

}

module.exports = CodeSystem_Property1;
