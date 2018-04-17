const DomainResource = require('../../generic/types/DomainResource');
const Meta = require('../../generic/types/Meta');
const Code = require('../../generic/types/Code');
const Narrative = require('../types/Narrative');
const Resource = require('../../generic/types/Resource');
const Extension = require('../../generic/types/Extension');
const Identifier = require('../types/Identifier');
const Reference = require('../../generic/types/Reference');
const CodeableConcept = require('../../generic/types/CodeableConcept');
const Annotation = require('../../generic/types/Annotation');
const Period = require('../../generic/types/Period');

class Substitution {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// id		0..1	string	xml:id (or equivalent in JSON)
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// extension		0..*	Extension	Additional Content defined by implementations
	set extension(extension) {
		if (Array.isArray(extension)) {
			this._extension = extension.map((i) => new Extension(i));
		} else {
			this._extension = [new Extension(extension)];
		}
	}

	get extension() {
		return this._extension;
	}

	// modifierExtension	?!*	0..*	Extension	Extensions that cannot be ignored
	set modifierExtension(modifierExtension) {
		if (Array.isArray(modifierExtension)) {
			this._modifierExtension = modifierExtension.map((i) => new Extension(i));
		} else {
			this._modifierExtension = [new Extension(modifierExtension)];
		}
	}

	get modifierExtension() {
		return this._modifierExtension;
	}

	// allowed	?!	1..1	boolean	Whether substitution is allowed or not
	set allowed(allowed) {
		this._allowed = allowed;
	}

	get allowed() {
		return this._allowed;
	}

	// reason		0..1	CodeableConcept	Why should (not) substitution be made
	// Binding: SubstanceAdminSubstitutionReason (example)
	set reason(reason) {
		this._reason = new CodeableConcept(reason);
	}

	get reason() {
		return this._reason;
	}

	toJSON() {
		return {
			id: this._id,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			allowed: this._allowed,
			reason: this._reason,
		};
	}
}

class DispenseRequest {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// id		0..1	string	xml:id (or equivalent in JSON)
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// extension		0..*	Extension	Additional Content defined by implementations
	set extension(extension) {
		if (Array.isArray(extension)) {
			this._extension = extension.map((i) => new Extension(i));
		} else {
			this._extension = [new Extension(extension)];
		}
	}

	get extension() {
		return this._extension;
	}

	// modifierExtension	?!*	0..*	Extension	Extensions that cannot be ignored
	set modifierExtension(modifierExtension) {
		if (Array.isArray(modifierExtension)) {
			this._modifierExtension = modifierExtension.map((i) => new Extension(i));
		} else {
			this._modifierExtension = [new Extension(modifierExtension)];
		}
	}

	get modifierExtension() {
		return this._modifierExtension;
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
			id: this._id,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			validityPeriod: this._validityPeriod,
			numberOfRepeatsAllowed: this._numberOfRepeatsAllowed,
			quantity: this._quantity,
			expectedSupplyDuration: this._expectedSupplyDuration,
			performer: this._performer,
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

	// id	*	0..1	id	Logical id of this artifact
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// meta	*	0..1	Meta	Metadata about the resource
	set meta(meta) {
		this._meta = new Meta(meta);
	}

	get meta() {
		return this._meta;
	}

	// implicitRules	?!*	0..1	uri	A set of rules under which this content was created
	set implicitRules(implicitRules) {
		this._implicitRules = implicitRules;
	}

	get implicitRules() {
		return this._implicitRules;
	}

	// language		0..1	code	Language of the resource content
	// Binding: Common Languages (extensible)
	set language(language) {
		this._language = new Code(language);
	}

	get language() {
		return this._language;
	}

	// text	I	0..1	Narrative	Text summary of the resource, for human interpretation
	set text(text) {
		this._text = new Narrative(text);
	}

	get text() {
		return this._text;
	}

	// contained		0..*	Resource	Contained, inline Resources
	set contained(contained) {
		if (Array.isArray(contained)) {
			this._contained = contained.map((i) => new Resource(i));
		} else {
			this._contained = [new Resource(contained)];
		}
	}

	get contained() {
		return this._contained;
	}

	// extension		0..*	Extension	Additional Content defined by implementations
	set extension(extension) {
		if (Array.isArray(extension)) {
			this._extension = extension.map((i) => new Extension(i));
		} else {
			this._extension = [new Extension(extension)];
		}
	}

	get extension() {
		return this._extension;
	}

	// modifierExtension	?!	0..*	Extension	Extensions that cannot be ignored
	set modifierExtension(modifierExtension) {
		if (Array.isArray(modifierExtension)) {
			this._modifierExtension = modifierExtension.map((i) => new Extension(i));
		} else {
			this._modifierExtension = [new Extension(modifierExtension)];
		}
	}

	get modifierExtension() {
		return this._modifierExtension;
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

	// definition	*	0..*	Reference(ActivityDefinition), Reference(PlanDefinition)	Protocol or definition
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

	// basedOn	*	0..*	Reference(CarePlan), Reference(DiagnosticRequest), Reference(MedicationRequest), Reference(ProcedureRequest), Reference(ReferralRequest)	What request fulfills
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

	// requisition	*	0..1	Identifier	Identifier of composite
	set requisition(requisition) {
		this._requisition = new Identifier(requisition);
	}

	get requisition() {
		return this._requisition;
	}

	// status	?!S	1..1	code	active | on-hold | cancelled | completed | entered-in-error | stopped | draft
	// Binding: medication-order-status (required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// stage	?!*	1..1	CodeableConcept	proposal | plan | original-order
	// Binding: MedicationRequestStage (example)
	set stage(stage) {
		this._stage = new CodeableConcept(stage);
	}

	get stage() {
		return this._stage;
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

	// patient	S	1..1	Reference(US Core Patient Profile)	Who prescription is for
	set patient(patient) {
		this._patient = new Reference(patient);
	}

	get patient() {
		return this._patient;
	}

	// context		0..1	Reference(Encounter), Reference(EpisodeOfCare)	Created during encounter/admission/stay
	set context(context) {
		this._context = new Reference(context);
	}

	get context() {
		return this._context;
	}

	// supportingInformation		0..*	Reference(Resource)	Information to support ordering of the medication
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

	// dateWritten	S	1..1	dateTime	When prescription was initially authorized
	set dateWritten(dateWritten) {
		this._dateWritten = dateWritten;
	}

	get dateWritten() {
		return this._dateWritten;
	}

	// requester	S	1..1	Reference(US Core Practitioner)	Who ordered the initial medication(s)
	set requester(requester) {
		this._requester = new Reference(requester);
	}

	get requester() {
		return this._requester;
	}

	// reasonCode		0..*	CodeableConcept	Reason or indication for writing the prescription
	// Binding: Condition/Problem/Diagnosis Codes (example)
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

	// reasonReference		0..*	Reference(Condition), Reference(Observation)	Condition or Observation that supports why the prescription is being written
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

	// category		0..1	CodeableConcept	Type of medication usage
	// Binding: MedicationRequestCategory (example)
	set category(category) {
		this._category = new CodeableConcept(category);
	}

	get category() {
		return this._category;
	}

	// dosageInstruction		0..*	DosageInstruction	How the medication should be taken
	set dosageInstruction(dosageInstruction) {
		this._dosageInstruction = [].concat(dosageInstruction);
	}

	get dosageInstruction() {
		return this._dosageInstruction;
	}

	// dispenseRequest	I	0..1	BackboneElement	Medication supply authorization
	set dispenseRequest(dispenseRequest) {
		this._dispenseRequest = new DispenseRequest(dispenseRequest);
	}

	get dispenseRequest() {
		return this._dispenseRequest;
	}

	// substitution	I	0..1	BackboneElement	Any restrictions on medication substitution
	set substitution(substitution) {
		this._substitution = new Substitution(substitution);
	}

	get substitution() {
		return this._substitution;
	}

	// priorPrescription		0..1	Reference(MedicationRequest)	An order/prescription that this supersedes
	set priorPrescription(priorPrescription) {
		this._priorPrescription = new Reference(priorPrescription);
	}

	get priorPrescription() {
		return this._priorPrescription;
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

	toJSON() {
		const json = {
			id: this._id,
			meta: this._meta,
			implicitRules: this._implicitRules,
			language: this._language,
			text: this._text,
			contained: this._contained,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			identifier: this._identifier,
			definition: this._definition,
			basedOn: this._basedOn,
			requisition: this._requisition,
			status: this._status,
			stage: this._stage,
			medicationCodeableConcept: this._medicationCodeableConcept,
			medicationReference: this._medicationReference,
			patient: this._patient,
			context: this._context,
			supportingInformation: this._supportingInformation,
			dateWritten: this._dateWritten,
			requester: this._requester,
			reasonCode: this._reasonCode,
			reasonReference: this._reasonReference,
			note: this._note,
			category: this._category,
			dosageInstruction: this._dosageInstruction,
			dispenseRequest: this._dispenseRequest,
			substitution: this._substitution,
			priorPrescription: this._priorPrescription,
			eventHistory: this._eventHistory,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.MedicationRequest = MedicationRequest;
module.exports.DispenseRequest = DispenseRequest;
module.exports.Substitution = Substitution;
