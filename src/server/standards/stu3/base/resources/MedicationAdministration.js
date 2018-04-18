const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Reference = require('../types/Reference');
const Code = require('../types/Code');
const CodeableConcept = require('../types/CodeableConcept');
const Period = require('../types/Period');
const Annotation = require('../types/Annotation');
const Ratio = require('../types/Ratio');

class Performer {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// actor	Σ	1..1	Reference(Practitioner | Patient | RelatedPerson | Device)	Individual who was performing
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

class Dosage {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// text		0..1	string	Free text dosage instructions e.g. SIG
	set text(text) {
		this._text = text;
	}

	get text() {
		return this._text;
	}

	// site		0..1	CodeableConcept	Body site administered to
	// SNOMED CT Anatomical Structure for Administration Site Codes (Example)
	set site(site) {
		this._site = new CodeableConcept(site);
	}

	get site() {
		return this._site;
	}

	// route		0..1	CodeableConcept	Path of substance into body
	// SNOMED CT Route Codes (Example)
	set route(route) {
		this._route = new CodeableConcept(route);
	}

	get route() {
		return this._route;
	}

	// method		0..1	CodeableConcept	How drug was administered
	// SNOMED CT Administration Method Codes (Example)
	set method(method) {
		this._method = new CodeableConcept(method);
	}

	get method() {
		return this._method;
	}

	// dose		0..1	SimpleQuantity	Amount of medication per dose
	set dose(dose) {
		this._dose = dose;
	}

	get dose() {
		return this._dose;
	}

	// rate[x]		0..1		Dose quantity per unit of time
	// rateRatio			Ratio
	set rateRatio(rateRatio) {
		this._rateRatio = new Ratio(rateRatio);
	}

	get rateRatio() {
		return this._rateRatio;
	}

	// rateQuantity			SimpleQuantity
	set rateQuantity(rateQuantity) {
		this._rateQuantity = rateQuantity;
	}

	get rateQuantity() {
		return this._rateQuantity;
	}

	toJSON() {
		return {
			text: this._text,
			site: this._site,
			route: this._route,
			method: this._method,
			dose: this._dose,
			rateRatio: this._rateRatio,
			rateQuantity: this._rateQuantity,
		};
	}
}

class MedicationAdministration extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'MedicationAdministration';
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

	// partOf	Σ	0..*	Reference(MedicationAdministration | Procedure)	Part of referenced event
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

	// status	?!Σ	1..1	code	in-progress | on-hold | completed | entered-in-error | stopped | unknown
	// MedicationAdministrationStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// category		0..1	CodeableConcept	Type of medication usage
	// MedicationAdministrationCategory (Preferred)
	set category(category) {
		this._category = new CodeableConcept(category);
	}

	get category() {
		return this._category;
	}

	// medication[x]	Σ	1..1		What was administered
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

	// subject	Σ	1..1	Reference(Patient | Group)	Who received medication
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// context		0..1	Reference(Encounter | EpisodeOfCare)	Encounter or Episode of Care administered as part of
	set context(context) {
		this._context = new Reference(context);
	}

	get context() {
		return this._context;
	}

	// supportingInformation		0..*	Reference(Any)	Additional information to support administration
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

	// effective[x]	Σ	1..1		Start and end time of administration
	// effectiveDateTime			dateTime
	set effectiveDateTime(effectiveDateTime) {
		this._effectiveDateTime = effectiveDateTime;
	}

	get effectiveDateTime() {
		return this._effectiveDateTime;
	}

	// effectivePeriod			Period
	set effectivePeriod(effectivePeriod) {
		this._effectivePeriod = new Period(effectivePeriod);
	}

	get effectivePeriod() {
		return this._effectivePeriod;
	}

	// notGiven	?!Σ	0..1	boolean	True if medication not administered
	set notGiven(notGiven) {
		this._notGiven = notGiven;
	}

	get notGiven() {
		return this._notGiven;
	}

	// reasonNotGiven	I	0..*	CodeableConcept	Reason administration not performed
	// SNOMED CT Reason Medication Not Given Codes (Example)
	set reasonNotGiven(reasonNotGiven) {
		if (Array.isArray(reasonNotGiven)) {
			this._reasonNotGiven = reasonNotGiven.map((i) => new CodeableConcept(i));
		} else {
			this._reasonNotGiven = [new CodeableConcept(reasonNotGiven)];
		}
	}

	get reasonNotGiven() {
		return this._reasonNotGiven;
	}

	// reasonCode	I	0..*	CodeableConcept	Reason administration performed
	// Reason Medication Given Codes (Example)
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

	// reasonReference		0..*	Reference(Condition | Observation)	Condition or Observation that supports why the medication was administered
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

	// prescription		0..1	Reference(MedicationRequest)	Request administration performed against
	set prescription(prescription) {
		this._prescription = new Reference(prescription);
	}

	get prescription() {
		return this._prescription;
	}

	// device		0..*	Reference(Device)	Device used to administer
	set device(device) {
		if (Array.isArray(device)) {
			this._device = device.map((i) => new Reference(i));
		} else {
			this._device = [new Reference(device)];
		}
	}

	get device() {
		return this._device;
	}

	// note		0..*	Annotation	Information about the administration
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

	// dosage	I	0..1	BackboneElement	Details of how medication was taken
	// + SHALL have at least one of dosage.dose or dosage.rate[x]
	set dosage(dosage) {
		this._dosage = new Dosage(dosage);
	}

	get dosage() {
		return this._dosage;
	}

	// performer	Σ	0..*	BackboneElement	Who administered substance
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

	toJSON() {
		const json = {
			identifier: this._identifier,
			definition: this._definition,
			partOf: this._partOf,
			status: this._status,
			category: this._category,
			medicationCodeableConcept: this._medicationCodeableConcept,
			medicationReference: this._medicationReference,
			subject: this._subject,
			context: this._context,
			supportingInformation: this._supportingInformation,
			effectiveDateTime: this._effectiveDateTime,
			effectivePeriod: this._effectivePeriod,
			notGiven: this._notGiven,
			reasonNotGiven: this._reasonNotGiven,
			reasonCode: this._reasonCode,
			reasonReference: this._reasonReference,
			prescription: this._prescription,
			device: this._device,
			note: this._note,
			eventHistory: this._eventHistory,
			dosage: this._dosage,
			performer: this._performer,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.MedicationAdministration = MedicationAdministration;
module.exports.Dosage = Dosage;
module.exports.Performer = Performer;
