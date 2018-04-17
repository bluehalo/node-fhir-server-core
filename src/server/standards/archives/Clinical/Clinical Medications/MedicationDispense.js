const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Reference = require('./types/Reference');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Annotation = require('./types/Annotation');
const Dosage = require('./types/Dosage');

class Substitution {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// wasSubstituted		1..1	boolean	Whether a substitution was or was not performed on the dispense
	set wasSubstituted(wasSubstituted) {
		this._wasSubstituted = wasSubstituted;
	}

	get wasSubstituted() {
		return this._wasSubstituted;
	}

	// type		0..1	CodeableConcept	Code signifying whether a different drug was dispensed from what was prescribed
	// ActSubstanceAdminSubstitutionCode (Example)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// reason		0..*	CodeableConcept	Why was substitution made
	// SubstanceAdminSubstitutionReason (Example)
	set reason(reason) {
		if (Array.isArray(reason)) {
			this._reason = reason.map((i) => new CodeableConcept(i));
		} else {
			this._reason = [new CodeableConcept(reason)];
		}
	}

	get reason() {
		return this._reason;
	}

	// responsibleParty		0..*	Reference(Practitioner)	Who is responsible for the substitution
	set responsibleParty(responsibleParty) {
		if (Array.isArray(responsibleParty)) {
			this._responsibleParty = responsibleParty.map((i) => new Reference(i));
		} else {
			this._responsibleParty = [new Reference(responsibleParty)];
		}
	}

	get responsibleParty() {
		return this._responsibleParty;
	}

	toJSON() {
		return {
			wasSubstituted: this._wasSubstituted,
			type: this._type,
			reason: this._reason,
			responsibleParty: this._responsibleParty,
		};
	}
}

class Performer {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// actor		1..1	Reference(Practitioner | Organization | Patient | Device | RelatedPerson)	Individual who was performing
	set actor(actor) {
		this._actor = new Reference(actor);
	}

	get actor() {
		return this._actor;
	}

	// onBehalfOf		0..1	Reference(Organization)	Organization organization was acting for
	set onBehalfOf(onBehalfOf) {
		this._onBehalfOf = new Reference(onBehalfOf);
	}

	get onBehalfOf() {
		return this._onBehalfOf;
	}

	toJSON() {
		return {
			actor: this._actor,
			onBehalfOf: this._onBehalfOf,
		};
	}
}

class MedicationDispense extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'MedicationDispense';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier		0..*	Identifier	External identifier
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

	// partOf		0..*	Reference(Procedure)	Event that dispense is part of
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

	// status	?!Σ	0..1	code	preparation | in-progress | on-hold | completed | entered-in-error | stopped
	// MedicationDispenseStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// category		0..1	CodeableConcept	Type of medication dispense
	// MedicationDispenseCategory (Preferred)
	set category(category) {
		this._category = new CodeableConcept(category);
	}

	get category() {
		return this._category;
	}

	// medication[x]	Σ	1..1		What medication was supplied
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

	// subject	Σ	0..1	Reference(Patient | Group)	Who the dispense is for
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// context		0..1	Reference(Encounter | EpisodeOfCare)	Encounter / Episode associated with event
	set context(context) {
		this._context = new Reference(context);
	}

	get context() {
		return this._context;
	}

	// supportingInformation		0..*	Reference(Any)	Information that supports the dispensing of the medication
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

	// authorizingPrescription		0..*	Reference(MedicationRequest)	Medication order that authorizes the dispense
	set authorizingPrescription(authorizingPrescription) {
		if (Array.isArray(authorizingPrescription)) {
			this._authorizingPrescription = authorizingPrescription.map((i) => new Reference(i));
		} else {
			this._authorizingPrescription = [new Reference(authorizingPrescription)];
		}
	}

	get authorizingPrescription() {
		return this._authorizingPrescription;
	}

	// type		0..1	CodeableConcept	Trial fill, partial fill, emergency fill, etc.
	// ActPharmacySupplyType (Example)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// quantity		0..1	SimpleQuantity	Amount dispensed
	set quantity(quantity) {
		this._quantity = quantity;
	}

	get quantity() {
		return this._quantity;
	}

	// daysSupply		0..1	SimpleQuantity	Amount of medication expressed as a timing amount
	set daysSupply(daysSupply) {
		this._daysSupply = daysSupply;
	}

	get daysSupply() {
		return this._daysSupply;
	}

	// whenPrepared	Σ	0..1	dateTime	When product was packaged and reviewed
	set whenPrepared(whenPrepared) {
		this._whenPrepared = whenPrepared;
	}

	get whenPrepared() {
		return this._whenPrepared;
	}

	// whenHandedOver		0..1	dateTime	When product was given out
	set whenHandedOver(whenHandedOver) {
		this._whenHandedOver = whenHandedOver;
	}

	get whenHandedOver() {
		return this._whenHandedOver;
	}

	// destination		0..1	Reference(Location)	Where the medication was sent
	set destination(destination) {
		this._destination = new Reference(destination);
	}

	get destination() {
		return this._destination;
	}

	// receiver		0..*	Reference(Patient | Practitioner)	Who collected the medication
	set receiver(receiver) {
		if (Array.isArray(receiver)) {
			this._receiver = receiver.map((i) => new Reference(i));
		} else {
			this._receiver = [new Reference(receiver)];
		}
	}

	get receiver() {
		return this._receiver;
	}

	// note		0..*	Annotation	Information about the dispense
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

	// dosageInstruction		0..*	Dosage	How the medication is to be used by the patient or administered by the caregiver
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

	// detectedIssue		0..*	Reference(DetectedIssue)	Clinical issue with action
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

	// notDone		0..1	boolean	Whether the dispense was or was not performed
	set notDone(notDone) {
		this._notDone = notDone;
	}

	get notDone() {
		return this._notDone;
	}

	// notDoneReason[x]		0..1		Why a dispense was not performed
	// notDoneReasonCodeableConcept			CodeableConcept
	set notDoneReasonCodeableConcept(notDoneReasonCodeableConcept) {
		this._notDoneReasonCodeableConcept = new CodeableConcept(notDoneReasonCodeableConcept);
	}

	get notDoneReasonCodeableConcept() {
		return this._notDoneReasonCodeableConcept;
	}

	// notDoneReasonReference			Reference
	set notDoneReasonReference(notDoneReasonReference) {
		this._notDoneReasonReference = new Reference(notDoneReasonReference);
	}

	get notDoneReasonReference() {
		return this._notDoneReasonReference;
	}

	// eventHistory		0..*	Reference(Provenance)	A list of releveant lifecycle events
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

	// performer		0..*	BackboneElement	Who performed event
	set performer(performer) {
		if (Array.isArray(performer)) {
			this._performer = performer.map((i) => new Performer(i));
		} else {
			this._performer = [new Performer(performer)];
		}
	}

	get performer() {
		return this._performer;
	}

	// substitution		0..1	BackboneElement	Whether a substitution was performed on the dispense
	set substitution(substitution) {
		this._substitution = new Substitution(substitution);
	}

	get substitution() {
		return this._substitution;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			partOf: this._partOf,
			status: this._status,
			category: this._category,
			medicationCodeableConcept: this._medicationCodeableConcept,
			medicationReference: this._medicationReference,
			subject: this._subject,
			context: this._context,
			supportingInformation: this._supportingInformation,
			authorizingPrescription: this._authorizingPrescription,
			type: this._type,
			quantity: this._quantity,
			daysSupply: this._daysSupply,
			whenPrepared: this._whenPrepared,
			whenHandedOver: this._whenHandedOver,
			destination: this._destination,
			receiver: this._receiver,
			note: this._note,
			dosageInstruction: this._dosageInstruction,
			detectedIssue: this._detectedIssue,
			notDone: this._notDone,
			notDoneReasonCodeableConcept: this._notDoneReasonCodeableConcept,
			notDoneReasonReference: this._notDoneReasonReference,
			eventHistory: this._eventHistory,
			performer: this._performer,
			substitution: this._substitution,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.MedicationDispense = MedicationDispense;
module.exports.Performer = Performer;
module.exports.Substitution = Substitution;
