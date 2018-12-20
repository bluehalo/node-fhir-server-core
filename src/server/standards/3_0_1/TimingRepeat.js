const Element = require('./Element');
const TimeScalar = require('./scalars/Time.scalar');
const UnsignedIntScalar = require('./scalars/UnsignedInt.scalar');

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
	get boundsDuration() {
		return this.__boundsDuration;
	}

	set boundsDuration(new_value) {
		const Duration = require('./Duration');
		this.__boundsDuration = new Duration(new_value);
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

	// A maximum value for the count of the desired repetitions (e.g. do something 6-8 times).
	get countMax() {
		return this.__countMax;
	}

	set countMax(new_value) {
		this.__countMax = new_value;
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
	get durationUnit() {
		return this.__durationUnit;
	}

	set durationUnit(new_value) {
		this.__durationUnit = new_value;
	}

	// The number of times to repeat the action within the specified period / period range (i.e. both period and periodMax provided).
	get frequency() {
		return this.__frequency;
	}

	set frequency(new_value) {
		this.__frequency = new_value;
	}

	// If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.
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
	get periodUnit() {
		return this.__periodUnit;
	}

	set periodUnit(new_value) {
		this.__periodUnit = new_value;
	}

	// If one or more days of week is provided, then the action happens only on the specified day(s).
	get dayOfWeek() {
		return this.__dayOfWeek;
	}

	set dayOfWeek(new_value) {
		this.__dayOfWeek = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Specified time of day for action to take place.
	get timeOfDay() {
		return this.__timeOfDay;
	}

	set timeOfDay(new_value) {
		// Throw if new value does not match the pattern
		let pattern = TimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field timeOfDay`);
		}
		this.__timeOfDay = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Real world events that the occurrence of the event should be tied to.
	get when() {
		return this.__when;
	}

	set when(new_value) {
		this.__when = Array.isArray(new_value) ? new_value : [new_value];
	}

	// The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event.
	get offset() {
		return this.__offset;
	}

	set offset(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UnsignedIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field offset`);
		}
		this.__offset = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			boundsDuration: this.__boundsDuration && this.__boundsDuration.toJSON(),
			boundsRange: this.__boundsRange && this.__boundsRange.toJSON(),
			boundsPeriod: this.__boundsPeriod && this.__boundsPeriod.toJSON(),
			count: this.__count,
			countMax: this.__countMax,
			duration: this.__duration,
			durationMax: this.__durationMax,
			durationUnit: this.__durationUnit,
			frequency: this.__frequency,
			frequencyMax: this.__frequencyMax,
			period: this.__period,
			periodMax: this.__periodMax,
			periodUnit: this.__periodUnit,
			dayOfWeek: this.__dayOfWeek,
			timeOfDay: this.__timeOfDay,
			when: this.__when,
			offset: this.__offset,
		});
	}
}

module.exports = TimingRepeat;
