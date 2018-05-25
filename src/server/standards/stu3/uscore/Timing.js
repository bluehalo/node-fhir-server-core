const Element = require('./Element');
const Timing_Repeat = require('./Timing_Repeat');
const CodeableConcept = require('./CodeableConcept');

class Timing extends Element {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Timing';
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
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._event = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// A set of rules that describe when the event is scheduled.
	get repeat () {
		return this._repeat;
	}

	set repeat ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._repeat = new Timing_Repeat(new_value);
	}

	// A code for the timing schedule. Some codes such as BID are ubiquitous, but many institutions define their own additional codes. If a code is provided, the code is understood to be a complete statement of whatever is specified in the structured timing data, and either the code or the data may be used to interpret the Timing, with the exception that .repeat.bounds still applies over the code (and is not contained in the code).
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._code = new CodeableConcept(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			event: this.event,
			repeat: this.repeat && this.repeat.toJSON(),
			code: this.code && this.code.toJSON()
		});
	}

}

module.exports = Timing;
