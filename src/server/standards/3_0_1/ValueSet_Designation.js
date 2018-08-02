const BackboneElement = require('./BackboneElement');
const Coding = require('./Coding');

class ValueSet_Designation extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ValueSet_Designation';
	}

	// The language this designation is defined for.
	get language () {
		return this._language;
	}

	set language ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field language`);
		}
		this._language = new_value;
	}

	// A code that details how this designation would be used.
	get use () {
		return this._use;
	}

	set use ( new_value ) {
		this._use = new Coding(new_value);
	}

	// The text value for this designation.
	get value () {
		return this._value;
	}

	set value ( new_value ) {
		this._value = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			language: this._language,
			use: this._use && this._use.toJSON(),
			value: this._value
		});
	}

}

module.exports = ValueSet_Designation;
