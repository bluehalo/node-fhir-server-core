const Quantity = require('./Quantity');

class SimpleQuantity extends Quantity {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'SimpleQuantity';
		Object.assign(this, opt);
	}

	// This is a SimpleQuantity resource
	static get __resourceType() {
		return 'SimpleQuantity';
	}

	toJSON() {
		return Object.assign(super.toJSON(), {});
	}
}

module.exports = SimpleQuantity;
