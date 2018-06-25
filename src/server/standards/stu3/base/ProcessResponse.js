const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const ProcessResponse_ProcessNote = require('./ProcessResponse_ProcessNote');

class ProcessResponse extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ProcessResponse';
	}

	// This is a ProcessResponse resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['ProcessResponse'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// The Response business identifier.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// The status of the resource instance.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field status`);
		}
		this._status = new_value;
	}

	// The date when the enclosed suite of services were performed or completed.
	get created () {
		return this._created;
	}

	set created ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field created`);
		}
		this._created = new_value;
	}

	// The organization who produced this adjudicated response.
	get organization () {
		return this._organization;
	}

	set organization ( new_value ) {
		this._organization = new Reference(new_value);
	}

	// Original request resource reference.
	get request () {
		return this._request;
	}

	set request ( new_value ) {
		this._request = new Reference(new_value);
	}

	// Transaction status: error, complete, held.
	get outcome () {
		return this._outcome;
	}

	set outcome ( new_value ) {
		this._outcome = new CodeableConcept(new_value);
	}

	// A description of the status of the adjudication or processing.
	get disposition () {
		return this._disposition;
	}

	set disposition ( new_value ) {
		this._disposition = new_value;
	}

	// The practitioner who is responsible for the services rendered to the patient.
	get requestProvider () {
		return this._requestProvider;
	}

	set requestProvider ( new_value ) {
		this._requestProvider = new Reference(new_value);
	}

	// The organization which is responsible for the services rendered to the patient.
	get requestOrganization () {
		return this._requestOrganization;
	}

	set requestOrganization ( new_value ) {
		this._requestOrganization = new Reference(new_value);
	}

	// The form to be used for printing the content.
	get form () {
		return this._form;
	}

	set form ( new_value ) {
		this._form = new CodeableConcept(new_value);
	}

	// Suite of processing notes or additional requirements if the processing has been held.
	get processNote () {
		return this._processNote;
	}

	set processNote ( new_value ) {
		this._processNote = Array.isArray(new_value) ? new_value.map(val => new ProcessResponse_ProcessNote(val)) : [new ProcessResponse_ProcessNote(new_value)];
	}

	// Processing errors.
	get error () {
		return this._error;
	}

	set error ( new_value ) {
		this._error = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Request for additional supporting or authorizing information, such as: documents, images or resources.
	get communicationRequest () {
		return this._communicationRequest;
	}

	set communicationRequest ( new_value ) {
		this._communicationRequest = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier,
			status: this._status,
			created: this._created,
			organization: this._organization,
			request: this._request,
			outcome: this._outcome,
			disposition: this._disposition,
			requestProvider: this._requestProvider,
			requestOrganization: this._requestOrganization,
			form: this._form,
			processNote: this._processNote,
			error: this._error,
			communicationRequest: this._communicationRequest
		});
	}

}

module.exports = ProcessResponse;
