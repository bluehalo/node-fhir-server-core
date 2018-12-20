const Quantity = require('./Quantity');

class Age extends Quantity {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Age';
		Object.assign(this, opt);
	}

	// This is a Age resource
	static get __resourceType() {
		return 'Age';
	}

	toJSON() {
		return Object.assign(super.toJSON(), {});
	}
}

module.exports = Age;
