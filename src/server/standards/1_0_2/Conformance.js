const DomainResource = require('./DomainResource');
const UriScalar = require('./scalars/Uri.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const IdScalar = require('./scalars/Id.scalar');
const CodeScalar = require('./scalars/Code.scalar');

class Conformance extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Conformance';
		Object.assign(this, opt);
	}

	// This is a Conformance resource
	static get __resourceType() {
		return 'Conformance';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Conformance = new_value;
	}

	// An absolute URL that is used to identify this conformance statement when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this conformance statement is (or will be) published.
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

	// The identifier that is used to identify this version of the conformance statement when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	// A free text natural language name identifying the conformance statement.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// The status of this conformance statement.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// A flag to indicate that this conformance statement is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental() {
		return this.__experimental;
	}

	set experimental(new_value) {
		this.__experimental = new_value;
	}

	// The name of the individual or organization that published the conformance.
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
		const ConformanceContact = require('./ConformanceContact');
		this.__contact = Array.isArray(new_value)
			? new_value.map(val => new ConformanceContact(val))
			: [new ConformanceContact(new_value)];
	}

	// The date  (and optionally time) when the conformance statement was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the conformance statement changes.
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

	// A free text natural language description of the conformance statement and its use. Typically, this is used when the conformance statement describes a desired rather than an actual solution, for example as a formal expression of requirements as part of an RFP.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Explains why this conformance statement is needed and why it\'s been constrained as it has.
	get requirements() {
		return this.__requirements;
	}

	set requirements(new_value) {
		this.__requirements = new_value;
	}

	// A copyright statement relating to the conformance statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the system described by the conformance statement.
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

	// Software that is covered by this conformance statement.  It is used when the conformance statement describes the capabilities of a particular software version, independent of an installation.
	get software() {
		return this.__software;
	}

	set software(new_value) {
		const ConformanceSoftware = require('./ConformanceSoftware');
		this.__software = new ConformanceSoftware(new_value);
	}

	// Identifies a specific implementation instance that is described by the conformance statement - i.e. a particular installation, rather than the capabilities of a software program.
	get implementation() {
		return this.__implementation;
	}

	set implementation(new_value) {
		const ConformanceImplementation = require('./ConformanceImplementation');
		this.__implementation = new ConformanceImplementation(new_value);
	}

	// The version of the FHIR specification on which this conformance statement is based.
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

	// A list of profiles that represent different use cases supported by the system. For a server, \'supported by the system\' means the system hosts/produces a set of resources that are conformant to a particular profile, and allows clients that use its services to search using this profile and to find appropriate data. For a client, it means the system will search by this profile and process data according to the guidance implicit in the profile. See further discussion in [Using Profiles]{profiling.html#profile-uses}.
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
		const ConformanceRest = require('./ConformanceRest');
		this.__rest = Array.isArray(new_value)
			? new_value.map(val => new ConformanceRest(val))
			: [new ConformanceRest(new_value)];
	}

	// A description of the messaging capabilities of the solution.
	get messaging() {
		return this.__messaging;
	}

	set messaging(new_value) {
		const ConformanceMessaging = require('./ConformanceMessaging');
		this.__messaging = Array.isArray(new_value)
			? new_value.map(val => new ConformanceMessaging(val))
			: [new ConformanceMessaging(new_value)];
	}

	// A document definition.
	get document() {
		return this.__document;
	}

	set document(new_value) {
		const ConformanceDocument = require('./ConformanceDocument');
		this.__document = Array.isArray(new_value)
			? new_value.map(val => new ConformanceDocument(val))
			: [new ConformanceDocument(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			url: this.__url,
			version: this.__version,
			name: this.__name,
			status: this.__status,
			experimental: this.__experimental,
			publisher: this.__publisher,
			contact: this.__contact && this.__contact.map(v => v.toJSON()),
			date: this.__date,
			description: this.__description,
			requirements: this.__requirements,
			copyright: this.__copyright,
			kind: this.__kind,
			software: this.__software && this.__software.toJSON(),
			implementation: this.__implementation && this.__implementation.toJSON(),
			fhirVersion: this.__fhirVersion,
			acceptUnknown: this.__acceptUnknown,
			format: this.__format,
			profile: this.__profile && this.__profile.map(v => v.toJSON()),
			rest: this.__rest && this.__rest.map(v => v.toJSON()),
			messaging: this.__messaging && this.__messaging.map(v => v.toJSON()),
			document: this.__document && this.__document.map(v => v.toJSON()),
		});
	}
}

module.exports = Conformance;
