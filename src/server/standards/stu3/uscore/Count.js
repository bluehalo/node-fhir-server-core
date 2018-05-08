const Quantity = require('./Quantity');

class Count extends Quantity {

	constructor ( opts ) {
		super();
		this._resourceType = 'Count';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Count';
	}


	toJSON () {
		return Object.assign(super.toJSON(), {

		});
	}

}

module.exports = Count;
