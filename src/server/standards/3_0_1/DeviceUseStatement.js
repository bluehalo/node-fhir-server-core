const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const Period = require('./Period');
const Timing = require('./Timing');
const CodeableConcept = require('./CodeableConcept');
const Annotation = require('./Annotation');

class DeviceUseStatement extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'DeviceUseStatement';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'DeviceUseStatement';
	}

	// This is a DeviceUseStatement resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['DeviceUseStatement'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// An external identifier for this statement such as an IRI.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// A code representing the patient or other source's judgment about the state of the device used that this statement is about.  Generally this will be active or completed.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['active', 'completed', 'entered-in-error', 'intended', 'stopped', 'on-hold'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// The patient who used the device.
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = new Reference(new_value);
	}

	// The time period over which the device was used.
	get whenUsed () {
		return this._whenUsed;
	}

	set whenUsed ( new_value ) {
		this._whenUsed = new Period(new_value);
	}

	// How often the device was used.
	get timingTiming () {
		return this._timingTiming;
	}

	set timingTiming ( new_value ) {
		this._timingTiming = new Timing(new_value);
	}

	// How often the device was used.
	get timingPeriod () {
		return this._timingPeriod;
	}

	set timingPeriod ( new_value ) {
		this._timingPeriod = new Period(new_value);
	}

	// How often the device was used.
	get timingDateTime () {
		return this._timingDateTime;
	}

	set timingDateTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field timingDateTime`);
		}
		this._timingDateTime = new_value;
	}

	// The time at which the statement was made/recorded.
	get recordedOn () {
		return this._recordedOn;
	}

	set recordedOn ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field recordedOn`);
		}
		this._recordedOn = new_value;
	}

	// Who reported the device was being used by the patient.
	get source () {
		return this._source;
	}

	set source ( new_value ) {
		this._source = new Reference(new_value);
	}

	// The details of the device used.
	get device () {
		return this._device;
	}

	set device ( new_value ) {
		this._device = new Reference(new_value);
	}

	// Reason or justification for the use of the device.
	get indication () {
		return this._indication;
	}

	set indication ( new_value ) {
		this._indication = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Indicates the site on the subject's body where the device was used ( i.e. the target site).
	get bodySite () {
		return this._bodySite;
	}

	set bodySite ( new_value ) {
		this._bodySite = new CodeableConcept(new_value);
	}

	// Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
	get note () {
		return this._note;
	}

	set note ( new_value ) {
		this._note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.map(v => v.toJSON()),
			status: this._status,
			subject: this._subject && this._subject.toJSON(),
			whenUsed: this._whenUsed && this._whenUsed.toJSON(),
			timingTiming: this._timingTiming && this._timingTiming.toJSON(),
			timingPeriod: this._timingPeriod && this._timingPeriod.toJSON(),
			timingDateTime: this._timingDateTime,
			recordedOn: this._recordedOn,
			source: this._source && this._source.toJSON(),
			device: this._device && this._device.toJSON(),
			indication: this._indication && this._indication.map(v => v.toJSON()),
			bodySite: this._bodySite && this._bodySite.toJSON(),
			note: this._note && this._note.map(v => v.toJSON())
		});
	}

}

module.exports = DeviceUseStatement;
