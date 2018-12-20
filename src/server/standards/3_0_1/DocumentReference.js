const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const InstantScalar = require('./scalars/Instant.scalar');

class DocumentReference extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DocumentReference';
		Object.assign(this, opt);
	}

	// This is a DocumentReference resource
	static get __resourceType() {
		return 'DocumentReference';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__DocumentReference = new_value;
	}

	// Document identifier as assigned by the source of the document. This identifier is specific to this version of the document. This unique identifier may be used elsewhere to identify this version of the document.
	get masterIdentifier() {
		return this.__masterIdentifier;
	}

	set masterIdentifier(new_value) {
		const Identifier = require('./Identifier');
		this.__masterIdentifier = new Identifier(new_value);
	}

	// Other identifiers associated with the document, including version independent identifiers.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// The status of this document reference.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// The status of the underlying document.
	get docStatus() {
		return this.__docStatus;
	}

	set docStatus(new_value) {
		this.__docStatus = new_value;
	}

	// Specifies the particular kind of document referenced  (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the document referenced.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// A categorization for the type of document referenced - helps for indexing and searching. This may be implied by or derived from the code specified in the DocumentReference.type.
	get class() {
		return this.__class;
	}

	set class(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__class = new CodeableConcept(new_value);
	}

	// Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure).
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// When the document was created.
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

	// When the document reference was created.
	get indexed() {
		return this.__indexed;
	}

	set indexed(new_value) {
		// Throw if new value does not match the pattern
		let pattern = InstantScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field indexed`);
		}
		this.__indexed = new_value;
	}

	// Identifies who is responsible for adding the information to the document.
	get author() {
		return this.__author;
	}

	set author(new_value) {
		const Reference = require('./Reference');
		this.__author = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Which person or organization authenticates that this document is valid.
	get authenticator() {
		return this.__authenticator;
	}

	set authenticator(new_value) {
		const Reference = require('./Reference');
		this.__authenticator = new Reference(new_value);
	}

	// Identifies the organization or group who is responsible for ongoing maintenance of and access to the document.
	get custodian() {
		return this.__custodian;
	}

	set custodian(new_value) {
		const Reference = require('./Reference');
		this.__custodian = new Reference(new_value);
	}

	// Relationships that this document has with other document references that already exist.
	get relatesTo() {
		return this.__relatesTo;
	}

	set relatesTo(new_value) {
		const DocumentReferenceRelatesTo = require('./DocumentReferenceRelatesTo');
		this.__relatesTo = Array.isArray(new_value)
			? new_value.map(val => new DocumentReferenceRelatesTo(val))
			: [new DocumentReferenceRelatesTo(new_value)];
	}

	// Human-readable description of the source document. This is sometimes known as the \'title\'.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// A set of Security-Tag codes specifying the level of privacy/security of the Document. Note that DocumentReference.meta.security contains the security labels of the \'reference\' to the document, while DocumentReference.securityLabel contains a snapshot of the security labels on the document the reference refers to.
	get securityLabel() {
		return this.__securityLabel;
	}

	set securityLabel(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__securityLabel = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// The document and format referenced. There may be multiple content element repetitions, each with a different format.
	get content() {
		return this.__content;
	}

	set content(new_value) {
		const DocumentReferenceContent = require('./DocumentReferenceContent');
		this.__content = Array.isArray(new_value)
			? new_value.map(val => new DocumentReferenceContent(val))
			: [new DocumentReferenceContent(new_value)];
	}

	// The clinical context in which the document was prepared.
	get context() {
		return this.__context;
	}

	set context(new_value) {
		const DocumentReferenceContext = require('./DocumentReferenceContext');
		this.__context = new DocumentReferenceContext(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			masterIdentifier: this.__masterIdentifier && this.__masterIdentifier.toJSON(),
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			status: this.__status,
			docStatus: this.__docStatus,
			type: this.__type && this.__type.toJSON(),
			class: this.__class && this.__class.toJSON(),
			subject: this.__subject && this.__subject.toJSON(),
			created: this.__created,
			indexed: this.__indexed,
			author: this.__author && this.__author.map(v => v.toJSON()),
			authenticator: this.__authenticator && this.__authenticator.toJSON(),
			custodian: this.__custodian && this.__custodian.toJSON(),
			relatesTo: this.__relatesTo && this.__relatesTo.map(v => v.toJSON()),
			description: this.__description,
			securityLabel: this.__securityLabel && this.__securityLabel.map(v => v.toJSON()),
			content: this.__content && this.__content.map(v => v.toJSON()),
			context: this.__context && this.__context.toJSON(),
		});
	}
}

module.exports = DocumentReference;
