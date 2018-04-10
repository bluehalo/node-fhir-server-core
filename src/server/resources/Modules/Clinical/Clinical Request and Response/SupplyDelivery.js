const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Reference = require('./types/Reference');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Period = require('./types/Period');
const Timing = require('./types/Timing');

class SuppliedItem {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// quantity		0..1	SimpleQuantity	Amount dispensed
	set quantity(quantity) {
		this._quantity = quantity;
	}

	get quantity() {
		return this._quantity;
	}

	// item[x]		0..1		Medication, Substance, or Device supplied
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

class SupplyDelivery extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'SupplyDelivery';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier		0..1	Identifier	External identifier
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// basedOn	Σ	0..*	Reference(SupplyRequest)	Fulfills plan, proposal or order
	set basedOn(basedOn) {
		if (Array.isArray(basedOn)) {
			this._basedOn = basedOn.map((i) => new Reference(i));
		} else {
			this._basedOn = [new Reference(basedOn)];
		}
	}

	get basedOn() {
		return this._basedOn;
	}

	// partOf	Σ	0..*	Reference(SupplyDelivery | Contract)	Part of referenced event
	set partOf(partOf) {
		if (Array.isArray(partOf)) {
			this._partOf = partOf.map((i) => new Reference(i));
		} else {
			this._partOf = [new Reference(partOf)];
		}
	}

	get partOf() {
		return this._partOf;
	}

	// status	?!Σ	0..1	code	in-progress | completed | abandoned | entered-in-error
	// SupplyDeliveryStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// patient		0..1	Reference(Patient)	Patient for whom the item is supplied
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// type		0..1	CodeableConcept	Category of dispense event
	// Supply Item Type (Required)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// occurrence[x]	Σ	0..1		When event occurred
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

	// supplier		0..1	Reference(Practitioner | Organization)	Dispenser
	set supplier(supplier) {
		this._supplier = new Reference(supplier);
	}

	get supplier() {
		return this._supplier;
	}

	// destination		0..1	Reference(Location)	Where the Supply was sent
	set destination(destination) {
		this._destination = new Reference(destination);
	}

	get destination() {
		return this._destination;
	}

	// receiver		0..*	Reference(Practitioner)	Who collected the Supply
	set receiver(receiver) {
		if (Array.isArray(receiver)) {
			this._receiver = receiver.map((i) => new Reference(i));
		} else {
			this._receiver = [new Reference(receiver)];
		}
	}

	get receiver() {
		return this._receiver;
	}

	// suppliedItem		0..1	BackboneElement	The item that is delivered or supplied
	set suppliedItem(suppliedItem) {
		this._suppliedItem = new SuppliedItem(suppliedItem);
	}

	get suppliedItem() {
		return this._suppliedItem;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			basedOn: this._basedOn,
			partOf: this._partOf,
			status: this._status,
			patient: this._patient,
			type: this._type,
			occurrenceDateTime: this._occurrenceDateTime,
			occurrencePeriod: this._occurrencePeriod,
			occurrenceTiming: this._occurrenceTiming,
			supplier: this._supplier,
			destination: this._destination,
			receiver: this._receiver,
			suppliedItem: this._suppliedItem,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.SupplyDelivery = SupplyDelivery;
module.exports.SuppliedItem = SuppliedItem;
