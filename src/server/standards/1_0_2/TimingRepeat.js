const Element = require('./Element');

class TimingRepeat extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TimingRepeat';
		Object.assign(this, opt);
	}

	// This is a TimingRepeat resource
	static get __resourceType() {
		return 'TimingRepeat';
	}

	// Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
	get boundsQuantity() {
		return this.__boundsQuantity;
	}

	set boundsQuantity(new_value) {
		const Quantity = require('./Quantity');
		this.__boundsQuantity = new Quantity(new_value);
	}

	// Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
	get boundsRange() {
		return this.__boundsRange;
	}

	set boundsRange(new_value) {
		const Range = require('./Range');
		this.__boundsRange = new Range(new_value);
	}

	// Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
	get boundsPeriod() {
		return this.__boundsPeriod;
	}

	set boundsPeriod(new_value) {
		const Period = require('./Period');
		this.__boundsPeriod = new Period(new_value);
	}

	// A total count of the desired number of repetitions.
	get count() {
		return this.__count;
	}

	set count(new_value) {
		this.__count = new_value;
	}

	// How long this thing happens for when it happens.
	get duration() {
		return this.__duration;
	}

	set duration(new_value) {
		this.__duration = new_value;
	}

	// The upper limit of how long this thing happens for when it happens.
	get durationMax() {
		return this.__durationMax;
	}

	set durationMax(new_value) {
		this.__durationMax = new_value;
	}

	// The units of time for the duration, in UCUM units.
	get durationUnits() {
		return this.__durationUnits;
	}

	set durationUnits(new_value) {
		this.__durationUnits = new_value;
	}

	// The number of times to repeat the action within the specified period / period range (i.e. both period and periodMax provided).
	get frequency() {
		return this.__frequency;
	}

	set frequency(new_value) {
		this.__frequency = new_value;
	}

	// If present, indicates that the frequency is a range - so repeat between [frequency] and [frequencyMax] times within the period or period range.
	get frequencyMax() {
		return this.__frequencyMax;
	}

	set frequencyMax(new_value) {
		this.__frequencyMax = new_value;
	}

	// Indicates the duration of time over which repetitions are to occur; e.g. to express \'3 times per day\', 3 would be the frequency and \'1 day\' would be the period.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		this.__period = new_value;
	}

	// If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as \'do this once every 3-5 days.
	get periodMax() {
		return this.__periodMax;
	}

	set periodMax(new_value) {
		this.__periodMax = new_value;
	}

	// The units of time for the period in UCUM units.
	get periodUnits() {
		return this.__periodUnits;
	}

	set periodUnits(new_value) {
		this.__periodUnits = new_value;
	}

	// A real world event that the occurrence of the event should be tied to.
	get when() {
		return this.__when;
	}

	set when(new_value) {
		this.__when = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			boundsQuantity: this.__boundsQuantity && this.__boundsQuantity.toJSON(),
			boundsRange: this.__boundsRange && this.__boundsRange.toJSON(),
			boundsPeriod: this.__boundsPeriod && this.__boundsPeriod.toJSON(),
			count: this.__count,
			duration: this.__duration,
			durationMax: this.__durationMax,
			durationUnits: this.__durationUnits,
			frequency: this.__frequency,
			frequencyMax: this.__frequencyMax,
			period: this.__period,
			periodMax: this.__periodMax,
			periodUnits: this.__periodUnits,
			when: this.__when,
		});
	}
}

module.exports = TimingRepeat;
