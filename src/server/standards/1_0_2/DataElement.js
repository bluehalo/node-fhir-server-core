const DomainResource = require('./DomainResource');
const UriScalar = require('./scalars/Uri.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class DataElement extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'DataElement';
		Object.assign(this, opt);
	}

	// This is a DataElement resource
	static get __resourceType() {
		return 'DataElement';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__DataElement = new_value;
	}

	// An absolute URL that is used to identify this data element when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this data element is (or will be) published.
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

	// Formal identifier that is used to identify this data element when it is represented in other formats, or referenced in a specification, model, design or an instance.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// The identifier that is used to identify this version of the data element when it is referenced in a StructureDefinition, Questionnaire or instance. This is an arbitrary value managed by the definition author manually.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	// The term used by humans to refer to the data element.  Should ideally be unique within the context in which the data element is expected to be used.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// The status of the data element.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// A flag to indicate that this search data element definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental() {
		return this.__experimental;
	}

	set experimental(new_value) {
		this.__experimental = new_value;
	}

	// The name of the individual or organization that published the data element.
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
		const DataElementContact = require('./DataElementContact');
		this.__contact = Array.isArray(new_value)
			? new_value.map(val => new DataElementContact(val))
			: [new DataElementContact(new_value)];
	}

	// The date this version of the data element was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the data element  changes.
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

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of data element definitions.
	get useContext() {
		return this.__useContext;
	}

	set useContext(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__useContext = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// A copyright statement relating to the definition of the data element. Copyright statements are generally legal restrictions on the use and publishing of the details of the definition of the data element.
	get copyright() {
		return this.__copyright;
	}

	set copyright(new_value) {
		this.__copyright = new_value;
	}

	// Identifies how precise the data element is in its definition.
	get stringency() {
		return this.__stringency;
	}

	set stringency(new_value) {
		this.__stringency = new_value;
	}

	// Identifies a specification (other than a terminology) that the elements which make up the DataElement have some correspondence with.
	get mapping() {
		return this.__mapping;
	}

	set mapping(new_value) {
		const DataElementMapping = require('./DataElementMapping');
		this.__mapping = Array.isArray(new_value)
			? new_value.map(val => new DataElementMapping(val))
			: [new DataElementMapping(new_value)];
	}

	// Defines the structure, type, allowed values and other constraining characteristics of the data element.
	get element() {
		return this.__element;
	}

	set element(new_value) {
		const ElementDefinition = require('./ElementDefinition');
		this.__element = Array.isArray(new_value)
			? new_value.map(val => new ElementDefinition(val))
			: [new ElementDefinition(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			url: this.__url,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			version: this.__version,
			name: this.__name,
			status: this.__status,
			experimental: this.__experimental,
			publisher: this.__publisher,
			contact: this.__contact && this.__contact.map(v => v.toJSON()),
			date: this.__date,
			useContext: this.__useContext && this.__useContext.map(v => v.toJSON()),
			copyright: this.__copyright,
			stringency: this.__stringency,
			mapping: this.__mapping && this.__mapping.map(v => v.toJSON()),
			element: this.__element && this.__element.map(v => v.toJSON()),
		});
	}
}

module.exports = DataElement;
