const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const Reference = require('./types/Reference');
const CodeableConcept = require('./types/CodeableConcept');

class EnrollmentResponse extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'EnrollmentResponse';
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

	// request		0..1	Reference(EnrollmentRequest)	Claim reference
	set request(request) {
		this._request = new Reference(request);
	}

	get request() {
		return this._request;
	}

	// outcome		0..1	CodeableConcept	complete | error | partial
	// RemittanceOutcome (Required)
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

	// created		0..1	dateTime	Creation date
	set created(created) {
		this._created = created;
	}

	get created() {
		return this._created;
	}

	// organization		0..1	Reference(Organization)	Insurer
	set organization(organization) {
		this._organization = new Reference(organization);
	}

	get organization() {
		return this._organization;
	}

	// requestProvider		0..1	Reference(Practitioner)	Responsible practitioner
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

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			request: this._request,
			outcome: this._outcome,
			disposition: this._disposition,
			created: this._created,
			organization: this._organization,
			requestProvider: this._requestProvider,
			requestOrganization: this._requestOrganization,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.EnrollmentResponse = EnrollmentResponse;
