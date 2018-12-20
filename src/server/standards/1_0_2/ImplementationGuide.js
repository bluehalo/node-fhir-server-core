const DomainResource = require('./DomainResource');
const UriScalar = require('./scalars/Uri.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const IdScalar = require('./scalars/Id.scalar');

class ImplementationGuide extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ImplementationGuide';
		Object.assign(this, opt);
	}

	// This is a ImplementationGuide resource
	static get __resourceType() {
		return 'ImplementationGuide';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__ImplementationGuide = new_value;
	}

	// An absolute URL that is used to identify this implementation guide when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this implementation guide is (or will be) published.
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

	// The identifier that is used to identify this version of the Implementation Guide when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the Implementation Guide author manually.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	// A free text natural language name identifying the Implementation Guide.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// The status of the Implementation Guide.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// This Implementation Guide was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental() {
		return this.__experimental;
	}

	set experimental(new_value) {
		this.__experimental = new_value;
	}

	// The name of the individual or organization that published the implementation guide.
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
		const ImplementationGuideContact = require('./ImplementationGuideContact');
		this.__contact = Array.isArray(new_value)
			? new_value.map(val => new ImplementationGuideContact(val))
			: [new ImplementationGuideContact(new_value)];
	}

	// The date this version of the implementation guide was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the implementation guide changes.
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

	// A free text natural language description of the Implementation Guide and its use.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of implementation guides. The most common use of this element is to represent the country / jurisdiction for which this implementation guide was defined.
	get useContext() {
		return this.__useContext;
	}

	set useContext(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__useContext = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.
	get copyright() {
		return this.__copyright;
	}

	set copyright(new_value) {
		this.__copyright = new_value;
	}

	// The version of the FHIR specification on which this ImplementationGuide is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 1.0.2 for this version.
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

	// Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
	get dependency() {
		return this.__dependency;
	}

	set dependency(new_value) {
		const ImplementationGuideDependency = require('./ImplementationGuideDependency');
		this.__dependency = Array.isArray(new_value)
			? new_value.map(val => new ImplementationGuideDependency(val))
			: [new ImplementationGuideDependency(new_value)];
	}

	// A logical group of resources. Logical groups can be used when building pages.
	get package() {
		return this.__package;
	}

	set package(new_value) {
		const ImplementationGuidePackage = require('./ImplementationGuidePackage');
		this.__package = Array.isArray(new_value)
			? new_value.map(val => new ImplementationGuidePackage(val))
			: [new ImplementationGuidePackage(new_value)];
	}

	// A set of profiles that all resources covered by this implementation guide must conform to.
	get global() {
		return this.__global;
	}

	set global(new_value) {
		const ImplementationGuideGlobal = require('./ImplementationGuideGlobal');
		this.__global = Array.isArray(new_value)
			? new_value.map(val => new ImplementationGuideGlobal(val))
			: [new ImplementationGuideGlobal(new_value)];
	}

	// A binary file that is included in the  implementation guide when it is published.
	get binary() {
		return this.__binary;
	}

	set binary(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field binary`);
		}
		this.__binary = Array.isArray(new_value) ? new_value : [new_value];
	}

	// A page / section in the implementation guide. The root page is the implementation guide home page.
	get page() {
		return this.__page;
	}

	set page(new_value) {
		const ImplementationGuidePage = require('./ImplementationGuidePage');
		this.__page = new ImplementationGuidePage(new_value);
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
			useContext: this.__useContext && this.__useContext.map(v => v.toJSON()),
			copyright: this.__copyright,
			fhirVersion: this.__fhirVersion,
			dependency: this.__dependency && this.__dependency.map(v => v.toJSON()),
			package: this.__package && this.__package.map(v => v.toJSON()),
			global: this.__global && this.__global.map(v => v.toJSON()),
			binary: this.__binary,
			page: this.__page && this.__page.toJSON(),
		});
	}
}

module.exports = ImplementationGuide;
