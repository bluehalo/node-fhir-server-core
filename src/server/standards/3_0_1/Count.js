const Quantity = require('./Quantity');

class Count extends Quantity {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Count';
		Object.assign(this, opt);
	}

	// This is a Count resource
	static get __resourceType() {
		return 'Count';
	}

	toJSON() {
		return Object.assign(super.toJSON(), {});
	}
}

module.exports = Count;
