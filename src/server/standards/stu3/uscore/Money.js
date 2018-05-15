const Quantity = require('./Quantity');

class Money extends Quantity {

	constructor ( opts ) {
		super();
		this._resourceType = 'Money';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Money';
	}


	toJSON () {
		return Object.assign(super.toJSON(), {

		});
	}

}

module.exports = Money;
