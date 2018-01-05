const Element = require('./Element');
const Code = require('./Code');
const Period = require('./Period');
const Range = require('./Range');

// Σ		Element	A timing schedule that specifies an event that may occur multiple times
class TimingRepeat extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// bounds[x]	Σ	0..1		Length/Range of lengths, or (Start and/or end) limits
	// boundsQuantity			Duration
	set boundsQuantity(boundsQuantity) {
		this._boundsQuantity = boundsQuantity;
	}

	get boundsQuantity() {
		return this._boundsQuantity;
	}

	// boundsRange			Range
	set boundsRange(boundsRange) {
		this._boundsRange = new Range(boundsRange);
	}

	get boundsRange() {
		return this._boundsRange;
	}

	//  boundsPeriod			Period
	set boundsPeriod(boundsPeriod) {
		this._boundsPeriod = new Period(boundsPeriod);
	}

	get boundsPeriod() {
		return this._boundsPeriod;
	}

	// count	Σ	0..1	integer	Number of times to repeat
	set count(count) {
		this._count = count;
	}

	get count() {
		return this._count;
	}

	// duration	Σ I	0..1	decimal	How long when it happens
	// duration SHALL be a non-negative value
	set duration(duration) {
		this._duration = duration;
	}

	get duration() {
		return this._duration;
	}

	// durationMax	Σ	0..1	decimal	How long when it happens (Max)
	set durationMax(durationMax) {
		this._durationMax = durationMax;
	}

	get durationMax() {
		return this._durationMax;
	}

	// durationUnits	Σ	0..1	code	s | min | h | d | wk | mo | a - unit of time (UCUM)
	//UnitsOfTime (Required)
	set durationUnits(durationUnits) {
		this._durationUnits = new Code(durationUnits);
	}

	get durationUnits() {
		return this._durationUnits;
	}


	// frequency	Σ	0..1	integer	Event occurs frequency times per
	set frequency(frequency) {
		this._frequency = frequency;
	}

	get frequency() {
		return this._frequency;
	}

	// frequencyMax	Σ	0..1	integer	Event occurs up to frequencyMax times per period
	set frequencyMax(frequencyMax) {
		this._frequencyMax = frequencyMax;
	}

	get frequencyMax() {
		return this._frequencyMax;
	}

	// period	Σ I	0..1	decimal	Event occurs frequency times per period
	// period SHALL be a non-negative value
	set period(period) {
		this._period = period;
	}

	get period() {
		return this._period;
	}

	// periodMax	Σ	0..1	decimal	Upper limit of period (3-4 hours)
	set periodMax(periodMax) {
		this._periodMax = periodMax;
	}

	get periodMax() {
		return this._periodMax;
	}

	// periodUnits	Σ	0..1	code	s | min | h | d | wk | mo | a - unit of time (UCUM)
	// UnitsOfTime (Required)
	set periodUnits(periodUnits) {
		this._periodUnits = new Code(periodUnits);
	}

	get periodUnits() {
		return this._periodUnits;
	}

	// when	Σ	0..1	code	Regular life events the event is tied to
	// EventTiming (Required)
	set when(when) {
		this._when = new Code(when);
	}

	get when() {
		return this._when;
	}

	toJSON() {
		const json = {
		boundsQuantity: this._boundsQuantity,
		boundsRange: this._boundsRange,
		boundsPeriod: this._boundsPeriod,
		count: this._count,
		duration: this._duration,
		durationMax: this._durationMax,
		durationUnits: this._durationUnits,
		frequency: this._frequency,
		frequencyMax: this._frequencyMax,
		period: this._period,
		periodMax: this._periodMax,
		periodUnits: this._periodUnits,
		when: this._when
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = TimingRepeat;
