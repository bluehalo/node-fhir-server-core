const DomainResource = require('./DomainResource');
const DateScalar = require('./scalars/Date.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class PaymentNotice extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'PaymentNotice';
		Object.assign(this, opt);
	}

	// This is a PaymentNotice resource
	static get __resourceType() {
		return 'PaymentNotice';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__PaymentNotice = new_value;
	}

	// The notice business identifier.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// The status of the resource instance.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Reference of resource for which payment is being made.
	get request() {
		return this.__request;
	}

	set request(new_value) {
		const Reference = require('./Reference');
		this.__request = new Reference(new_value);
	}

	// Reference of response to resource for which payment is being made.
	get response() {
		return this.__response;
	}

	set response(new_value) {
		const Reference = require('./Reference');
		this.__response = new Reference(new_value);
	}

	// The date when the above payment action occurrred.
	get statusDate() {
		return this.__statusDate;
	}

	set statusDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field statusDate`);
		}
		this.__statusDate = new_value;
	}

	// The date when this resource was created.
	get created() {
		return this.__created;
	}

	set created(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field created`);
		}
		this.__created = new_value;
	}

	// The Insurer who is target  of the request.
	get target() {
		return this.__target;
	}

	set target(new_value) {
		const Reference = require('./Reference');
		this.__target = new Reference(new_value);
	}

	// The practitioner who is responsible for the services rendered to the patient.
	get provider() {
		return this.__provider;
	}

	set provider(new_value) {
		const Reference = require('./Reference');
		this.__provider = new Reference(new_value);
	}

	// The organization which is responsible for the services rendered to the patient.
	get organization() {
		return this.__organization;
	}

	set organization(new_value) {
		const Reference = require('./Reference');
		this.__organization = new Reference(new_value);
	}

	// The payment status, typically paid: payment sent, cleared: payment received.
	get paymentStatus() {
		return this.__paymentStatus;
	}

	set paymentStatus(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__paymentStatus = new CodeableConcept(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			status: this.__status,
			request: this.__request && this.__request.toJSON(),
			response: this.__response && this.__response.toJSON(),
			statusDate: this.__statusDate,
			created: this.__created,
			target: this.__target && this.__target.toJSON(),
			provider: this.__provider && this.__provider.toJSON(),
			organization: this.__organization && this.__organization.toJSON(),
			paymentStatus: this.__paymentStatus && this.__paymentStatus.toJSON(),
		});
	}
}

module.exports = PaymentNotice;
