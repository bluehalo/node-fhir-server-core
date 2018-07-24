const Element = require('./Element');
const Quantity = require('./Quantity');

class Ratio extends Element {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Ratio';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Ratio';
	}

	// The value of the numerator.
	get numerator () {
		return this._numerator;
	}

	set numerator ( new_value ) {
		this._numerator = new Quantity(new_value);
	}

	// The value of the denominator.
	get denominator () {
		return this._denominator;
	}

	set denominator ( new_value ) {
		this._denominator = new Quantity(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			numerator: this._numerator && this._numerator.toJSON(),
			denominator: this._denominator && this._denominator.toJSON()
		});
	}

}

module.exports = Ratio;
