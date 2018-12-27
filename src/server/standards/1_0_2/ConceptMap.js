const DomainResource = require('./DomainResource');
const UriScalar = require('./scalars/Uri.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class ConceptMap extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ConceptMap';
		Object.assign(this, opt);
	}

	// This is a ConceptMap resource
	static get __resourceType() {
		return 'ConceptMap';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__ConceptMap = new_value;
	}

	// An absolute URL that is used to identify this concept map when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this concept map is (or will be) published.
	get url() {
		return this.__url;
	}

	set url(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field url`);
		}
		this.__url = new_value;
	}

	// Formal identifier that is used to identify this concept map when it is represented in other formats, or referenced in a specification, model, design or an instance.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// The identifier that is used to identify this version of the concept map when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	// A free text natural language name describing the concept map.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// The status of the concept map.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// This ConceptMap was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental() {
		return this.__experimental;
	}

	set experimental(new_value) {
		this.__experimental = new_value;
	}

	// The name of the individual or organization that published the concept map.
	get publisher() {
		return this.__publisher;
	}

	set publisher(new_value) {
		this.__publisher = new_value;
	}

	// Contacts to assist a user in finding and communicating with the publisher.
	get contact() {
		return this.__contact;
	}

	set contact(new_value) {
		const ConceptMapContact = require('./ConceptMapContact');
		this.__contact = Array.isArray(new_value)
			? new_value.map(val => new ConceptMapContact(val))
			: [new ConceptMapContact(new_value)];
	}

	// The date this version of the concept map was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the concept map changes.
	get date() {
		return this.__date;
	}

	set date(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this.__date = new_value;
	}

	// A free text natural language description of the use of the concept map - reason for definition, conditions of use, etc.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of concept map instances.
	get useContext() {
		return this.__useContext;
	}

	set useContext(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__useContext = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Explains why this concept map is needed and why it has been constrained as it has.
	get requirements() {
		return this.__requirements;
	}

	set requirements(new_value) {
		this.__requirements = new_value;
	}

	// A copyright statement relating to the concept map and/or its contents.
	get copyright() {
		return this.__copyright;
	}

	set copyright(new_value) {
		this.__copyright = new_value;
	}

	// The source value set that specifies the concepts that are being mapped.
	get sourceUri() {
		return this.__sourceUri;
	}

	set sourceUri(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field sourceUri`);
		}
		this.__sourceUri = new_value;
	}

	// The source value set that specifies the concepts that are being mapped.
	get sourceReference() {
		return this.__sourceReference;
	}

	set sourceReference(new_value) {
		const Reference = require('./Reference');
		this.__sourceReference = new Reference(new_value);
	}

	// The target value set provides context to the mappings. Note that the mapping is made between concepts, not between value sets, but the value set provides important context about how the concept mapping choices are made.
	get targetUri() {
		return this.__targetUri;
	}

	set targetUri(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field targetUri`);
		}
		this.__targetUri = new_value;
	}

	// The target value set provides context to the mappings. Note that the mapping is made between concepts, not between value sets, but the value set provides important context about how the concept mapping choices are made.
	get targetReference() {
		return this.__targetReference;
	}

	set targetReference(new_value) {
		const Reference = require('./Reference');
		this.__targetReference = new Reference(new_value);
	}

	// Mappings for an individual concept in the source to one or more concepts in the target.
	get element() {
		return this.__element;
	}

	set element(new_value) {
		const ConceptMapElement = require('./ConceptMapElement');
		this.__element = Array.isArray(new_value)
			? new_value.map(val => new ConceptMapElement(val))
			: [new ConceptMapElement(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			url: this.__url,
			identifier: this.__identifier && this.__identifier.toJSON(),
			version: this.__version,
			name: this.__name,
			status: this.__status,
			experimental: this.__experimental,
			publisher: this.__publisher,
			contact: this.__contact && this.__contact.map(v => v.toJSON()),
			date: this.__date,
			description: this.__description,
			useContext: this.__useContext && this.__useContext.map(v => v.toJSON()),
			requirements: this.__requirements,
			copyright: this.__copyright,
			sourceUri: this.__sourceUri,
			sourceReference: this.__sourceReference && this.__sourceReference.toJSON(),
			targetUri: this.__targetUri,
			targetReference: this.__targetReference && this.__targetReference.toJSON(),
			element: this.__element && this.__element.map(v => v.toJSON()),
		});
	}
}

module.exports = ConceptMap;
