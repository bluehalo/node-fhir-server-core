const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Reference = require('./types/Reference');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Annotation = require('./types/Annotation');
const Attachment = require('./types/Attachment');

class Payload {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// content[x]		1..1		Message part content
	// contentString			string
	set contentString(contentString) {
		this._contentString = contentString;
	}

	get contentString() {
		return this._contentString;
	}

	// contentAttachment			Attachment
	set contentAttachment(contentAttachment) {
		this._contentAttachment = new Attachment(contentAttachment);
	}

	get contentAttachment() {
		return this._contentAttachment;
	}

	// contentReference			Reference
	set contentReference(contentReference) {
		this._contentReference = new Reference(contentReference);
	}

	get contentReference() {
		return this._contentReference;
	}

	toJSON() {
		return {
			contentString: this._contentString,
			contentAttachment: this._contentAttachment,
			contentReference: this._contentReference,
		};
	}
}

class Communication extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Communication';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	Unique identifier
	set identifier(identifier) {
		if (Array.isArray(identifier)) {
			this._identifier = identifier.map((i) => new Identifier(i));
		} else {
			this._identifier = [new Identifier(identifier)];
		}
	}

	get identifier() {
		return this._identifier;
	}

	// definition	Σ	0..*	Reference(PlanDefinition | ActivityDefinition)	Instantiates protocol or definition
	set definition(definition) {
		if (Array.isArray(definition)) {
			this._definition = definition.map((i) => new Reference(i));
		} else {
			this._definition = [new Reference(definition)];
		}
	}

	get definition() {
		return this._definition;
	}

	// basedOn	Σ	0..*	Reference(Any)	Request fulfilled by this communication
	set basedOn(basedOn) {
		if (Array.isArray(basedOn)) {
			this._basedOn = basedOn.map((i) => new Reference(i));
		} else {
			this._basedOn = [new Reference(basedOn)];
		}
	}

	get basedOn() {
		return this._basedOn;
	}

	// partOf	Σ	0..*	Reference(Any)	Part of this action
	set partOf(partOf) {
		if (Array.isArray(partOf)) {
			this._partOf = partOf.map((i) => new Reference(i));
		} else {
			this._partOf = [new Reference(partOf)];
		}
	}

	get partOf() {
		return this._partOf;
	}

	// status	?!Σ	1..1	code	preparation | in-progress | suspended | aborted | completed | entered-in-error
	// EventStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// notDone	?!Σ	0..1	boolean	Communication did not occur
	set notDone(notDone) {
		this._notDone = notDone;
	}

	get notDone() {
		return this._notDone;
	}

	// notDoneReason	ΣI	0..1	CodeableConcept	Why communication did not occur
	// CommunicationNotDoneReason (Example)
	set notDoneReason(notDoneReason) {
		this._notDoneReason = new CodeableConcept(notDoneReason);
	}

	get notDoneReason() {
		return this._notDoneReason;
	}

	// category		0..*	CodeableConcept	Message category
	// CommunicationCategory (Example)
	set category(category) {
		if (Array.isArray(category)) {
			this._category = category.map((i) => new CodeableConcept(i));
		} else {
			this._category = [new CodeableConcept(category)];
		}
	}

	get category() {
		return this._category;
	}

	// medium		0..*	CodeableConcept	A channel of communication
	// v3 Code System ParticipationMode (Example)
	set medium(medium) {
		if (Array.isArray(medium)) {
			this._medium = medium.map((i) => new CodeableConcept(i));
		} else {
			this._medium = [new CodeableConcept(medium)];
		}
	}

	get medium() {
		return this._medium;
	}

	// subject	Σ	0..1	Reference(Patient | Group)	Focus of message
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// recipient		0..*	Reference(Device | Organization | Patient | Practitioner | RelatedPerson | Group)	Message recipient
	set recipient(recipient) {
		if (Array.isArray(recipient)) {
			this._recipient = recipient.map((i) => new Reference(i));
		} else {
			this._recipient = [new Reference(recipient)];
		}
	}

	get recipient() {
		return this._recipient;
	}

	// topic		0..*	Reference(Any)	Focal resources
	set topic(topic) {
		if (Array.isArray(topic)) {
			this._topic = topic.map((i) => new Reference(i));
		} else {
			this._topic = [new Reference(topic)];
		}
	}

	get topic() {
		return this._topic;
	}

	// context	Σ	0..1	Reference(Encounter | EpisodeOfCare)	Encounter or episode leading to message
	set context(context) {
		this._context = new Reference(context);
	}

	get context() {
		return this._context;
	}

	// sent		0..1	dateTime	When sent
	set sent(sent) {
		this._sent = sent;
	}

	get sent() {
		return this._sent;
	}

	// received		0..1	dateTime	When received
	set received(received) {
		this._received = received;
	}

	get received() {
		return this._received;
	}

	// sender		0..1	Reference(Device | Organization | Patient | Practitioner | RelatedPerson)	Message sender
	set sender(sender) {
		this._sender = new Reference(sender);
	}

	get sender() {
		return this._sender;
	}

	// reasonCode	Σ	0..*	CodeableConcept	Indication for message
	// SNOMED CT Clinical Findings (Example)
	set reasonCode(reasonCode) {
		if (Array.isArray(reasonCode)) {
			this._reasonCode = reasonCode.map((i) => new CodeableConcept(i));
		} else {
			this._reasonCode = [new CodeableConcept(reasonCode)];
		}
	}

	get reasonCode() {
		return this._reasonCode;
	}

	// reasonReference	Σ	0..*	Reference(Condition | Observation)	Why was communication done?
	set reasonReference(reasonReference) {
		if (Array.isArray(reasonReference)) {
			this._reasonReference = reasonReference.map((i) => new Reference(i));
		} else {
			this._reasonReference = [new Reference(reasonReference)];
		}
	}

	get reasonReference() {
		return this._reasonReference;
	}

	// note		0..*	Annotation	Comments made about the communication
	set note(note) {
		if (Array.isArray(note)) {
			this._note = note.map((i) => new Annotation(i));
		} else {
			this._note = [new Annotation(note)];
		}
	}

	get note() {
		return this._note;
	}

	// payload		0..*	BackboneElement	Message payload
	set payload(payload) {
		if (Array.isArray(payload)) {
			this._payload = payload.map((i) => new Payload(i));
		} else {
			this._payload = [new Payload(payload)];
		}
	}

	get payload() {
		return this._payload;
	}

	toJSON() {
		const json = {
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
			note: this._note,
			payload: this._payload,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Communication = Communication;
module.exports.Payload = Payload;
