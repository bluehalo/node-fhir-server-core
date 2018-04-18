const DomainResource = require('../../base/types/DomainResource');
const Meta = require('../../base/types/Meta');
const Code = require('../../base/types/Code');
const Narrative = require('../types/Narrative');
const Resource = require('../../base/types/Resource');
const Extension = require('../../base/types/Extension');
const Identifier = require('../types/Identifier');
const Reference = require('../../base/types/Reference');
const CodeableConcept = require('../../base/types/CodeableConcept');
const Period = require('../../base/types/Period');
const Annotation = require('../../base/types/Annotation');

class FocalDevice {
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

	// modifierExtension	?!Î£	0..*	Extension	Extensions that cannot be ignored
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

	// action		0..1	CodeableConcept	Kind of change to device
	// Binding: Procedure Device Action Codes (preferred)
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
			id: this._id,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			action: this._action,
			manipulated: this._manipulated,
		};
	}
}

class Performer {
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

	// modifierExtension	?!Î£	0..*	Extension	Extensions that cannot be ignored
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

	// role	Î£	0..1	CodeableConcept	The role the actor was in
	// Binding: Procedure Performer Role Codes (example)
	set role(role) {
		this._role = new CodeableConcept(role);
	}

	get role() {
		return this._role;
	}

	// actor	Î£	1..1	Reference(Practitioner), Reference(Organization), Reference(Patient), Reference(RelatedPerson), Reference(Device)	The reference to the practitioner
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
			id: this._id,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
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

	// id	Î£	0..1	id	Logical id of this artifact
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// meta	Î£	0..1	Meta	Metadata about the resource
	set meta(meta) {
		this._meta = new Meta(meta);
	}

	get meta() {
		return this._meta;
	}

	// implicitRules	?!Î£	0..1	uri	A set of rules under which this content was created
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

	// identifier	Î£	0..*	Identifier	External Identifiers for this procedure
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

	// definition	Î£	0..*	Reference(PlanDefinition), Reference(ActivityDefinition), Reference(HealthcareService)	Instantiates protocol or definition
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

	// basedOn	Î£	0..*	Reference(CarePlan), Reference(ProcedureRequest), Reference(ReferralRequest)	A request for this procedure
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

	// partOf	Î£	0..*	Reference(Procedure), Reference(Observation), Reference(MedicationAdministration)	Part of referenced event
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

	// status	?!SÎ£	1..1	code	preparation | in-progress | suspended | aborted | completed | entered-in-error | unknown
	// Binding: EventStatus (required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// notDone	?!Î£	0..1	boolean	True if procedure was not performed as scheduled
	set notDone(notDone) {
		this._notDone = notDone;
	}

	get notDone() {
		return this._notDone;
	}

	// notDoneReason	Î£I	0..1	CodeableConcept	Reason procedure was not performed
	// Binding: Procedure Not Performed Reason (SNOMED-CT) (example)
	set notDoneReason(notDoneReason) {
		this._notDoneReason = new CodeableConcept(notDoneReason);
	}

	get notDoneReason() {
		return this._notDoneReason;
	}

	// category	Î£	0..1	CodeableConcept	Classification of the procedure
	// Binding: Procedure Category Codes (SNOMED CT) (example)
	set category(category) {
		this._category = new CodeableConcept(category);
	}

	get category() {
		return this._category;
	}

	// code	SÎ£	1..1	CodeableConcept	SNOMED-CT | ICD-10 | CPT-4
	// Binding: US Core Procedure Codes (extensible)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// subject	SÎ£	1..1	Reference(US Core Patient Profile)	Who the procedure was performed on
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// context	Î£	0..1	Reference(Encounter), Reference(EpisodeOfCare)	Encounter or episode associated with the procedure
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

	// performer	Î£I	0..*	BackboneElement	The people who performed the procedure
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

	// location	Î£	0..1	Reference(Location)	Where the procedure happened
	set location(location) {
		this._location = new Reference(location);
	}

	get location() {
		return this._location;
	}

	// reasonCode	Î£	0..*	CodeableConcept	Coded reason procedure performed
	// Binding: Procedure Reason Codes (example)
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

	// reasonReference	Î£	0..*	Reference(Condition), Reference(Observation)	Condition that is the reason the procedure performed
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

	// bodySite	Î£	0..*	CodeableConcept	Target body sites
	// Binding: SNOMED CT Body Structures (example)
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

	// outcome	Î£	0..1	CodeableConcept	The result of procedure
	// Binding: Procedure Outcome Codes (SNOMED CT) (example)
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
	// Binding: Condition/Problem/Diagnosis Codes (example)
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
	// Binding: Procedure Follow up Codes (SNOMED CT) (example)
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

	// focalDevice	I	0..*	BackboneElement	Device changed in procedure
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

	// usedReference		0..*	Reference(Device), Reference(Medication), Reference(Substance)	Items used during procedure
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
	// Binding: FHIR Device Types (example)
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
			focalDevice: this._focalDevice,
			usedReference: this._usedReference,
			usedCode: this._usedCode,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Procedure = Procedure;
module.exports.Performer = Performer;
module.exports.FocalDevice = FocalDevice;
