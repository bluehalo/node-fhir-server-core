const BackboneElement = require('./BackboneElement');
const Identifier = require('./Identifier');
const Quantity = require('./Quantity');

class Substance_Instance extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Substance_Instance';
	}

	// Identifier associated with the package/container (usually a label affixed directly).
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// When the substance is no longer valid to use. For some substances, a single arbitrary date is used for expiry.
	get expiry () {
		return this._expiry;
	}

	set expiry ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field expiry`);
		}
		this._expiry = new_value;
	}

	// The amount of the substance.
	get quantity () {
		return this._quantity;
	}

	set quantity ( new_value ) {
		this._quantity = new Quantity(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			identifier: this._identifier && this._identifier.toJSON(),
			expiry: this._expiry,
			quantity: this._quantity && this._quantity.toJSON()
		});
	}

}

module.exports = Substance_Instance;
