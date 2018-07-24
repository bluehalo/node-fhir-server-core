const Element = require('./Element');
const Timing = require('./Timing');
const Reference = require('./Reference');
const DataRequirement = require('./DataRequirement');

class TriggerDefinition extends Element {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'TriggerDefinition';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'TriggerDefinition';
	}

	// The type of triggering event.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['named-event', 'periodic', 'data-added', 'data-modified', 'data-removed', 'data-accessed', 'data-access-ended'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	// The name of the event (if this is a named-event trigger).
	get eventName () {
		return this._eventName;
	}

	set eventName ( new_value ) {
		this._eventName = new_value;
	}

	// The timing of the event (if this is a period trigger).
	get eventTimingTiming () {
		return this._eventTimingTiming;
	}

	set eventTimingTiming ( new_value ) {
		this._eventTimingTiming = new Timing(new_value);
	}

	// The timing of the event (if this is a period trigger).
	get eventTimingReference () {
		return this._eventTimingReference;
	}

	set eventTimingReference ( new_value ) {
		this._eventTimingReference = new Reference(new_value);
	}

	// The timing of the event (if this is a period trigger).
	get eventTimingDate () {
		return this._eventTimingDate;
	}

	set eventTimingDate ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field eventTimingDate`);
		}
		this._eventTimingDate = new_value;
	}

	// The timing of the event (if this is a period trigger).
	get eventTimingDateTime () {
		return this._eventTimingDateTime;
	}

	set eventTimingDateTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field eventTimingDateTime`);
		}
		this._eventTimingDateTime = new_value;
	}

	// The triggering data of the event (if this is a data trigger).
	get eventData () {
		return this._eventData;
	}

	set eventData ( new_value ) {
		this._eventData = new DataRequirement(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this._type,
			eventName: this._eventName,
			eventTimingTiming: this._eventTimingTiming && this._eventTimingTiming.toJSON(),
			eventTimingReference: this._eventTimingReference && this._eventTimingReference.toJSON(),
			eventTimingDate: this._eventTimingDate,
			eventTimingDateTime: this._eventTimingDateTime,
			eventData: this._eventData && this._eventData.toJSON()
		});
	}

}

module.exports = TriggerDefinition;
