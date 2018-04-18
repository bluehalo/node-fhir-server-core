const Element = require('./Element');

/**
 * Time range defined by start and end date/time.
 * If present, start SHALL have a lower value than end
 */
class Period extends Element {

	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	//	Σ I	0..1	dateTime	Starting time with inclusive boundary
	set start(start) {
		this._start = start;
	}

	get start() {
		return this._start;
	}

	// Σ I	0..1	dateTime	End time with inclusive boundary, if not ongoing
	set end(end) {
		this._end = end;
	}

	get end() {
		return this._end;
	}

	toJSON() {
		const json = {
			start: this._start,
			end: this._end
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = Period;
