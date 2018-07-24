const Quantity = require('./Quantity');

class Age extends Quantity {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Age';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Age';
	}


	toJSON () {
		return Object.assign(super.toJSON(), {

		});
	}

}

module.exports = Age;
