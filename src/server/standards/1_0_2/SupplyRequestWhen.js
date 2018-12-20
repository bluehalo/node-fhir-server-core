const BackboneElement = require('./BackboneElement');

class SupplyRequestWhen extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'SupplyRequestWhen';
		Object.assign(this, opt);
	}

	// This is a SupplyRequestWhen resource
	static get __resourceType() {
		return 'SupplyRequestWhen';
	}

	// Code indicating when the request should be fulfilled.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// Formal fulfillment schedule.
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

module.exports = SupplyRequestWhen;
