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

	// An absolute URL that is used to identify this structure definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this structure definition is (or will be) published.
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

	// Formal identifier that is used to identify this StructureDefinition when it is represented in other formats, or referenced in a specification, model, design or an instance  (should be globally unique OID, UUID, or URI), (if it\'s not possible to use the literal URI).
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// The identifier that is used to identify this version of the StructureDefinition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the StructureDefinition author manually.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	// A free text natural language name identifying the StructureDefinition.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// Defined so that applications can use this name when displaying the value of the extension to the user.
	get display() {
		return this.__display;
	}

	set display(new_value) {
		this.__display = new_value;
	}

	// The status of the StructureDefinition.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// This StructureDefinition was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental() {
		return this.__experimental;
	}

	set experimental(new_value) {
		this.__experimental = new_value;
	}

	// The name of the individual or organization that published the structure definition.
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
		const StructureDefinitionContact = require('./StructureDefinitionContact');
		this.__contact = Array.isArray(new_value)
			? new_value.map(val => new StructureDefinitionContact(val))
			: [new StructureDefinitionContact(new_value)];
	}

	// The date this version of the structure definition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the structure definition changes.
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

	// A free text natural language description of the StructureDefinition and its use.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of structure definitions.
	get useContext() {
		return this.__useContext;
	}

	set useContext(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__useContext = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Explains why this structure definition is needed and why it\'s been constrained as it has.
	get requirements() {
		return this.__requirements;
	}

	set requirements(new_value) {
		this.__requirements = new_value;
	}

	// A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.
	get copyright() {
		return this.__copyright;
	}

	set copyright(new_value) {
		this.__copyright = new_value;
	}

	// A set of terms from external terminologies that may be used to assist with indexing and searching of templates.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const Coding = require('./Coding');
		this.__code = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// The version of the FHIR specification on which this StructureDefinition is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 1.0.2 for this version.
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

	// The type of type that is being constrained - a data type, an extension, a resource, including abstract ones. If this field is present, it indicates that the structure definition is a constraint. If it is not present, then the structure definition is the definition of a base structure.
	get constrainedType() {
		return this.__constrainedType;
	}

	set constrainedType(new_value) {
		this.__constrainedType = new_value;
	}

	// Whether structure this definition describes is abstract or not  - that is, whether an actual exchanged item can ever be of this type.
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

	// An absolute URI that is the base structure from which this set of constraints is derived.
	get base() {
		return this.__base;
	}

	set base(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field base`);
		}
		this.__base = new_value;
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
			display: this.__display,
			status: this.__status,
			experimental: this.__experimental,
			publisher: this.__publisher,
			contact: this.__contact && this.__contact.map(v => v.toJSON()),
			date: this.__date,
			description: this.__description,
			useContext: this.__useContext && this.__useContext.map(v => v.toJSON()),
			requirements: this.__requirements,
			copyright: this.__copyright,
			code: this.__code && this.__code.map(v => v.toJSON()),
			fhirVersion: this.__fhirVersion,
			mapping: this.__mapping && this.__mapping.map(v => v.toJSON()),
			kind: this.__kind,
			constrainedType: this.__constrainedType,
			abstract: this.__abstract,
			contextType: this.__contextType,
			context: this.__context,
			base: this.__base,
			snapshot: this.__snapshot && this.__snapshot.toJSON(),
			differential: this.__differential && this.__differential.toJSON(),
		});
	}
}

module.exports = StructureDefinition;
