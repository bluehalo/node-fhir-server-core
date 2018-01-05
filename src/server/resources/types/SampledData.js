const path = require('path');
const Element = require(path.resolve('./src/server/resources/types/Element'));

// SampledData	Σ		Element	A series of measurements taken by a device
class SampledData extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}


	// origin	Σ	1..1	SimpleQuantity	Zero value and units
	set origin(origin) {
			this._origin = origin;
	}

	get origin() {
		return this._origin;
	}

	// period	Σ	1..1	decimal	Number of milliseconds between samples
	set period(period) {
		this._period = period;
	}

	get period() {
		return this._period;
	}


	// factor	Σ	0..1	decimal	Multiply data by this before adding to origin
	set factor(factor) {
		this._factor = factor;
	}

	get factor() {
		return this._factor;
	}

	// lowerLimit	Σ	0..1	decimal	Lower limit of detection
	set lowerLimit(lowerLimit) {
		this._lowerLimit = lowerLimit;
	}

	get lowerLimit() {
		return this._lowerLimit;
	}

	// upperLimit	Σ	0..1	decimal	Upper limit of detection
	set upperLimit(upperLimit) {
		this._upperLimit = upperLimit;
	}

	get upperLimit() {
		return this._upperLimit;
	}

	// dimensions	Σ	1..1	positiveInt	Number of sample points at each time point
	set dimensions(dimensions) {
		this._dimensions = dimensions;
	}

	get dimensions() {
		return this._dimensions;
	}

	// data	Σ	1..1	string	Decimal values with spaces, or "E" | "U" | "L"
	set data(data) {
		this._data = data;
	}

	get data() {
		return this._data;
	}

	toJSON() {
		const json = {
			origin: this._origin,
			period: this._period,
			factor: this._factor,
			lowerLimit: this._lowerLimit,
			upperLimit: this._upperLimit,
			dimensions: this._dimensions,
			data: this._data
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = SampledData;


