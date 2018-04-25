const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Code = require('../types/Code');
const ContactDetail = require('../types/ContactDetail');
const UsageContext = require('../types/UsageContext');
const CodeableConcept = require('../types/CodeableConcept');
const { Mapping } = require('./DataElement');
const Coding = require('../types/Coding');

class Snapshot {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// element	I	1..*	ElementDefinition	Definition of elements in the resource (if no StructureDefinition)
	set element(element) {
		this._element = [].concat(element);
	}

	get element() {
		return this._element;
	}

	toJSON() {
		return {
			element: this._element,
		};
	}
}

class Differential {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// element		1..*	ElementDefinition	Definition of elements in the resource (if no StructureDefinition)
	set element(element) {
		this._element = [].concat(element);
	}

	get element() {
		return this._element;
	}

	toJSON() {
		return {
			element: this._element,
		};
	}
}

class StructureDefinition extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'StructureDefinition';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// url	Σ	1..1	uri	Logical URI to reference this structure definition (globally unique)
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// identifier	Σ	0..*	Identifier	Additional identifier for the structure definition
	set identifier(identifier) {
		if (Array.isArray(identifier)) {
			this._identifier = identifier.map((i) => new Identifier(i));
		} else {
			this._identifier = [new Identifier(identifier)];
		}
	}

	get identifier() {
		return this._identifier;
	}

	// version	Σ	0..1	string	Business version of the structure definition
	set version(version) {
		this._version = version;
	}

	get version() {
		return this._version;
	}

	// name	Σ	1..1	string	Name for this structure definition (computer friendly)
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// title	Σ	0..1	string	Name for this structure definition (human friendly)
	set title(title) {
		this._title = title;
	}

	get title() {
		return this._title;
	}

	// status	?!Σ	1..1	code	draft | active | retired | unknown
	// PublicationStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// experimental	?!Σ	0..1	boolean	For testing purposes, not real usage
	set experimental(experimental) {
		this._experimental = experimental;
	}

	get experimental() {
		return this._experimental;
	}

	// date	Σ	0..1	dateTime	Date this was last changed
	set date(date) {
		this._date = date;
	}

	get date() {
		return this._date;
	}

	// publisher	Σ	0..1	string	Name of the publisher (organization or individual)
	set publisher(publisher) {
		this._publisher = publisher;
	}

	get publisher() {
		return this._publisher;
	}

	// contact	Σ	0..*	ContactDetail	Contact details for the publisher
	set contact(contact) {
		if (Array.isArray(contact)) {
			this._contact = contact.map((i) => new ContactDetail(i));
		} else {
			this._contact = [new ContactDetail(contact)];
		}
	}

	get contact() {
		return this._contact;
	}

	// description		0..1	markdown	Natural language description of the structure definition
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// useContext	Σ	0..*	UsageContext	Context the content is intended to support
	set useContext(useContext) {
		if (Array.isArray(useContext)) {
			this._useContext = useContext.map((i) => new UsageContext(i));
		} else {
			this._useContext = [new UsageContext(useContext)];
		}
	}

	get useContext() {
		return this._useContext;
	}

	// jurisdiction	Σ	0..*	CodeableConcept	Intended jurisdiction for structure definition (if applicable)
	// Jurisdiction ValueSet (Extensible)
	set jurisdiction(jurisdiction) {
		if (Array.isArray(jurisdiction)) {
			this._jurisdiction = jurisdiction.map((i) => new CodeableConcept(i));
		} else {
			this._jurisdiction = [new CodeableConcept(jurisdiction)];
		}
	}

	get jurisdiction() {
		return this._jurisdiction;
	}

	// purpose		0..1	markdown	Why this structure definition is defined
	set purpose(purpose) {
		this._purpose = purpose;
	}

	get purpose() {
		return this._purpose;
	}

	// copyright		0..1	markdown	Use and/or publishing restrictions
	set copyright(copyright) {
		this._copyright = copyright;
	}

	get copyright() {
		return this._copyright;
	}

	// keyword	Σ	0..*	Coding	Assist with indexing and finding
	// Structure Definition Codes (Example)
	set keyword(keyword) {
		if (Array.isArray(keyword)) {
			this._keyword = keyword.map((i) => new Coding(i));
		} else {
			this._keyword = [new Coding(keyword)];
		}
	}

	get keyword() {
		return this._keyword;
	}

	// fhirVersion	Σ	0..1	id	FHIR Version this StructureDefinition targets
	set fhirVersion(fhirVersion) {
		this._fhirVersion = fhirVersion;
	}

	get fhirVersion() {
		return this._fhirVersion;
	}

	// mapping	I	0..*	BackboneElement	External specification that the content is mapped to
	// + Must have at least a name or a uri (or both)
	set mapping(mapping) {
		if (Array.isArray(mapping)) {
			this._mapping = mapping.map((i) => new Mapping(i));
		} else {
			this._mapping = [new Mapping(mapping)];
		}
	}

	get mapping() {
		return this._mapping;
	}

	// identity		1..1	id	Internal id when this mapping is used
	set identity(identity) {
		this._identity = identity;
	}

	get identity() {
		return this._identity;
	}

	// uri	I	0..1	uri	Identifies what this mapping refers to
	set uri(uri) {
		this._uri = uri;
	}

	get uri() {
		return this._uri;
	}

	// comment		0..1	string	Versions, Issues, Scope limitations etc.
	set comment(comment) {
		this._comment = comment;
	}

	get comment() {
		return this._comment;
	}

	// kind	Σ	1..1	code	primitive-type | complex-type | resource | logical
	// StructureDefinitionKind (Required)
	set kind(kind) {
		this._kind = new Code(kind);
	}

	get kind() {
		return this._kind;
	}

	// abstract	Σ	1..1	boolean	Whether the structure is abstract
	set structureDefinitionAbstract(structureDefinitionAbstract) {
		this._structureDefinitionAbstract = structureDefinitionAbstract;
	}

	get structureDefinitionAbstract() {
		return this._structureDefinitionAbstract;
	}

	// contextType	ΣI	0..1	code	resource | datatype | extension
	// ExtensionContext (Required)
	set contextType(contextType) {
		this._contextType = new Code(contextType);
	}

	get contextType() {
		return this._contextType;
	}

	// context	ΣI	0..*	string	Where the extension can be used in instances
	set context(context) {
		this._context = [].concat(context);
	}

	get context() {
		return this._context;
	}

	// contextInvariant	ΣI	0..*	string	FHIRPath invariants - when the extension can be used
	set contextInvariant(contextInvariant) {
		this._contextInvariant = [].concat(contextInvariant);
	}

	get contextInvariant() {
		return this._contextInvariant;
	}

	// type	ΣI	1..1	code	Type defined or constrained by this structure
	// FHIRDefinedType (Extensible)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// baseDefinition	ΣI	0..1	uri	Definition that this type is constrained/specialized from
	set baseDefinition(baseDefinition) {
		this._baseDefinition = baseDefinition;
	}

	get baseDefinition() {
		return this._baseDefinition;
	}

	// derivation	ΣI	0..1	code	specialization | constraint - How relates to base definition
	// TypeDerivationRule (Required)
	set derivation(derivation) {
		this._derivation = new Code(derivation);
	}

	get derivation() {
		return this._derivation;
	}

	// snapshot	I	0..1	BackboneElement	Snapshot view of the structure
	// + The first element in a snapshot has no type
	// + In any snapshot, all the elements must be in the specified type
	// + Each element definition in a snapshot must have a formal definition and cardinalities
	set snapshot(snapshot) {
		this._snapshot = new Snapshot(snapshot);
	}

	get snapshot() {
		return this._snapshot;
	}

	// differential	I	0..1	BackboneElement	Differential view of the structure
	// + If the first element in a differential has no "." in the path, it has no type
	// + No slicing on the root element
	// + In any differential, all the elements must be in the specified type
	set differential(differential) {
		this._differential = new Differential(differential);
	}

	get differential() {
		return this._differential;
	}

	toJSON() {
		const json = {
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
			identity: this._identity,
			uri: this._uri,
			comment: this._comment,
			kind: this._kind,
			structureDefinitionAbstract: this._structureDefinitionAbstract,
			contextType: this._contextType,
			context: this._context,
			contextInvariant: this._contextInvariant,
			type: this._type,
			baseDefinition: this._baseDefinition,
			derivation: this._derivation,
			snapshot: this._snapshot,
			differential: this._differential,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.StructureDefinition = StructureDefinition;
module.exports.Differential = Differential;
module.exports.Snapshot = Snapshot;
