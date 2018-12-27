const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class EligibilityResponse extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'EligibilityResponse';
		Object.assign(this, opt);
	}

	// This is a EligibilityResponse resource
	static get __resourceType() {
		return 'EligibilityResponse';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__EligibilityResponse = new_value;
	}

	// The Response business identifier.
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

	// The date when the enclosed suite of services were performed or completed.
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

	// The practitioner who is responsible for the services rendered to the patient.
	get requestProvider() {
		return this.__requestProvider;
	}

	set requestProvider(new_value) {
		const Reference = require('./Reference');
		this.__requestProvider = new Reference(new_value);
	}

	// The organization which is responsible for the services rendered to the patient.
	get requestOrganization() {
		return this.__requestOrganization;
	}

	set requestOrganization(new_value) {
		const Reference = require('./Reference');
		this.__requestOrganization = new Reference(new_value);
	}

	// Original request resource reference.
	get request() {
		return this.__request;
	}

	set request(new_value) {
		const Reference = require('./Reference');
		this.__request = new Reference(new_value);
	}

	// Transaction status: error, complete.
	get outcome() {
		return this.__outcome;
	}

	set outcome(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__outcome = new CodeableConcept(new_value);
	}

	// A description of the status of the adjudication.
	get disposition() {
		return this.__disposition;
	}

	set disposition(new_value) {
		this.__disposition = new_value;
	}

	// The Insurer who produced this adjudicated response.
	get insurer() {
		return this.__insurer;
	}

	set insurer(new_value) {
		const Reference = require('./Reference');
		this.__insurer = new Reference(new_value);
	}

	// Flag indicating if the coverage provided is inforce currently  if no service date(s) specified or for the whole duration of the service dates.
	get inforce() {
		return this.__inforce;
	}

	set inforce(new_value) {
		this.__inforce = new_value;
	}

	// The insurer may provide both the details for the requested coverage as well as details for additional coverages known to the insurer.
	get insurance() {
		return this.__insurance;
	}

	set insurance(new_value) {
		const EligibilityResponseInsurance = require('./EligibilityResponseInsurance');
		this.__insurance = Array.isArray(new_value)
			? new_value.map(val => new EligibilityResponseInsurance(val))
			: [new EligibilityResponseInsurance(new_value)];
	}

	// The form to be used for printing the content.
	get form() {
		return this.__form;
	}

	set form(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__form = new CodeableConcept(new_value);
	}

	// Mutually exclusive with Services Provided (Item).
	get error() {
		return this.__error;
	}

	set error(new_value) {
		const EligibilityResponseError = require('./EligibilityResponseError');
		this.__error = Array.isArray(new_value)
			? new_value.map(val => new EligibilityResponseError(val))
			: [new EligibilityResponseError(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			status: this.__status,
			created: this.__created,
			requestProvider: this.__requestProvider && this.__requestProvider.toJSON(),
			requestOrganization: this.__requestOrganization && this.__requestOrganization.toJSON(),
			request: this.__request && this.__request.toJSON(),
			outcome: this.__outcome && this.__outcome.toJSON(),
			disposition: this.__disposition,
			insurer: this.__insurer && this.__insurer.toJSON(),
			inforce: this.__inforce,
			insurance: this.__insurance && this.__insurance.map(v => v.toJSON()),
			form: this.__form && this.__form.toJSON(),
			error: this.__error && this.__error.map(v => v.toJSON()),
		});
	}
}

module.exports = EligibilityResponse;
