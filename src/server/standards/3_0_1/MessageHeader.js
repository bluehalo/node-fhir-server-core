const DomainResource = require('./DomainResource');
const InstantScalar = require('./scalars/Instant.scalar');

class MessageHeader extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MessageHeader';
		Object.assign(this, opt);
	}

	// This is a MessageHeader resource
	static get __resourceType() {
		return 'MessageHeader';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__MessageHeader = new_value;
	}

	// Code that identifies the event this message represents and connects it with its definition. Events defined as part of the FHIR specification have the system value \'http://hl7.org/fhir/message-events\'.
	get event() {
		return this.__event;
	}

	set event(new_value) {
		const Coding = require('./Coding');
		this.__event = new Coding(new_value);
	}

	// The destination application which the message is intended for.
	get destination() {
		return this.__destination;
	}

	set destination(new_value) {
		const MessageHeaderDestination = require('./MessageHeaderDestination');
		this.__destination = Array.isArray(new_value)
			? new_value.map(val => new MessageHeaderDestination(val))
			: [new MessageHeaderDestination(new_value)];
	}

	// Allows data conveyed by a message to be addressed to a particular person or department when routing to a specific application isn\'t sufficient.
	get receiver() {
		return this.__receiver;
	}

	set receiver(new_value) {
		const Reference = require('./Reference');
		this.__receiver = new Reference(new_value);
	}

	// Identifies the sending system to allow the use of a trust relationship.
	get sender() {
		return this.__sender;
	}

	set sender(new_value) {
		const Reference = require('./Reference');
		this.__sender = new Reference(new_value);
	}

	// The time that the message was sent.
	get timestamp() {
		return this.__timestamp;
	}

	set timestamp(new_value) {
		// Throw if new value does not match the pattern
		let pattern = InstantScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field timestamp`);
		}
		this.__timestamp = new_value;
	}

	// The person or device that performed the data entry leading to this message. When there is more than one candidate, pick the most proximal to the message. Can provide other enterers in extensions.
	get enterer() {
		return this.__enterer;
	}

	set enterer(new_value) {
		const Reference = require('./Reference');
		this.__enterer = new Reference(new_value);
	}

	// The logical author of the message - the person or device that decided the described event should happen. When there is more than one candidate, pick the most proximal to the MessageHeader. Can provide other authors in extensions.
	get author() {
		return this.__author;
	}

	set author(new_value) {
		const Reference = require('./Reference');
		this.__author = new Reference(new_value);
	}

	// The source application from which this message originated.
	get source() {
		return this.__source;
	}

	set source(new_value) {
		const MessageHeaderSource = require('./MessageHeaderSource');
		this.__source = new MessageHeaderSource(new_value);
	}

	// The person or organization that accepts overall responsibility for the contents of the message. The implication is that the message event happened under the policies of the responsible party.
	get responsible() {
		return this.__responsible;
	}

	set responsible(new_value) {
		const Reference = require('./Reference');
		this.__responsible = new Reference(new_value);
	}

	// Coded indication of the cause for the event - indicates  a reason for the occurrence of the event that is a focus of this message.
	get reason() {
		return this.__reason;
	}

	set reason(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reason = new CodeableConcept(new_value);
	}

	// Information about the message that this message is a response to.  Only present if this message is a response.
	get response() {
		return this.__response;
	}

	set response(new_value) {
		const MessageHeaderResponse = require('./MessageHeaderResponse');
		this.__response = new MessageHeaderResponse(new_value);
	}

	// The actual data of the message - a reference to the root/focus class of the event.
	get focus() {
		return this.__focus;
	}

	set focus(new_value) {
		const Reference = require('./Reference');
		this.__focus = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			event: this.__event && this.__event.toJSON(),
			destination: this.__destination && this.__destination.map(v => v.toJSON()),
			receiver: this.__receiver && this.__receiver.toJSON(),
			sender: this.__sender && this.__sender.toJSON(),
			timestamp: this.__timestamp,
			enterer: this.__enterer && this.__enterer.toJSON(),
			author: this.__author && this.__author.toJSON(),
			source: this.__source && this.__source.toJSON(),
			responsible: this.__responsible && this.__responsible.toJSON(),
			reason: this.__reason && this.__reason.toJSON(),
			response: this.__response && this.__response.toJSON(),
			focus: this.__focus && this.__focus.map(v => v.toJSON()),
		});
	}
}

module.exports = MessageHeader;
