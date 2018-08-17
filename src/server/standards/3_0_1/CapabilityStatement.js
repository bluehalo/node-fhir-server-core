const DomainResource = require('./DomainResource');
const ContactDetail = require('./ContactDetail');
const UsageContext = require('./UsageContext');
const CodeableConcept = require('./CodeableConcept');
const CapabilityStatement_Software = require('./CapabilityStatement_Software');
const CapabilityStatement_Implementation = require('./CapabilityStatement_Implementation');
const Reference = require('./Reference');
const CapabilityStatement_Rest = require('./CapabilityStatement_Rest');
const CapabilityStatement_Messaging = require('./CapabilityStatement_Messaging');
const CapabilityStatement_Document = require('./CapabilityStatement_Document');

class CapabilityStatement extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'CapabilityStatement';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'CapabilityStatement';
	}

	// This is a CapabilityStatement resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['CapabilityStatement'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// An absolute URI that is used to identify this capability statement when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this capability statement is (or will be) published. The URL SHOULD include the major version of the capability statement. For more information see [Technical and Business Versions](resource.html#versions).
	get url () {
		return this._url;
	}

	set url ( new_value ) {
		this._url = new_value;
	}

	// The identifier that is used to identify this version of the capability statement when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the capability statement author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
	get version () {
		return this._version;
	}

	set version ( new_value ) {
		this._version = new_value;
	}

	// A natural language name identifying the capability statement. This name should be usable as an identifier for the module by machine processing applications such as code generation.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// A short, descriptive, user-friendly title for the capability statement.
	get title () {
		return this._title;
	}

	set title ( new_value ) {
		this._title = new_value;
	}

	// The status of this capability statement. Enables tracking the life-cycle of the content.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['draft', 'active', 'retired', 'unknown'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// A boolean value to indicate that this capability statement is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental () {
		return this._experimental;
	}

	set experimental ( new_value ) {
		this._experimental = new_value;
	}

	// The date  (and optionally time) when the capability statement was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the capability statement changes.
	get date () {
		return this._date;
	}

	set date ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this._date = new_value;
	}

	// The name of the individual or organization that published the capability statement.
	get publisher () {
		return this._publisher;
	}

	set publisher ( new_value ) {
		this._publisher = new_value;
	}

	// Contact details to assist a user in finding and communicating with the publisher.
	get contact () {
		return this._contact;
	}

	set contact ( new_value ) {
		this._contact = Array.isArray(new_value) ? new_value.map(val => new ContactDetail(val)) : [new ContactDetail(new_value)];
	}

	// A free text natural language description of the capability statement from a consumer's perspective. Typically, this is used when the capability statement describes a desired rather than an actual solution, for example as a formal expression of requirements as part of an RFP.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate capability statement instances.
	get useContext () {
		return this._useContext;
	}

	set useContext ( new_value ) {
		this._useContext = Array.isArray(new_value) ? new_value.map(val => new UsageContext(val)) : [new UsageContext(new_value)];
	}

	// A legal or geographic region in which the capability statement is intended to be used.
	get jurisdiction () {
		return this._jurisdiction;
	}

	set jurisdiction ( new_value ) {
		this._jurisdiction = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Explaination of why this capability statement is needed and why it has been designed as it has.
	get purpose () {
		return this._purpose;
	}

	set purpose ( new_value ) {
		this._purpose = new_value;
	}

	// A copyright statement relating to the capability statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the capability statement.
	get copyright () {
		return this._copyright;
	}

	set copyright ( new_value ) {
		this._copyright = new_value;
	}

	// The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind not instance of software) or a class of implementation (e.g. a desired purchase).
	get kind () {
		return this._kind;
	}

	set kind ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['instance', 'capability', 'requirements'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field kind`);
		}
		this._kind = new_value;
	}

	// Reference to a canonical URL of another CapabilityStatement that this software implements or uses. This capability statement is a published API description that corresponds to a business service. The rest of the capability statement does not need to repeat the details of the referenced resource, but can do so.
	get instantiates () {
		return this._instantiates;
	}

	set instantiates ( new_value ) {
		this._instantiates = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Software that is covered by this capability statement.  It is used when the capability statement describes the capabilities of a particular software version, independent of an installation.
	get software () {
		return this._software;
	}

	set software ( new_value ) {
		this._software = new CapabilityStatement_Software(new_value);
	}

	// Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program.
	get implementation () {
		return this._implementation;
	}

	set implementation ( new_value ) {
		this._implementation = new CapabilityStatement_Implementation(new_value);
	}

	// The version of the FHIR specification on which this capability statement is based.
	get fhirVersion () {
		return this._fhirVersion;
	}

	set fhirVersion ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field fhirVersion`);
		}
		this._fhirVersion = new_value;
	}

	// A code that indicates whether the application accepts unknown elements or extensions when reading resources.
	get acceptUnknown () {
		return this._acceptUnknown;
	}

	set acceptUnknown ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['no', 'extensions', 'elements', 'both'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field acceptUnknown`);
		}
		this._acceptUnknown = new_value;
	}

	// A list of the formats supported by this implementation using their content types.
	get format () {
		return this._format;
	}

	set format ( new_value ) {
		this._format = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// A list of the patch formats supported by this implementation using their content types.
	get patchFormat () {
		return this._patchFormat;
	}

	set patchFormat ( new_value ) {
		this._patchFormat = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// A list of implementation guides that the server does (or should) support in their entirety.
	get implementationGuide () {
		return this._implementationGuide;
	}

	set implementationGuide ( new_value ) {
		this._implementationGuide = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// A list of profiles that represent different use cases supported by the system. For a server, "supported by the system" means the system hosts/produces a set of resources that are conformant to a particular profile, and allows clients that use its services to search using this profile and to find appropriate data. For a client, it means the system will search by this profile and process data according to the guidance implicit in the profile. See further discussion in [Using Profiles](profiling.html#profile-uses).
	get profile () {
		return this._profile;
	}

	set profile ( new_value ) {
		this._profile = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A definition of the restful capabilities of the solution, if any.
	get rest () {
		return this._rest;
	}

	set rest ( new_value ) {
		this._rest = Array.isArray(new_value) ? new_value.map(val => new CapabilityStatement_Rest(val)) : [new CapabilityStatement_Rest(new_value)];
	}

	// A description of the messaging capabilities of the solution.
	get messaging () {
		return this._messaging;
	}

	set messaging ( new_value ) {
		this._messaging = Array.isArray(new_value) ? new_value.map(val => new CapabilityStatement_Messaging(val)) : [new CapabilityStatement_Messaging(new_value)];
	}

	// A document definition.
	get document () {
		return this._document;
	}

	set document ( new_value ) {
		this._document = Array.isArray(new_value) ? new_value.map(val => new CapabilityStatement_Document(val)) : [new CapabilityStatement_Document(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			url: this._url,
			version: this._version,
			name: this._name,
			title: this._title,
			status: this._status,
			experimental: this._experimental,
			date: this._date,
			publisher: this._publisher,
			contact: this._contact && this._contact.map(v => v.toJSON()),
			description: this._description,
			useContext: this._useContext && this._useContext.map(v => v.toJSON()),
			jurisdiction: this._jurisdiction && this._jurisdiction.map(v => v.toJSON()),
			purpose: this._purpose,
			copyright: this._copyright,
			kind: this._kind,
			instantiates: this._instantiates,
			software: this._software && this._software.toJSON(),
			implementation: this._implementation && this._implementation.toJSON(),
			fhirVersion: this._fhirVersion,
			acceptUnknown: this._acceptUnknown,
			format: this._format,
			patchFormat: this._patchFormat,
			implementationGuide: this._implementationGuide,
			profile: this._profile && this._profile.map(v => v.toJSON()),
			rest: this._rest && this._rest.map(v => v.toJSON()),
			messaging: this._messaging && this._messaging.map(v => v.toJSON()),
			document: this._document && this._document.map(v => v.toJSON())
		});
	}

}

module.exports = CapabilityStatement;
