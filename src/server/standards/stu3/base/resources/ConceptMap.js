const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Code = require('../types/Code');
const ContactDetail = require('../types/ContactDetail');
const UsageContext = require('../types/UsageContext');
const CodeableConcept = require('../types/CodeableConcept');
const Reference = require('../types/Reference');

class Unmapped {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// mode		1..1	code	provided | fixed | other-map
	// ConceptMapGroupUnmappedMode (Required)
	set mode(mode) {
		this._mode = new Code(mode);
	}

	get mode() {
		return this._mode;
	}

	// code		0..1	code	Fixed code when mode = fixed
	set code(code) {
		this._code = new Code(code);
	}

	get code() {
		return this._code;
	}

	// display		0..1	string	Display for the code
	set display(display) {
		this._display = display;
	}

	get display() {
		return this._display;
	}

	// url		0..1	uri	Canonical URL for other concept map
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	toJSON() {
		return {
			mode: this._mode,
			code: this._code,
			display: this._display,
			url: this._url,
		};
	}
}

class DependsOn {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// property		1..1	uri	Reference to property mapping depends on
	set property(property) {
		this._property = property;
	}

	get property() {
		return this._property;
	}

	// system		0..1	uri	Code System (if necessary)
	set system(system) {
		this._system = system;
	}

	get system() {
		return this._system;
	}

	// code		1..1	string	Value of the referenced element
	set code(code) {
		this._code = code;
	}

	get code() {
		return this._code;
	}

	// display		0..1	string	Display for the code
	set display(display) {
		this._display = display;
	}

	get display() {
		return this._display;
	}

	toJSON() {
		return {
			property: this._property,
			system: this._system,
			code: this._code,
			display: this._display,
		};
	}
}

class Target {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// code		0..1	code	Code that identifies the target element
	set code(code) {
		this._code = new Code(code);
	}

	get code() {
		return this._code;
	}

	// display		0..1	string	Display for the code
	set display(display) {
		this._display = display;
	}

	get display() {
		return this._display;
	}

	// equivalence	?!	0..1	code	relatedto | equivalent | equal | wider | subsumes | narrower | specializes | inexact | unmatched | disjoint
	// ConceptMapEquivalence (Required)
	set equivalence(equivalence) {
		this._equivalence = new Code(equivalence);
	}

	get equivalence() {
		return this._equivalence;
	}

	// comment	I	0..1	string	Description of status/issues in mapping
	set comment(comment) {
		this._comment = comment;
	}

	get comment() {
		return this._comment;
	}

	// dependsOn		0..*	BackboneElement	Other elements required for this mapping (from context)
	set dependsOn(dependsOn) {
		if (Array.isArray(dependsOn)) {
			this._dependsOn = dependsOn.map((i) => new DependsOn(i));
		} else {
			this._dependsOn = [new DependsOn(dependsOn)];
		}
	}

	get dependsOn() {
		return this._dependsOn;
	}

	// product		0..*	see dependsOn	Other concepts that this mapping also produces
	set product(product) {
		this._product = [].concat(product);
	}

	get product() {
		return this._product;
	}

	toJSON() {
		return {
			code: this._code,
			display: this._display,
			equivalence: this._equivalence,
			comment: this._comment,
			dependsOn: this._dependsOn,
			product: this._product,
		};
	}
}

class Element {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// code		0..1	code	Identifies element being mapped
	set code(code) {
		this._code = new Code(code);
	}

	get code() {
		return this._code;
	}

	// display		0..1	string	Display for the code
	set display(display) {
		this._display = display;
	}

	get display() {
		return this._display;
	}

	// target	I	0..*	BackboneElement	Concept in target system for element
	// + If the map is narrower or inexact, there SHALL be some comments
	set target(target) {
		if (Array.isArray(target)) {
			this._target = target.map((i) => new Target(i));
		} else {
			this._target = [new Target(target)];
		}
	}

	get target() {
		return this._target;
	}

	toJSON() {
		return {
			code: this._code,
			display: this._display,
			target: this._target,
		};
	}
}

class Group {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// source		0..1	uri	Code System (if value set crosses code systems)
	set source(source) {
		this._source = source;
	}

	get source() {
		return this._source;
	}

	// sourceVersion		0..1	string	Specific version of the code system
	set sourceVersion(sourceVersion) {
		this._sourceVersion = sourceVersion;
	}

	get sourceVersion() {
		return this._sourceVersion;
	}

	// target		0..1	uri	System of the target (if necessary)
	set target(target) {
		this._target = target;
	}

	get target() {
		return this._target;
	}

	// targetVersion		0..1	string	Specific version of the code system
	set targetVersion(targetVersion) {
		this._targetVersion = targetVersion;
	}

	get targetVersion() {
		return this._targetVersion;
	}

	// element		1..*	BackboneElement	Mappings for a concept from the source set
	set element(element) {
		if (Array.isArray(element)) {
			this._element = element.map((i) => new Element(i));
		} else {
			this._element = [new Element(element)];
		}
	}

	get element() {
		return this._element;
	}

	// unmapped	I	0..1	BackboneElement	When no match in the mappings
	// + If the mode is 'other-map', a code must be provided
	// + If the mode is 'fixed', a code must be provided
	set unmapped(unmapped) {
		this._unmapped = new Unmapped(unmapped);
	}

	get unmapped() {
		return this._unmapped;
	}

	toJSON() {
		return {
			source: this._source,
			sourceVersion: this._sourceVersion,
			target: this._target,
			targetVersion: this._targetVersion,
			element: this._element,
			unmapped: this._unmapped,
		};
	}
}

class ConceptMap extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'ConceptMap';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// url	Σ	0..1	uri	Logical URI to reference this concept map (globally unique)
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// identifier	Σ	0..1	Identifier	Additional identifier for the concept map
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// version	Σ	0..1	string	Business version of the concept map
	set version(version) {
		this._version = version;
	}

	get version() {
		return this._version;
	}

	// name	Σ	0..1	string	Name for this concept map (computer friendly)
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// title	Σ	0..1	string	Name for this concept map (human friendly)
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

	// description		0..1	markdown	Natural language description of the concept map
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

	// jurisdiction	Σ	0..*	CodeableConcept	Intended jurisdiction for concept map (if applicable)
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

	// purpose		0..1	markdown	Why this concept map is defined
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

	// source[x]	Σ	0..1		Identifies the source of the concepts which are being mapped
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

	// target[x]	Σ	0..1		Provides context to the mappings
	// targetUri			uri
	set targetUri(targetUri) {
		this._targetUri = targetUri;
	}

	get targetUri() {
		return this._targetUri;
	}

	// targetReference			Reference
	set targetReference(targetReference) {
		this._targetReference = new Reference(targetReference);
	}

	get targetReference() {
		return this._targetReference;
	}

	// group		0..*	BackboneElement	Same source and target systems
	set group(group) {
		if (Array.isArray(group)) {
			this._group = group.map((i) => new Group(i));
		} else {
			this._group = [new Group(group)];
		}
	}

	get group() {
		return this._group;
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
			sourceUri: this._sourceUri,
			sourceReference: this._sourceReference,
			targetUri: this._targetUri,
			targetReference: this._targetReference,
			group: this._group,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.ConceptMap = ConceptMap;
module.exports.Group = Group;
module.exports.Element = Element;
module.exports.Target = Target;
module.exports.DependsOn = DependsOn;
module.exports.Unmapped = Unmapped;
