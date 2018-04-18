const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Reference = require('../types/Reference');
const CodeableConcept = require('../types/CodeableConcept');
const Code = require('../types/Code');

class AppointmentResponse extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'AppointmentResponse';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	External Ids for this item
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

	// appointment	Σ	1..1	Reference(Appointment)	Appointment this response relates to
	set appointment(appointment) {
		this._appointment = new Reference(appointment);
	}

	get appointment() {
		return this._appointment;
	}

	// start		0..1	instant	Time from appointment, or requested new start time
	set start(start) {
		this._start = start;
	}

	get start() {
		return this._start;
	}

	// end		0..1	instant	Time from appointment, or requested new end time
	set end(end) {
		this._end = end;
	}

	get end() {
		return this._end;
	}

	// participantType	Σ	0..*	CodeableConcept	Role of participant in the appointment
	// ParticipantType (Extensible)
	set participantType(participantType) {
		if (Array.isArray(participantType)) {
			this._participantType = participantType.map((i) => new CodeableConcept(i));
		} else {
			this._participantType = [new CodeableConcept(participantType)];
		}
	}

	get participantType() {
		return this._participantType;
	}

	// actor	Σ	0..1	Reference(Patient | Practitioner | RelatedPerson | Device | HealthcareService | Location)	Person, Location/HealthcareService or Device
	set actor(actor) {
		this._actor = new Reference(actor);
	}

	get actor() {
		return this._actor;
	}

	// participantStatus	?!Σ	1..1	code	accepted | declined | tentative | in-process | completed | needs-action | entered-in-error
	// ParticipationStatus (Required)
	set participantStatus(participantStatus) {
		this._participantStatus = new Code(participantStatus);
	}

	get participantStatus() {
		return this._participantStatus;
	}

	// comment		0..1	string	Additional comments
	set comment(comment) {
		this._comment = comment;
	}

	get comment() {
		return this._comment;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			appointment: this._appointment,
			start: this._start,
			end: this._end,
			participantType: this._participantType,
			actor: this._actor,
			participantStatus: this._participantStatus,
			comment: this._comment,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.AppointmentResponse = AppointmentResponse;
