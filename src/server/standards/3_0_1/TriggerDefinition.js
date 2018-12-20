const Element = require('./Element');
const DateScalar = require('./scalars/Date.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class TriggerDefinition extends Element {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'TriggerDefinition';
		Object.assign(this, opt);
	}

	// This is a TriggerDefinition resource
	static get __resourceType() {
		return 'TriggerDefinition';
	}

	// The type of triggering event.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// The name of the event (if this is a named-event trigger).
	get eventName() {
		return this.__eventName;
	}

	set eventName(new_value) {
		this.__eventName = new_value;
	}

	// The timing of the event (if this is a period trigger).
	get eventTimingTiming() {
		return this.__eventTimingTiming;
	}

	set eventTimingTiming(new_value) {
		const Timing = require('./Timing');
		this.__eventTimingTiming = new Timing(new_value);
	}

	// The timing of the event (if this is a period trigger).
	get eventTimingReference() {
		return this.__eventTimingReference;
	}

	set eventTimingReference(new_value) {
		const Reference = require('./Reference');
		this.__eventTimingReference = new Reference(new_value);
	}

	// The timing of the event (if this is a period trigger).
	get eventTimingDate() {
		return this.__eventTimingDate;
	}

	set eventTimingDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field eventTimingDate`);
		}
		this.__eventTimingDate = new_value;
	}

	// The timing of the event (if this is a period trigger).
	get eventTimingDateTime() {
		return this.__eventTimingDateTime;
	}

	set eventTimingDateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field eventTimingDateTime`);
		}
		this.__eventTimingDateTime = new_value;
	}

	// The triggering data of the event (if this is a data trigger).
	get eventData() {
		return this.__eventData;
	}

	set eventData(new_value) {
		const DataRequirement = require('./DataRequirement');
		this.__eventData = new DataRequirement(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type,
			eventName: this.__eventName,
			eventTimingTiming: this.__eventTimingTiming && this.__eventTimingTiming.toJSON(),
			eventTimingReference: this.__eventTimingReference && this.__eventTimingReference.toJSON(),
			eventTimingDate: this.__eventTimingDate,
			eventTimingDateTime: this.__eventTimingDateTime,
			eventData: this.__eventData && this.__eventData.toJSON(),
		});
	}
}

module.exports = TriggerDefinition;
