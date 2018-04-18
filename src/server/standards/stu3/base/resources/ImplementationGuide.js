const DomainResource = require('../types/DomainResource');
const Code = require('../types/Code');
const ContactDetail = require('../types/ContactDetail');
const UsageContext = require('../types/UsageContext');
const CodeableConcept = require('../types/CodeableConcept');
const Reference = require('../types/Reference');

class Page {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// source	Σ	1..1	uri	Where to find that page
	set source(source) {
		this._source = source;
	}

	get source() {
		return this._source;
	}

	// title	Σ	1..1	string	Short title shown for navigational assistance
	set title(title) {
		this._title = title;
	}

	get title() {
		return this._title;
	}

	// kind	Σ	1..1	code	page | example | list | include | directory | dictionary | toc | resource
	// GuidePageKind (Required)
	set kind(kind) {
		this._kind = new Code(kind);
	}

	get kind() {
		return this._kind;
	}

	// type		0..*	code	Kind of resource to include in the list
	// ResourceType (Required)
	set type(type) {
		if (Array.isArray(type)) {
			this._type = type.map((i) => new Code(i));
		} else {
			this._type = [new Code(type)];
		}
	}

	get type() {
		return this._type;
	}

	// package		0..*	string	Name of package to include
	set pagePackage(pagePackage) {
		this._pagePackage = [].concat(pagePackage);
	}

	get pagePackage() {
		return this._pagePackage;
	}

	// format		0..1	code	Format of the page (e.g. html, markdown, etc.)
	// MimeType  (Required)
	set format(format) {
		this._format = new Code(format);
	}

	get format() {
		return this._format;
	}

	// page		0..*	see page	Nested Pages / Sections
	set page(page) {
		this._page = [].concat(page);
	}

	get page() {
		return this._page;
	}

	toJSON() {
		return {
			source: this._source,
			title: this._title,
			kind: this._kind,
			type: this._type,
			pagePackage: this._pagePackage,
			format: this._format,
			page: this._page,
		};
	}
}

class Global {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type	Σ	1..1	code	Type this profiles applies to
	// ResourceType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// profile	Σ	1..1	Reference(StructureDefinition)	Profile that all resources must conform to
	set profile(profile) {
		this._profile = new Reference(profile);
	}

	get profile() {
		return this._profile;
	}

	toJSON() {
		return {
			type: this._type,
			profile: this._profile,
		};
	}
}

class Resource {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// example	Σ	1..1	boolean	If not an example, has its normal meaning
	set example(example) {
		this._example = example;
	}

	get example() {
		return this._example;
	}

	// name	Σ	0..1	string	Human Name for the resource
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// description		0..1	string	Reason why included in guide
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// acronym		0..1	string	Short code to identify the resource
	set acronym(acronym) {
		this._acronym = acronym;
	}

	get acronym() {
		return this._acronym;
	}

	// source[x]	Σ	1..1		Location of the resource
	// sourceUri			uri
	set sourceUri(sourceUri) {
		this._sourceUri = sourceUri;
	}

	get sourceUri() {
		return this._sourceUri;
	}

	// sourceReference			Reference
	set sourceReference(sourceReference) {
		this._sourceReference = new Reference(sourceReference);
	}

	get sourceReference() {
		return this._sourceReference;
	}

	// exampleFor		0..1	Reference(StructureDefinition)	Resource this is an example of (if applicable)
	set exampleFor(exampleFor) {
		this._exampleFor = new Reference(exampleFor);
	}

	get exampleFor() {
		return this._exampleFor;
	}

	toJSON() {
		return {
			example: this._example,
			name: this._name,
			description: this._description,
			acronym: this._acronym,
			sourceUri: this._sourceUri,
			sourceReference: this._sourceReference,
			exampleFor: this._exampleFor,
		};
	}
}

class ImplementationGuidePackage {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// name	Σ	1..1	string	Name used .page.package
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// description		0..1	string	Human readable text describing the package
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// resource	Σ	1..*	BackboneElement	Resource in the implementation guide
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
		return {
			name: this._name,
			description: this._description,
			resource: this._resource,
		};
	}
}

class Dependency {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type	Σ	1..1	code	reference | inclusion
	// GuideDependencyType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// uri	Σ	1..1	uri	Where to find dependency
	set uri(uri) {
		this._uri = uri;
	}

	get uri() {
		return this._uri;
	}

	toJSON() {
		return {
			type: this._type,
			uri: this._uri,
		};
	}
}

class ImplementationGuide extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'ImplementationGuide';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// url	Σ	1..1	uri	Logical URI to reference this implementation guide (globally unique)
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// version	Σ	0..1	string	Business version of the implementation guide
	set version(version) {
		this._version = version;
	}

	get version() {
		return this._version;
	}

	// name	Σ	1..1	string	Name for this implementation guide (computer friendly)
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
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

	// description		0..1	markdown	Natural language description of the implementation guide
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

	// jurisdiction	Σ	0..*	CodeableConcept	Intended jurisdiction for implementation guide (if applicable)
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

	// fhirVersion	Σ	0..1	id	FHIR Version this Implementation Guide targets
	set fhirVersion(fhirVersion) {
		this._fhirVersion = fhirVersion;
	}

	get fhirVersion() {
		return this._fhirVersion;
	}

	// dependency	Σ	0..*	BackboneElement	Another Implementation guide this depends on
	set dependency(dependency) {
		if (Array.isArray(dependency)) {
			this._dependency = dependency.map((i) => new Dependency(i));
		} else {
			this._dependency = [new Dependency(dependency)];
		}
	}

	get dependency() {
		return this._dependency;
	}

	// package	Σ	0..*	BackboneElement	Group of resources as used in .page.package
	set implementationGuidePackage(implementationGuidePackage) {
		if (Array.isArray(implementationGuidePackage)) {
			this._implementationGuidePackage = implementationGuidePackage.map((i) => new ImplementationGuidePackage(i));
		} else {
			this._implementationGuidePackage = [new ImplementationGuidePackage(implementationGuidePackage)];
		}
	}

	get implementationGuidePackage() {
		return this._implementationGuidePackage;
	}

	// global	Σ	0..*	BackboneElement	Profiles that apply globally
	set global(global) {
		if (Array.isArray(global)) {
			this._global = global.map((i) => new Global(i));
		} else {
			this._global = [new Global(global)];
		}
	}

	get global() {
		return this._global;
	}

	// binary		0..*	uri	Image, css, script, etc.
	set binary(binary) {
		this._binary = [].concat(binary);
	}

	get binary() {
		return this._binary;
	}

	// page	Σ	0..1	BackboneElement	Page/Section in the Guide
	set page(page) {
		this._page = new Page(page);
	}

	get page() {
		return this._page;
	}

	toJSON() {
		const json = {
			url: this._url,
			version: this._version,
			name: this._name,
			status: this._status,
			experimental: this._experimental,
			date: this._date,
			publisher: this._publisher,
			contact: this._contact,
			description: this._description,
			useContext: this._useContext,
			jurisdiction: this._jurisdiction,
			copyright: this._copyright,
			fhirVersion: this._fhirVersion,
			dependency: this._dependency,
			implementationGuidePackage: this._implementationGuidePackage,
			global: this._global,
			binary: this._binary,
			page: this._page,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.ImplementationGuide = ImplementationGuide;
module.exports.Dependency = Dependency;
module.exports.ImplementationGuidePackage = ImplementationGuidePackage;
module.exports.Resource = Resource;
module.exports.Global = Global;
module.exports.Page = Page;
