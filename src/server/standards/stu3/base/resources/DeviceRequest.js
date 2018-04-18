const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Reference = require('../types/Reference');
const Code = require('../types/Code');
const CodeableConcept = require('../types/CodeableConcept');
const Period = require('../types/Period');
const Timing = require('../types/Timing');
const Annotation = require('../types/Annotation');

class Requester {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// agent	Σ	1..1	Reference(Device | Practitioner | Organization)	Individual making the request
	set agent(agent) {
		this._agent = new Reference(agent);
	}

	get agent() {
		return this._agent;
	}

	// onBehalfOf	Σ	0..1	Reference(Organization)	Organization agent is acting for
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

class DeviceRequest extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'DeviceRequest';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	External Request identifier
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

	// definition	Σ	0..*	Reference(ActivityDefinition | PlanDefinition)	Protocol or definition
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

	// basedOn	Σ	0..*	Reference(Any)	What request fulfills
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

	// priorRequest	Σ	0..*	Reference(Any)	What request replaces
	set priorRequest(priorRequest) {
		if (Array.isArray(priorRequest)) {
			this._priorRequest = priorRequest.map((i) => new Reference(i));
		} else {
			this._priorRequest = [new Reference(priorRequest)];
		}
	}

	get priorRequest() {
		return this._priorRequest;
	}

	// groupIdentifier	Σ	0..1	Identifier	Identifier of composite request
	set groupIdentifier(groupIdentifier) {
		this._groupIdentifier = new Identifier(groupIdentifier);
	}

	get groupIdentifier() {
		return this._groupIdentifier;
	}

	// status	?!Σ	0..1	code	draft | active | suspended | completed | entered-in-error | cancelled
	// RequestStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// intent	?!Σ	1..1	CodeableConcept	proposal | plan | original-order | encoded | reflex-order
	// RequestIntent  (Required)
	set intent(intent) {
		this._intent = new CodeableConcept(intent);
	}

	get intent() {
		return this._intent;
	}

	// priority	Σ	0..1	code	Indicates how quickly the {{title}} should be addressed with respect to other requests
	// RequestPriority (Required)
	set priority(priority) {
		this._priority = new Code(priority);
	}

	get priority() {
		return this._priority;
	}

	// code[x]	Σ	1..1		Device requested
	// FHIR Device Types (Example)
	// codeReference			Reference
	set codeReference(codeReference) {
		this._codeReference = new Reference(codeReference);
	}

	get codeReference() {
		return this._codeReference;
	}

	// codeCodeableConcept			CodeableConcept
	set codeCodeableConcept(codeCodeableConcept) {
		this._codeCodeableConcept = new CodeableConcept(codeCodeableConcept);
	}

	get codeCodeableConcept() {
		return this._codeCodeableConcept;
	}

	// subject	Σ	1..1	Reference(Patient | Group | Location | Device)	Focus of request
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// context	Σ	0..1	Reference(Encounter | EpisodeOfCare)	Encounter or Episode motivating request
	set context(context) {
		this._context = new Reference(context);
	}

	get context() {
		return this._context;
	}

	// occurrence[x]	Σ	0..1		Desired time or schedule for use
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

	// authoredOn	Σ	0..1	dateTime	When recorded
	set authoredOn(authoredOn) {
		this._authoredOn = authoredOn;
	}

	get authoredOn() {
		return this._authoredOn;
	}

	// performerType	Σ	0..1	CodeableConcept	Fille role
	// Participant Roles (Example)
	set performerType(performerType) {
		this._performerType = new CodeableConcept(performerType);
	}

	get performerType() {
		return this._performerType;
	}

	// performer	Σ	0..1	Reference(Practitioner | Organization | Patient | Device | RelatedPerson | HealthcareService)	Requested Filler
	set performer(performer) {
		this._performer = new Reference(performer);
	}

	get performer() {
		return this._performer;
	}

	// reasonCode	Σ	0..*	CodeableConcept	Coded Reason for request
	// Condition/Problem/Diagnosis Codes (Example)
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

	// reasonReference	Σ	0..*	Reference(Any)	Linked Reason for request
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

	// supportingInfo		0..*	Reference(Any)	Additional clinical information
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

	// note		0..*	Annotation	Notes or comments
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

	// relevantHistory		0..*	Reference(Provenance)	Request provenance
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

	// requester	Σ	0..1	BackboneElement	Who/what is requesting diagnostics
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
			priorRequest: this._priorRequest,
			groupIdentifier: this._groupIdentifier,
			status: this._status,
			intent: this._intent,
			priority: this._priority,
			codeReference: this._codeReference,
			codeCodeableConcept: this._codeCodeableConcept,
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

module.exports.DeviceRequest = DeviceRequest;
module.exports.Requester = Requester;
