const Quantity = require('./Quantity');

class Duration extends Quantity {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Duration';
		Object.assign(this, opt);
	}

	// This is a Duration resource
	static get __resourceType() {
		return 'Duration';
	}

	toJSON() {
		return Object.assign(super.toJSON(), {});
	}
}

module.exports = Duration;
