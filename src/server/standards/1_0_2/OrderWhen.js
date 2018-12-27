const BackboneElement = require('./BackboneElement');

class OrderWhen extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'OrderWhen';
		Object.assign(this, opt);
	}

	// This is a OrderWhen resource
	static get __resourceType() {
		return 'OrderWhen';
	}

	// Code specifies when request should be done. The code may simply be a priority code.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// A formal schedule.
	get schedule() {
		return this.__schedule;
	}

	set schedule(new_value) {
		const Timing = require('./Timing');
		this.__schedule = new Timing(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			code: this.__code && this.__code.toJSON(),
			schedule: this.__schedule && this.__schedule.toJSON(),
		});
	}
}

module.exports = OrderWhen;
