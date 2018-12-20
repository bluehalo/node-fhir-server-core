const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class SupplyDelivery extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'SupplyDelivery';
		Object.assign(this, opt);
	}

	// This is a SupplyDelivery resource
	static get __resourceType() {
		return 'SupplyDelivery';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__SupplyDelivery = new_value;
	}

	// Identifier assigned by the dispensing facility when the item(s) is dispensed.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// A plan, proposal or order that is fulfilled in whole or in part by this event.
	get basedOn() {
		return this.__basedOn;
	}

	set basedOn(new_value) {
		const Reference = require('./Reference');
		this.__basedOn = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A larger event of which this particular event is a component or step.
	get partOf() {
		return this.__partOf;
	}

	set partOf(new_value) {
		const Reference = require('./Reference');
		this.__partOf = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A code specifying the state of the dispense event.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// A link to a resource representing the person whom the delivered item is for.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// Indicates the type of dispensing event that is performed. Examples include: Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// The item that is being delivered or has been supplied.
	get suppliedItem() {
		return this.__suppliedItem;
	}

	set suppliedItem(new_value) {
		const SupplyDeliverySuppliedItem = require('./SupplyDeliverySuppliedItem');
		this.__suppliedItem = new SupplyDeliverySuppliedItem(new_value);
	}

	// The date or time(s) the activity occurred.
	get occurrenceDateTime() {
		return this.__occurrenceDateTime;
	}

	set occurrenceDateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field occurrenceDateTime`);
		}
		this.__occurrenceDateTime = new_value;
	}

	// The date or time(s) the activity occurred.
	get occurrencePeriod() {
		return this.__occurrencePeriod;
	}

	set occurrencePeriod(new_value) {
		const Period = require('./Period');
		this.__occurrencePeriod = new Period(new_value);
	}

	// The date or time(s) the activity occurred.
	get occurrenceTiming() {
		return this.__occurrenceTiming;
	}

	set occurrenceTiming(new_value) {
		const Timing = require('./Timing');
		this.__occurrenceTiming = new Timing(new_value);
	}

	// The individual responsible for dispensing the medication, supplier or device.
	get supplier() {
		return this.__supplier;
	}

	set supplier(new_value) {
		const Reference = require('./Reference');
		this.__supplier = new Reference(new_value);
	}

	// Identification of the facility/location where the Supply was shipped to, as part of the dispense event.
	get destination() {
		return this.__destination;
	}

	set destination(new_value) {
		const Reference = require('./Reference');
		this.__destination = new Reference(new_value);
	}

	// Identifies the person who picked up the Supply.
	get receiver() {
		return this.__receiver;
	}

	set receiver(new_value) {
		const Reference = require('./Reference');
		this.__receiver = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.toJSON(),
			basedOn: this.__basedOn && this.__basedOn.map(v => v.toJSON()),
			partOf: this.__partOf && this.__partOf.map(v => v.toJSON()),
			status: this.__status,
			patient: this.__patient && this.__patient.toJSON(),
			type: this.__type && this.__type.toJSON(),
			suppliedItem: this.__suppliedItem && this.__suppliedItem.toJSON(),
			occurrenceDateTime: this.__occurrenceDateTime,
			occurrencePeriod: this.__occurrencePeriod && this.__occurrencePeriod.toJSON(),
			occurrenceTiming: this.__occurrenceTiming && this.__occurrenceTiming.toJSON(),
			supplier: this.__supplier && this.__supplier.toJSON(),
			destination: this.__destination && this.__destination.toJSON(),
			receiver: this.__receiver && this.__receiver.map(v => v.toJSON()),
		});
	}
}

module.exports = SupplyDelivery;
