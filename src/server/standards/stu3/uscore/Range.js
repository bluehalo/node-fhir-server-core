const Element = require('./Element');
const Quantity = require('./Quantity');

class Range extends Element {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Range';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Range';
	}

	// The low limit. The boundary is inclusive.
	get low () {
		return this._low;
	}

	set low ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._low = new Quantity(new_value);
	}

	// The high limit. The boundary is inclusive.
	get high () {
		return this._high;
	}

	set high ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._high = new Quantity(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			low: this.low && this.low.toJSON(),
			high: this.high && this.high.toJSON()
		});
	}

}

module.exports = Range;
