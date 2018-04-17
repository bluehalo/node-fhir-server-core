const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Reference = require('./types/Reference');

class SuspectEntity {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// instance	Σ	1..1	Reference(Substance | Medication | MedicationAdministration | MedicationStatement | Device)	Refers to the specific entity that caused the adverse event
	set instance(instance) {
		this._instance = new Reference(instance);
	}

	get instance() {
		return this._instance;
	}

	// causality	Σ	0..1	code	causality1 | causality2
	// AdverseEventCausality (Required)
	set causality(causality) {
		this._causality = new Code(causality);
	}

	get causality() {
		return this._causality;
	}

	// causalityAssessment	Σ	0..1	CodeableConcept	assess1 | assess2
	// AdverseEventCausalityAssessment (Example)
	set causalityAssessment(causalityAssessment) {
		this._causalityAssessment = new CodeableConcept(causalityAssessment);
	}

	get causalityAssessment() {
		return this._causalityAssessment;
	}

	// causalityProductRelatedness	Σ	0..1	string	AdverseEvent.suspectEntity.causalityProductRelatedness
	set causalityProductRelatedness(causalityProductRelatedness) {
		this._causalityProductRelatedness = causalityProductRelatedness;
	}

	get causalityProductRelatedness() {
		return this._causalityProductRelatedness;
	}

	// causalityMethod	Σ	0..1	CodeableConcept	method1 | method2
	// AdverseEventCausalityMethod (Example)
	set causalityMethod(causalityMethod) {
		this._causalityMethod = new CodeableConcept(causalityMethod);
	}

	get causalityMethod() {
		return this._causalityMethod;
	}

	// causalityAuthor	Σ	0..1	Reference(Practitioner | PractitionerRole)	AdverseEvent.suspectEntity.causalityAuthor
	set causalityAuthor(causalityAuthor) {
		this._causalityAuthor = new Reference(causalityAuthor);
	}

	get causalityAuthor() {
		return this._causalityAuthor;
	}

	// causalityResult	Σ	0..1	CodeableConcept	result1 | result2
	// AdverseEventCausalityResult (Example)
	set causalityResult(causalityResult) {
		this._causalityResult = new CodeableConcept(causalityResult);
	}

	get causalityResult() {
		return this._causalityResult;
	}

	toJSON() {
		return {
			instance: this._instance,
			causality: this._causality,
			causalityAssessment: this._causalityAssessment,
			causalityProductRelatedness: this._causalityProductRelatedness,
			causalityMethod: this._causalityMethod,
			causalityAuthor: this._causalityAuthor,
			causalityResult: this._causalityResult,
		};
	}
}

class AdverseEvent extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'AdverseEvent';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..1	Identifier	Business identifier for the event
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// category	Σ	0..1	code	AE | PAE An adverse event is an event that caused harm to a patient, an adverse reaction is a something that is a subject-specific event that is a result of an exposure to a medication, food, device or environmental substance, a potential adverse event is something that occurred and that could have caused harm to a patient but did not
	// AdverseEventCategory (Required)
	set category(category) {
		this._category = new Code(category);
	}

	get category() {
		return this._category;
	}

	// type	Σ	0..1	CodeableConcept	actual | potential
	// SNOMED CT Clinical Findings (Example)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// subject	Σ	0..1	Reference(Patient | ResearchSubject | Medication | Device)	Subject or group impacted by event
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// date	Σ	0..1	dateTime	When the event occurred
	set date(date) {
		this._date = date;
	}

	get date() {
		return this._date;
	}

	// reaction	Σ	0..*	Reference(Condition)	Adverse Reaction Events linked to exposure to substance
	set reaction(reaction) {
		if (Array.isArray(reaction)) {
			this._reaction = reaction.map((i) => new Reference(i));
		} else {
			this._reaction = [new Reference(reaction)];
		}
	}

	get reaction() {
		return this._reaction;
	}

	// location	Σ	0..1	Reference(Location)	Location where adverse event occurred
	set location(location) {
		this._location = new Reference(location);
	}

	get location() {
		return this._location;
	}

	// seriousness	Σ	0..1	CodeableConcept	Mild | Moderate | Severe
	// AdverseEventSeriousness (Example)
	set seriousness(seriousness) {
		this._seriousness = new CodeableConcept(seriousness);
	}

	get seriousness() {
		return this._seriousness;
	}

	// outcome	Σ	0..1	CodeableConcept	resolved | recovering | ongoing | resolvedWithSequelae | fatal | unknown
	// AdverseEventOutcome (Required)
	set outcome(outcome) {
		this._outcome = new CodeableConcept(outcome);
	}

	get outcome() {
		return this._outcome;
	}

	// recorder	Σ	0..1	Reference(Patient | Practitioner | RelatedPerson)	Who recorded the adverse event
	set recorder(recorder) {
		this._recorder = new Reference(recorder);
	}

	get recorder() {
		return this._recorder;
	}

	// eventParticipant	Σ	0..1	Reference(Practitioner | Device)	Who was involved in the adverse event or the potential adverse event
	set eventParticipant(eventParticipant) {
		this._eventParticipant = new Reference(eventParticipant);
	}

	get eventParticipant() {
		return this._eventParticipant;
	}

	// description	Σ	0..1	string	Description of the adverse event
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// subjectMedicalHistory	Σ	0..*	Reference(Condition | Observation | AllergyIntolerance | FamilyMemberHistory | Immunization | Procedure)	AdverseEvent.subjectMedicalHistory
	set subjectMedicalHistory(subjectMedicalHistory) {
		if (Array.isArray(subjectMedicalHistory)) {
			this._subjectMedicalHistory = subjectMedicalHistory.map((i) => new Reference(i));
		} else {
			this._subjectMedicalHistory = [new Reference(subjectMedicalHistory)];
		}
	}

	get subjectMedicalHistory() {
		return this._subjectMedicalHistory;
	}

	// referenceDocument	Σ	0..*	Reference(DocumentReference)	AdverseEvent.referenceDocument
	set referenceDocument(referenceDocument) {
		if (Array.isArray(referenceDocument)) {
			this._referenceDocument = referenceDocument.map((i) => new Reference(i));
		} else {
			this._referenceDocument = [new Reference(referenceDocument)];
		}
	}

	get referenceDocument() {
		return this._referenceDocument;
	}

	// study	Σ	0..*	Reference(ResearchStudy)	AdverseEvent.study
	set study(study) {
		if (Array.isArray(study)) {
			this._study = study.map((i) => new Reference(i));
		} else {
			this._study = [new Reference(study)];
		}
	}

	get study() {
		return this._study;
	}

	// suspectEntity	Σ	0..*	BackboneElement	The suspected agent causing the adverse event
	set suspectEntity(suspectEntity) {
		if (Array.isArray(suspectEntity)) {
			this._suspectEntity = suspectEntity.map((i) => new SuspectEntity(i));
		} else {
			this._suspectEntity = [new SuspectEntity(suspectEntity)];
		}
	}

	get suspectEntity() {
		return this._suspectEntity;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			category: this._category,
			type: this._type,
			subject: this._subject,
			date: this._date,
			reaction: this._reaction,
			location: this._location,
			seriousness: this._seriousness,
			outcome: this._outcome,
			recorder: this._recorder,
			eventParticipant: this._eventParticipant,
			description: this._description,
			subjectMedicalHistory: this._subjectMedicalHistory,
			referenceDocument: this._referenceDocument,
			study: this._study,
			suspectEntity: this._suspectEntity,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.AdverseEvent = AdverseEvent;
module.exports.SuspectEntity = SuspectEntity;
