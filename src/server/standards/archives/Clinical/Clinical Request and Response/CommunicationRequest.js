const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Reference = require('./types/Reference');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Period = require('./types/Period');
const Annotation = require('./types/Annotation');
const Attachment = require('./types/Attachment');

class Requester {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// agent	Σ	1..1	Reference(Practitioner | Organization | Patient | RelatedPerson | Device)	Individual making the request
	set agent(agent) {
		this._agent = new Reference(agent);
	}

	get agent() {
		return this._agent;
	}

	// onBehalfOf	ΣI	0..1	Reference(Organization)	Organization agent is acting for
	set onBehalfOf(onBehalfOf) {
		this._onBehalfOf = new Reference(onBehalfOf);
	}

	get onBehalfOf() {
		return this._onBehalfOf;
	}

	toJSON() {
		return {
			agent: this._agent,
			onBehalfOf: this._onBehalfOf,
		};
	}
}

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

class CommunicationRequest extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'CommunicationRequest';
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

	// basedOn	Σ	0..*	Reference(Any)	Fulfills plan or proposal
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

	// replaces	Σ	0..*	Reference(CommunicationRequest)	Request(s) replaced by this request
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

	// groupIdentifier	Σ	0..1	Identifier	Composite request this is part of
	set groupIdentifier(groupIdentifier) {
		this._groupIdentifier = new Identifier(groupIdentifier);
	}

	get groupIdentifier() {
		return this._groupIdentifier;
	}

	// status	?!Σ	1..1	code	draft | active | suspended | cancelled | completed | entered-in-error | unknown
	// RequestStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
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

	// priority	Σ	0..1	code	Message urgency
	// RequestPriority (Required)
	set priority(priority) {
		this._priority = new Code(priority);
	}

	get priority() {
		return this._priority;
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

	// subject		0..1	Reference(Patient | Group)	Focus of message
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// recipient		0..*	Reference(Device | Organization | Patient | Practitioner | RelatedPerson | Group | CareTeam)	Message recipient
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

	// occurrence[x]	Σ	0..1		When scheduled
	// occurrenceDateTime			dateTime
	set occurrenceDateTime(occurrenceDateTime) {
		this._occurrenceDateTime = occurrenceDateTime;
	}

	get occurrenceDateTime() {
		return this._occurrenceDateTime;
	}

	// occurrencePeriod			Period
	set occurrencePeriod(occurrencePeriod) {
		this._occurrencePeriod = new Period(occurrencePeriod);
	}

	get occurrencePeriod() {
		return this._occurrencePeriod;
	}

	// authoredOn	Σ	0..1	dateTime	When request transitioned to being actionable
	set authoredOn(authoredOn) {
		this._authoredOn = authoredOn;
	}

	get authoredOn() {
		return this._authoredOn;
	}

	// sender		0..1	Reference(Device | Organization | Patient | Practitioner | RelatedPerson)	Message sender
	set sender(sender) {
		this._sender = new Reference(sender);
	}

	get sender() {
		return this._sender;
	}

	// reasonCode	Σ	0..*	CodeableConcept	Why is communication needed?
	// v3 Code System ActReason (Example)
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

	// reasonReference	Σ	0..*	Reference(Condition | Observation)	Why is communication needed?
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

	// note		0..*	Annotation	Comments made about communication request
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

	// requester	ΣI	0..1	BackboneElement	Who/what is requesting service
	// + onBehalfOf can only be specified if agent is practitioner or device
	set requester(requester) {
		this._requester = new Requester(requester);
	}

	get requester() {
		return this._requester;
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
			basedOn: this._basedOn,
			replaces: this._replaces,
			groupIdentifier: this._groupIdentifier,
			status: this._status,
			category: this._category,
			priority: this._priority,
			medium: this._medium,
			subject: this._subject,
			recipient: this._recipient,
			topic: this._topic,
			context: this._context,
			occurrenceDateTime: this._occurrenceDateTime,
			occurrencePeriod: this._occurrencePeriod,
			authoredOn: this._authoredOn,
			sender: this._sender,
			reasonCode: this._reasonCode,
			reasonReference: this._reasonReference,
			note: this._note,
			requester: this._requester,
			payload: this._payload,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.CommunicationRequest = CommunicationRequest;
module.exports.Payload = Payload;
module.exports.Requester = Requester;
