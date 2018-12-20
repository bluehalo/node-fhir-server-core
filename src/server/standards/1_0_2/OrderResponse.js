const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class OrderResponse extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'OrderResponse';
		Object.assign(this, opt);
	}

	// This is a OrderResponse resource
	static get __resourceType() {
		return 'OrderResponse';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__OrderResponse = new_value;
	}

	// Identifiers assigned to this order. The identifiers are usually assigned by the system responding to the order, but they may be provided or added to by other systems.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// A reference to the order that this is in response to.
	get request() {
		return this.__request;
	}

	set request(new_value) {
		const Reference = require('./Reference');
		this.__request = new Reference(new_value);
	}

	// The date and time at which this order response was made (created/posted).
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

	// The person, organization, or device credited with making the response.
	get who() {
		return this.__who;
	}

	set who(new_value) {
		const Reference = require('./Reference');
		this.__who = new Reference(new_value);
	}

	// What this response says about the status of the original order.
	get orderStatus() {
		return this.__orderStatus;
	}

	set orderStatus(new_value) {
		this.__orderStatus = new_value;
	}

	// Additional description about the response - e.g. a text description provided by a human user when making decisions about the order.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Links to resources that provide details of the outcome of performing the order; e.g. Diagnostic Reports in a response that is made to an order that referenced a diagnostic order.
	get fulfillment() {
		return this.__fulfillment;
	}

	set fulfillment(new_value) {
		const Reference = require('./Reference');
		this.__fulfillment = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			request: this.__request && this.__request.toJSON(),
			date: this.__date,
			who: this.__who && this.__who.toJSON(),
			orderStatus: this.__orderStatus,
			description: this.__description,
			fulfillment: this.__fulfillment && this.__fulfillment.map(v => v.toJSON()),
		});
	}
}

module.exports = OrderResponse;
