const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class DeviceUseStatement extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DeviceUseStatement';
		Object.assign(this, opt);
	}

	// This is a DeviceUseStatement resource
	static get __resourceType() {
		return 'DeviceUseStatement';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__DeviceUseStatement = new_value;
	}

	// An external identifier for this statement such as an IRI.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// A code representing the patient or other source\'s judgment about the state of the device used that this statement is about.  Generally this will be active or completed.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// The patient who used the device.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// The time period over which the device was used.
	get whenUsed() {
		return this.__whenUsed;
	}

	set whenUsed(new_value) {
		const Period = require('./Period');
		this.__whenUsed = new Period(new_value);
	}

	// How often the device was used.
	get timingTiming() {
		return this.__timingTiming;
	}

	set timingTiming(new_value) {
		const Timing = require('./Timing');
		this.__timingTiming = new Timing(new_value);
	}

	// How often the device was used.
	get timingPeriod() {
		return this.__timingPeriod;
	}

	set timingPeriod(new_value) {
		const Period = require('./Period');
		this.__timingPeriod = new Period(new_value);
	}

	// How often the device was used.
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

	// The time at which the statement was made/recorded.
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

	// Who reported the device was being used by the patient.
	get source() {
		return this.__source;
	}

	set source(new_value) {
		const Reference = require('./Reference');
		this.__source = new Reference(new_value);
	}

	// The details of the device used.
	get device() {
		return this.__device;
	}

	set device(new_value) {
		const Reference = require('./Reference');
		this.__device = new Reference(new_value);
	}

	// Reason or justification for the use of the device.
	get indication() {
		return this.__indication;
	}

	set indication(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__indication = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Indicates the site on the subject\'s body where the device was used ( i.e. the target site).
	get bodySite() {
		return this.__bodySite;
	}

	set bodySite(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__bodySite = new CodeableConcept(new_value);
	}

	// Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
	get note() {
		return this.__note;
	}

	set note(new_value) {
		const Annotation = require('./Annotation');
		this.__note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			status: this.__status,
			subject: this.__subject && this.__subject.toJSON(),
			whenUsed: this.__whenUsed && this.__whenUsed.toJSON(),
			timingTiming: this.__timingTiming && this.__timingTiming.toJSON(),
			timingPeriod: this.__timingPeriod && this.__timingPeriod.toJSON(),
			timingDateTime: this.__timingDateTime,
			recordedOn: this.__recordedOn,
			source: this.__source && this.__source.toJSON(),
			device: this.__device && this.__device.toJSON(),
			indication: this.__indication && this.__indication.map(v => v.toJSON()),
			bodySite: this.__bodySite && this.__bodySite.toJSON(),
			note: this.__note && this.__note.map(v => v.toJSON()),
		});
	}
}

module.exports = DeviceUseStatement;
