const Element = require('./Element');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');

class SampledData extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'SampledData';
		Object.assign(this, opt);
	}

	// This is a SampledData resource
	static get __resourceType() {
		return 'SampledData';
	}

	// The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series.
	get origin() {
		return this.__origin;
	}

	set origin(new_value) {
		const Quantity = require('./Quantity');
		this.__origin = new Quantity(new_value);
	}

	// The length of time between sampling times, measured in milliseconds.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		this.__period = new_value;
	}

	// A correction factor that is applied to the sampled data points before they are added to the origin.
	get factor() {
		return this.__factor;
	}

	set factor(new_value) {
		this.__factor = new_value;
	}

	// The lower limit of detection of the measured points. This is needed if any of the data points have the value \'L\' (lower than detection limit).
	get lowerLimit() {
		return this.__lowerLimit;
	}

	set lowerLimit(new_value) {
		this.__lowerLimit = new_value;
	}

	// The upper limit of detection of the measured points. This is needed if any of the data points have the value \'U\' (higher than detection limit).
	get upperLimit() {
		return this.__upperLimit;
	}

	set upperLimit(new_value) {
		this.__upperLimit = new_value;
	}

	// The number of sample points at each time point. If this value is greater than one, then the dimensions will be interlaced - all the sample points for a point in time will be recorded at once.
	get dimensions() {
		return this.__dimensions;
	}

	set dimensions(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field dimensions`);
		}
		this.__dimensions = new_value;
	}

	// A series of data points which are decimal values separated by a single space (character u20). The special values \'E\' (error), \'L\' (below detection limit) and \'U\' (above detection limit) can also be used in place of a decimal value.
	get data() {
		return this.__data;
	}

	set data(new_value) {
		this.__data = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			origin: this.__origin && this.__origin.toJSON(),
			period: this.__period,
			factor: this.__factor,
			lowerLimit: this.__lowerLimit,
			upperLimit: this.__upperLimit,
			dimensions: this.__dimensions,
			data: this.__data,
		});
	}
}

module.exports = SampledData;
