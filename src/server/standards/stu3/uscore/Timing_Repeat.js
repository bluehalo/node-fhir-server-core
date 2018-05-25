const BackboneElement = require('./BackboneElement');
const Duration = require('./Duration');
const Range = require('./Range');
const Period = require('./Period');

class Timing_Repeat extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Timing_Repeat';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Timing_Repeat';
	}

	// Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
	get boundsDuration () {
		return this._boundsDuration;
	}

	set boundsDuration ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._boundsDuration = new Duration(new_value);
	}

	// Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
	get boundsRange () {
		return this._boundsRange;
	}

	set boundsRange ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._boundsRange = new Range(new_value);
	}

	// Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
	get boundsPeriod () {
		return this._boundsPeriod;
	}

	set boundsPeriod ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._boundsPeriod = new Period(new_value);
	}

	// A total count of the desired number of repetitions.
	get count () {
		return this._count;
	}

	set count ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field count`);
		}
		this._count = new_value;
	}

	// A maximum value for the count of the desired repetitions (e.g. do something 6-8 times).
	get countMax () {
		return this._countMax;
	}

	set countMax ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field countMax`);
		}
		this._countMax = new_value;
	}

	// How long this thing happens for when it happens.
	get duration () {
		return this._duration;
	}

	set duration ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field duration`);
		}
		this._duration = new_value;
	}

	// The upper limit of how long this thing happens for when it happens.
	get durationMax () {
		return this._durationMax;
	}

	set durationMax ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field durationMax`);
		}
		this._durationMax = new_value;
	}

	// The units of time for the duration, in UCUM units.
	get durationUnit () {
		return this._durationUnit;
	}

	set durationUnit ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['s', 'min', 'h', 'd', 'wk', 'mo', 'a'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field durationUnit`);
		}
		this._durationUnit = new_value;
	}

	// The number of times to repeat the action within the specified period / period range (i.e. both period and periodMax provided).
	get frequency () {
		return this._frequency;
	}

	set frequency ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field frequency`);
		}
		this._frequency = new_value;
	}

	// If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.
	get frequencyMax () {
		return this._frequencyMax;
	}

	set frequencyMax ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field frequencyMax`);
		}
		this._frequencyMax = new_value;
	}

	// Indicates the duration of time over which repetitions are to occur; e.g. to express "3 times per day", 3 would be the frequency and "1 day" would be the period.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field period`);
		}
		this._period = new_value;
	}

	// If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as "do this once every 3-5 days.
	get periodMax () {
		return this._periodMax;
	}

	set periodMax ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?([0]|([1-9][0-9]*))(\.[0-9]+)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field periodMax`);
		}
		this._periodMax = new_value;
	}

	// The units of time for the period in UCUM units.
	get periodUnit () {
		return this._periodUnit;
	}

	set periodUnit ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['s', 'min', 'h', 'd', 'wk', 'mo', 'a'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field periodUnit`);
		}
		this._periodUnit = new_value;
	}

	// If one or more days of week is provided, then the action happens only on the specified day(s).
	get dayOfWeek () {
		return this._dayOfWeek;
	}

	set dayOfWeek ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._dayOfWeek = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Specified time of day for action to take place.
	get timeOfDay () {
		return this._timeOfDay;
	}

	set timeOfDay ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._timeOfDay = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Real world events that the occurrence of the event should be tied to.
	get when () {
		return this._when;
	}

	set when ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['MORN', 'AFT', 'EVE', 'NIGHT', 'PHS', 'HS', 'WAKE', 'C', 'CM', 'CD', 'CV', 'AC', 'ACM', 'ACD', 'ACV', 'PC', 'PCM', 'PCD', 'PCV'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field when`);
		}
		this._when = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event.
	get offset () {
		return this._offset;
	}

	set offset ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /[0]|([1-9][0-9]*)/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field offset`);
		}
		this._offset = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			boundsDuration: this.boundsDuration && this.boundsDuration.toJSON(),
			boundsRange: this.boundsRange && this.boundsRange.toJSON(),
			boundsPeriod: this.boundsPeriod && this.boundsPeriod.toJSON(),
			count: this.count,
			countMax: this.countMax,
			duration: this.duration,
			durationMax: this.durationMax,
			durationUnit: this.durationUnit,
			frequency: this.frequency,
			frequencyMax: this.frequencyMax,
			period: this.period,
			periodMax: this.periodMax,
			periodUnit: this.periodUnit,
			dayOfWeek: this.dayOfWeek,
			timeOfDay: this.timeOfDay,
			when: this.when,
			offset: this.offset
		});
	}

}

module.exports = Timing_Repeat;
