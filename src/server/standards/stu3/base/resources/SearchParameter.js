const DomainResource = require('../types/DomainResource');
const Code = require('../types/Code');
const ContactDetail = require('../types/ContactDetail');
const UsageContext = require('../types/UsageContext');
const CodeableConcept = require('../types/CodeableConcept');
const Reference = require('../types/Reference');

class Component {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// definition		1..1	Reference(SearchParameter)	Defines how the part works
	set definition(definition) {
		this._definition = new Reference(definition);
	}

	get definition() {
		return this._definition;
	}

	// expression		1..1	string	Subexpression relative to main expression
	set expression(expression) {
		this._expression = expression;
	}

	get expression() {
		return this._expression;
	}

	toJSON() {
		return {
			definition: this._definition,
			expression: this._expression,
		};
	}
}

class SearchParameter extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'SearchParameter';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// url	Σ	1..1	uri	Logical URI to reference this search parameter (globally unique)
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// version	Σ	0..1	string	Business version of the search parameter
	set version(version) {
		this._version = version;
	}

	get version() {
		return this._version;
	}

	// name	Σ	1..1	string	Name for this search parameter (computer friendly)
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

	// jurisdiction	Σ	0..*	CodeableConcept	Intended jurisdiction for search parameter (if applicable)
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

	// purpose		0..1	markdown	Why this search parameter is defined
	set purpose(purpose) {
		this._purpose = purpose;
	}

	get purpose() {
		return this._purpose;
	}

	// code	Σ	1..1	code	Code used in URL
	set code(code) {
		this._code = new Code(code);
	}

	get code() {
		return this._code;
	}

	// base	Σ	1..*	code	The resource type(s) this search parameter applies to
	// ResourceType (Required)
	set base(base) {
		if (Array.isArray(base)) {
			this._base = base.map((i) => new Code(i));
		} else {
			this._base = [new Code(base)];
		}
	}

	get base() {
		return this._base;
	}

	// type	Σ	1..1	code	number | date | string | token | reference | composite | quantity | uri
	// SearchParamType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// derivedFrom		0..1	uri	Original Definition for the search parameter
	set derivedFrom(derivedFrom) {
		this._derivedFrom = derivedFrom;
	}

	get derivedFrom() {
		return this._derivedFrom;
	}

	// description	Σ	1..1	markdown	Natural language description of the search parameter
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// expression	I	0..1	string	FHIRPath expression that extracts the values
	set expression(expression) {
		this._expression = expression;
	}

	get expression() {
		return this._expression;
	}

	// xpath	I	0..1	string	XPath that extracts the values
	set xpath(xpath) {
		this._xpath = xpath;
	}

	get xpath() {
		return this._xpath;
	}

	// xpathUsage	I	0..1	code	normal | phonetic | nearby | distance | other
	// XPathUsageType (Required)
	set xpathUsage(xpathUsage) {
		this._xpathUsage = new Code(xpathUsage);
	}

	get xpathUsage() {
		return this._xpathUsage;
	}

	// target		0..*	code	Types of resource (if a resource reference)
	// ResourceType (Required)
	set target(target) {
		if (Array.isArray(target)) {
			this._target = target.map((i) => new Code(i));
		} else {
			this._target = [new Code(target)];
		}
	}

	get target() {
		return this._target;
	}

	// comparator		0..*	code	eq | ne | gt | lt | ge | le | sa | eb | ap
	// SearchComparator (Required)
	set comparator(comparator) {
		if (Array.isArray(comparator)) {
			this._comparator = comparator.map((i) => new Code(i));
		} else {
			this._comparator = [new Code(comparator)];
		}
	}

	get comparator() {
		return this._comparator;
	}

	// modifier		0..*	code	missing | exact | contains | not | text | in | not-in | below | above | type
	// SearchModifierCode (Required)
	set modifier(modifier) {
		if (Array.isArray(modifier)) {
			this._modifier = modifier.map((i) => new Code(i));
		} else {
			this._modifier = [new Code(modifier)];
		}
	}

	get modifier() {
		return this._modifier;
	}

	// chain		0..*	string	Chained names supported
	set chain(chain) {
		this._chain = [].concat(chain);
	}

	get chain() {
		return this._chain;
	}

	// component		0..*	BackboneElement	For Composite resources to define the parts
	set component(component) {
		if (Array.isArray(component)) {
			this._component = component.map((i) => new Component(i));
		} else {
			this._component = [new Component(component)];
		}
	}

	get component() {
		return this._component;
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
			useContext: this._useContext,
			jurisdiction: this._jurisdiction,
			purpose: this._purpose,
			code: this._code,
			base: this._base,
			type: this._type,
			derivedFrom: this._derivedFrom,
			description: this._description,
			expression: this._expression,
			xpath: this._xpath,
			xpathUsage: this._xpathUsage,
			target: this._target,
			comparator: this._comparator,
			modifier: this._modifier,
			chain: this._chain,
			component: this._component,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.SearchParameter = SearchParameter;
module.exports.Component = Component;
