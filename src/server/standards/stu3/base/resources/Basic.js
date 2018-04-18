const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const CodeableConcept = require('../types/CodeableConcept');
const Reference = require('../types/Reference');

class Basic extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Basic';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	Business identifier
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

	// code	?!Σ	1..1	CodeableConcept	Kind of Resource
	// Basic Resource Types (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// subject	Σ	0..1	Reference(Any)	Identifies the focus of this resource
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// created	Σ	0..1	date	When created
	set created(created) {
		this._created = created;
	}

	get created() {
		return this._created;
	}

	// author	Σ	0..1	Reference(Practitioner | Patient | RelatedPerson)	Who created
	set author(author) {
		this._author = new Reference(author);
	}

	get author() {
		return this._author;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			code: this._code,
			subject: this._subject,
			created: this._created,
			author: this._author,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Basic = Basic;
