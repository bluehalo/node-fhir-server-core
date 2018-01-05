const path = require('path');
const Element = require(path.resolve('./src/server/resources/types/Element'));
const Quantity = require(path.resolve('./src/server/resources/types/Quantity'));


// Ratio	Σ I		Element	A ratio of two Quantity values - a numerator and a denominator
// Numerator and denominator SHALL both be present, or both are absent. If both are absent, there SHALL be some extension present
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

	// denominator	Σ	0..1	Quantityclass Ratio extends Element {
	set denominator(denominator) {
		this._denominator = new Quantity(denominator);
	}

	get denominator() {
		return this._denominator;
	}

	toJSON() {
		const json = {
			numerator: this._numerator,
			denominator: this._denominator
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = Ratio;
