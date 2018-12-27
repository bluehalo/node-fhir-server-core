const Quantity = require('./Quantity');

class Money extends Quantity {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Money';
		Object.assign(this, opt);
	}

	// This is a Money resource
	static get __resourceType() {
		return 'Money';
	}

	toJSON() {
		return Object.assign(super.toJSON(), {});
	}
}

module.exports = Money;
