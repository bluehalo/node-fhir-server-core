const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const Reference = require('./types/Reference');
const Period = require('./types/Period');
const Timing = require('./types/Timing');
const CodeableConcept = require('./types/CodeableConcept');
const Annotation = require('./types/Annotation');

class DeviceUseStatement extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'DeviceUseStatement';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier		0..*	Identifier	External identifier for this record
	set identifier(identifier) {
		if (Array.isArray(identifier)) {
			this._identifier = identifier.map((i) => new Identifier(i));
		} else {
			this._identifier = [new Identifier(identifier)];
		}
	}

	get identifier() {
		return this._identifier;
	}

	// status	?!Σ	1..1	code	active | completed | entered-in-error +
	// DeviceUseStatementStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// subject		1..1	Reference(Patient | Group)	Patient using device
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// whenUsed		0..1	Period	Period device was used
	set whenUsed(whenUsed) {
		this._whenUsed = new Period(whenUsed);
	}

	get whenUsed() {
		return this._whenUsed;
	}

	// timing[x]		0..1		How often the device was used
	// timingTiming			Timing
	set timingTiming(timingTiming) {
		this._timingTiming = new Timing(timingTiming);
	}

	get timingTiming() {
		return this._timingTiming;
	}

	// timingPeriod			Period
	set timingPeriod(timingPeriod) {
		this._timingPeriod = new Period(timingPeriod);
	}

	get timingPeriod() {
		return this._timingPeriod;
	}

	// timingDateTime			dateTime
	set timingDateTime(timingDateTime) {
		this._timingDateTime = timingDateTime;
	}

	get timingDateTime() {
		return this._timingDateTime;
	}

	// recordedOn		0..1	dateTime	When statement was recorded
	set recordedOn(recordedOn) {
		this._recordedOn = recordedOn;
	}

	get recordedOn() {
		return this._recordedOn;
	}

	// source		0..1	Reference(Patient | Practitioner | RelatedPerson)	Who made the statement
	set source(source) {
		this._source = new Reference(source);
	}

	get source() {
		return this._source;
	}

	// device		1..1	Reference(Device)	Reference to device used
	set device(device) {
		this._device = new Reference(device);
	}

	get device() {
		return this._device;
	}

	// indication		0..*	CodeableConcept	Why device was used
	set indication(indication) {
		if (Array.isArray(indication)) {
			this._indication = indication.map((i) => new CodeableConcept(i));
		} else {
			this._indication = [new CodeableConcept(indication)];
		}
	}

	get indication() {
		return this._indication;
	}

	// bodySite		0..1	CodeableConcept	Target body site
	// SNOMED CT Body Structures (Example)
	set bodySite(bodySite) {
		this._bodySite = new CodeableConcept(bodySite);
	}

	get bodySite() {
		return this._bodySite;
	}

	// note		0..*	Annotation	Addition details (comments, instructions)
	set note(note) {
		if (Array.isArray(note)) {
			this._note = note.map((i) => new Annotation(i));
		} else {
			this._note = [new Annotation(note)];
		}
	}

	get note() {
		return this._note;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			subject: this._subject,
			whenUsed: this._whenUsed,
			timingTiming: this._timingTiming,
			timingPeriod: this._timingPeriod,
			timingDateTime: this._timingDateTime,
			recordedOn: this._recordedOn,
			source: this._source,
			device: this._device,
			indication: this._indication,
			bodySite: this._bodySite,
			note: this._note,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.DeviceUseStatement = DeviceUseStatement;
