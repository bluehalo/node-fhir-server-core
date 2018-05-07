const Element = require('./Element');
const Timing_Repeat = require('./Timing_Repeat');
const CodeableConcept = require('./CodeableConcept');

class Timing extends Element {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Timing';
	}

	// Identifies specific times when the event occurs.
	get event () {
		return this._event;
	}

	set event ( new_value ) {
		this._event = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// A set of rules that describe when the event is scheduled.
	get repeat () {
		return this._repeat;
	}

	set repeat ( new_value ) {
		this._repeat = new Timing_Repeat(new_value);
	}

	// A code for the timing schedule. Some codes such as BID are ubiquitous, but many institutions define their own additional codes. If a code is provided, the code is understood to be a complete statement of whatever is specified in the structured timing data, and either the code or the data may be used to interpret the Timing, with the exception that .repeat.bounds still applies over the code (and is not contained in the code).
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new CodeableConcept(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			event: this._event,
			repeat: this._repeat,
			code: this._code
		});
	}

}

module.exports = Timing;
