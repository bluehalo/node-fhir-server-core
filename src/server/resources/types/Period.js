
/**
 * Time range defined by start and end date/time.
 * If present, start SHALL have a lower value than end
 */
class Period extends Element {

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
		return {
			start: this._start,
			end: this._end
		};
	}
}

module.exports = Period;
