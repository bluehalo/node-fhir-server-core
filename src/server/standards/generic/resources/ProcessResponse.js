const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Code = require('../types/Code');
const Reference = require('../types/Reference');
const CodeableConcept = require('../types/CodeableConcept');

class ProcessNote {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type		0..1	CodeableConcept	display | print | printoper
	// NoteType (Required)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// text		0..1	string	Comment on the processing
	set text(text) {
		this._text = text;
	}

	get text() {
		return this._text;
	}

	toJSON() {
		return {
			type: this._type,
			text: this._text,
		};
	}
}

class ProcessResponse extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'ProcessResponse';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier		0..*	Identifier	Business Identifier
	set identifier(identifier) {
		if (Array.isArray(identifier)) {
			this._identifier = identifier.map((i) => new Identifier(i));
		} else {
			this._identifier = [new Identifier(identifier)];
		}
	}

	get identifier() {
		return this._identifier;
	}

	// status	?!Σ	0..1	code	active | cancelled | draft | entered-in-error
	// Financial Resource Status Codes (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// created		0..1	dateTime	Creation date
	set created(created) {
		this._created = created;
	}

	get created() {
		return this._created;
	}

	// organization		0..1	Reference(Organization)	Authoring Organization
	set organization(organization) {
		this._organization = new Reference(organization);
	}

	get organization() {
		return this._organization;
	}

	// request		0..1	Reference(Any)	Request reference
	set request(request) {
		this._request = new Reference(request);
	}

	get request() {
		return this._request;
	}

	// outcome		0..1	CodeableConcept	Processing outcome
	// Process Outcome Codes (Example)
	set outcome(outcome) {
		this._outcome = new CodeableConcept(outcome);
	}

	get outcome() {
		return this._outcome;
	}

	// disposition		0..1	string	Disposition Message
	set disposition(disposition) {
		this._disposition = disposition;
	}

	get disposition() {
		return this._disposition;
	}

	// requestProvider		0..1	Reference(Practitioner)	Responsible Practitioner
	set requestProvider(requestProvider) {
		this._requestProvider = new Reference(requestProvider);
	}

	get requestProvider() {
		return this._requestProvider;
	}

	// requestOrganization		0..1	Reference(Organization)	Responsible organization
	set requestOrganization(requestOrganization) {
		this._requestOrganization = new Reference(requestOrganization);
	}

	get requestOrganization() {
		return this._requestOrganization;
	}

	// form		0..1	CodeableConcept	Printed Form Identifier
	// Form Codes (Example)
	set form(form) {
		this._form = new CodeableConcept(form);
	}

	get form() {
		return this._form;
	}

	// error		0..*	CodeableConcept	Error code
	// Adjudication Error Codes (Example)
	set error(error) {
		if (Array.isArray(error)) {
			this._error = error.map((i) => new CodeableConcept(i));
		} else {
			this._error = [new CodeableConcept(error)];
		}
	}

	get error() {
		return this._error;
	}

	// communicationRequest		0..*	Reference(CommunicationRequest)	Request for additional information
	set communicationRequest(communicationRequest) {
		if (Array.isArray(communicationRequest)) {
			this._communicationRequest = communicationRequest.map((i) => new Reference(i));
		} else {
			this._communicationRequest = [new Reference(communicationRequest)];
		}
	}

	get communicationRequest() {
		return this._communicationRequest;
	}

	// processNote		0..*	BackboneElement	Processing comments or additional requirements
	set processNote(processNote) {
		if (Array.isArray(processNote)) {
			this._processNote = processNote.map((i) => new ProcessNote(i));
		} else {
			this._processNote = [new ProcessNote(processNote)];
		}
	}

	get processNote() {
		return this._processNote;
	}

	toJSON() {
		const json = {
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
			error: this._error,
			communicationRequest: this._communicationRequest,
			processNote: this._processNote,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.ProcessResponse = ProcessResponse;
module.exports.ProcessNote = ProcessNote;
