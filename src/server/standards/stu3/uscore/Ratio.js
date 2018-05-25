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
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._numerator = new Quantity(new_value);
	}

	// The value of the denominator.
	get denominator () {
		return this._denominator;
	}

	set denominator ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._denominator = new Quantity(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			numerator: this.numerator && this.numerator.toJSON(),
			denominator: this.denominator && this.denominator.toJSON()
		});
	}

}

module.exports = Ratio;
