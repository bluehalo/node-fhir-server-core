const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class Order extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Order';
		Object.assign(this, opt);
	}

	// This is a Order resource
	static get __resourceType() {
		return 'Order';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Order = new_value;
	}

	// Identifiers assigned to this order by the orderer or by the receiver.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// When the order was made.
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

	// Patient this order is about.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// Who initiated the order.
	get source() {
		return this.__source;
	}

	set source(new_value) {
		const Reference = require('./Reference');
		this.__source = new Reference(new_value);
	}

	// Who is intended to fulfill the order.
	get target() {
		return this.__target;
	}

	set target(new_value) {
		const Reference = require('./Reference');
		this.__target = new Reference(new_value);
	}

	// Text - why the order was made.
	get reasonCodeableConcept() {
		return this.__reasonCodeableConcept;
	}

	set reasonCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reasonCodeableConcept = new CodeableConcept(new_value);
	}

	// Text - why the order was made.
	get reasonReference() {
		return this.__reasonReference;
	}

	set reasonReference(new_value) {
		const Reference = require('./Reference');
		this.__reasonReference = new Reference(new_value);
	}

	// When order should be fulfilled.
	get when() {
		return this.__when;
	}

	set when(new_value) {
		const OrderWhen = require('./OrderWhen');
		this.__when = new OrderWhen(new_value);
	}

	// What action is being ordered.
	get detail() {
		return this.__detail;
	}

	set detail(new_value) {
		const Reference = require('./Reference');
		this.__detail = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			date: this.__date,
			subject: this.__subject && this.__subject.toJSON(),
			source: this.__source && this.__source.toJSON(),
			target: this.__target && this.__target.toJSON(),
			reasonCodeableConcept: this.__reasonCodeableConcept && this.__reasonCodeableConcept.toJSON(),
			reasonReference: this.__reasonReference && this.__reasonReference.toJSON(),
			when: this.__when && this.__when.toJSON(),
			detail: this.__detail && this.__detail.map(v => v.toJSON()),
		});
	}
}

module.exports = Order;
