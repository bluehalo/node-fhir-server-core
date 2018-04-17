const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const Reference = require('./types/Reference');
const CodeableConcept = require('./types/CodeableConcept');

class PaymentNotice extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'PaymentNotice';
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

	// request		0..1	Reference(Any)	Request reference
	set request(request) {
		this._request = new Reference(request);
	}

	get request() {
		return this._request;
	}

	// response		0..1	Reference(Any)	Response reference
	set response(response) {
		this._response = new Reference(response);
	}

	get response() {
		return this._response;
	}

	// statusDate		0..1	date	Payment or clearing date
	set statusDate(statusDate) {
		this._statusDate = statusDate;
	}

	get statusDate() {
		return this._statusDate;
	}

	// created		0..1	dateTime	Creation date
	set created(created) {
		this._created = created;
	}

	get created() {
		return this._created;
	}

	// target		0..1	Reference(Organization)	Insurer or Regulatory body
	set target(target) {
		this._target = new Reference(target);
	}

	get target() {
		return this._target;
	}

	// provider		0..1	Reference(Practitioner)	Responsible practitioner
	set provider(provider) {
		this._provider = new Reference(provider);
	}

	get provider() {
		return this._provider;
	}

	// organization		0..1	Reference(Organization)	Responsible organization
	set organization(organization) {
		this._organization = new Reference(organization);
	}

	get organization() {
		return this._organization;
	}

	// paymentStatus		0..1	CodeableConcept	Whether payment has been sent or cleared
	// Payment Status Codes (Example)
	set paymentStatus(paymentStatus) {
		this._paymentStatus = new CodeableConcept(paymentStatus);
	}

	get paymentStatus() {
		return this._paymentStatus;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			request: this._request,
			response: this._response,
			statusDate: this._statusDate,
			created: this._created,
			target: this._target,
			provider: this._provider,
			organization: this._organization,
			paymentStatus: this._paymentStatus,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.PaymentNotice = PaymentNotice;
