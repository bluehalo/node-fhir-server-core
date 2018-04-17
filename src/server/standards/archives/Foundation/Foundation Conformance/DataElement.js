const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const ContactDetail = require('./types/ContactDetail');
const UsageContext = require('./types/UsageContext');
const CodeableConcept = require('./types/CodeableConcept');

class Mapping {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// identity		1..1	id	Internal id when this mapping is used
	set identity(identity) {
		this._identity = identity;
	}

	get identity() {
		return this._identity;
	}

	// uri		0..1	uri	Identifies what this mapping refers to
	set uri(uri) {
		this._uri = uri;
	}

	get uri() {
		return this._uri;
	}

	// name		0..1	string	Names what this mapping refers to
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// comment		0..1	string	Versions, issues, scope limitations, etc.
	set comment(comment) {
		this._comment = comment;
	}

	get comment() {
		return this._comment;
	}

	toJSON() {
		return {
			identity: this._identity,
			uri: this._uri,
			name: this._name,
			comment: this._comment,
		};
	}
}

class DataElement extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'DataElement';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// url	Σ	0..1	uri	Logical URI to reference this data element (globally unique)
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// identifier	Σ	0..*	Identifier	Additional identifier for the data element
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

	// version	Σ	0..1	string	Business version of the data element
	set version(version) {
		this._version = version;
	}

	get version() {
		return this._version;
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

	// name	Σ	0..1	string	Name for this data element (computer friendly)
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// title	Σ	0..1	string	Name for this data element (human friendly)
	set title(title) {
		this._title = title;
	}

	get title() {
		return this._title;
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

	// jurisdiction	Σ	0..*	CodeableConcept	Intended jurisdiction for data element (if applicable)
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

	// copyright		0..1	markdown	Use and/or publishing restrictions
	set copyright(copyright) {
		this._copyright = copyright;
	}

	get copyright() {
		return this._copyright;
	}

	// stringency	Σ	0..1	code	comparable | fully-specified | equivalent | convertable | scaleable | flexible
	// DataElementStringency (Required)
	set stringency(stringency) {
		this._stringency = new Code(stringency);
	}

	get stringency() {
		return this._stringency;
	}

	// element	ΣI	1..*	ElementDefinition	Definition of element
	// + No base allowed
	// + No slicing allowed
	set element(element) {
		this._element = [].concat(element);
	}

	get element() {
		return this._element;
	}

	// mapping	I	0..*	BackboneElement	External specification mapped to
	// + At least one of name or uri SHALL be present
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

	toJSON() {
		const json = {
			url: this._url,
			identifier: this._identifier,
			version: this._version,
			status: this._status,
			experimental: this._experimental,
			date: this._date,
			publisher: this._publisher,
			name: this._name,
			title: this._title,
			contact: this._contact,
			useContext: this._useContext,
			jurisdiction: this._jurisdiction,
			copyright: this._copyright,
			stringency: this._stringency,
			element: this._element,
			mapping: this._mapping,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.DataElement = DataElement;
module.exports.Mapping = Mapping;
