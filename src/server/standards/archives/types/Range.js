const Element = require('./Element');

class Range extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// I	0..1	SimpleQuantity	Low Range, if relevant
	set low(low){
		this._low = low;
	}

	get low() {
		return this._low;
	}

	// high	I	0..1	SimpleQuantity	High Range, if relevant
	set high(high) {
		this._high = high;
	}

	get high() {
		return this._high;
	}

	toJSON() {
		const json = {
			low: this._low,
			high: this._high
		};

		return Object.assign(super.toJSON(), json);
	}

}

module.exports = Range;
