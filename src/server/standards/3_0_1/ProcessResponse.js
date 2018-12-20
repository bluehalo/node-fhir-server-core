const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class ProcessResponse extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ProcessResponse';
		Object.assign(this, opt);
	}

	// This is a ProcessResponse resource
	static get __resourceType() {
		return 'ProcessResponse';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__ProcessResponse = new_value;
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

	// The organization who produced this adjudicated response.
	get organization() {
		return this.__organization;
	}

	set organization(new_value) {
		const Reference = require('./Reference');
		this.__organization = new Reference(new_value);
	}

	// Original request resource reference.
	get request() {
		return this.__request;
	}

	set request(new_value) {
		const Reference = require('./Reference');
		this.__request = new Reference(new_value);
	}

	// Transaction status: error, complete, held.
	get outcome() {
		return this.__outcome;
	}

	set outcome(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__outcome = new CodeableConcept(new_value);
	}

	// A description of the status of the adjudication or processing.
	get disposition() {
		return this.__disposition;
	}

	set disposition(new_value) {
		this.__disposition = new_value;
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

	// The form to be used for printing the content.
	get form() {
		return this.__form;
	}

	set form(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__form = new CodeableConcept(new_value);
	}

	// Suite of processing notes or additional requirements if the processing has been held.
	get processNote() {
		return this.__processNote;
	}

	set processNote(new_value) {
		const ProcessResponseProcessNote = require('./ProcessResponseProcessNote');
		this.__processNote = Array.isArray(new_value)
			? new_value.map(val => new ProcessResponseProcessNote(val))
			: [new ProcessResponseProcessNote(new_value)];
	}

	// Processing errors.
	get error() {
		return this.__error;
	}

	set error(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__error = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Request for additional supporting or authorizing information, such as: documents, images or resources.
	get communicationRequest() {
		return this.__communicationRequest;
	}

	set communicationRequest(new_value) {
		const Reference = require('./Reference');
		this.__communicationRequest = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			status: this.__status,
			created: this.__created,
			organization: this.__organization && this.__organization.toJSON(),
			request: this.__request && this.__request.toJSON(),
			outcome: this.__outcome && this.__outcome.toJSON(),
			disposition: this.__disposition,
			requestProvider: this.__requestProvider && this.__requestProvider.toJSON(),
			requestOrganization: this.__requestOrganization && this.__requestOrganization.toJSON(),
			form: this.__form && this.__form.toJSON(),
			processNote: this.__processNote && this.__processNote.map(v => v.toJSON()),
			error: this.__error && this.__error.map(v => v.toJSON()),
			communicationRequest: this.__communicationRequest && this.__communicationRequest.map(v => v.toJSON()),
		});
	}
}

module.exports = ProcessResponse;
