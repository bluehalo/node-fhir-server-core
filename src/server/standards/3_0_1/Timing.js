const Element = require('./Element');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class Timing extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Timing';
		Object.assign(this, opt);
	}

	// This is a Timing resource
	static get __resourceType() {
		return 'Timing';
	}

	// Identifies specific times when the event occurs.
	get event() {
		return this.__event;
	}

	set event(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field event`);
		}
		this.__event = Array.isArray(new_value) ? new_value : [new_value];
	}

	// A set of rules that describe when the event is scheduled.
	get repeat() {
		return this.__repeat;
	}

	set repeat(new_value) {
		const TimingRepeat = require('./TimingRepeat');
		this.__repeat = new TimingRepeat(new_value);
	}

	// A code for the timing schedule. Some codes such as BID are ubiquitous, but many institutions define their own additional codes. If a code is provided, the code is understood to be a complete statement of whatever is specified in the structured timing data, and either the code or the data may be used to interpret the Timing, with the exception that .repeat.bounds still applies over the code (and is not contained in the code).
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			event: this.__event,
			repeat: this.__repeat && this.__repeat.toJSON(),
			code: this.__code && this.__code.toJSON(),
		});
	}
}

module.exports = Timing;
