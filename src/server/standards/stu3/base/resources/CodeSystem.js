const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Code = require('../types/Code');
const ContactDetail = require('../types/ContactDetail');
const UsageContext = require('../types/UsageContext');
const CodeableConcept = require('../types/CodeableConcept');
const Coding = require('../types/Coding');

class Designation {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// language		0..1	code	Human language of the designation
	// Common Languages (Extensible but limited to All Languages)
	set language(language) {
		this._language = new Code(language);
	}

	get language() {
		return this._language;
	}

	// use		0..1	Coding	Details how this designation would be used
	// Designation Use (Extensible)
	set use(use) {
		this._use = new Coding(use);
	}

	get use() {
		return this._use;
	}

	// value		1..1	string	The text value for this designation
	set value(value) {
		this._value = value;
	}

	get value() {
		return this._value;
	}

	toJSON() {
		return {
			language: this._language,
			use: this._use,
			value: this._value,
		};
	}
}

class Property {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// code	Σ	1..1	code	Identifies the property on the concepts, and when referred to in operations
	set code(code) {
		this._code = new Code(code);
	}

	get code() {
		return this._code;
	}

	// uri	Σ	0..1	uri	Formal identifier for the property
	set uri(uri) {
		this._uri = uri;
	}

	get uri() {
		return this._uri;
	}

	// description	Σ	0..1	string	Why the property is defined, and/or what it conveys
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// type	Σ	1..1	code	code | Coding | string | integer | boolean | dateTime
	// PropertyType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// value[x]		1..1		Value of the property for this concept
	// valueCode			code
	set valueCode(valueCode) {
		this._valueCode = new Code(valueCode);
	}

	get valueCode() {
		return this._valueCode;
	}

	// valueCoding			Coding
	set valueCoding(valueCoding) {
		this._valueCoding = new Coding(valueCoding);
	}

	get valueCoding() {
		return this._valueCoding;
	}

	// valueString			string
	set valueString(valueString) {
		this._valueString = valueString;
	}

	get valueString() {
		return this._valueString;
	}

	// valueInteger			integer
	set valueInteger(valueInteger) {
		this._valueInteger = valueInteger;
	}

	get valueInteger() {
		return this._valueInteger;
	}

	// valueBoolean			boolean
	set valueBoolean(valueBoolean) {
		this._valueBoolean = valueBoolean;
	}

	get valueBoolean() {
		return this._valueBoolean;
	}

	// valueDateTime			dateTime
	set valueDateTime(valueDateTime) {
		this._valueDateTime = valueDateTime;
	}

	get valueDateTime() {
		return this._valueDateTime;
	}

	toJSON() {
		return {
			code: this._code,
			uri: this._uri,
			description: this._description,
			type: this._type,
			valueCode: this._valueCode,
			valueCoding: this._valueCoding,
			valueString: this._valueString,
			valueInteger: this._valueInteger,
			valueBoolean: this._valueBoolean,
			valueDateTime: this._valueDateTime,
		};
	}
}

class Filter {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// code	Σ	1..1	code	Code that identifies the filter
	set code(code) {
		this._code = new Code(code);
	}

	get code() {
		return this._code;
	}

	// description	Σ	0..1	string	How or why the filter is used
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// operator	Σ	1..*	code	Operators that can be used with filter
	// FilterOperator (Required)
	set operator(operator) {
		if (Array.isArray(operator)) {
			this._operator = operator.map((i) => new Code(i));
		} else {
			this._operator = [new Code(operator)];
		}
	}

	get operator() {
		return this._operator;
	}

	// value	Σ	1..1	string	What to use for the value
	set value(value) {
		this._value = value;
	}

	get value() {
		return this._value;
	}

	toJSON() {
		return {
			code: this._code,
			description: this._description,
			operator: this._operator,
			value: this._value,
		};
	}
}

class Concept {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// code		1..1	code	Code that identifies concept
	set code(code) {
		this._code = new Code(code);
	}

	get code() {
		return this._code;
	}

	// display		0..1	string	Text to display to the user
	set display(display) {
		this._display = display;
	}

	get display() {
		return this._display;
	}

	// definition		0..1	string	Formal definition
	set definition(definition) {
		this._definition = definition;
	}

	get definition() {
		return this._definition;
	}

	// designation		0..*	BackboneElement	Additional representations for the concept
	set designation(designation) {
		if (Array.isArray(designation)) {
			this._designation = designation.map((i) => new Designation(i));
		} else {
			this._designation = [new Designation(designation)];
		}
	}

	get designation() {
		return this._designation;
	}

	// property		0..*	BackboneElement	Property value for the concept
	set property(property) {
		if (Array.isArray(property)) {
			this._property = property.map((i) => new Property(i));
		} else {
			this._property = [new Property(property)];
		}
	}

	get property() {
		return this._property;
	}

	// concept		0..*	see concept	Child Concepts (is-a/contains/categorizes)
	set concept(concept) {
		this._concept = [].concat(concept);
	}

	get concept() {
		return this._concept;
	}

	toJSON() {
		return {
			code: this._code,
			display: this._display,
			definition: this._definition,
			designation: this._designation,
			property: this._property,
			concept: this._concept,
		};
	}
}

class CodeSystem extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'CodeSystem';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// url	Σ	0..1	uri	Logical URI to reference this code system (globally unique) (Coding.system)
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// identifier	Σ	0..1	Identifier	Additional identifier for the code system
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// version	Σ	0..1	string	Business version of the code system (Coding.version)
	set version(version) {
		this._version = version;
	}

	get version() {
		return this._version;
	}

	// name	Σ	0..1	string	Name for this code system (computer friendly)
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// title	Σ	0..1	string	Name for this code system (human friendly)
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

	// description		0..1	markdown	Natural language description of the code system
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

	// jurisdiction	Σ	0..*	CodeableConcept	Intended jurisdiction for code system (if applicable)
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

	// purpose		0..1	markdown	Why this code system is defined
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

	// caseSensitive	Σ	0..1	boolean	If code comparison is case sensitive
	set caseSensitive(caseSensitive) {
		this._caseSensitive = caseSensitive;
	}

	get caseSensitive() {
		return this._caseSensitive;
	}

	// valueSet	Σ	0..1	uri	Canonical URL for value set with entire code system
	set valueSet(valueSet) {
		this._valueSet = valueSet;
	}

	get valueSet() {
		return this._valueSet;
	}

	// hierarchyMeaning	Σ	0..1	code	grouped-by | is-a | part-of | classified-with
	// CodeSystemHierarchyMeaning (Required)
	set hierarchyMeaning(hierarchyMeaning) {
		this._hierarchyMeaning = new Code(hierarchyMeaning);
	}

	get hierarchyMeaning() {
		return this._hierarchyMeaning;
	}

	// compositional	Σ	0..1	boolean	If code system defines a post-composition grammar
	set compositional(compositional) {
		this._compositional = compositional;
	}

	get compositional() {
		return this._compositional;
	}

	// versionNeeded	Σ	0..1	boolean	If definitions are not stable
	set versionNeeded(versionNeeded) {
		this._versionNeeded = versionNeeded;
	}

	get versionNeeded() {
		return this._versionNeeded;
	}

	// content	Σ	1..1	code	not-present | example | fragment | complete
	// CodeSystemContentMode (Required)
	set content(content) {
		this._content = new Code(content);
	}

	get content() {
		return this._content;
	}

	// count	Σ	0..1	unsignedInt	Total concepts in the code system
	set count(count) {
		this._count = count;
	}

	get count() {
		return this._count;
	}

	// filter	Σ	0..*	BackboneElement	Filter that can be used in a value set
	set filter(filter) {
		if (Array.isArray(filter)) {
			this._filter = filter.map((i) => new Filter(i));
		} else {
			this._filter = [new Filter(filter)];
		}
	}

	get filter() {
		return this._filter;
	}

	// property	Σ	0..*	BackboneElement	Additional information supplied about each concept
	set property(property) {
		if (Array.isArray(property)) {
			this._property = property.map((i) => new Property(i));
		} else {
			this._property = [new Property(property)];
		}
	}

	get property() {
		return this._property;
	}

	// concept		0..*	BackboneElement	Concepts in the code system
	set concept(concept) {
		if (Array.isArray(concept)) {
			this._concept = concept.map((i) => new Concept(i));
		} else {
			this._concept = [new Concept(concept)];
		}
	}

	get concept() {
		return this._concept;
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
			caseSensitive: this._caseSensitive,
			valueSet: this._valueSet,
			hierarchyMeaning: this._hierarchyMeaning,
			compositional: this._compositional,
			versionNeeded: this._versionNeeded,
			content: this._content,
			count: this._count,
			filter: this._filter,
			property: this._property,
			concept: this._concept,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.CodeSystem = CodeSystem;
module.exports.Concept = Concept;
module.exports.Filter = Filter;
module.exports.Property = Property;
module.exports.Designation = Designation;
