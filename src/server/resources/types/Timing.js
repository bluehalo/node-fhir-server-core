const path = require('path');
const Element = require(path.resolve('./src/server/resources/types/Element'));
const Code = require(path.resolve('./src/server/resources/types/Code'));
const TimingRepeat = require(path.resolve('./src/server/resources/types/TimingRepeat'));


// Σ		Element	A timing schedule that specifies an event that may occur multiple times
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

	// Σ I	0..1	Element	When the event is to occur
	// Either frequency or when can exist, not both
	// if there's a duration, there needs to be duration units
	// if there's a period, there needs to be period units
	// If there's a periodMax, there must be a period
	//If there's a durationMax, there must be a duration	set denominator(denominator) {
	set repeat(repeat) {
		this._repeat = new TimingRepeat(repeat);
	}

	get repeat() {
		return this._repeat;
	}

	// Σ	0..1	CodeableConcept	QD | QOD | Q4H | Q6H | BID | TID | QID | AM | PM +
	// TimingAbbreviation (Preferred)
	set code(code) {
		this._code = new Code(code);
	}

	get code() {
		return this._code;
	}

	toJSON() {
		const json = {
			event: this._event,
			repeat: this._repeat,
			code: this._code
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = Timing;
