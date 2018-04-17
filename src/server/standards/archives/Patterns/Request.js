const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Reference = require('./types/Reference');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Period = require('./types/Period');
const Timing = require('./types/Timing');
const Annotation = require('./types/Annotation');

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

class Request extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Request';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	Business Identifier for request/order
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

	// definition	Σ	0..*	Reference(Definition)	Instantiates protocol or definition
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

	// basedOn	Σ	0..*	Reference(Request)	Fulfills plan, proposal or order
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

	// replaces	Σ	0..*	Reference(Request)	Request(s) replaced by this request
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

	// intent	?!Σ	1..1	code	proposal | plan | order
	// RequestIntent (Required)
	set intent(intent) {
		this._intent = new Code(intent);
	}

	get intent() {
		return this._intent;
	}

	// priority	Σ	0..1	code	routine | urgent | asap | stat
	// RequestPriority (Required)
	set priority(priority) {
		this._priority = new Code(priority);
	}

	get priority() {
		return this._priority;
	}

	// code	Σ	0..1	CodeableConcept	What's being requested/ordered
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// subject	Σ	1..1	Reference(Patient | Group)	Individual the service is ordered for
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// context	Σ	0..1	Reference(Encounter | EpisodeOfCare)	Encounter / Episode associated with request
	set context(context) {
		this._context = new Reference(context);
	}

	get context() {
		return this._context;
	}

	// occurrence[x]	Σ	0..1		When service should occur
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

	// occurrenceTiming			Timing
	set occurrenceTiming(occurrenceTiming) {
		this._occurrenceTiming = new Timing(occurrenceTiming);
	}

	get occurrenceTiming() {
		return this._occurrenceTiming;
	}

	// authoredOn	Σ	0..1	dateTime	When request transitioned to being actionable
	set authoredOn(authoredOn) {
		this._authoredOn = authoredOn;
	}

	get authoredOn() {
		return this._authoredOn;
	}

	// performerType	Σ	0..1	CodeableConcept	Desired kind of service performer
	set performerType(performerType) {
		this._performerType = new CodeableConcept(performerType);
	}

	get performerType() {
		return this._performerType;
	}

	// performer	Σ	0..1	Reference(Practitioner | Organization | Patient | Device | RelatedPerson)	Specific desired performer
	set performer(performer) {
		this._performer = new Reference(performer);
	}

	get performer() {
		return this._performer;
	}

	// reasonCode	Σ	0..*	CodeableConcept	Why is service needed?
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

	// reasonReference	Σ	0..*	Reference(Condition | Observation)	Why is service needed?
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

	// supportingInfo		0..*	Reference(Any)	Extra information to use in performing request
	set supportingInfo(supportingInfo) {
		if (Array.isArray(supportingInfo)) {
			this._supportingInfo = supportingInfo.map((i) => new Reference(i));
		} else {
			this._supportingInfo = [new Reference(supportingInfo)];
		}
	}

	get supportingInfo() {
		return this._supportingInfo;
	}

	// note		0..*	Annotation	Comments made about service request
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

	// relevantHistory		0..*	Reference(Provenance)	Key events in history of request
	set relevantHistory(relevantHistory) {
		if (Array.isArray(relevantHistory)) {
			this._relevantHistory = relevantHistory.map((i) => new Reference(i));
		} else {
			this._relevantHistory = [new Reference(relevantHistory)];
		}
	}

	get relevantHistory() {
		return this._relevantHistory;
	}

	// requester	ΣI	0..1	BackboneElement	Who/what is requesting service
	// + onBehalfOf can only be specified if agent is practitioner or device
	set requester(requester) {
		this._requester = new Requester(requester);
	}

	get requester() {
		return this._requester;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			definition: this._definition,
			basedOn: this._basedOn,
			replaces: this._replaces,
			groupIdentifier: this._groupIdentifier,
			status: this._status,
			intent: this._intent,
			priority: this._priority,
			code: this._code,
			subject: this._subject,
			context: this._context,
			occurrenceDateTime: this._occurrenceDateTime,
			occurrencePeriod: this._occurrencePeriod,
			occurrenceTiming: this._occurrenceTiming,
			authoredOn: this._authoredOn,
			performerType: this._performerType,
			performer: this._performer,
			reasonCode: this._reasonCode,
			reasonReference: this._reasonReference,
			supportingInfo: this._supportingInfo,
			note: this._note,
			relevantHistory: this._relevantHistory,
			requester: this._requester,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Request = Request;
module.exports.Requester = Requester;
