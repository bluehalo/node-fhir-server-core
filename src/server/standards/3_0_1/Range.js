const Element = require('./Element');

class Range extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Range';
		Object.assign(this, opt);
	}

	// This is a Range resource
	static get __resourceType() {
		return 'Range';
	}

	// The low limit. The boundary is inclusive.
	get low() {
		return this.__low;
	}

	set low(new_value) {
		const Quantity = require('./Quantity');
		this.__low = new Quantity(new_value);
	}

	// The high limit. The boundary is inclusive.
	get high() {
		return this.__high;
	}

	set high(new_value) {
		const Quantity = require('./Quantity');
		this.__high = new Quantity(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			low: this.__low && this.__low.toJSON(),
			high: this.__high && this.__high.toJSON(),
		});
	}
}

module.exports = Range;
