const Quantity = require('./Quantity');

class Distance extends Quantity {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Distance';
	}


	toJSON () {
		return Object.assign(super.toJSON(), {

		});
	}

}

module.exports = Distance;
