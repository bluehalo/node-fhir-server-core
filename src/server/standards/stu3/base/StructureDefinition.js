const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const ContactDetail = require('./ContactDetail');
const UsageContext = require('./UsageContext');
const CodeableConcept = require('./CodeableConcept');
const Coding = require('./Coding');
const StructureDefinition_Mapping = require('./StructureDefinition_Mapping');
const StructureDefinition_Snapshot = require('./StructureDefinition_Snapshot');
const StructureDefinition_Differential = require('./StructureDefinition_Differential');

class StructureDefinition extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'StructureDefinition';
	}

	// This is a StructureDefinition resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['StructureDefinition'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// An absolute URI that is used to identify this structure definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this structure definition is (or will be) published. The URL SHOULD include the major version of the structure definition. For more information see [Technical and Business Versions](resource.html#versions).
	get url () {
		return this._url;
	}

	set url ( new_value ) {
		this._url = new_value;
	}

	// A formal identifier that is used to identify this structure definition when it is represented in other formats, or referenced in a specification, model, design or an instance.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// The identifier that is used to identify this version of the structure definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the structure definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
	get version () {
		return this._version;
	}

	set version ( new_value ) {
		this._version = new_value;
	}

	// A natural language name identifying the structure definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// A short, descriptive, user-friendly title for the structure definition.
	get title () {
		return this._title;
	}

	set title ( new_value ) {
		this._title = new_value;
	}

	// The status of this structure definition. Enables tracking the life-cycle of the content.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['draft', 'active', 'retired', 'unknown'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// A boolean value to indicate that this structure definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental () {
		return this._experimental;
	}

	set experimental ( new_value ) {
		this._experimental = new_value;
	}

	// The date  (and optionally time) when the structure definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the structure definition changes.
	get date () {
		return this._date;
	}

	set date ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this._date = new_value;
	}

	// The name of the individual or organization that published the structure definition.
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

	// A free text natural language description of the structure definition from a consumer's perspective.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate structure definition instances.
	get useContext () {
		return this._useContext;
	}

	set useContext ( new_value ) {
		this._useContext = Array.isArray(new_value) ? new_value.map(val => new UsageContext(val)) : [new UsageContext(new_value)];
	}

	// A legal or geographic region in which the structure definition is intended to be used.
	get jurisdiction () {
		return this._jurisdiction;
	}

	set jurisdiction ( new_value ) {
		this._jurisdiction = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Explaination of why this structure definition is needed and why it has been designed as it has.
	get purpose () {
		return this._purpose;
	}

	set purpose ( new_value ) {
		this._purpose = new_value;
	}

	// A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure definition.
	get copyright () {
		return this._copyright;
	}

	set copyright ( new_value ) {
		this._copyright = new_value;
	}

	// A set of key words or terms from external terminologies that may be used to assist with indexing and searching of templates.
	get keyword () {
		return this._keyword;
	}

	set keyword ( new_value ) {
		this._keyword = Array.isArray(new_value) ? new_value.map(val => new Coding(val)) : [new Coding(new_value)];
	}

	// The version of the FHIR specification on which this StructureDefinition is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 3.0.1 for this version.
	get fhirVersion () {
		return this._fhirVersion;
	}

	set fhirVersion ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[A-Za-z0-9\-\.]{1,64}/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field fhirVersion`);
		}
		this._fhirVersion = new_value;
	}

	// An external specification that the content is mapped to.
	get mapping () {
		return this._mapping;
	}

	set mapping ( new_value ) {
		this._mapping = Array.isArray(new_value) ? new_value.map(val => new StructureDefinition_Mapping(val)) : [new StructureDefinition_Mapping(new_value)];
	}

	// Defines the kind of structure that this definition is describing.
	get kind () {
		return this._kind;
	}

	set kind ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['primitive-type', 'complex-type', 'resource', 'logical'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field kind`);
		}
		this._kind = new_value;
	}

	// Whether structure this definition describes is abstract or not  - that is, whether the structure is not intended to be instantiated. For Resources and Data types, abstract types will never be exchanged  between systems.
	get abstract () {
		return this._abstract;
	}

	set abstract ( new_value ) {
		this._abstract = new_value;
	}

	// If this is an extension, Identifies the context within FHIR resources where the extension can be used.
	get contextType () {
		return this._contextType;
	}

	set contextType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['resource', 'datatype', 'extension'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field contextType`);
		}
		this._contextType = new_value;
	}

	// Identifies the types of resource or data type elements to which the extension can be applied.
	get context () {
		return this._context;
	}

	set context ( new_value ) {
		this._context = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// A set of rules as Fluent Invariants about when the extension can be used (e.g. co-occurrence variants for the extension).
	get contextInvariant () {
		return this._contextInvariant;
	}

	set contextInvariant ( new_value ) {
		this._contextInvariant = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// The type this structure describes. If the derivation kind is 'specialization' then this is the master definition for a type, and there is always one of these (a data type, an extension, a resource, including abstract ones). Otherwise the structure definition is a constraint on the stated type (and in this case, the type cannot be an abstract type).
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field type`);
		}
		this._type = new_value;
	}

	// An absolute URI that is the base structure from which this type is derived, either by specialization or constraint.
	get baseDefinition () {
		return this._baseDefinition;
	}

	set baseDefinition ( new_value ) {
		this._baseDefinition = new_value;
	}

	// How the type relates to the baseDefinition.
	get derivation () {
		return this._derivation;
	}

	set derivation ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['specialization', 'constraint'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field derivation`);
		}
		this._derivation = new_value;
	}

	// A snapshot view is expressed in a stand alone form that can be used and interpreted without considering the base StructureDefinition.
	get snapshot () {
		return this._snapshot;
	}

	set snapshot ( new_value ) {
		this._snapshot = new StructureDefinition_Snapshot(new_value);
	}

	// A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.
	get differential () {
		return this._differential;
	}

	set differential ( new_value ) {
		this._differential = new StructureDefinition_Differential(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			url: this._url,
			identifier: this._identifier,
			version: this._version,
			name: this._name,
			title: this._title,
			status: this._status,
			experimental: this._experimental,
			date: this._date,
			publisher: this._publisher,
			contact: this._contact,
			description: this._description,
			useContext: this._useContext,
			jurisdiction: this._jurisdiction,
			purpose: this._purpose,
			copyright: this._copyright,
			keyword: this._keyword,
			fhirVersion: this._fhirVersion,
			mapping: this._mapping,
			kind: this._kind,
			abstract: this._abstract,
			contextType: this._contextType,
			context: this._context,
			contextInvariant: this._contextInvariant,
			type: this._type,
			baseDefinition: this._baseDefinition,
			derivation: this._derivation,
			snapshot: this._snapshot,
			differential: this._differential
		});
	}

}

module.exports = StructureDefinition;
