const DomainResource = require('../types/DomainResource');
const Coding = require('../types/Coding');
const Reference = require('../types/Reference');
const CodeableConcept = require('../types/CodeableConcept');
const ContactPoint = require('../types/ContactPoint');
const Code = require('../types/Code');

class Response {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// identifier	Σ	1..1	id	Id of original message
	set identifier(identifier) {
		this._identifier = identifier;
	}

	get identifier() {
		return this._identifier;
	}

	// code	Σ	1..1	code	ok | transient-error | fatal-error
	// ResponseType (Required)
	set code(code) {
		this._code = new Code(code);
	}

	get code() {
		return this._code;
	}

	// details	Σ	0..1	Reference(OperationOutcome)	Specific list of hints/warnings/errors
	set details(details) {
		this._details = new Reference(details);
	}

	get details() {
		return this._details;
	}

	toJSON() {
		return {
			identifier: this._identifier,
			code: this._code,
			details: this._details,
		};
	}
}

class Source {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// name	Σ	0..1	string	Name of system
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// software	Σ	0..1	string	Name of software running the system
	set software(software) {
		this._software = software;
	}

	get software() {
		return this._software;
	}

	// version	Σ	0..1	string	Version of software running
	set version(version) {
		this._version = version;
	}

	get version() {
		return this._version;
	}

	// contact	Σ	0..1	ContactPoint	Human contact for problems
	set contact(contact) {
		this._contact = new ContactPoint(contact);
	}

	get contact() {
		return this._contact;
	}

	// endpoint	Σ	1..1	uri	Actual message source address or id
	set endpoint(endpoint) {
		this._endpoint = endpoint;
	}

	get endpoint() {
		return this._endpoint;
	}

	toJSON() {
		return {
			name: this._name,
			software: this._software,
			version: this._version,
			contact: this._contact,
			endpoint: this._endpoint,
		};
	}
}

class Destination {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// name	Σ	0..1	string	Name of system
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// target	Σ	0..1	Reference(Device)	Particular delivery destination within the destination
	set target(target) {
		this._target = new Reference(target);
	}

	get target() {
		return this._target;
	}

	// endpoint	Σ	1..1	uri	Actual destination address or id
	set endpoint(endpoint) {
		this._endpoint = endpoint;
	}

	get endpoint() {
		return this._endpoint;
	}

	toJSON() {
		return {
			name: this._name,
			target: this._target,
			endpoint: this._endpoint,
		};
	}
}

class MessageHeader extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'MessageHeader';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// event	Σ	1..1	Coding	Code for the event this message represents
	// MessageEvent (Example)
	set event(event) {
		this._event = new Coding(event);
	}

	get event() {
		return this._event;
	}

	// destination	Σ	0..*	BackboneElement	Message destination application(s)
	set destination(destination) {
		if (Array.isArray(destination)) {
			this._destination = destination.map((i) => new Destination(i));
		} else {
			this._destination = [new Destination(destination)];
		}
	}

	get destination() {
		return this._destination;
	}

	// receiver	Σ	0..1	Reference(Practitioner | Organization)	Intended "real-world" recipient for the data
	set receiver(receiver) {
		this._receiver = new Reference(receiver);
	}

	get receiver() {
		return this._receiver;
	}

	// sender	Σ	0..1	Reference(Practitioner | Organization)	Real world sender of the message
	set sender(sender) {
		this._sender = new Reference(sender);
	}

	get sender() {
		return this._sender;
	}

	// timestamp	Σ	1..1	instant	Time that the message was sent
	set timestamp(timestamp) {
		this._timestamp = timestamp;
	}

	get timestamp() {
		return this._timestamp;
	}

	// enterer	Σ	0..1	Reference(Practitioner)	The source of the data entry
	set enterer(enterer) {
		this._enterer = new Reference(enterer);
	}

	get enterer() {
		return this._enterer;
	}

	// author	Σ	0..1	Reference(Practitioner)	The source of the decision
	set author(author) {
		this._author = new Reference(author);
	}

	get author() {
		return this._author;
	}

	// source	Σ	1..1	BackboneElement	Message source application
	set source(source) {
		this._source = new Source(source);
	}

	get source() {
		return this._source;
	}

	// responsible	Σ	0..1	Reference(Practitioner | Organization)	Final responsibility for event
	set responsible(responsible) {
		this._responsible = new Reference(responsible);
	}

	get responsible() {
		return this._responsible;
	}

	// reason	Σ	0..1	CodeableConcept	Cause of event
	// Example Message Reason Codes (Example)
	set reason(reason) {
		this._reason = new CodeableConcept(reason);
	}

	get reason() {
		return this._reason;
	}

	// response	Σ	0..1	BackboneElement	If this is a reply to prior message
	set response(response) {
		this._response = new Response(response);
	}

	get response() {
		return this._response;
	}

	// focus	Σ	0..*	Reference(Any)	The actual content of the message
	set focus(focus) {
		if (Array.isArray(focus)) {
			this._focus = focus.map((i) => new Reference(i));
		} else {
			this._focus = [new Reference(focus)];
		}
	}

	get focus() {
		return this._focus;
	}

	toJSON() {
		const json = {
			event: this._event,
			destination: this._destination,
			receiver: this._receiver,
			sender: this._sender,
			timestamp: this._timestamp,
			enterer: this._enterer,
			author: this._author,
			source: this._source,
			responsible: this._responsible,
			reason: this._reason,
			response: this._response,
			focus: this._focus,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.MessageHeader = MessageHeader;
module.exports.Destination = Destination;
module.exports.Source = Source;
module.exports.Response = Response;
