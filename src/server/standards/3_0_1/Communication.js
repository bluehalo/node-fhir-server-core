const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class Communication extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Communication';
		Object.assign(this, opt);
	}

	// This is a Communication resource
	static get __resourceType() {
		return 'Communication';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Communication = new_value;
	}

	// Identifiers associated with this Communication that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// A protocol, guideline, or other definition that was adhered to in whole or in part by this communication event.
	get definition() {
		return this.__definition;
	}

	set definition(new_value) {
		const Reference = require('./Reference');
		this.__definition = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// An order, proposal or plan fulfilled in whole or in part by this Communication.
	get basedOn() {
		return this.__basedOn;
	}

	set basedOn(new_value) {
		const Reference = require('./Reference');
		this.__basedOn = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Part of this action.
	get partOf() {
		return this.__partOf;
	}

	set partOf(new_value) {
		const Reference = require('./Reference');
		this.__partOf = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The status of the transmission.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// If true, indicates that the described communication event did not actually occur.
	get notDone() {
		return this.__notDone;
	}

	set notDone(new_value) {
		this.__notDone = new_value;
	}

	// Describes why the communication event did not occur in coded and/or textual form.
	get notDoneReason() {
		return this.__notDoneReason;
	}

	set notDoneReason(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__notDoneReason = new CodeableConcept(new_value);
	}

	// The type of message conveyed such as alert, notification, reminder, instruction, etc.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__category = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// A channel that was used for this communication (e.g. email, fax).
	get medium() {
		return this.__medium;
	}

	set medium(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__medium = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// The patient or group that was the focus of this communication.
	get subject() {
		return this.__subject;
	}

	set subject(new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// The entity (e.g. person, organization, clinical information system, or device) which was the target of the communication. If receipts need to be tracked by individual, a separate resource instance will need to be created for each recipient.  Multiple recipient communications are intended where either a receipt(s) is not tracked (e.g. a mass mail-out) or is captured in aggregate (all emails confirmed received by a particular time).
	get recipient() {
		return this.__recipient;
	}

	set recipient(new_value) {
		const Reference = require('./Reference');
		this.__recipient = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The resources which were responsible for or related to producing this communication.
	get topic() {
		return this.__topic;
	}

	set topic(new_value) {
		const Reference = require('./Reference');
		this.__topic = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The encounter within which the communication was sent.
	get context() {
		return this.__context;
	}

	set context(new_value) {
		const Reference = require('./Reference');
		this.__context = new Reference(new_value);
	}

	// The time when this communication was sent.
	get sent() {
		return this.__sent;
	}

	set sent(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field sent`);
		}
		this.__sent = new_value;
	}

	// The time when this communication arrived at the destination.
	get received() {
		return this.__received;
	}

	set received(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field received`);
		}
		this.__received = new_value;
	}

	// The entity (e.g. person, organization, clinical information system, or device) which was the source of the communication.
	get sender() {
		return this.__sender;
	}

	set sender(new_value) {
		const Reference = require('./Reference');
		this.__sender = new Reference(new_value);
	}

	// The reason or justification for the communication.
	get reasonCode() {
		return this.__reasonCode;
	}

	set reasonCode(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reasonCode = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Indicates another resource whose existence justifies this communication.
	get reasonReference() {
		return this.__reasonReference;
	}

	set reasonReference(new_value) {
		const Reference = require('./Reference');
		this.__reasonReference = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// Text, attachment(s), or resource(s) that was communicated to the recipient.
	get payload() {
		return this.__payload;
	}

	set payload(new_value) {
		const CommunicationPayload = require('./CommunicationPayload');
		this.__payload = Array.isArray(new_value)
			? new_value.map(val => new CommunicationPayload(val))
			: [new CommunicationPayload(new_value)];
	}

	// Additional notes or commentary about the communication by the sender, receiver or other interested parties.
	get note() {
		return this.__note;
	}

	set note(new_value) {
		const Annotation = require('./Annotation');
		this.__note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			definition: this.__definition && this.__definition.map(v => v.toJSON()),
			basedOn: this.__basedOn && this.__basedOn.map(v => v.toJSON()),
			partOf: this.__partOf && this.__partOf.map(v => v.toJSON()),
			status: this.__status,
			notDone: this.__notDone,
			notDoneReason: this.__notDoneReason && this.__notDoneReason.toJSON(),
			category: this.__category && this.__category.map(v => v.toJSON()),
			medium: this.__medium && this.__medium.map(v => v.toJSON()),
			subject: this.__subject && this.__subject.toJSON(),
			recipient: this.__recipient && this.__recipient.map(v => v.toJSON()),
			topic: this.__topic && this.__topic.map(v => v.toJSON()),
			context: this.__context && this.__context.toJSON(),
			sent: this.__sent,
			received: this.__received,
			sender: this.__sender && this.__sender.toJSON(),
			reasonCode: this.__reasonCode && this.__reasonCode.map(v => v.toJSON()),
			reasonReference: this.__reasonReference && this.__reasonReference.map(v => v.toJSON()),
			payload: this.__payload && this.__payload.map(v => v.toJSON()),
			note: this.__note && this.__note.map(v => v.toJSON()),
		});
	}
}

module.exports = Communication;
