const Element = require('./types/Element');
const Quantity = require('./types/Quantity');

class Ratio extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// numerator	Σ	0..1	Quantity	Numerator value
	set numerator(numerator) {
		this._numerator = new Quantity(numerator);
	}

	get numerator() {
		return this._numerator;
	}

	// denominator	Σ	0..1	Quantity	Denominator value
	set denominator(denominator) {
		this._denominator = new Quantity(denominator);
	}

	get denominator() {
		return this._denominator;
	}

	toJSON() {
		const json = {
			numerator: this._numerator,
			denominator: this._denominator,
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = Ratio;
