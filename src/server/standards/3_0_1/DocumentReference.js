const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const DocumentReference_RelatesTo = require('./DocumentReference_RelatesTo');
const DocumentReference_Content = require('./DocumentReference_Content');
const DocumentReference_Context = require('./DocumentReference_Context');

class DocumentReference extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'DocumentReference';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'DocumentReference';
	}

	// This is a DocumentReference resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['DocumentReference'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Document identifier as assigned by the source of the document. This identifier is specific to this version of the document. This unique identifier may be used elsewhere to identify this version of the document.
	get masterIdentifier () {
		return this._masterIdentifier;
	}

	set masterIdentifier ( new_value ) {
		this._masterIdentifier = new Identifier(new_value);
	}

	// Other identifiers associated with the document, including version independent identifiers.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// The status of this document reference.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['current', 'superseded', 'entered-in-error'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// The status of the underlying document.
	get docStatus () {
		return this._docStatus;
	}

	set docStatus ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field docStatus`);
		}
		this._docStatus = new_value;
	}

	// Specifies the particular kind of document referenced  (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the document referenced.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new CodeableConcept(new_value);
	}

	// A categorization for the type of document referenced - helps for indexing and searching. This may be implied by or derived from the code specified in the DocumentReference.type.
	get class () {
		return this._class;
	}

	set class ( new_value ) {
		this._class = new CodeableConcept(new_value);
	}

	// Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure).
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = new Reference(new_value);
	}

	// When the document was created.
	get created () {
		return this._created;
	}

	set created ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field created`);
		}
		this._created = new_value;
	}

	// When the document reference was created.
	get indexed () {
		return this._indexed;
	}

	set indexed ( new_value ) {
		this._indexed = new_value;
	}

	// Identifies who is responsible for adding the information to the document.
	get author () {
		return this._author;
	}

	set author ( new_value ) {
		this._author = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Which person or organization authenticates that this document is valid.
	get authenticator () {
		return this._authenticator;
	}

	set authenticator ( new_value ) {
		this._authenticator = new Reference(new_value);
	}

	// Identifies the organization or group who is responsible for ongoing maintenance of and access to the document.
	get custodian () {
		return this._custodian;
	}

	set custodian ( new_value ) {
		this._custodian = new Reference(new_value);
	}

	// Relationships that this document has with other document references that already exist.
	get relatesTo () {
		return this._relatesTo;
	}

	set relatesTo ( new_value ) {
		this._relatesTo = Array.isArray(new_value) ? new_value.map(val => new DocumentReference_RelatesTo(val)) : [new DocumentReference_RelatesTo(new_value)];
	}

	// Human-readable description of the source document. This is sometimes known as the "title".
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// A set of Security-Tag codes specifying the level of privacy/security of the Document. Note that DocumentReference.meta.security contains the security labels of the "reference" to the document, while DocumentReference.securityLabel contains a snapshot of the security labels on the document the reference refers to.
	get securityLabel () {
		return this._securityLabel;
	}

	set securityLabel ( new_value ) {
		this._securityLabel = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The document and format referenced. There may be multiple content element repetitions, each with a different format.
	get content () {
		return this._content;
	}

	set content ( new_value ) {
		this._content = Array.isArray(new_value) ? new_value.map(val => new DocumentReference_Content(val)) : [new DocumentReference_Content(new_value)];
	}

	// The clinical context in which the document was prepared.
	get context () {
		return this._context;
	}

	set context ( new_value ) {
		this._context = new DocumentReference_Context(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			masterIdentifier: this._masterIdentifier && this._masterIdentifier.toJSON(),
			identifier: this._identifier && this._identifier.map(v => v.toJSON()),
			status: this._status,
			docStatus: this._docStatus,
			type: this._type && this._type.toJSON(),
			class: this._class && this._class.toJSON(),
			subject: this._subject && this._subject.toJSON(),
			created: this._created,
			indexed: this._indexed,
			author: this._author && this._author.map(v => v.toJSON()),
			authenticator: this._authenticator && this._authenticator.toJSON(),
			custodian: this._custodian && this._custodian.toJSON(),
			relatesTo: this._relatesTo && this._relatesTo.map(v => v.toJSON()),
			description: this._description,
			securityLabel: this._securityLabel && this._securityLabel.map(v => v.toJSON()),
			content: this._content && this._content.map(v => v.toJSON()),
			context: this._context && this._context.toJSON()
		});
	}

}

module.exports = DocumentReference;
