const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Code = require('../types/Code');
const ContactDetail = require('../types/ContactDetail');
const UsageContext = require('../types/UsageContext');
const CodeableConcept = require('../types/CodeableConcept');
const Reference = require('../types/Reference');
const Coding = require('../types/Coding');

class AllowedResponse {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// message		1..1	Reference(MessageDefinition)	Reference to allowed message definition response
	set message(message) {
		this._message = new Reference(message);
	}

	get message() {
		return this._message;
	}

	// situation		0..1	markdown	When should this response be used
	set situation(situation) {
		this._situation = situation;
	}

	get situation() {
		return this._situation;
	}

	toJSON() {
		return {
			message: this._message,
			situation: this._situation,
		};
	}
}

class Focus {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// code	Σ	1..1	code	Type of resource
	// ResourceType (Required)
	set code(code) {
		this._code = new Code(code);
	}

	get code() {
		return this._code;
	}

	// profile		0..1	Reference(StructureDefinition)	Profile that must be adhered to by focus
	set profile(profile) {
		this._profile = new Reference(profile);
	}

	get profile() {
		return this._profile;
	}

	// min		0..1	unsignedInt	Minimum number of focuses of this type
	set min(min) {
		this._min = min;
	}

	get min() {
		return this._min;
	}

	// max	I	0..1	string	Maximum number of focuses of this type
	set max(max) {
		this._max = max;
	}

	get max() {
		return this._max;
	}

	toJSON() {
		return {
			code: this._code,
			profile: this._profile,
			min: this._min,
			max: this._max,
		};
	}
}

class MessageDefinition extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'MessageDefinition';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// url	Σ	0..1	uri	Logical URI to reference this message definition (globally unique)
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// identifier	Σ	0..1	Identifier	Additional identifier for the message definition
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// version	Σ	0..1	string	Business version of the message definition
	set version(version) {
		this._version = version;
	}

	get version() {
		return this._version;
	}

	// name	Σ	0..1	string	Name for this message definition (computer friendly)
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// title	Σ	0..1	string	Name for this message definition (human friendly)
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

	// date	Σ	1..1	dateTime	Date this was last changed
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

	// description	Σ	0..1	markdown	Natural language description of the message definition
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

	// jurisdiction	Σ	0..*	CodeableConcept	Intended jurisdiction for message definition (if applicable)
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

	// purpose	Σ	0..1	markdown	Why this message definition is defined
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

	// base	Σ	0..1	Reference(MessageDefinition)	Definition this one is based on
	set base(base) {
		this._base = new Reference(base);
	}

	get base() {
		return this._base;
	}

	// parent	Σ	0..*	Reference(ActivityDefinition | PlanDefinition)	Protocol/workflow this is part of
	set parent(parent) {
		if (Array.isArray(parent)) {
			this._parent = parent.map((i) => new Reference(i));
		} else {
			this._parent = [new Reference(parent)];
		}
	}

	get parent() {
		return this._parent;
	}

	// replaces	Σ	0..*	Reference(MessageDefinition)	Takes the place of
	set replaces(replaces) {
		if (Array.isArray(replaces)) {
			this._replaces = replaces.map((i) => new Reference(i));
		} else {
			this._replaces = [new Reference(replaces)];
		}
	}

	get replaces() {
		return this._replaces;
	}

	// event	Σ	1..1	Coding	Event type
	// MessageEvent (Example)
	set event(event) {
		this._event = new Coding(event);
	}

	get event() {
		return this._event;
	}

	// category	Σ	0..1	code	Consequence | Currency | Notification
	// MessageSignificanceCategory (Required)
	set category(category) {
		this._category = new Code(category);
	}

	get category() {
		return this._category;
	}

	// focus	ΣI	0..*	BackboneElement	Resource(s) that are the subject of the event
	// + Max must be postive int or *
	set focus(focus) {
		if (Array.isArray(focus)) {
			this._focus = focus.map((i) => new Focus(i));
		} else {
			this._focus = [new Focus(focus)];
		}
	}

	get focus() {
		return this._focus;
	}

	// responseRequired		0..1	boolean	Is a response required?
	set responseRequired(responseRequired) {
		this._responseRequired = responseRequired;
	}

	get responseRequired() {
		return this._responseRequired;
	}

	// allowedResponse		0..*	BackboneElement	Responses to this message
	set allowedResponse(allowedResponse) {
		if (Array.isArray(allowedResponse)) {
			this._allowedResponse = allowedResponse.map((i) => new AllowedResponse(i));
		} else {
			this._allowedResponse = [new AllowedResponse(allowedResponse)];
		}
	}

	get allowedResponse() {
		return this._allowedResponse;
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
			base: this._base,
			parent: this._parent,
			replaces: this._replaces,
			event: this._event,
			category: this._category,
			focus: this._focus,
			responseRequired: this._responseRequired,
			allowedResponse: this._allowedResponse,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.MessageDefinition = MessageDefinition;
module.exports.Focus = Focus;
module.exports.AllowedResponse = AllowedResponse;
