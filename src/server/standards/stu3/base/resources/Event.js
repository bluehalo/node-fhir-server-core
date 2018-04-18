const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Reference = require('../types/Reference');
const Code = require('../types/Code');
const CodeableConcept = require('../types/CodeableConcept');
const Period = require('../types/Period');
const Timing = require('../types/Timing');
const Annotation = require('../types/Annotation');

class Performer {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// role	Σ	0..1	CodeableConcept	What type of performance was done
	// Procedure Performer Role Codes (Example)
	set role(role) {
		this._role = new CodeableConcept(role);
	}

	get role() {
		return this._role;
	}

	// actor	Σ	1..1	Reference(Practitioner | Organization | Patient | Device | RelatedPerson)	Individual who was performing
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
			role: this._role,
			actor: this._actor,
			onBehalfOf: this._onBehalfOf,
		};
	}
}

class Event extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Event';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	Business Identifier for event
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

	// definition	Σ	0..*	Reference(Definition)	Instantiates protocol or definition
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

	// basedOn	Σ	0..*	Reference(Request)	Fulfills plan, proposal or order
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

	// partOf	Σ	0..*	Reference(Event)	Part of referenced event
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

	// notDone	?!Σ	0..1	boolean	{{title}} did not occur
	set notDone(notDone) {
		this._notDone = notDone;
	}

	get notDone() {
		return this._notDone;
	}

	// notDoneReason	ΣI	0..1	CodeableConcept	Why {{title}} did not occur
	set notDoneReason(notDoneReason) {
		this._notDoneReason = new CodeableConcept(notDoneReason);
	}

	get notDoneReason() {
		return this._notDoneReason;
	}

	// code	Σ	0..1	CodeableConcept	What was done
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// subject	Σ	1..1	Reference(Patient | Group)	Individual service was done for/to
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// context	Σ	0..1	Reference(Encounter | EpisodeOfCare)	Encounter / Episode associated with event
	set context(context) {
		this._context = new Reference(context);
	}

	get context() {
		return this._context;
	}

	// occurrence[x]	Σ	0..1		When event occurred
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

	// reasonCode	Σ	0..*	CodeableConcept	Why was event performed?
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

	// reasonReference	Σ	0..*	Reference(Condition | Observation)	Why was event performed?
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

	// note		0..*	Annotation	Comments made about the event
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

	// performer	Σ	0..*	BackboneElement	Who performed event
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
			basedOn: this._basedOn,
			partOf: this._partOf,
			status: this._status,
			notDone: this._notDone,
			notDoneReason: this._notDoneReason,
			code: this._code,
			subject: this._subject,
			context: this._context,
			occurrenceDateTime: this._occurrenceDateTime,
			occurrencePeriod: this._occurrencePeriod,
			occurrenceTiming: this._occurrenceTiming,
			reasonCode: this._reasonCode,
			reasonReference: this._reasonReference,
			note: this._note,
			performer: this._performer,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Event = Event;
module.exports.Performer = Performer;
