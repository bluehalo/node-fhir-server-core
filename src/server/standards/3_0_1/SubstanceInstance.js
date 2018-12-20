const BackboneElement = require('./BackboneElement');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class SubstanceInstance extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'SubstanceInstance';
		Object.assign(this, opt);
	}

	// This is a SubstanceInstance resource
	static get __resourceType() {
		return 'SubstanceInstance';
	}

	// Identifier associated with the package/container (usually a label affixed directly).
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// When the substance is no longer valid to use. For some substances, a single arbitrary date is used for expiry.
	get expiry() {
		return this.__expiry;
	}

	set expiry(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field expiry`);
		}
		this.__expiry = new_value;
	}

	// The amount of the substance.
	get quantity() {
		return this.__quantity;
	}

	set quantity(new_value) {
		const Quantity = require('./Quantity');
		this.__quantity = new Quantity(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			identifier: this.__identifier && this.__identifier.toJSON(),
			expiry: this.__expiry,
			quantity: this.__quantity && this.__quantity.toJSON(),
		});
	}
}

module.exports = SubstanceInstance;
