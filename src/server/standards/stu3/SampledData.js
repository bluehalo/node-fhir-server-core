const Element = require('./Element');
const Quantity = require('./Quantity');

class SampledData extends Element {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'SampledData';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'SampledData';
	}

	// The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series.
	get origin () {
		return this._origin;
	}

	set origin ( new_value ) {
		this._origin = new Quantity(new_value);
	}

	// The length of time between sampling times, measured in milliseconds.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field period`);
		}
		this._period = new_value;
	}

	// A correction factor that is applied to the sampled data points before they are added to the origin.
	get factor () {
		return this._factor;
	}

	set factor ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field factor`);
		}
		this._factor = new_value;
	}

	// The lower limit of detection of the measured points. This is needed if any of the data points have the value "L" (lower than detection limit).
	get lowerLimit () {
		return this._lowerLimit;
	}

	set lowerLimit ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field lowerLimit`);
		}
		this._lowerLimit = new_value;
	}

	// The upper limit of detection of the measured points. This is needed if any of the data points have the value "U" (higher than detection limit).
	get upperLimit () {
		return this._upperLimit;
	}

	set upperLimit ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field upperLimit`);
		}
		this._upperLimit = new_value;
	}

	// The number of sample points at each time point. If this value is greater than one, then the dimensions will be interlaced - all the sample points for a point in time will be recorded at once.
	get dimensions () {
		return this._dimensions;
	}

	set dimensions ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field dimensions`);
		}
		this._dimensions = new_value;
	}

	// A series of data points which are decimal values separated by a single space (character u20). The special values "E" (error), "L" (below detection limit) and "U" (above detection limit) can also be used in place of a decimal value.
	get data () {
		return this._data;
	}

	set data ( new_value ) {
		this._data = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			origin: this._origin && this._origin.toJSON(),
			period: this._period,
			factor: this._factor,
			lowerLimit: this._lowerLimit,
			upperLimit: this._upperLimit,
			dimensions: this._dimensions,
			data: this._data
		});
	}

}

module.exports = SampledData;
