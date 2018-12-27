const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class DeviceUseRequest extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DeviceUseRequest';
		Object.assign(this, opt);
	}

	// This is a DeviceUseRequest resource
	static get __resourceType() {
		return 'DeviceUseRequest';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__DeviceUseRequest = new_value;
	}

	// Indicates the site on the subject\'s body where the device should be used ( i.e. the target site).
	get bodySiteCodeableConcept() {
		return this.__bodySiteCodeableConcept;
	}

	set bodySiteCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__bodySiteCodeableConcept = new CodeableConcept(new_value);
	}

	// Indicates the site on the subject\'s body where the device should be used ( i.e. the target site).
	get bodySiteReference() {
		return this.__bodySiteReference;
	}

	set bodySiteReference(new_value) {
		const Reference = require('./Reference');
		this.__bodySiteReference = new Reference(new_value);
	}

	// The status of the request.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// The details of the device  to be used.
	get device() {
		return this.__device;
	}

	set device(new_value) {
		const Reference = require('./Reference');
		this.__device = new Reference(new_value);
	}

	// An encounter that provides additional context in which this request is made.
	get encounter() {
		return this.__encounter;
	}

	set encounter(new_value) {
		const Reference = require('./Reference');
		this.__encounter = new Reference(new_value);
	}

	// Identifiers assigned to this order by the orderer or by the receiver.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// Reason or justification for the use of this device.
	get indication() {
		return this.__indication;
	}

	set indication(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__indication = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
	get notes() {
		return this.__notes;
	}

	set notes(new_value) {
		this.__notes = Array.isArray(new_value) ? new_value : [new_value];
	}

	// The proposed act must be performed if the indicated conditions occur, e.g.., shortness of breath, SpO2 less than x%.
	get prnReason() {
		return this.__prnReason;
	}

	set prnReason(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__prnReason = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// The time when the request was made.
	get orderedOn() {
		return this.__orderedOn;
	}

	set orderedOn(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field orderedOn`);
		}
		this.__orderedOn = new_value;
	}

	// The time at which the request was made/recorded.
	get recordedOn() {
		return this.__recordedOn;
	}

	set recordedOn(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field recordedOn`);
		}
		this.__recordedOn = new_value;
	}

	// The patient who will use the device.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// The timing schedule for the use of the device The Schedule data type allows many different expressions, for example. \'Every 8 hours\'; \'Three times a day\'; \'1/2 an hour before breakfast for 10 days from 23-Dec 2011:\'; \'15 Oct 2013, 17 Oct 2013 and 1 Nov 2013\'.
	get timingTiming() {
		return this.__timingTiming;
	}

	set timingTiming(new_value) {
		const Timing = require('./Timing');
		this.__timingTiming = new Timing(new_value);
	}

	// The timing schedule for the use of the device The Schedule data type allows many different expressions, for example. \'Every 8 hours\'; \'Three times a day\'; \'1/2 an hour before breakfast for 10 days from 23-Dec 2011:\'; \'15 Oct 2013, 17 Oct 2013 and 1 Nov 2013\'.
	get timingPeriod() {
		return this.__timingPeriod;
	}

	set timingPeriod(new_value) {
		const Period = require('./Period');
		this.__timingPeriod = new Period(new_value);
	}

	// The timing schedule for the use of the device The Schedule data type allows many different expressions, for example. \'Every 8 hours\'; \'Three times a day\'; \'1/2 an hour before breakfast for 10 days from 23-Dec 2011:\'; \'15 Oct 2013, 17 Oct 2013 and 1 Nov 2013\'.
	get timingDateTime() {
		return this.__timingDateTime;
	}

	set timingDateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field timingDateTime`);
		}
		this.__timingDateTime = new_value;
	}

	// Characterizes how quickly the  use of device must be initiated. Includes concepts such as stat, urgent, routine.
	get priority() {
		return this.__priority;
	}

	set priority(new_value) {
		this.__priority = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			bodySiteCodeableConcept: this.__bodySiteCodeableConcept && this.__bodySiteCodeableConcept.toJSON(),
			bodySiteReference: this.__bodySiteReference && this.__bodySiteReference.toJSON(),
			status: this.__status,
			device: this.__device && this.__device.toJSON(),
			encounter: this.__encounter && this.__encounter.toJSON(),
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			indication: this.__indication && this.__indication.map(v => v.toJSON()),
			notes: this.__notes,
			prnReason: this.__prnReason && this.__prnReason.map(v => v.toJSON()),
			orderedOn: this.__orderedOn,
			recordedOn: this.__recordedOn,
			subject: this.__subject && this.__subject.toJSON(),
			timingTiming: this.__timingTiming && this.__timingTiming.toJSON(),
			timingPeriod: this.__timingPeriod && this.__timingPeriod.toJSON(),
			timingDateTime: this.__timingDateTime,
			priority: this.__priority,
		});
	}
}

module.exports = DeviceUseRequest;
