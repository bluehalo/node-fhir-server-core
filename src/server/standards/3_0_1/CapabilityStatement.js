const DomainResource = require('./DomainResource');
const UriScalar = require('./scalars/Uri.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const IdScalar = require('./scalars/Id.scalar');
const CodeScalar = require('./scalars/Code.scalar');

class CapabilityStatement extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CapabilityStatement';
		Object.assign(this, opt);
	}

	// This is a CapabilityStatement resource
	static get __resourceType() {
		return 'CapabilityStatement';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__CapabilityStatement = new_value;
	}

	// An absolute URI that is used to identify this capability statement when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this capability statement is (or will be) published. The URL SHOULD include the major version of the capability statement. For more information see [Technical and Business Versions](resource.html#versions).
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

	// The identifier that is used to identify this version of the capability statement when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the capability statement author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	// A natural language name identifying the capability statement. This name should be usable as an identifier for the module by machine processing applications such as code generation.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// A short, descriptive, user-friendly title for the capability statement.
	get title() {
		return this.__title;
	}

	set title(new_value) {
		this.__title = new_value;
	}

	// The status of this capability statement. Enables tracking the life-cycle of the content.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// A boolean value to indicate that this capability statement is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental() {
		return this.__experimental;
	}

	set experimental(new_value) {
		this.__experimental = new_value;
	}

	// The date  (and optionally time) when the capability statement was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the capability statement changes.
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

	// The name of the individual or organization that published the capability statement.
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

	// A free text natural language description of the capability statement from a consumer\'s perspective. Typically, this is used when the capability statement describes a desired rather than an actual solution, for example as a formal expression of requirements as part of an RFP.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate capability statement instances.
	get useContext() {
		return this.__useContext;
	}

	set useContext(new_value) {
		const UsageContext = require('./UsageContext');
		this.__useContext = Array.isArray(new_value)
			? new_value.map(val => new UsageContext(val))
			: [new UsageContext(new_value)];
	}

	// A legal or geographic region in which the capability statement is intended to be used.
	get jurisdiction() {
		return this.__jurisdiction;
	}

	set jurisdiction(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__jurisdiction = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Explaination of why this capability statement is needed and why it has been designed as it has.
	get purpose() {
		return this.__purpose;
	}

	set purpose(new_value) {
		this.__purpose = new_value;
	}

	// A copyright statement relating to the capability statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the capability statement.
	get copyright() {
		return this.__copyright;
	}

	set copyright(new_value) {
		this.__copyright = new_value;
	}

	// The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind not instance of software) or a class of implementation (e.g. a desired purchase).
	get kind() {
		return this.__kind;
	}

	set kind(new_value) {
		this.__kind = new_value;
	}

	// Reference to a canonical URL of another CapabilityStatement that this software implements or uses. This capability statement is a published API description that corresponds to a business service. The rest of the capability statement does not need to repeat the details of the referenced resource, but can do so.
	get instantiates() {
		return this.__instantiates;
	}

	set instantiates(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field instantiates`);
		}
		this.__instantiates = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Software that is covered by this capability statement.  It is used when the capability statement describes the capabilities of a particular software version, independent of an installation.
	get software() {
		return this.__software;
	}

	set software(new_value) {
		const CapabilityStatementSoftware = require('./CapabilityStatementSoftware');
		this.__software = new CapabilityStatementSoftware(new_value);
	}

	// Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program.
	get implementation() {
		return this.__implementation;
	}

	set implementation(new_value) {
		const CapabilityStatementImplementation = require('./CapabilityStatementImplementation');
		this.__implementation = new CapabilityStatementImplementation(new_value);
	}

	// The version of the FHIR specification on which this capability statement is based.
	get fhirVersion() {
		return this.__fhirVersion;
	}

	set fhirVersion(new_value) {
		// Throw if new value does not match the pattern
		let pattern = IdScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field fhirVersion`);
		}
		this.__fhirVersion = new_value;
	}

	// A code that indicates whether the application accepts unknown elements or extensions when reading resources.
	get acceptUnknown() {
		return this.__acceptUnknown;
	}

	set acceptUnknown(new_value) {
		this.__acceptUnknown = new_value;
	}

	// A list of the formats supported by this implementation using their content types.
	get format() {
		return this.__format;
	}

	set format(new_value) {
		// Throw if new value does not match the pattern
		let pattern = CodeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field format`);
		}
		this.__format = Array.isArray(new_value) ? new_value : [new_value];
	}

	// A list of the patch formats supported by this implementation using their content types.
	get patchFormat() {
		return this.__patchFormat;
	}

	set patchFormat(new_value) {
		// Throw if new value does not match the pattern
		let pattern = CodeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field patchFormat`);
		}
		this.__patchFormat = Array.isArray(new_value) ? new_value : [new_value];
	}

	// A list of implementation guides that the server does (or should) support in their entirety.
	get implementationGuide() {
		return this.__implementationGuide;
	}

	set implementationGuide(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field implementationGuide`);
		}
		this.__implementationGuide = Array.isArray(new_value) ? new_value : [new_value];
	}

	// A list of profiles that represent different use cases supported by the system. For a server, \'supported by the system\' means the system hosts/produces a set of resources that are conformant to a particular profile, and allows clients that use its services to search using this profile and to find appropriate data. For a client, it means the system will search by this profile and process data according to the guidance implicit in the profile. See further discussion in [Using Profiles](profiling.html#profile-uses).
	get profile() {
		return this.__profile;
	}

	set profile(new_value) {
		const Reference = require('./Reference');
		this.__profile = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A definition of the restful capabilities of the solution, if any.
	get rest() {
		return this.__rest;
	}

	set rest(new_value) {
		const CapabilityStatementRest = require('./CapabilityStatementRest');
		this.__rest = Array.isArray(new_value)
			? new_value.map(val => new CapabilityStatementRest(val))
			: [new CapabilityStatementRest(new_value)];
	}

	// A description of the messaging capabilities of the solution.
	get messaging() {
		return this.__messaging;
	}

	set messaging(new_value) {
		const CapabilityStatementMessaging = require('./CapabilityStatementMessaging');
		this.__messaging = Array.isArray(new_value)
			? new_value.map(val => new CapabilityStatementMessaging(val))
			: [new CapabilityStatementMessaging(new_value)];
	}

	// A document definition.
	get document() {
		return this.__document;
	}

	set document(new_value) {
		const CapabilityStatementDocument = require('./CapabilityStatementDocument');
		this.__document = Array.isArray(new_value)
			? new_value.map(val => new CapabilityStatementDocument(val))
			: [new CapabilityStatementDocument(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			url: this.__url,
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
			kind: this.__kind,
			instantiates: this.__instantiates,
			software: this.__software && this.__software.toJSON(),
			implementation: this.__implementation && this.__implementation.toJSON(),
			fhirVersion: this.__fhirVersion,
			acceptUnknown: this.__acceptUnknown,
			format: this.__format,
			patchFormat: this.__patchFormat,
			implementationGuide: this.__implementationGuide,
			profile: this.__profile && this.__profile.map(v => v.toJSON()),
			rest: this.__rest && this.__rest.map(v => v.toJSON()),
			messaging: this.__messaging && this.__messaging.map(v => v.toJSON()),
			document: this.__document && this.__document.map(v => v.toJSON()),
		});
	}
}

module.exports = CapabilityStatement;
