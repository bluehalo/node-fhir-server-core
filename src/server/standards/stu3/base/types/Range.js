const Element = require('./types/Element');

class Range extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// low	ΣI	0..1	SimpleQuantity	Low limit
	set low(low) {
		this._low = low;
	}

	get low() {
		return this._low;
	}

	// high	ΣI	0..1	SimpleQuantity	High limit
	set high(high) {
		this._high = high;
	}

	get high() {
		return this._high;
	}

	toJSON() {
		const json = {
			low: this._low,
			high: this._high,
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = Range;
