const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Reference = require('./types/Reference');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Period = require('./types/Period');
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

class ReferralRequest extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'ReferralRequest';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	Business identifier
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

	// definition	Σ	0..*	Reference(ActivityDefinition | PlanDefinition)	Instantiates protocol or definition
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

	// basedOn	Σ	0..*	Reference(ReferralRequest | CarePlan | ProcedureRequest)	Request fulfilled by this request
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

	// replaces	Σ	0..*	Reference(ReferralRequest)	Request(s) replaced by this request
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

	// type	Σ	0..1	CodeableConcept	Referral/Transition of care request type
	// SNOMED CT Patient Referral (Example)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// priority	Σ	0..1	code	Urgency of referral / transfer of care request
	// RequestPriority (Required)
	set priority(priority) {
		this._priority = new Code(priority);
	}

	get priority() {
		return this._priority;
	}

	// serviceRequested	Σ	0..*	CodeableConcept	Actions requested as part of the referral
	// Practice Setting Code Value Set (Example)
	set serviceRequested(serviceRequested) {
		if (Array.isArray(serviceRequested)) {
			this._serviceRequested = serviceRequested.map((i) => new CodeableConcept(i));
		} else {
			this._serviceRequested = [new CodeableConcept(serviceRequested)];
		}
	}

	get serviceRequested() {
		return this._serviceRequested;
	}

	// subject	Σ	1..1	Reference(Patient | Group)	Patient referred to care or transfer
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// context	Σ	0..1	Reference(Encounter | EpisodeOfCare)	Originating encounter
	set context(context) {
		this._context = new Reference(context);
	}

	get context() {
		return this._context;
	}

	// occurrence[x]	Σ	0..1		When the service(s) requested in the referral should occur
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

	// authoredOn	Σ	0..1	dateTime	Date of creation/activation
	set authoredOn(authoredOn) {
		this._authoredOn = authoredOn;
	}

	get authoredOn() {
		return this._authoredOn;
	}

	// specialty		0..1	CodeableConcept	The clinical specialty (discipline) that the referral is requested for
	// PractitionerSpecialty (Example)
	set specialty(specialty) {
		this._specialty = new CodeableConcept(specialty);
	}

	get specialty() {
		return this._specialty;
	}

	// recipient	Σ	0..*	Reference(Practitioner | Organization | HealthcareService)	Receiver of referral / transfer of care request
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

	// reasonCode	Σ	0..*	CodeableConcept	Reason for referral / transfer of care request
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

	// description		0..1	string	A textual description of the referral
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// supportingInfo		0..*	Reference(Any)	Additonal information to support referral or transfer of care request
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

	// note		0..*	Annotation	Comments made about referral request
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
			type: this._type,
			priority: this._priority,
			serviceRequested: this._serviceRequested,
			subject: this._subject,
			context: this._context,
			occurrenceDateTime: this._occurrenceDateTime,
			occurrencePeriod: this._occurrencePeriod,
			authoredOn: this._authoredOn,
			specialty: this._specialty,
			recipient: this._recipient,
			reasonCode: this._reasonCode,
			reasonReference: this._reasonReference,
			description: this._description,
			supportingInfo: this._supportingInfo,
			note: this._note,
			relevantHistory: this._relevantHistory,
			requester: this._requester,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.ReferralRequest = ReferralRequest;
module.exports.Requester = Requester;
