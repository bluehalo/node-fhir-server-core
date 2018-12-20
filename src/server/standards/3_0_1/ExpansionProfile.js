const DomainResource = require('./DomainResource');
const UriScalar = require('./scalars/Uri.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class ExpansionProfile extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ExpansionProfile';
		Object.assign(this, opt);
	}

	// This is a ExpansionProfile resource
	static get __resourceType() {
		return 'ExpansionProfile';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__ExpansionProfile = new_value;
	}

	// An absolute URI that is used to identify this expansion profile when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this expansion profile is (or will be) published. The URL SHOULD include the major version of the expansion profile. For more information see [Technical and Business Versions](resource.html#versions).
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

	// A formal identifier that is used to identify this expansion profile when it is represented in other formats, or referenced in a specification, model, design or an instance.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// The identifier that is used to identify this version of the expansion profile when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the expansion profile author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	// A natural language name identifying the expansion profile. This name should be usable as an identifier for the module by machine processing applications such as code generation.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// The status of this expansion profile. Enables tracking the life-cycle of the content.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// A boolean value to indicate that this expansion profile is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental() {
		return this.__experimental;
	}

	set experimental(new_value) {
		this.__experimental = new_value;
	}

	// The date  (and optionally time) when the expansion profile was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the expansion profile changes.
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

	// The name of the individual or organization that published the expansion profile.
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

	// A free text natural language description of the expansion profile from a consumer\'s perspective.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate expansion profile instances.
	get useContext() {
		return this.__useContext;
	}

	set useContext(new_value) {
		const UsageContext = require('./UsageContext');
		this.__useContext = Array.isArray(new_value)
			? new_value.map(val => new UsageContext(val))
			: [new UsageContext(new_value)];
	}

	// A legal or geographic region in which the expansion profile is intended to be used.
	get jurisdiction() {
		return this.__jurisdiction;
	}

	set jurisdiction(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__jurisdiction = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Fix use of a particular code system to a particular version.
	get fixedVersion() {
		return this.__fixedVersion;
	}

	set fixedVersion(new_value) {
		const ExpansionProfileFixedVersion = require('./ExpansionProfileFixedVersion');
		this.__fixedVersion = Array.isArray(new_value)
			? new_value.map(val => new ExpansionProfileFixedVersion(val))
			: [new ExpansionProfileFixedVersion(new_value)];
	}

	// Code system, or a particular version of a code system to be excluded from value set expansions.
	get excludedSystem() {
		return this.__excludedSystem;
	}

	set excludedSystem(new_value) {
		const ExpansionProfileExcludedSystem = require('./ExpansionProfileExcludedSystem');
		this.__excludedSystem = new ExpansionProfileExcludedSystem(new_value);
	}

	// Controls whether concept designations are to be included or excluded in value set expansions.
	get includeDesignations() {
		return this.__includeDesignations;
	}

	set includeDesignations(new_value) {
		this.__includeDesignations = new_value;
	}

	// A set of criteria that provide the constraints imposed on the value set expansion by including or excluding designations.
	get designation() {
		return this.__designation;
	}

	set designation(new_value) {
		const ExpansionProfileDesignation = require('./ExpansionProfileDesignation');
		this.__designation = new ExpansionProfileDesignation(new_value);
	}

	// Controls whether the value set definition is included or excluded in value set expansions.
	get includeDefinition() {
		return this.__includeDefinition;
	}

	set includeDefinition(new_value) {
		this.__includeDefinition = new_value;
	}

	// Controls whether inactive concepts are included or excluded in value set expansions.
	get activeOnly() {
		return this.__activeOnly;
	}

	set activeOnly(new_value) {
		this.__activeOnly = new_value;
	}

	// Controls whether or not the value set expansion nests codes or not (i.e. ValueSet.expansion.contains.contains).
	get excludeNested() {
		return this.__excludeNested;
	}

	set excludeNested(new_value) {
		this.__excludeNested = new_value;
	}

	// Controls whether or not the value set expansion includes codes which cannot be displayed in user interfaces.
	get excludeNotForUI() {
		return this.__excludeNotForUI;
	}

	set excludeNotForUI(new_value) {
		this.__excludeNotForUI = new_value;
	}

	// Controls whether or not the value set expansion includes post coordinated codes.
	get excludePostCoordinated() {
		return this.__excludePostCoordinated;
	}

	set excludePostCoordinated(new_value) {
		this.__excludePostCoordinated = new_value;
	}

	// Specifies the language to be used for description in the expansions i.e. the language to be used for ValueSet.expansion.contains.display.
	get displayLanguage() {
		return this.__displayLanguage;
	}

	set displayLanguage(new_value) {
		this.__displayLanguage = new_value;
	}

	// If the value set being expanded is incomplete (because it is too big to expand), return a limited expansion (a subset) with an indicator that expansion is incomplete, using the extension [http://hl7.org/fhir/StructureDefinition/valueset-toocostly](extension-valueset-toocostly.html).
	get limitedExpansion() {
		return this.__limitedExpansion;
	}

	set limitedExpansion(new_value) {
		this.__limitedExpansion = new_value;
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
			date: this.__date,
			publisher: this.__publisher,
			contact: this.__contact && this.__contact.map(v => v.toJSON()),
			description: this.__description,
			useContext: this.__useContext && this.__useContext.map(v => v.toJSON()),
			jurisdiction: this.__jurisdiction && this.__jurisdiction.map(v => v.toJSON()),
			fixedVersion: this.__fixedVersion && this.__fixedVersion.map(v => v.toJSON()),
			excludedSystem: this.__excludedSystem && this.__excludedSystem.toJSON(),
			includeDesignations: this.__includeDesignations,
			designation: this.__designation && this.__designation.toJSON(),
			includeDefinition: this.__includeDefinition,
			activeOnly: this.__activeOnly,
			excludeNested: this.__excludeNested,
			excludeNotForUI: this.__excludeNotForUI,
			excludePostCoordinated: this.__excludePostCoordinated,
			displayLanguage: this.__displayLanguage,
			limitedExpansion: this.__limitedExpansion,
		});
	}
}

module.exports = ExpansionProfile;
