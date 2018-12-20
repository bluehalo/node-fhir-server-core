const BackboneElement = require('./BackboneElement');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');

class ClaimResponseNote extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ClaimResponseNote';
		Object.assign(this, opt);
	}

	// This is a ClaimResponseNote resource
	static get __resourceType() {
		return 'ClaimResponseNote';
	}

	// An integer associated with each note which may be referred to from each service line item.
	get number() {
		return this.__number;
	}

	set number(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field number`);
		}
		this.__number = new_value;
	}

	// The note purpose: Print/Display.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const Coding = require('./Coding');
		this.__type = new Coding(new_value);
	}

	// The note text.
	get text() {
		return this.__text;
	}

	set text(new_value) {
		this.__text = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			number: this.__number,
			type: this.__type && this.__type.toJSON(),
			text: this.__text,
		});
	}
}

module.exports = ClaimResponseNote;
