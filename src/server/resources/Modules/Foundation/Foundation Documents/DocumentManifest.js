const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Reference = require('./types/Reference');
const Attachment = require('./types/Attachment');

class Related {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// identifier	Σ	0..1	Identifier	Identifiers of things that are related
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// ref	Σ	0..1	Reference(Any)	Related Resource
	set ref(ref) {
		this._ref = new Reference(ref);
	}

	get ref() {
		return this._ref;
	}

	toJSON() {
		return {
			identifier: this._identifier,
			ref: this._ref,
		};
	}
}

class Content {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// p[x]	Σ	1..1		Contents of this set of documents
	// pAttachment			Attachment
	set pAttachment(pAttachment) {
		this._pAttachment = new Attachment(pAttachment);
	}

	get pAttachment() {
		return this._pAttachment;
	}

	// pReference			Reference
	set pReference(pReference) {
		this._pReference = new Reference(pReference);
	}

	get pReference() {
		return this._pReference;
	}

	toJSON() {
		return {
			pAttachment: this._pAttachment,
			pReference: this._pReference,
		};
	}
}

class DocumentManifest extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'DocumentManifest';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// masterIdentifier	Σ	0..1	Identifier	Unique Identifier for the set of documents
	set masterIdentifier(masterIdentifier) {
		this._masterIdentifier = new Identifier(masterIdentifier);
	}

	get masterIdentifier() {
		return this._masterIdentifier;
	}

	// identifier	Σ	0..*	Identifier	Other identifiers for the manifest
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

	// status	?!Σ	1..1	code	current | superseded | entered-in-error
	// DocumentReferenceStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// type	Σ	0..1	CodeableConcept	Kind of document set
	// Document Type Value Set (Preferred)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// subject	Σ	0..1	Reference(Patient | Practitioner | Group | Device)	The subject of the set of documents
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// created	Σ	0..1	dateTime	When this document manifest created
	set created(created) {
		this._created = created;
	}

	get created() {
		return this._created;
	}

	// author	Σ	0..*	Reference(Practitioner | Organization | Device | Patient | RelatedPerson)	Who and/or what authored the manifest
	set author(author) {
		if (Array.isArray(author)) {
			this._author = author.map((i) => new Reference(i));
		} else {
			this._author = [new Reference(author)];
		}
	}

	get author() {
		return this._author;
	}

	// recipient	Σ	0..*	Reference(Patient | Practitioner | RelatedPerson | Organization)	Intended to get notified about this set of documents
	set recipient(recipient) {
		if (Array.isArray(recipient)) {
			this._recipient = recipient.map((i) => new Reference(i));
		} else {
			this._recipient = [new Reference(recipient)];
		}
	}

	get recipient() {
		return this._recipient;
	}

	// source	Σ	0..1	uri	The source system/application/software
	set source(source) {
		this._source = source;
	}

	get source() {
		return this._source;
	}

	// description	Σ	0..1	string	Human-readable description (title)
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// content	Σ	1..*	BackboneElement	The items included
	set content(content) {
		if (Array.isArray(content)) {
			this._content = content.map((i) => new Content(i));
		} else {
			this._content = [new Content(content)];
		}
	}

	get content() {
		return this._content;
	}

	// related	Σ	0..*	BackboneElement	Related things
	set related(related) {
		if (Array.isArray(related)) {
			this._related = related.map((i) => new Related(i));
		} else {
			this._related = [new Related(related)];
		}
	}

	get related() {
		return this._related;
	}

	toJSON() {
		const json = {
			masterIdentifier: this._masterIdentifier,
			identifier: this._identifier,
			status: this._status,
			type: this._type,
			subject: this._subject,
			created: this._created,
			author: this._author,
			recipient: this._recipient,
			source: this._source,
			description: this._description,
			content: this._content,
			related: this._related,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.DocumentManifest = DocumentManifest;
module.exports.Content = Content;
module.exports.Related = Related;
