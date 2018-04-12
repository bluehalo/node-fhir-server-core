const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Reference = require('./types/Reference');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Period = require('./types/Period');
const Annotation = require('./types/Annotation');

class FocalDevice {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// action		0..1	CodeableConcept	Kind of change to device
	// Procedure Device Action Codes (Preferred)
	set action(action) {
		this._action = new CodeableConcept(action);
	}

	get action() {
		return this._action;
	}

	// manipulated		1..1	Reference(Device)	Device that was changed
	set manipulated(manipulated) {
		this._manipulated = new Reference(manipulated);
	}

	get manipulated() {
		return this._manipulated;
	}

	toJSON() {
		return {
			action: this._action,
			manipulated: this._manipulated,
		};
	}
}

class Performer {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// role	Σ	0..1	CodeableConcept	The role the actor was in
	// Procedure Performer Role Codes (Example)
	set role(role) {
		this._role = new CodeableConcept(role);
	}

	get role() {
		return this._role;
	}

	// actor	Σ	1..1	Reference(Practitioner | Organization | Patient | RelatedPerson | Device)	The reference to the practitioner
	set actor(actor) {
		this._actor = new Reference(actor);
	}

	get actor() {
		return this._actor;
	}

	// onBehalfOf		0..1	Reference(Organization)	Organization the device or practitioner was acting for
	set onBehalfOf(onBehalfOf) {
		this._onBehalfOf = new Reference(onBehalfOf);
	}

	get onBehalfOf() {
		return this._onBehalfOf;
	}

	toJSON() {
		return {
			role: this._role,
			actor: this._actor,
			onBehalfOf: this._onBehalfOf,
		};
	}
}

class Procedure extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Procedure';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	External Identifiers for this procedure
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

	// definition	Σ	0..*	Reference(PlanDefinition | ActivityDefinition | HealthcareService)	Instantiates protocol or definition
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

	// basedOn	Σ	0..*	Reference(CarePlan | ProcedureRequest | ReferralRequest)	A request for this procedure
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

	// partOf	Σ	0..*	Reference(Procedure | Observation | MedicationAdministration)	Part of referenced event
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

	// status	?!Σ	1..1	code	preparation | in-progress | suspended | aborted | completed | entered-in-error | unknown
	// EventStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// notDone	?!Σ	0..1	boolean	True if procedure was not performed as scheduled
	set notDone(notDone) {
		this._notDone = notDone;
	}

	get notDone() {
		return this._notDone;
	}

	// notDoneReason	ΣI	0..1	CodeableConcept	Reason procedure was not performed
	// Procedure Not Performed Reason (SNOMED-CT) (Example)
	set notDoneReason(notDoneReason) {
		this._notDoneReason = new CodeableConcept(notDoneReason);
	}

	get notDoneReason() {
		return this._notDoneReason;
	}

	// category	Σ	0..1	CodeableConcept	Classification of the procedure
	// Procedure Category Codes (SNOMED CT) (Example)
	set category(category) {
		this._category = new CodeableConcept(category);
	}

	get category() {
		return this._category;
	}

	// code	Σ	0..1	CodeableConcept	Identification of the procedure
	// Procedure Codes (SNOMED CT) (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// subject	Σ	1..1	Reference(Patient | Group)	Who the procedure was performed on
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// context	Σ	0..1	Reference(Encounter | EpisodeOfCare)	Encounter or episode associated with the procedure
	set context(context) {
		this._context = new Reference(context);
	}

	get context() {
		return this._context;
	}

	// performed[x]	Σ	0..1		Date/Period the procedure was performed
	// performedDateTime			dateTime
	set performedDateTime(performedDateTime) {
		this._performedDateTime = performedDateTime;
	}

	get performedDateTime() {
		return this._performedDateTime;
	}

	// performedPeriod			Period
	set performedPeriod(performedPeriod) {
		this._performedPeriod = new Period(performedPeriod);
	}

	get performedPeriod() {
		return this._performedPeriod;
	}

	// performer	Σ	0..*	BackboneElement	The people who performed the procedure
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

	// focalDevice		0..*	BackboneElement	Device changed in procedure
	set focalDevice(focalDevice) {
		if (Array.isArray(focalDevice)) {
			this._focalDevice = focalDevice.map((i) => new FocalDevice(i));
		} else {
			this._focalDevice = [new FocalDevice(focalDevice)];
		}
	}

	get focalDevice() {
		return this._focalDevice;
	}

	// location	Σ	0..1	Reference(Location)	Where the procedure happened
	set location(location) {
		this._location = new Reference(location);
	}

	get location() {
		return this._location;
	}

	// reasonCode	Σ	0..*	CodeableConcept	Coded reason procedure performed
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

	// reasonReference	Σ	0..*	Reference(Condition | Observation)	Condition that is the reason the procedure performed
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

	// bodySite	Σ	0..*	CodeableConcept	Target body sites
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

	// outcome	Σ	0..1	CodeableConcept	The result of procedure
	// Procedure Outcome Codes (SNOMED CT) (Example)
	set outcome(outcome) {
		this._outcome = new CodeableConcept(outcome);
	}

	get outcome() {
		return this._outcome;
	}

	// report		0..*	Reference(DiagnosticReport)	Any report resulting from the procedure
	set report(report) {
		if (Array.isArray(report)) {
			this._report = report.map((i) => new Reference(i));
		} else {
			this._report = [new Reference(report)];
		}
	}

	get report() {
		return this._report;
	}

	// complication		0..*	CodeableConcept	Complication following the procedure
	// Condition/Problem/Diagnosis Codes (Example)
	set complication(complication) {
		if (Array.isArray(complication)) {
			this._complication = complication.map((i) => new CodeableConcept(i));
		} else {
			this._complication = [new CodeableConcept(complication)];
		}
	}

	get complication() {
		return this._complication;
	}

	// complicationDetail		0..*	Reference(Condition)	A condition that is a result of the procedure
	set complicationDetail(complicationDetail) {
		if (Array.isArray(complicationDetail)) {
			this._complicationDetail = complicationDetail.map((i) => new Reference(i));
		} else {
			this._complicationDetail = [new Reference(complicationDetail)];
		}
	}

	get complicationDetail() {
		return this._complicationDetail;
	}

	// followUp		0..*	CodeableConcept	Instructions for follow up
	// Procedure Follow up Codes (SNOMED CT) (Example)
	set followUp(followUp) {
		if (Array.isArray(followUp)) {
			this._followUp = followUp.map((i) => new CodeableConcept(i));
		} else {
			this._followUp = [new CodeableConcept(followUp)];
		}
	}

	get followUp() {
		return this._followUp;
	}

	// note		0..*	Annotation	Additional information about the procedure
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

	// usedReference		0..*	Reference(Device | Medication | Substance)	Items used during procedure
	set usedReference(usedReference) {
		if (Array.isArray(usedReference)) {
			this._usedReference = usedReference.map((i) => new Reference(i));
		} else {
			this._usedReference = [new Reference(usedReference)];
		}
	}

	get usedReference() {
		return this._usedReference;
	}

	// usedCode		0..*	CodeableConcept	Coded items used during the procedure
	// FHIR Device Types (Example)
	set usedCode(usedCode) {
		if (Array.isArray(usedCode)) {
			this._usedCode = usedCode.map((i) => new CodeableConcept(i));
		} else {
			this._usedCode = [new CodeableConcept(usedCode)];
		}
	}

	get usedCode() {
		return this._usedCode;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			definition: this._definition,
			basedOn: this._basedOn,
			partOf: this._partOf,
			status: this._status,
			notDone: this._notDone,
			notDoneReason: this._notDoneReason,
			category: this._category,
			code: this._code,
			subject: this._subject,
			context: this._context,
			performedDateTime: this._performedDateTime,
			performedPeriod: this._performedPeriod,
			performer: this._performer,
			focalDevice: this._focalDevice,
			location: this._location,
			reasonCode: this._reasonCode,
			reasonReference: this._reasonReference,
			bodySite: this._bodySite,
			outcome: this._outcome,
			report: this._report,
			complication: this._complication,
			complicationDetail: this._complicationDetail,
			followUp: this._followUp,
			note: this._note,
			usedReference: this._usedReference,
			usedCode: this._usedCode,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Procedure = Procedure;
module.exports.Performer = Performer;
module.exports.FocalDevice = FocalDevice;
