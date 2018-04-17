const DomainResource = require('../types/DomainResource');
const Code = require('../types/Code');
const ContactDetail = require('../types/ContactDetail');
const UsageContext = require('../types/UsageContext');
const CodeableConcept = require('../types/CodeableConcept');

class Resource {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// code	Σ	1..1	code	Name of resource type
	// ResourceType (Required)
	set code(code) {
		this._code = new Code(code);
	}

	get code() {
		return this._code;
	}

	// param	Σ	0..*	string	Search Parameter Name, or chained parameters
	set param(param) {
		this._param = [].concat(param);
	}

	get param() {
		return this._param;
	}

	// documentation		0..1	string	Additional documentation about the resource and compartment
	set documentation(documentation) {
		this._documentation = documentation;
	}

	get documentation() {
		return this._documentation;
	}

	toJSON() {
		return {
			code: this._code,
			param: this._param,
			documentation: this._documentation,
		};
	}
}

class CompartmentDefinition extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'CompartmentDefinition';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// url	Σ	1..1	uri	Logical URI to reference this compartment definition (globally unique)
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// name	Σ	1..1	string	Name for this compartment definition (computer friendly)
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// title	Σ	0..1	string	Name for this compartment definition (human friendly)
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

	// description		0..1	markdown	Natural language description of the compartment definition
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// purpose		0..1	markdown	Why this compartment definition is defined
	set purpose(purpose) {
		this._purpose = purpose;
	}

	get purpose() {
		return this._purpose;
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

	// jurisdiction	Σ	0..*	CodeableConcept	Intended jurisdiction for compartment definition (if applicable)
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

	// code	Σ	1..1	code	Patient | Encounter | RelatedPerson | Practitioner | Device
	// CompartmentType (Required)
	set code(code) {
		this._code = new Code(code);
	}

	get code() {
		return this._code;
	}

	// search	Σ	1..1	boolean	Whether the search syntax is supported
	set search(search) {
		this._search = search;
	}

	get search() {
		return this._search;
	}

	// resource	Σ	0..*	BackboneElement	How a resource is related to the compartment
	set resource(resource) {
		if (Array.isArray(resource)) {
			this._resource = resource.map((i) => new Resource(i));
		} else {
			this._resource = [new Resource(resource)];
		}
	}

	get resource() {
		return this._resource;
	}

	toJSON() {
		const json = {
			url: this._url,
			name: this._name,
			title: this._title,
			status: this._status,
			experimental: this._experimental,
			date: this._date,
			publisher: this._publisher,
			contact: this._contact,
			description: this._description,
			purpose: this._purpose,
			useContext: this._useContext,
			jurisdiction: this._jurisdiction,
			code: this._code,
			search: this._search,
			resource: this._resource,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.CompartmentDefinition = CompartmentDefinition;
module.exports.Resource = Resource;
