const DomainResource = require('../types/DomainResource');
const Code = require('../types/Code');
const ContactDetail = require('../types/ContactDetail');
const UsageContext = require('../types/UsageContext');
const CodeableConcept = require('../types/CodeableConcept');

class Compartment {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// code		1..1	code	Identifies the compartment
	// CompartmentType (Required)
	set code(code) {
		this._code = new Code(code);
	}

	get code() {
		return this._code;
	}

	// rule		1..1	code	identical | matching | different | custom
	// GraphCompartmentRule (Required)
	set rule(rule) {
		this._rule = new Code(rule);
	}

	get rule() {
		return this._rule;
	}

	// expression		0..1	string	Custom rule, as a FHIRPath expression
	set expression(expression) {
		this._expression = expression;
	}

	get expression() {
		return this._expression;
	}

	// description		0..1	string	Documentation for FHIRPath expression
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	toJSON() {
		return {
			code: this._code,
			rule: this._rule,
			expression: this._expression,
			description: this._description,
		};
	}
}

class Target {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type		1..1	code	Type of resource this link refers to
	// ResourceType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// profile		0..1	uri	Profile for the target resource
	set profile(profile) {
		this._profile = profile;
	}

	get profile() {
		return this._profile;
	}

	// compartment		0..*	BackboneElement	Compartment Consistency Rules
	set compartment(compartment) {
		if (Array.isArray(compartment)) {
			this._compartment = compartment.map((i) => new Compartment(i));
		} else {
			this._compartment = [new Compartment(compartment)];
		}
	}

	get compartment() {
		return this._compartment;
	}

	// link		0..*	see link	Additional links from target resource
	set link(link) {
		this._link = [].concat(link);
	}

	get link() {
		return this._link;
	}

	toJSON() {
		return {
			type: this._type,
			profile: this._profile,
			compartment: this._compartment,
			link: this._link,
		};
	}
}

class Link {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// path		1..1	string	Path in the resource that contains the link
	set path(path) {
		this._path = path;
	}

	get path() {
		return this._path;
	}

	// sliceName		0..1	string	Which slice (if profiled)
	set sliceName(sliceName) {
		this._sliceName = sliceName;
	}

	get sliceName() {
		return this._sliceName;
	}

	// min		0..1	integer	Minimum occurrences for this link
	set min(min) {
		this._min = min;
	}

	get min() {
		return this._min;
	}

	// max		0..1	string	Maximum occurrences for this link
	set max(max) {
		this._max = max;
	}

	get max() {
		return this._max;
	}

	// description		0..1	string	Why this link is specified
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// target		1..*	BackboneElement	Potential target for the link
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
			path: this._path,
			sliceName: this._sliceName,
			min: this._min,
			max: this._max,
			description: this._description,
			target: this._target,
		};
	}
}

class GraphDefinition extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'GraphDefinition';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// url	Σ	0..1	uri	Logical URI to reference this graph definition (globally unique)
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// version	Σ	0..1	string	Business version of the graph definition
	set version(version) {
		this._version = version;
	}

	get version() {
		return this._version;
	}

	// name	Σ	1..1	string	Name for this graph definition (computer friendly)
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

	// description		0..1	markdown	Natural language description of the graph definition
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

	// jurisdiction	Σ	0..*	CodeableConcept	Intended jurisdiction for graph definition (if applicable)
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

	// purpose		0..1	markdown	Why this graph definition is defined
	set purpose(purpose) {
		this._purpose = purpose;
	}

	get purpose() {
		return this._purpose;
	}

	// start		1..1	code	Type of resource at which the graph starts
	// ResourceType (Required)
	set start(start) {
		this._start = new Code(start);
	}

	get start() {
		return this._start;
	}

	// profile		0..1	uri	Profile on base resource
	set profile(profile) {
		this._profile = profile;
	}

	get profile() {
		return this._profile;
	}

	// link		0..*	BackboneElement	Links this graph makes rules about
	set link(link) {
		if (Array.isArray(link)) {
			this._link = link.map((i) => new Link(i));
		} else {
			this._link = [new Link(link)];
		}
	}

	get link() {
		return this._link;
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
			purpose: this._purpose,
			start: this._start,
			profile: this._profile,
			link: this._link,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.GraphDefinition = GraphDefinition;
module.exports.Link = Link;
module.exports.Target = Target;
module.exports.Compartment = Compartment;
