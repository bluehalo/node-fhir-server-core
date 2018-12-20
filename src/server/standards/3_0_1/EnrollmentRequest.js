const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class EnrollmentRequest extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'EnrollmentRequest';
		Object.assign(this, opt);
	}

	// This is a EnrollmentRequest resource
	static get __resourceType() {
		return 'EnrollmentRequest';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__EnrollmentRequest = new_value;
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
	get insurer() {
		return this.__insurer;
	}

	set insurer(new_value) {
		const Reference = require('./Reference');
		this.__insurer = new Reference(new_value);
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

	// Patient Resource.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// Reference to the program or plan identification, underwriter or payor.
	get coverage() {
		return this.__coverage;
	}

	set coverage(new_value) {
		const Reference = require('./Reference');
		this.__coverage = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			status: this.__status,
			created: this.__created,
			insurer: this.__insurer && this.__insurer.toJSON(),
			provider: this.__provider && this.__provider.toJSON(),
			organization: this.__organization && this.__organization.toJSON(),
			subject: this.__subject && this.__subject.toJSON(),
			coverage: this.__coverage && this.__coverage.toJSON(),
		});
	}
}

module.exports = EnrollmentRequest;
