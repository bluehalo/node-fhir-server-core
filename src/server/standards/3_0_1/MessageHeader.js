const DomainResource = require('./DomainResource');
const Coding = require('./Coding');
const MessageHeader_Destination = require('./MessageHeader_Destination');
const Reference = require('./Reference');
const MessageHeader_Source = require('./MessageHeader_Source');
const CodeableConcept = require('./CodeableConcept');
const MessageHeader_Response = require('./MessageHeader_Response');

class MessageHeader extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'MessageHeader';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'MessageHeader';
	}

	// This is a MessageHeader resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['MessageHeader'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Code that identifies the event this message represents and connects it with its definition. Events defined as part of the FHIR specification have the system value "http://hl7.org/fhir/message-events".
	get event () {
		return this._event;
	}

	set event ( new_value ) {
		this._event = new Coding(new_value);
	}

	// The destination application which the message is intended for.
	get destination () {
		return this._destination;
	}

	set destination ( new_value ) {
		this._destination = Array.isArray(new_value) ? new_value.map(val => new MessageHeader_Destination(val)) : [new MessageHeader_Destination(new_value)];
	}

	// Allows data conveyed by a message to be addressed to a particular person or department when routing to a specific application isn't sufficient.
	get receiver () {
		return this._receiver;
	}

	set receiver ( new_value ) {
		this._receiver = new Reference(new_value);
	}

	// Identifies the sending system to allow the use of a trust relationship.
	get sender () {
		return this._sender;
	}

	set sender ( new_value ) {
		this._sender = new Reference(new_value);
	}

	// The time that the message was sent.
	get timestamp () {
		return this._timestamp;
	}

	set timestamp ( new_value ) {
		this._timestamp = new_value;
	}

	// The person or device that performed the data entry leading to this message. When there is more than one candidate, pick the most proximal to the message. Can provide other enterers in extensions.
	get enterer () {
		return this._enterer;
	}

	set enterer ( new_value ) {
		this._enterer = new Reference(new_value);
	}

	// The logical author of the message - the person or device that decided the described event should happen. When there is more than one candidate, pick the most proximal to the MessageHeader. Can provide other authors in extensions.
	get author () {
		return this._author;
	}

	set author ( new_value ) {
		this._author = new Reference(new_value);
	}

	// The source application from which this message originated.
	get source () {
		return this._source;
	}

	set source ( new_value ) {
		this._source = new MessageHeader_Source(new_value);
	}

	// The person or organization that accepts overall responsibility for the contents of the message. The implication is that the message event happened under the policies of the responsible party.
	get responsible () {
		return this._responsible;
	}

	set responsible ( new_value ) {
		this._responsible = new Reference(new_value);
	}

	// Coded indication of the cause for the event - indicates  a reason for the occurrence of the event that is a focus of this message.
	get reason () {
		return this._reason;
	}

	set reason ( new_value ) {
		this._reason = new CodeableConcept(new_value);
	}

	// Information about the message that this message is a response to.  Only present if this message is a response.
	get response () {
		return this._response;
	}

	set response ( new_value ) {
		this._response = new MessageHeader_Response(new_value);
	}

	// The actual data of the message - a reference to the root/focus class of the event.
	get focus () {
		return this._focus;
	}

	set focus ( new_value ) {
		this._focus = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			event: this._event && this._event.toJSON(),
			destination: this._destination && this._destination.map(v => v.toJSON()),
			receiver: this._receiver && this._receiver.toJSON(),
			sender: this._sender && this._sender.toJSON(),
			timestamp: this._timestamp,
			enterer: this._enterer && this._enterer.toJSON(),
			author: this._author && this._author.toJSON(),
			source: this._source && this._source.toJSON(),
			responsible: this._responsible && this._responsible.toJSON(),
			reason: this._reason && this._reason.toJSON(),
			response: this._response && this._response.toJSON(),
			focus: this._focus && this._focus.map(v => v.toJSON())
		});
	}

}

module.exports = MessageHeader;
