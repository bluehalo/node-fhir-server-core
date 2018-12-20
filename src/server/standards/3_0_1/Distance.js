const Quantity = require('./Quantity');

class Distance extends Quantity {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Distance';
		Object.assign(this, opt);
	}

	// This is a Distance resource
	static get __resourceType() {
		return 'Distance';
	}

	toJSON() {
		return Object.assign(super.toJSON(), {});
	}
}

module.exports = Distance;
