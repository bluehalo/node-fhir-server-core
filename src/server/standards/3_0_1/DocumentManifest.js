const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const UriScalar = require('./scalars/Uri.scalar');

class DocumentManifest extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DocumentManifest';
		Object.assign(this, opt);
	}

	// This is a DocumentManifest resource
	static get __resourceType() {
		return 'DocumentManifest';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__DocumentManifest = new_value;
	}

	// A single identifier that uniquely identifies this manifest. Principally used to refer to the manifest in non-FHIR contexts.
	get masterIdentifier() {
		return this.__masterIdentifier;
	}

	set masterIdentifier(new_value) {
		const Identifier = require('./Identifier');
		this.__masterIdentifier = new Identifier(new_value);
	}

	// Other identifiers associated with the document manifest, including version independent  identifiers.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// The status of this document manifest.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Specifies the kind of this set of documents (e.g. Patient Summary, Discharge Summary, Prescription, etc.). The type of a set of documents may be the same as one of the documents in it - especially if there is only one - but it may be wider.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// Who or what the set of documents is about. The documents can be about a person, (patient or healthcare practitioner), a device (i.e. machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). If the documents cross more than one subject, then more than one subject is allowed here (unusual use case).
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// When the document manifest was created for submission to the server (not necessarily the same thing as the actual resource last modified time, since it may be modified, replicated, etc.).
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

	// Identifies who is responsible for creating the manifest, and adding  documents to it.
	get author() {
		return this.__author;
	}

	set author(new_value) {
		const Reference = require('./Reference');
		this.__author = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A patient, practitioner, or organization for which this set of documents is intended.
	get recipient() {
		return this.__recipient;
	}

	set recipient(new_value) {
		const Reference = require('./Reference');
		this.__recipient = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Identifies the source system, application, or software that produced the document manifest.
	get source() {
		return this.__source;
	}

	set source(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field source`);
		}
		this.__source = new_value;
	}

	// Human-readable description of the source document. This is sometimes known as the \'title\'.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// The list of Documents included in the manifest.
	get content() {
		return this.__content;
	}

	set content(new_value) {
		const DocumentManifestContent = require('./DocumentManifestContent');
		this.__content = Array.isArray(new_value)
			? new_value.map(val => new DocumentManifestContent(val))
			: [new DocumentManifestContent(new_value)];
	}

	// Related identifiers or resources associated with the DocumentManifest.
	get related() {
		return this.__related;
	}

	set related(new_value) {
		const DocumentManifestRelated = require('./DocumentManifestRelated');
		this.__related = Array.isArray(new_value)
			? new_value.map(val => new DocumentManifestRelated(val))
			: [new DocumentManifestRelated(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			masterIdentifier: this.__masterIdentifier && this.__masterIdentifier.toJSON(),
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			status: this.__status,
			type: this.__type && this.__type.toJSON(),
			subject: this.__subject && this.__subject.toJSON(),
			created: this.__created,
			author: this.__author && this.__author.map(v => v.toJSON()),
			recipient: this.__recipient && this.__recipient.map(v => v.toJSON()),
			source: this.__source,
			description: this.__description,
			content: this.__content && this.__content.map(v => v.toJSON()),
			related: this.__related && this.__related.map(v => v.toJSON()),
		});
	}
}

module.exports = DocumentManifest;
