const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const DocumentManifest_Content = require('./DocumentManifest_Content');
const DocumentManifest_Related = require('./DocumentManifest_Related');

class DocumentManifest extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'DocumentManifest';
	}

	// This is a DocumentManifest resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['DocumentManifest'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// A single identifier that uniquely identifies this manifest. Principally used to refer to the manifest in non-FHIR contexts.
	get masterIdentifier () {
		return this._masterIdentifier;
	}

	set masterIdentifier ( new_value ) {
		this._masterIdentifier = new Identifier(new_value);
	}

	// Other identifiers associated with the document manifest, including version independent  identifiers.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// The status of this document manifest.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['current', 'superseded', 'entered-in-error'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// Specifies the kind of this set of documents (e.g. Patient Summary, Discharge Summary, Prescription, etc.). The type of a set of documents may be the same as one of the documents in it - especially if there is only one - but it may be wider.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// Who or what the set of documents is about. The documents can be about a person, (patient or healthcare practitioner), a device (i.e. machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). If the documents cross more than one subject, then more than one subject is allowed here (unusual use case).
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = new Reference(new_value);
	}

	// When the document manifest was created for submission to the server (not necessarily the same thing as the actual resource last modified time, since it may be modified, replicated, etc.).
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

	// Identifies who is responsible for creating the manifest, and adding  documents to it.
	get author () {
		return this._author;
	}

	set author ( new_value ) {
		this._author = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A patient, practitioner, or organization for which this set of documents is intended.
	get recipient () {
		return this._recipient;
	}

	set recipient ( new_value ) {
		this._recipient = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Identifies the source system, application, or software that produced the document manifest.
	get source () {
		return this._source;
	}

	set source ( new_value ) {
		this._source = new_value;
	}

	// Human-readable description of the source document. This is sometimes known as the "title".
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// The list of Documents included in the manifest.
	get content () {
		return this._content;
	}

	set content ( new_value ) {
		this._content = Array.isArray(new_value) ? new_value.map(val => new DocumentManifest_Content(val)) : [new DocumentManifest_Content(new_value)];
	}

	// Related identifiers or resources associated with the DocumentManifest.
	get related () {
		return this._related;
	}

	set related ( new_value ) {
		this._related = Array.isArray(new_value) ? new_value.map(val => new DocumentManifest_Related(val)) : [new DocumentManifest_Related(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
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
			related: this._related
		});
	}

}

module.exports = DocumentManifest;
