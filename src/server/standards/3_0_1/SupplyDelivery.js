const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const SupplyDelivery_SuppliedItem = require('./SupplyDelivery_SuppliedItem');
const Period = require('./Period');
const Timing = require('./Timing');

class SupplyDelivery extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'SupplyDelivery';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'SupplyDelivery';
	}

	// This is a SupplyDelivery resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['SupplyDelivery'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Identifier assigned by the dispensing facility when the item(s) is dispensed.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// A plan, proposal or order that is fulfilled in whole or in part by this event.
	get basedOn () {
		return this._basedOn;
	}

	set basedOn ( new_value ) {
		this._basedOn = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A larger event of which this particular event is a component or step.
	get partOf () {
		return this._partOf;
	}

	set partOf ( new_value ) {
		this._partOf = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A code specifying the state of the dispense event.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['in-progress', 'completed', 'abandoned', 'entered-in-error'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// A link to a resource representing the person whom the delivered item is for.
	get patient () {
		return this._patient;
	}

	set patient ( new_value ) {
		this._patient = new Reference(new_value);
	}

	// Indicates the type of dispensing event that is performed. Examples include: Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// The item that is being delivered or has been supplied.
	get suppliedItem () {
		return this._suppliedItem;
	}

	set suppliedItem ( new_value ) {
		this._suppliedItem = new SupplyDelivery_SuppliedItem(new_value);
	}

	// The date or time(s) the activity occurred.
	get occurrenceDateTime () {
		return this._occurrenceDateTime;
	}

	set occurrenceDateTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field occurrenceDateTime`);
		}
		this._occurrenceDateTime = new_value;
	}

	// The date or time(s) the activity occurred.
	get occurrencePeriod () {
		return this._occurrencePeriod;
	}

	set occurrencePeriod ( new_value ) {
		this._occurrencePeriod = new Period(new_value);
	}

	// The date or time(s) the activity occurred.
	get occurrenceTiming () {
		return this._occurrenceTiming;
	}

	set occurrenceTiming ( new_value ) {
		this._occurrenceTiming = new Timing(new_value);
	}

	// The individual responsible for dispensing the medication, supplier or device.
	get supplier () {
		return this._supplier;
	}

	set supplier ( new_value ) {
		this._supplier = new Reference(new_value);
	}

	// Identification of the facility/location where the Supply was shipped to, as part of the dispense event.
	get destination () {
		return this._destination;
	}

	set destination ( new_value ) {
		this._destination = new Reference(new_value);
	}

	// Identifies the person who picked up the Supply.
	get receiver () {
		return this._receiver;
	}

	set receiver ( new_value ) {
		this._receiver = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.toJSON(),
			basedOn: this._basedOn && this._basedOn.map(v => v.toJSON()),
			partOf: this._partOf && this._partOf.map(v => v.toJSON()),
			status: this._status,
			patient: this._patient && this._patient.toJSON(),
			type: this._type && this._type.toJSON(),
			suppliedItem: this._suppliedItem && this._suppliedItem.toJSON(),
			occurrenceDateTime: this._occurrenceDateTime,
			occurrencePeriod: this._occurrencePeriod && this._occurrencePeriod.toJSON(),
			occurrenceTiming: this._occurrenceTiming && this._occurrenceTiming.toJSON(),
			supplier: this._supplier && this._supplier.toJSON(),
			destination: this._destination && this._destination.toJSON(),
			receiver: this._receiver && this._receiver.map(v => v.toJSON())
		});
	}

}

module.exports = SupplyDelivery;
