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

class ProcedureRequest extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'ProcedureRequest';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	Identifiers assigned to this order
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

	// replaces	Σ	0..*	Reference(Any)	What request replaces
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

	// requisition	Σ	0..1	Identifier	Composite Request ID
	set requisition(requisition) {
		this._requisition = new Identifier(requisition);
	}

	get requisition() {
		return this._requisition;
	}

	// status	?!Σ	1..1	code	draft | active | suspended | completed | entered-in-error | cancelled
	// RequestStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// intent	?!Σ	1..1	code	proposal | plan | order +
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

	// doNotPerform	?!Σ	0..1	boolean	True if procedure should not be performed
	set doNotPerform(doNotPerform) {
		this._doNotPerform = doNotPerform;
	}

	get doNotPerform() {
		return this._doNotPerform;
	}

	// category	Σ	0..*	CodeableConcept	Classification of procedure
	// Procedure Category Codes (SNOMED CT) (Example)
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

	// code	Σ	1..1	CodeableConcept	What is being requested/ordered
	// Procedure Codes (SNOMED CT) (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// subject	Σ	1..1	Reference(Patient | Group | Location | Device)	Individual the service is ordered for
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// context	Σ	0..1	Reference(Encounter | EpisodeOfCare)	Encounter or Episode during which request was created
	set context(context) {
		this._context = new Reference(context);
	}

	get context() {
		return this._context;
	}

	// occurrence[x]	Σ	0..1		When procedure should occur
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

	// asNeeded[x]	Σ	0..1		Preconditions for procedure or diagnostic
	// SNOMED CT Medication As Needed Reason Codes (Example)
	// asNeededBoolean			boolean
	set asNeededBoolean(asNeededBoolean) {
		this._asNeededBoolean = asNeededBoolean;
	}

	get asNeededBoolean() {
		return this._asNeededBoolean;
	}

	// asNeededCodeableConcept			CodeableConcept
	set asNeededCodeableConcept(asNeededCodeableConcept) {
		this._asNeededCodeableConcept = new CodeableConcept(asNeededCodeableConcept);
	}

	get asNeededCodeableConcept() {
		return this._asNeededCodeableConcept;
	}

	// authoredOn	Σ	0..1	dateTime	Date request signed
	set authoredOn(authoredOn) {
		this._authoredOn = authoredOn;
	}

	get authoredOn() {
		return this._authoredOn;
	}

	// requester	Σ	0..1	BackboneElement	Who/what is requesting procedure or diagnostic
	set requester(requester) {
		this._requester = new Requester(requester);
	}

	get requester() {
		return this._requester;
	}

	// performerType	Σ	0..1	CodeableConcept	Performer role
	// Participant Roles (Example)
	set performerType(performerType) {
		this._performerType = new CodeableConcept(performerType);
	}

	get performerType() {
		return this._performerType;
	}

	// performer	Σ	0..1	Reference(Practitioner | Organization | Patient | Device | RelatedPerson | HealthcareService)	Requested perfomer
	set performer(performer) {
		this._performer = new Reference(performer);
	}

	get performer() {
		return this._performer;
	}

	// reasonCode	Σ	0..*	CodeableConcept	Explanation/Justification for test
	// Procedure Reason Codes (Example)
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

	// reasonReference	Σ	0..*	Reference(Condition | Observation)	Explanation/Justification for test
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

	// specimen	Σ	0..*	Reference(Specimen)	Procedure Samples
	set specimen(specimen) {
		if (Array.isArray(specimen)) {
			this._specimen = specimen.map((i) => new Reference(i));
		} else {
			this._specimen = [new Reference(specimen)];
		}
	}

	get specimen() {
		return this._specimen;
	}

	// bodySite	Σ	0..*	CodeableConcept	Location on Body
	// SNOMED CT Body Structures (Example)
	set bodySite(bodySite) {
		if (Array.isArray(bodySite)) {
			this._bodySite = bodySite.map((i) => new CodeableConcept(i));
		} else {
			this._bodySite = [new CodeableConcept(bodySite)];
		}
	}

	get bodySite() {
		return this._bodySite;
	}

	// note		0..*	Annotation	Comments
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

	toJSON() {
		const json = {
			identifier: this._identifier,
			definition: this._definition,
			basedOn: this._basedOn,
			replaces: this._replaces,
			requisition: this._requisition,
			status: this._status,
			intent: this._intent,
			priority: this._priority,
			doNotPerform: this._doNotPerform,
			category: this._category,
			code: this._code,
			subject: this._subject,
			context: this._context,
			occurrenceDateTime: this._occurrenceDateTime,
			occurrencePeriod: this._occurrencePeriod,
			occurrenceTiming: this._occurrenceTiming,
			asNeededBoolean: this._asNeededBoolean,
			asNeededCodeableConcept: this._asNeededCodeableConcept,
			authoredOn: this._authoredOn,
			requester: this._requester,
			performerType: this._performerType,
			performer: this._performer,
			reasonCode: this._reasonCode,
			reasonReference: this._reasonReference,
			supportingInfo: this._supportingInfo,
			specimen: this._specimen,
			bodySite: this._bodySite,
			note: this._note,
			relevantHistory: this._relevantHistory,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.ProcedureRequest = ProcedureRequest;
module.exports.Requester = Requester;
