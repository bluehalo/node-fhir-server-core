const BackboneElement = require('./BackboneElement');

class StructureMap_Parameter extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'StructureMap_Parameter';
	}

	// Parameter value - variable or literal.
	get valueId () {
		return this._valueId;
	}

	set valueId ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueId`);
		}
		this._valueId = new_value;
	}

	// Parameter value - variable or literal.
	get valueString () {
		return this._valueString;
	}

	set valueString ( new_value ) {
		this._valueString = new_value;
	}

	// Parameter value - variable or literal.
	get valueBoolean () {
		return this._valueBoolean;
	}

	set valueBoolean ( new_value ) {
		this._valueBoolean = new_value;
	}

	// Parameter value - variable or literal.
	get valueInteger () {
		return this._valueInteger;
	}

	set valueInteger ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueInteger`);
		}
		this._valueInteger = new_value;
	}

	// Parameter value - variable or literal.
	get valueDecimal () {
		return this._valueDecimal;
	}

	set valueDecimal ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field valueDecimal`);
		}
		this._valueDecimal = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			valueId: this._valueId,
			valueString: this._valueString,
			valueBoolean: this._valueBoolean,
			valueInteger: this._valueInteger,
			valueDecimal: this._valueDecimal
		});
	}

}

module.exports = StructureMap_Parameter;
