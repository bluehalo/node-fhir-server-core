const DomainResource = require('./DomainResource');
const UriScalar = require('./scalars/Uri.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const UnsignedIntScalar = require('./scalars/UnsignedInt.scalar');

class CodeSystem extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CodeSystem';
		Object.assign(this, opt);
	}

	// This is a CodeSystem resource
	static get __resourceType() {
		return 'CodeSystem';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__CodeSystem = new_value;
	}

	// An absolute URI that is used to identify this code system when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this code system is (or will be) published. The URL SHOULD include the major version of the code system. For more information see [Technical and Business Versions](resource.html#versions). This is used in [Coding]{datatypes.html#Coding}.system.
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

	// A formal identifier that is used to identify this code system when it is represented in other formats, or referenced in a specification, model, design or an instance.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// The identifier that is used to identify this version of the code system when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the code system author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. This is used in [Coding]{datatypes.html#Coding}.version.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	// A natural language name identifying the code system. This name should be usable as an identifier for the module by machine processing applications such as code generation.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// A short, descriptive, user-friendly title for the code system.
	get title() {
		return this.__title;
	}

	set title(new_value) {
		this.__title = new_value;
	}

	// The status of this code system. Enables tracking the life-cycle of the content.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// A boolean value to indicate that this code system is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental() {
		return this.__experimental;
	}

	set experimental(new_value) {
		this.__experimental = new_value;
	}

	// The date  (and optionally time) when the code system was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the code system changes.
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

	// The name of the individual or organization that published the code system.
	get publisher() {
		return this.__publisher;
	}

	set publisher(new_value) {
		this.__publisher = new_value;
	}

	// Contact details to assist a user in finding and communicating with the publisher.
	get contact() {
		return this.__contact;
	}

	set contact(new_value) {
		const ContactDetail = require('./ContactDetail');
		this.__contact = Array.isArray(new_value)
			? new_value.map(val => new ContactDetail(val))
			: [new ContactDetail(new_value)];
	}

	// A free text natural language description of the code system from a consumer\'s perspective.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate code system instances.
	get useContext() {
		return this.__useContext;
	}

	set useContext(new_value) {
		const UsageContext = require('./UsageContext');
		this.__useContext = Array.isArray(new_value)
			? new_value.map(val => new UsageContext(val))
			: [new UsageContext(new_value)];
	}

	// A legal or geographic region in which the code system is intended to be used.
	get jurisdiction() {
		return this.__jurisdiction;
	}

	set jurisdiction(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__jurisdiction = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Explaination of why this code system is needed and why it has been designed as it has.
	get purpose() {
		return this.__purpose;
	}

	set purpose(new_value) {
		this.__purpose = new_value;
	}

	// A copyright statement relating to the code system and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the code system.
	get copyright() {
		return this.__copyright;
	}

	set copyright(new_value) {
		this.__copyright = new_value;
	}

	// If code comparison is case sensitive when codes within this system are compared to each other.
	get caseSensitive() {
		return this.__caseSensitive;
	}

	set caseSensitive(new_value) {
		this.__caseSensitive = new_value;
	}

	// Canonical URL of value set that contains the entire code system.
	get valueSet() {
		return this.__valueSet;
	}

	set valueSet(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field valueSet`);
		}
		this.__valueSet = new_value;
	}

	// The meaning of the hierarchy of concepts.
	get hierarchyMeaning() {
		return this.__hierarchyMeaning;
	}

	set hierarchyMeaning(new_value) {
		this.__hierarchyMeaning = new_value;
	}

	// True If code system defines a post-composition grammar.
	get compositional() {
		return this.__compositional;
	}

	set compositional(new_value) {
		this.__compositional = new_value;
	}

	// This flag is used to signify that the code system has not (or does not) maintain the definitions, and a version must be specified when referencing this code system.
	get versionNeeded() {
		return this.__versionNeeded;
	}

	set versionNeeded(new_value) {
		this.__versionNeeded = new_value;
	}

	// How much of the content of the code system - the concepts and codes it defines - are represented in this resource.
	get content() {
		return this.__content;
	}

	set content(new_value) {
		this.__content = new_value;
	}

	// The total number of concepts defined by the code system. Where the code system has a compositional grammar, the count refers to the number of base (primitive) concepts.
	get count() {
		return this.__count;
	}

	set count(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UnsignedIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field count`);
		}
		this.__count = new_value;
	}

	// A filter that can be used in a value set compose statement when selecting concepts using a filter.
	get filter() {
		return this.__filter;
	}

	set filter(new_value) {
		const CodeSystemFilter = require('./CodeSystemFilter');
		this.__filter = Array.isArray(new_value)
			? new_value.map(val => new CodeSystemFilter(val))
			: [new CodeSystemFilter(new_value)];
	}

	// A property defines an additional slot through which additional information can be provided about a concept.
	get property() {
		return this.__property;
	}

	set property(new_value) {
		const CodeSystemProperty = require('./CodeSystemProperty');
		this.__property = Array.isArray(new_value)
			? new_value.map(val => new CodeSystemProperty(val))
			: [new CodeSystemProperty(new_value)];
	}

	// Concepts that are in the code system. The concept definitions are inherently hierarchical, but the definitions must be consulted to determine what the meaning of the hierarchical relationships are.
	get concept() {
		return this.__concept;
	}

	set concept(new_value) {
		const CodeSystemConcept = require('./CodeSystemConcept');
		this.__concept = Array.isArray(new_value)
			? new_value.map(val => new CodeSystemConcept(val))
			: [new CodeSystemConcept(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			url: this.__url,
			identifier: this.__identifier && this.__identifier.toJSON(),
			version: this.__version,
			name: this.__name,
			title: this.__title,
			status: this.__status,
			experimental: this.__experimental,
			date: this.__date,
			publisher: this.__publisher,
			contact: this.__contact && this.__contact.map(v => v.toJSON()),
			description: this.__description,
			useContext: this.__useContext && this.__useContext.map(v => v.toJSON()),
			jurisdiction: this.__jurisdiction && this.__jurisdiction.map(v => v.toJSON()),
			purpose: this.__purpose,
			copyright: this.__copyright,
			caseSensitive: this.__caseSensitive,
			valueSet: this.__valueSet,
			hierarchyMeaning: this.__hierarchyMeaning,
			compositional: this.__compositional,
			versionNeeded: this.__versionNeeded,
			content: this.__content,
			count: this.__count,
			filter: this.__filter && this.__filter.map(v => v.toJSON()),
			property: this.__property && this.__property.map(v => v.toJSON()),
			concept: this.__concept && this.__concept.map(v => v.toJSON()),
		});
	}
}

module.exports = CodeSystem;
