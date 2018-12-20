const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class SupplyRequest extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'SupplyRequest';
		Object.assign(this, opt);
	}

	// This is a SupplyRequest resource
	static get __resourceType() {
		return 'SupplyRequest';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__SupplyRequest = new_value;
	}

	// Unique identifier for this supply request.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// Status of the supply request.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__category = new CodeableConcept(new_value);
	}

	// Indicates how quickly this SupplyRequest should be addressed with respect to other requests.
	get priority() {
		return this.__priority;
	}

	set priority(new_value) {
		this.__priority = new_value;
	}

	// The item being requested.
	get orderedItem() {
		return this.__orderedItem;
	}

	set orderedItem(new_value) {
		const SupplyRequestOrderedItem = require('./SupplyRequestOrderedItem');
		this.__orderedItem = new SupplyRequestOrderedItem(new_value);
	}

	// When the request should be fulfilled.
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

	// When the request should be fulfilled.
	get occurrencePeriod() {
		return this.__occurrencePeriod;
	}

	set occurrencePeriod(new_value) {
		const Period = require('./Period');
		this.__occurrencePeriod = new Period(new_value);
	}

	// When the request should be fulfilled.
	get occurrenceTiming() {
		return this.__occurrenceTiming;
	}

	set occurrenceTiming(new_value) {
		const Timing = require('./Timing');
		this.__occurrenceTiming = new Timing(new_value);
	}

	// When the request was made.
	get authoredOn() {
		return this.__authoredOn;
	}

	set authoredOn(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field authoredOn`);
		}
		this.__authoredOn = new_value;
	}

	// The individual who initiated the request and has responsibility for its activation.
	get requester() {
		return this.__requester;
	}

	set requester(new_value) {
		const SupplyRequestRequester = require('./SupplyRequestRequester');
		this.__requester = new SupplyRequestRequester(new_value);
	}

	// Who is intended to fulfill the request.
	get supplier() {
		return this.__supplier;
	}

	set supplier(new_value) {
		const Reference = require('./Reference');
		this.__supplier = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Why the supply item was requested.
	get reasonCodeableConcept() {
		return this.__reasonCodeableConcept;
	}

	set reasonCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reasonCodeableConcept = new CodeableConcept(new_value);
	}

	// Why the supply item was requested.
	get reasonReference() {
		return this.__reasonReference;
	}

	set reasonReference(new_value) {
		const Reference = require('./Reference');
		this.__reasonReference = new Reference(new_value);
	}

	// Where the supply is expected to come from.
	get deliverFrom() {
		return this.__deliverFrom;
	}

	set deliverFrom(new_value) {
		const Reference = require('./Reference');
		this.__deliverFrom = new Reference(new_value);
	}

	// Where the supply is destined to go.
	get deliverTo() {
		return this.__deliverTo;
	}

	set deliverTo(new_value) {
		const Reference = require('./Reference');
		this.__deliverTo = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.toJSON(),
			status: this.__status,
			category: this.__category && this.__category.toJSON(),
			priority: this.__priority,
			orderedItem: this.__orderedItem && this.__orderedItem.toJSON(),
			occurrenceDateTime: this.__occurrenceDateTime,
			occurrencePeriod: this.__occurrencePeriod && this.__occurrencePeriod.toJSON(),
			occurrenceTiming: this.__occurrenceTiming && this.__occurrenceTiming.toJSON(),
			authoredOn: this.__authoredOn,
			requester: this.__requester && this.__requester.toJSON(),
			supplier: this.__supplier && this.__supplier.map(v => v.toJSON()),
			reasonCodeableConcept: this.__reasonCodeableConcept && this.__reasonCodeableConcept.toJSON(),
			reasonReference: this.__reasonReference && this.__reasonReference.toJSON(),
			deliverFrom: this.__deliverFrom && this.__deliverFrom.toJSON(),
			deliverTo: this.__deliverTo && this.__deliverTo.toJSON(),
		});
	}
}

module.exports = SupplyRequest;
