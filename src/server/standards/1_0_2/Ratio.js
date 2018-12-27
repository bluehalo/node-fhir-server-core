const Element = require('./Element');

class Ratio extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Ratio';
		Object.assign(this, opt);
	}

	// This is a Ratio resource
	static get __resourceType() {
		return 'Ratio';
	}

	// The value of the numerator.
	get numerator() {
		return this.__numerator;
	}

	set numerator(new_value) {
		const Quantity = require('./Quantity');
		this.__numerator = new Quantity(new_value);
	}

	// The value of the denominator.
	get denominator() {
		return this.__denominator;
	}

	set denominator(new_value) {
		const Quantity = require('./Quantity');
		this.__denominator = new Quantity(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			numerator: this.__numerator && this.__numerator.toJSON(),
			denominator: this.__denominator && this.__denominator.toJSON(),
		});
	}
}

module.exports = Ratio;
