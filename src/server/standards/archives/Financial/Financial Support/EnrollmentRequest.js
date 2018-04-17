const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const Reference = require('./types/Reference');

class EnrollmentRequest extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'EnrollmentRequest';
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

	// insurer		0..1	Reference(Organization)	Target
	set insurer(insurer) {
		this._insurer = new Reference(insurer);
	}

	get insurer() {
		return this._insurer;
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

	// subject		0..1	Reference(Patient)	The subject of the Products and Services
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// coverage		0..1	Reference(Coverage)	Insurance information
	set coverage(coverage) {
		this._coverage = new Reference(coverage);
	}

	get coverage() {
		return this._coverage;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			created: this._created,
			insurer: this._insurer,
			provider: this._provider,
			organization: this._organization,
			subject: this._subject,
			coverage: this._coverage,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.EnrollmentRequest = EnrollmentRequest;
