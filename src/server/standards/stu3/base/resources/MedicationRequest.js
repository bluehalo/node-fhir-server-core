const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Reference = require('../types/Reference');
const Code = require('../types/Code');
const CodeableConcept = require('../types/CodeableConcept');
const Annotation = require('../types/Annotation');
const Dosage = require('../types/Dosage');
const Period = require('../types/Period');

class Substitution {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// allowed	?!	1..1	boolean	Whether substitution is allowed or not
	set allowed(allowed) {
		this._allowed = allowed;
	}

	get allowed() {
		return this._allowed;
	}

	// reason		0..1	CodeableConcept	Why should (not) substitution be made
	// SubstanceAdminSubstitutionReason (Example)
	set reason(reason) {
		this._reason = new CodeableConcept(reason);
	}

	get reason() {
		return this._reason;
	}

	toJSON() {
		return {
			allowed: this._allowed,
			reason: this._reason,
		};
	}
}

class DispenseRequest {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// validityPeriod		0..1	Period	Time period supply is authorized for
	set validityPeriod(validityPeriod) {
		this._validityPeriod = new Period(validityPeriod);
	}

	get validityPeriod() {
		return this._validityPeriod;
	}

	// numberOfRepeatsAllowed		0..1	positiveInt	Number of refills authorized
	set numberOfRepeatsAllowed(numberOfRepeatsAllowed) {
		this._numberOfRepeatsAllowed = numberOfRepeatsAllowed;
	}

	get numberOfRepeatsAllowed() {
		return this._numberOfRepeatsAllowed;
	}

	// quantity		0..1	SimpleQuantity	Amount of medication to supply per dispense
	set quantity(quantity) {
		this._quantity = quantity;
	}

	get quantity() {
		return this._quantity;
	}

	// expectedSupplyDuration		0..1	Duration	Number of days supply per dispense
	set expectedSupplyDuration(expectedSupplyDuration) {
		this._expectedSupplyDuration = expectedSupplyDuration;
	}

	get expectedSupplyDuration() {
		return this._expectedSupplyDuration;
	}

	// performer		0..1	Reference(Organization)	Intended dispenser
	set performer(performer) {
		this._performer = new Reference(performer);
	}

	get performer() {
		return this._performer;
	}

	toJSON() {
		return {
			validityPeriod: this._validityPeriod,
			numberOfRepeatsAllowed: this._numberOfRepeatsAllowed,
			quantity: this._quantity,
			expectedSupplyDuration: this._expectedSupplyDuration,
			performer: this._performer,
		};
	}
}

class Requester {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// agent	Σ	1..1	Reference(Practitioner | Organization | Patient | RelatedPerson | Device)	Who ordered the initial medication(s)
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

class MedicationRequest extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'MedicationRequest';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier		0..*	Identifier	External ids for this request
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

	// basedOn	Σ	0..*	Reference(CarePlan | MedicationRequest | ProcedureRequest | ReferralRequest)	What request fulfills
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

	// groupIdentifier	Σ	0..1	Identifier	Composite request this is part of
	set groupIdentifier(groupIdentifier) {
		this._groupIdentifier = new Identifier(groupIdentifier);
	}

	get groupIdentifier() {
		return this._groupIdentifier;
	}

	// status	?!Σ	0..1	code	active | on-hold | cancelled | completed | entered-in-error | stopped | draft | unknown
	// MedicationRequestStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// intent	?!Σ	1..1	code	proposal | plan | order | instance-order
	// MedicationRequestIntent (Required)
	set intent(intent) {
		this._intent = new Code(intent);
	}

	get intent() {
		return this._intent;
	}

	// category		0..1	CodeableConcept	Type of medication usage
	// MedicationRequestCategory (Preferred)
	set category(category) {
		this._category = new CodeableConcept(category);
	}

	get category() {
		return this._category;
	}

	// priority	Σ	0..1	code	routine | urgent | stat | asap
	// MedicationRequestPriority (Required)
	set priority(priority) {
		this._priority = new Code(priority);
	}

	get priority() {
		return this._priority;
	}

	// medication[x]	Σ	1..1		Medication to be taken
	// SNOMED CT Medication Codes (Example)
	// medicationCodeableConcept			CodeableConcept
	set medicationCodeableConcept(medicationCodeableConcept) {
		this._medicationCodeableConcept = new CodeableConcept(medicationCodeableConcept);
	}

	get medicationCodeableConcept() {
		return this._medicationCodeableConcept;
	}

	// medicationReference			Reference
	set medicationReference(medicationReference) {
		this._medicationReference = new Reference(medicationReference);
	}

	get medicationReference() {
		return this._medicationReference;
	}

	// subject	Σ	1..1	Reference(Patient | Group)	Who or group medication request is for
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// context		0..1	Reference(Encounter | EpisodeOfCare)	Created during encounter/admission/stay
	set context(context) {
		this._context = new Reference(context);
	}

	get context() {
		return this._context;
	}

	// supportingInformation		0..*	Reference(Any)	Information to support ordering of the medication
	set supportingInformation(supportingInformation) {
		if (Array.isArray(supportingInformation)) {
			this._supportingInformation = supportingInformation.map((i) => new Reference(i));
		} else {
			this._supportingInformation = [new Reference(supportingInformation)];
		}
	}

	get supportingInformation() {
		return this._supportingInformation;
	}

	// authoredOn	Σ	0..1	dateTime	When request was initially authored
	set authoredOn(authoredOn) {
		this._authoredOn = authoredOn;
	}

	get authoredOn() {
		return this._authoredOn;
	}

	// recorder		0..1	Reference(Practitioner)	Person who entered the request
	set recorder(recorder) {
		this._recorder = new Reference(recorder);
	}

	get recorder() {
		return this._recorder;
	}

	// reasonCode		0..*	CodeableConcept	Reason or indication for writing the prescription
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

	// reasonReference		0..*	Reference(Condition | Observation)	Condition or Observation that supports why the prescription is being written
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

	// note		0..*	Annotation	Information about the prescription
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

	// dosageInstruction		0..*	Dosage	How the medication should be taken
	set dosageInstruction(dosageInstruction) {
		if (Array.isArray(dosageInstruction)) {
			this._dosageInstruction = dosageInstruction.map((i) => new Dosage(i));
		} else {
			this._dosageInstruction = [new Dosage(dosageInstruction)];
		}
	}

	get dosageInstruction() {
		return this._dosageInstruction;
	}

	// priorPrescription		0..1	Reference(MedicationRequest)	An order/prescription that is being replaced
	set priorPrescription(priorPrescription) {
		this._priorPrescription = new Reference(priorPrescription);
	}

	get priorPrescription() {
		return this._priorPrescription;
	}

	// detectedIssue		0..*	Reference(DetectedIssue)	Clinical Issue with action
	set detectedIssue(detectedIssue) {
		if (Array.isArray(detectedIssue)) {
			this._detectedIssue = detectedIssue.map((i) => new Reference(i));
		} else {
			this._detectedIssue = [new Reference(detectedIssue)];
		}
	}

	get detectedIssue() {
		return this._detectedIssue;
	}

	// eventHistory		0..*	Reference(Provenance)	A list of events of interest in the lifecycle
	set eventHistory(eventHistory) {
		if (Array.isArray(eventHistory)) {
			this._eventHistory = eventHistory.map((i) => new Reference(i));
		} else {
			this._eventHistory = [new Reference(eventHistory)];
		}
	}

	get eventHistory() {
		return this._eventHistory;
	}

	// requester	ΣI	0..1	BackboneElement	Who/What requested the Request
	// + onBehalfOf can only be specified if agent is practitioner or device
	set requester(requester) {
		this._requester = new Requester(requester);
	}

	get requester() {
		return this._requester;
	}

	// dispenseRequest		0..1	BackboneElement	Medication supply authorization
	set dispenseRequest(dispenseRequest) {
		this._dispenseRequest = new DispenseRequest(dispenseRequest);
	}

	get dispenseRequest() {
		return this._dispenseRequest;
	}

	// substitution		0..1	BackboneElement	Any restrictions on medication substitution
	set substitution(substitution) {
		this._substitution = new Substitution(substitution);
	}

	get substitution() {
		return this._substitution;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			definition: this._definition,
			basedOn: this._basedOn,
			groupIdentifier: this._groupIdentifier,
			status: this._status,
			intent: this._intent,
			category: this._category,
			priority: this._priority,
			medicationCodeableConcept: this._medicationCodeableConcept,
			medicationReference: this._medicationReference,
			subject: this._subject,
			context: this._context,
			supportingInformation: this._supportingInformation,
			authoredOn: this._authoredOn,
			recorder: this._recorder,
			reasonCode: this._reasonCode,
			reasonReference: this._reasonReference,
			note: this._note,
			dosageInstruction: this._dosageInstruction,
			priorPrescription: this._priorPrescription,
			detectedIssue: this._detectedIssue,
			eventHistory: this._eventHistory,
			requester: this._requester,
			dispenseRequest: this._dispenseRequest,
			substitution: this._substitution,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.MedicationRequest = MedicationRequest;
module.exports.Requester = Requester;
module.exports.DispenseRequest = DispenseRequest;
module.exports.Substitution = Substitution;
