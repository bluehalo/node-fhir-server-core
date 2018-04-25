const Element = require('./Element');
const TimingRepeat = require('./TimingRepeat');
const CodeableConcept = require('./CodeableConcept');

class Timing extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// event	Σ	0..*	dateTime	When the event occurs
	set event(event) {
		this._event = [].concat(event);
	}

	get event() {
		return this._event;
	}

	// repeat	ΣI	0..1	TimingRepeat	When the event is to occur
	// + If there's an offset, there must be a when (and not C, CM, CD, CV)
	// + period SHALL be a non-negative value
	// + If there's a periodMax, there must be a period
	// + If there's a durationMax, there must be a duration
	// + If there's a countMax, there must be a count
	// + if there's a duration, there needs to be duration units
	// + If there's a timeOfDay, there cannot be be a when, or vice versa
	// + if there's a period, there needs to be period units
	// + duration SHALL be a non-negative value
	set repeat(repeat) {
		this._repeat = new TimingRepeat(repeat);
	}

	get repeat() {
		return this._repeat;
	}

	// code	Σ	0..1	CodeableConcept	BID | TID | QID | AM | PM | QD | QOD | Q4H | Q6H +
	// TimingAbbreviation (Preferred)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	toJSON() {
		const json = {
			event: this._event,
			repeat: this._repeat,
			code: this._code,
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = Timing;
module.exports = TimingRepeat;
