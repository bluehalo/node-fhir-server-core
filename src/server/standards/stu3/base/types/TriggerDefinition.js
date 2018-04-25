const Element = require('./Element');
const Code = require('./Code');
const Timing = require('./Timing');
const Reference = require('./Reference');
const DataRequirement = require('./DataRequirement');

class TriggerDefinition extends Element {
	constructor(obj) {
		super();
		Object.assign(this, obj);
	}

	// type	Σ	1..1	code	named-event | periodic | data-added | data-modified | data-removed | data-accessed | data-access-ended
	// TriggerType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// eventName	Σ	0..1	string	Triggering event name
	set eventName(eventName) {
		this._eventName = eventName;
	}

	get eventName() {
		return this._eventName;
	}

	// eventTiming[x]	Σ	0..1		Timing of the event
	// eventTimingTiming			Timing
	set eventTimingTiming(eventTimingTiming) {
		this._eventTimingTiming = new Timing(eventTimingTiming);
	}

	get eventTimingTiming() {
		return this._eventTimingTiming;
	}

	// eventTimingReference			Reference
	set eventTimingReference(eventTimingReference) {
		this._eventTimingReference = new Reference(eventTimingReference);
	}

	get eventTimingReference() {
		return this._eventTimingReference;
	}

	// eventTimingDate			date
	set eventTimingDate(eventTimingDate) {
		this._eventTimingDate = eventTimingDate;
	}

	get eventTimingDate() {
		return this._eventTimingDate;
	}

	// eventTimingDateTime			dateTime
	set eventTimingDateTime(eventTimingDateTime) {
		this._eventTimingDateTime = eventTimingDateTime;
	}

	get eventTimingDateTime() {
		return this._eventTimingDateTime;
	}

	// eventData	Σ	0..1	DataRequirement	Triggering data of the event
	set eventData(eventData) {
		this._eventData = new DataRequirement(eventData);
	}

	get eventData() {
		return this._eventData;
	}

	toJSON() {
		const json = {
			type: this._type,
			eventName: this._eventName,
			eventTimingTiming: this._eventTimingTiming,
			eventTimingReference: this._eventTimingReference,
			eventTimingDate: this._eventTimingDate,
			eventTimingDateTime: this._eventTimingDateTime,
			eventData: this._eventData,
		};

		return Object.assign(super.toJSON(), json);
	}
}

module.exports = TriggerDefinition;
