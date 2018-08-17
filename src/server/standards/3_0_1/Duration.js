const Quantity = require('./Quantity');

class Duration extends Quantity {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Duration';
	}


	toJSON () {
		return Object.assign(super.toJSON(), {

		});
	}

}

module.exports = Duration;
