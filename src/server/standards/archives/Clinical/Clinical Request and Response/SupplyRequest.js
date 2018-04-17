const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Period = require('./types/Period');
const Timing = require('./types/Timing');
const Reference = require('./types/Reference');
const Quantity = require('./types/Quantity');

class Requester {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// agent	Σ	1..1	Reference(Practitioner | Organization | Patient | RelatedPerson | Device)	Individual making the request
	set agent(agent) {
		this._agent = new Reference(agent);
	}

	get agent() {
		return this._agent;
	}

	// onBehalfOf		0..1	Reference(Organization)	Organization agent is acting for
	set onBehalfOf(onBehalfOf) {
		this._onBehalfOf = new Reference(onBehalfOf);
	}

	get onBehalfOf() {
		return this._onBehalfOf;
	}

	toJSON() {
		return {
			agent: this._agent,
			onBehalfOf: this._onBehalfOf,
		};
	}
}

class OrderedItem {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// quantity	Σ	1..1	Quantity	The requested amount of the item indicated
	set quantity(quantity) {
		this._quantity = new Quantity(quantity);
	}

	get quantity() {
		return this._quantity;
	}

	// item[x]	Σ	0..1		Medication, Substance, or Device requested to be supplied
	// SNOMED CT Supply Item (Example)
	// itemCodeableConcept			CodeableConcept
	set itemCodeableConcept(itemCodeableConcept) {
		this._itemCodeableConcept = new CodeableConcept(itemCodeableConcept);
	}

	get itemCodeableConcept() {
		return this._itemCodeableConcept;
	}

	// itemReference			Reference
	set itemReference(itemReference) {
		this._itemReference = new Reference(itemReference);
	}

	get itemReference() {
		return this._itemReference;
	}

	toJSON() {
		return {
			quantity: this._quantity,
			itemCodeableConcept: this._itemCodeableConcept,
			itemReference: this._itemReference,
		};
	}
}

class SupplyRequest extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'SupplyRequest';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..1	Identifier	Unique identifier
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// status	?!Σ	0..1	code	draft | active | suspended +
	// SupplyRequestStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// category	Σ	0..1	CodeableConcept	The kind of supply (central, non-stock, etc.)
	// Supply Type (Example)
	set category(category) {
		this._category = new CodeableConcept(category);
	}

	get category() {
		return this._category;
	}

	// priority	Σ	0..1	code	routine | urgent | asap | stat
	// RequestPriority (Required)
	set priority(priority) {
		this._priority = new Code(priority);
	}

	get priority() {
		return this._priority;
	}

	// occurrence[x]	Σ	0..1		When the request should be fulfilled
	// occurrenceDateTime			dateTime
	set occurrenceDateTime(occurrenceDateTime) {
		this._occurrenceDateTime = occurrenceDateTime;
	}

	get occurrenceDateTime() {
		return this._occurrenceDateTime;
	}

	// occurrencePeriod			Period
	set occurrencePeriod(occurrencePeriod) {
		this._occurrencePeriod = new Period(occurrencePeriod);
	}

	get occurrencePeriod() {
		return this._occurrencePeriod;
	}

	// occurrenceTiming			Timing
	set occurrenceTiming(occurrenceTiming) {
		this._occurrenceTiming = new Timing(occurrenceTiming);
	}

	get occurrenceTiming() {
		return this._occurrenceTiming;
	}

	// authoredOn	Σ	0..1	dateTime	When the request was made
	set authoredOn(authoredOn) {
		this._authoredOn = authoredOn;
	}

	get authoredOn() {
		return this._authoredOn;
	}

	// supplier	Σ	0..*	Reference(Organization)	Who is intended to fulfill the request
	set supplier(supplier) {
		if (Array.isArray(supplier)) {
			this._supplier = supplier.map((i) => new Reference(i));
		} else {
			this._supplier = [new Reference(supplier)];
		}
	}

	get supplier() {
		return this._supplier;
	}

	// reason[x]		0..1		Why the supply item was requested
	// SupplyRequestReason (Example)
	// reasonCodeableConcept			CodeableConcept
	set reasonCodeableConcept(reasonCodeableConcept) {
		this._reasonCodeableConcept = new CodeableConcept(reasonCodeableConcept);
	}

	get reasonCodeableConcept() {
		return this._reasonCodeableConcept;
	}

	// reasonReference			Reference
	set reasonReference(reasonReference) {
		this._reasonReference = new Reference(reasonReference);
	}

	get reasonReference() {
		return this._reasonReference;
	}

	// deliverFrom		0..1	Reference(Organization | Location)	The origin of the supply
	set deliverFrom(deliverFrom) {
		this._deliverFrom = new Reference(deliverFrom);
	}

	get deliverFrom() {
		return this._deliverFrom;
	}

	// deliverTo		0..1	Reference(Organization | Location | Patient)	The destination of the supply
	set deliverTo(deliverTo) {
		this._deliverTo = new Reference(deliverTo);
	}

	get deliverTo() {
		return this._deliverTo;
	}

	// orderedItem	Σ	0..1	BackboneElement	The item being requested
	set orderedItem(orderedItem) {
		this._orderedItem = new OrderedItem(orderedItem);
	}

	get orderedItem() {
		return this._orderedItem;
	}

	// requester	Σ	0..1	BackboneElement	Who/what is requesting service
	set requester(requester) {
		this._requester = new Requester(requester);
	}

	get requester() {
		return this._requester;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			category: this._category,
			priority: this._priority,
			occurrenceDateTime: this._occurrenceDateTime,
			occurrencePeriod: this._occurrencePeriod,
			occurrenceTiming: this._occurrenceTiming,
			authoredOn: this._authoredOn,
			supplier: this._supplier,
			reasonCodeableConcept: this._reasonCodeableConcept,
			reasonReference: this._reasonReference,
			deliverFrom: this._deliverFrom,
			deliverTo: this._deliverTo,
			orderedItem: this._orderedItem,
			requester: this._requester,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.SupplyRequest = SupplyRequest;
module.exports.OrderedItem = OrderedItem;
module.exports.Requester = Requester;
