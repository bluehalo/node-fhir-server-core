const DomainResource = require('./DomainResource');
const UriScalar = require('./scalars/Uri.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const IdScalar = require('./scalars/Id.scalar');

class StructureDefinition extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'StructureDefinition';
		Object.assign(this, opt);
	}

	// This is a StructureDefinition resource
	static get __resourceType() {
		return 'StructureDefinition';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__StructureDefinition = new_value;
	}

	// An absolute URI that is used to identify this structure definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this structure definition is (or will be) published. The URL SHOULD include the major version of the structure definition. For more information see [Technical and Business Versions](resource.html#versions).
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

	// A formal identifier that is used to identify this structure definition when it is represented in other formats, or referenced in a specification, model, design or an instance.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// The identifier that is used to identify this version of the structure definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the structure definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	// A natural language name identifying the structure definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// A short, descriptive, user-friendly title for the structure definition.
	get title() {
		return this.__title;
	}

	set title(new_value) {
		this.__title = new_value;
	}

	// The status of this structure definition. Enables tracking the life-cycle of the content.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// A boolean value to indicate that this structure definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental() {
		return this.__experimental;
	}

	set experimental(new_value) {
		this.__experimental = new_value;
	}

	// The date  (and optionally time) when the structure definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the structure definition changes.
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

	// The name of the individual or organization that published the structure definition.
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

	// A free text natural language description of the structure definition from a consumer\'s perspective.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate structure definition instances.
	get useContext() {
		return this.__useContext;
	}

	set useContext(new_value) {
		const UsageContext = require('./UsageContext');
		this.__useContext = Array.isArray(new_value)
			? new_value.map(val => new UsageContext(val))
			: [new UsageContext(new_value)];
	}

	// A legal or geographic region in which the structure definition is intended to be used.
	get jurisdiction() {
		return this.__jurisdiction;
	}

	set jurisdiction(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__jurisdiction = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Explaination of why this structure definition is needed and why it has been designed as it has.
	get purpose() {
		return this.__purpose;
	}

	set purpose(new_value) {
		this.__purpose = new_value;
	}

	// A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure definition.
	get copyright() {
		return this.__copyright;
	}

	set copyright(new_value) {
		this.__copyright = new_value;
	}

	// A set of key words or terms from external terminologies that may be used to assist with indexing and searching of templates.
	get keyword() {
		return this.__keyword;
	}

	set keyword(new_value) {
		const Coding = require('./Coding');
		this.__keyword = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// The version of the FHIR specification on which this StructureDefinition is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 3.0.1 for this version.
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

	// An external specification that the content is mapped to.
	get mapping() {
		return this.__mapping;
	}

	set mapping(new_value) {
		const StructureDefinitionMapping = require('./StructureDefinitionMapping');
		this.__mapping = Array.isArray(new_value)
			? new_value.map(val => new StructureDefinitionMapping(val))
			: [new StructureDefinitionMapping(new_value)];
	}

	// Defines the kind of structure that this definition is describing.
	get kind() {
		return this.__kind;
	}

	set kind(new_value) {
		this.__kind = new_value;
	}

	// Whether structure this definition describes is abstract or not  - that is, whether the structure is not intended to be instantiated. For Resources and Data types, abstract types will never be exchanged  between systems.
	get abstract() {
		return this.__abstract;
	}

	set abstract(new_value) {
		this.__abstract = new_value;
	}

	// If this is an extension, Identifies the context within FHIR resources where the extension can be used.
	get contextType() {
		return this.__contextType;
	}

	set contextType(new_value) {
		this.__contextType = new_value;
	}

	// Identifies the types of resource or data type elements to which the extension can be applied.
	get context() {
		return this.__context;
	}

	set context(new_value) {
		this.__context = Array.isArray(new_value) ? new_value : [new_value];
	}

	// A set of rules as Fluent Invariants about when the extension can be used (e.g. co-occurrence variants for the extension).
	get contextInvariant() {
		return this.__contextInvariant;
	}

	set contextInvariant(new_value) {
		this.__contextInvariant = Array.isArray(new_value) ? new_value : [new_value];
	}

	// The type this structure describes. If the derivation kind is \'specialization\' then this is the master definition for a type, and there is always one of these (a data type, an extension, a resource, including abstract ones). Otherwise the structure definition is a constraint on the stated type (and in this case, the type cannot be an abstract type).
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// An absolute URI that is the base structure from which this type is derived, either by specialization or constraint.
	get baseDefinition() {
		return this.__baseDefinition;
	}

	set baseDefinition(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field baseDefinition`);
		}
		this.__baseDefinition = new_value;
	}

	// How the type relates to the baseDefinition.
	get derivation() {
		return this.__derivation;
	}

	set derivation(new_value) {
		this.__derivation = new_value;
	}

	// A snapshot view is expressed in a stand alone form that can be used and interpreted without considering the base StructureDefinition.
	get snapshot() {
		return this.__snapshot;
	}

	set snapshot(new_value) {
		const StructureDefinitionSnapshot = require('./StructureDefinitionSnapshot');
		this.__snapshot = new StructureDefinitionSnapshot(new_value);
	}

	// A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.
	get differential() {
		return this.__differential;
	}

	set differential(new_value) {
		const StructureDefinitionDifferential = require('./StructureDefinitionDifferential');
		this.__differential = new StructureDefinitionDifferential(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			url: this.__url,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
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
			keyword: this.__keyword && this.__keyword.map(v => v.toJSON()),
			fhirVersion: this.__fhirVersion,
			mapping: this.__mapping && this.__mapping.map(v => v.toJSON()),
			kind: this.__kind,
			abstract: this.__abstract,
			contextType: this.__contextType,
			context: this.__context,
			contextInvariant: this.__contextInvariant,
			type: this.__type,
			baseDefinition: this.__baseDefinition,
			derivation: this.__derivation,
			snapshot: this.__snapshot && this.__snapshot.toJSON(),
			differential: this.__differential && this.__differential.toJSON(),
		});
	}
}

module.exports = StructureDefinition;
