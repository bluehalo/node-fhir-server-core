const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const Communication_Payload = require('./Communication_Payload');
const Annotation = require('./Annotation');

class Communication extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Communication';
	}

	// This is a Communication resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Communication'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Identifiers associated with this Communication that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// A protocol, guideline, or other definition that was adhered to in whole or in part by this communication event.
	get definition () {
		return this._definition;
	}

	set definition ( new_value ) {
		this._definition = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// An order, proposal or plan fulfilled in whole or in part by this Communication.
	get basedOn () {
		return this._basedOn;
	}

	set basedOn ( new_value ) {
		this._basedOn = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Part of this action.
	get partOf () {
		return this._partOf;
	}

	set partOf ( new_value ) {
		this._partOf = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The status of the transmission.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field status`);
		}
		this._status = new_value;
	}

	// If true, indicates that the described communication event did not actually occur.
	get notDone () {
		return this._notDone;
	}

	set notDone ( new_value ) {
		this._notDone = new_value;
	}

	// Describes why the communication event did not occur in coded and/or textual form.
	get notDoneReason () {
		return this._notDoneReason;
	}

	set notDoneReason ( new_value ) {
		this._notDoneReason = new CodeableConcept(new_value);
	}

	// The type of message conveyed such as alert, notification, reminder, instruction, etc.
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		this._category = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// A channel that was used for this communication (e.g. email, fax).
	get medium () {
		return this._medium;
	}

	set medium ( new_value ) {
		this._medium = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The patient or group that was the focus of this communication.
	get subject () {
		return this._subject;
	}

	set subject ( new_value ) {
		this._subject = new Reference(new_value);
	}

	// The entity (e.g. person, organization, clinical information system, or device) which was the target of the communication. If receipts need to be tracked by individual, a separate resource instance will need to be created for each recipient.  Multiple recipient communications are intended where either a receipt(s) is not tracked (e.g. a mass mail-out) or is captured in aggregate (all emails confirmed received by a particular time).
	get recipient () {
		return this._recipient;
	}

	set recipient ( new_value ) {
		this._recipient = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The resources which were responsible for or related to producing this communication.
	get topic () {
		return this._topic;
	}

	set topic ( new_value ) {
		this._topic = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The encounter within which the communication was sent.
	get context () {
		return this._context;
	}

	set context ( new_value ) {
		this._context = new Reference(new_value);
	}

	// The time when this communication was sent.
	get sent () {
		return this._sent;
	}

	set sent ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field sent`);
		}
		this._sent = new_value;
	}

	// The time when this communication arrived at the destination.
	get received () {
		return this._received;
	}

	set received ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field received`);
		}
		this._received = new_value;
	}

	// The entity (e.g. person, organization, clinical information system, or device) which was the source of the communication.
	get sender () {
		return this._sender;
	}

	set sender ( new_value ) {
		this._sender = new Reference(new_value);
	}

	// The reason or justification for the communication.
	get reasonCode () {
		return this._reasonCode;
	}

	set reasonCode ( new_value ) {
		this._reasonCode = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Indicates another resource whose existence justifies this communication.
	get reasonReference () {
		return this._reasonReference;
	}

	set reasonReference ( new_value ) {
		this._reasonReference = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Text, attachment(s), or resource(s) that was communicated to the recipient.
	get payload () {
		return this._payload;
	}

	set payload ( new_value ) {
		this._payload = Array.isArray(new_value) ? new_value.map(val => new Communication_Payload(val)) : [new Communication_Payload(new_value)];
	}

	// Additional notes or commentary about the communication by the sender, receiver or other interested parties.
	get note () {
		return this._note;
	}

	set note ( new_value ) {
		this._note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier,
			definition: this._definition,
			basedOn: this._basedOn,
			partOf: this._partOf,
			status: this._status,
			notDone: this._notDone,
			notDoneReason: this._notDoneReason,
			category: this._category,
			medium: this._medium,
			subject: this._subject,
			recipient: this._recipient,
			topic: this._topic,
			context: this._context,
			sent: this._sent,
			received: this._received,
			sender: this._sender,
			reasonCode: this._reasonCode,
			reasonReference: this._reasonReference,
			payload: this._payload,
			note: this._note
		});
	}

}

module.exports = Communication;
