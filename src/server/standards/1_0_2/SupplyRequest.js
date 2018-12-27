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

	// A link to a resource representing the person whom the ordered item is for.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// The Practitioner , Organization or Patient who initiated this order for the supply.
	get source() {
		return this.__source;
	}

	set source(new_value) {
		const Reference = require('./Reference');
		this.__source = new Reference(new_value);
	}

	// When the request was made.
	get date() {
		return this.__date;
	}

	set date(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this.__date = new_value;
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
	get kind() {
		return this.__kind;
	}

	set kind(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__kind = new CodeableConcept(new_value);
	}

	// The item that is requested to be supplied.
	get orderedItem() {
		return this.__orderedItem;
	}

	set orderedItem(new_value) {
		const Reference = require('./Reference');
		this.__orderedItem = new Reference(new_value);
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

	// When the request should be fulfilled.
	get when() {
		return this.__when;
	}

	set when(new_value) {
		const SupplyRequestWhen = require('./SupplyRequestWhen');
		this.__when = new SupplyRequestWhen(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			patient: this.__patient && this.__patient.toJSON(),
			source: this.__source && this.__source.toJSON(),
			date: this.__date,
			identifier: this.__identifier && this.__identifier.toJSON(),
			status: this.__status,
			kind: this.__kind && this.__kind.toJSON(),
			orderedItem: this.__orderedItem && this.__orderedItem.toJSON(),
			supplier: this.__supplier && this.__supplier.map(v => v.toJSON()),
			reasonCodeableConcept: this.__reasonCodeableConcept && this.__reasonCodeableConcept.toJSON(),
			reasonReference: this.__reasonReference && this.__reasonReference.toJSON(),
			when: this.__when && this.__when.toJSON(),
		});
	}
}

module.exports = SupplyRequest;
