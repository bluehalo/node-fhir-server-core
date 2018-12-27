const Element = require('./Element');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class Period extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Period';
		Object.assign(this, opt);
	}

	// This is a Period resource
	static get __resourceType() {
		return 'Period';
	}

	// The start of the period. The boundary is inclusive.
	get start() {
		return this.__start;
	}

	set start(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field start`);
		}
		this.__start = new_value;
	}

	// The end of the period. If the end of the period is missing, it means that the period is ongoing. The start may be in the past, and the end date in the future, which means that period is expected/planned to end at that time.
	get end() {
		return this.__end;
	}

	set end(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field end`);
		}
		this.__end = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			start: this.__start,
			end: this.__end,
		});
	}
}

module.exports = Period;
