const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Reference = require('./types/Reference');
const Period = require('./types/Period');

class Participant {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type	Σ	0..*	CodeableConcept	Role of participant in the appointment
	// ParticipantType (Extensible)
	set type(type) {
		if (Array.isArray(type)) {
			this._type = type.map((i) => new CodeableConcept(i));
		} else {
			this._type = [new CodeableConcept(type)];
		}
	}

	get type() {
		return this._type;
	}

	// actor	Σ	0..1	Reference(Patient | Practitioner | RelatedPerson | Device | HealthcareService | Location)	Person, Location/HealthcareService or Device
	set actor(actor) {
		this._actor = new Reference(actor);
	}

	get actor() {
		return this._actor;
	}

	// required	Σ	0..1	code	required | optional | information-only
	// ParticipantRequired (Required)
	set required(required) {
		this._required = new Code(required);
	}

	get required() {
		return this._required;
	}

	// status		1..1	code	accepted | declined | tentative | needs-action
	// ParticipationStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	toJSON() {
		return {
			type: this._type,
			actor: this._actor,
			required: this._required,
			status: this._status,
		};
	}
}

class Appointment extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Appointment';
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

	// status	?!Σ	1..1	code	proposed | pending | booked | arrived | fulfilled | cancelled | noshow | entered-in-error
	// AppointmentStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// serviceCategory	Σ	0..1	CodeableConcept	A broad categorisation of the service that is to be performed during this appointment
	// ServiceCategory (Example)
	set serviceCategory(serviceCategory) {
		this._serviceCategory = new CodeableConcept(serviceCategory);
	}

	get serviceCategory() {
		return this._serviceCategory;
	}

	// serviceType	Σ	0..*	CodeableConcept	The specific service that is to be performed during this appointment
	// ServiceType (Example)
	set serviceType(serviceType) {
		if (Array.isArray(serviceType)) {
			this._serviceType = serviceType.map((i) => new CodeableConcept(i));
		} else {
			this._serviceType = [new CodeableConcept(serviceType)];
		}
	}

	get serviceType() {
		return this._serviceType;
	}

	// specialty	Σ	0..*	CodeableConcept	The specialty of a practitioner that would be required to perform the service requested in this appointment
	// Practice Setting Code Value Set (Preferred)
	set specialty(specialty) {
		if (Array.isArray(specialty)) {
			this._specialty = specialty.map((i) => new CodeableConcept(i));
		} else {
			this._specialty = [new CodeableConcept(specialty)];
		}
	}

	get specialty() {
		return this._specialty;
	}

	// appointmentType	Σ	0..1	CodeableConcept	The style of appointment or patient that has been booked in the slot (not service type)
	// v2 Appointment reason codes (Preferred)
	set appointmentType(appointmentType) {
		this._appointmentType = new CodeableConcept(appointmentType);
	}

	get appointmentType() {
		return this._appointmentType;
	}

	// reason	Σ	0..*	CodeableConcept	Reason this appointment is scheduled
	// Encounter Reason Codes (Preferred)
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

	// indication		0..*	Reference(Condition | Procedure)	Reason the appointment is to takes place (resource)
	set indication(indication) {
		if (Array.isArray(indication)) {
			this._indication = indication.map((i) => new Reference(i));
		} else {
			this._indication = [new Reference(indication)];
		}
	}

	get indication() {
		return this._indication;
	}

	// priority		0..1	unsignedInt	Used to make informed decisions if needing to re-prioritize
	set priority(priority) {
		this._priority = priority;
	}

	get priority() {
		return this._priority;
	}

	// description		0..1	string	Shown on a subject line in a meeting request, or appointment list
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// supportingInformation		0..*	Reference(Any)	Additional information to support the appointment
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

	// start	Σ	0..1	instant	When appointment is to take place
	set start(start) {
		this._start = start;
	}

	get start() {
		return this._start;
	}

	// end	Σ	0..1	instant	When appointment is to conclude
	set end(end) {
		this._end = end;
	}

	get end() {
		return this._end;
	}

	// minutesDuration		0..1	positiveInt	Can be less than start/end (e.g. estimate)
	set minutesDuration(minutesDuration) {
		this._minutesDuration = minutesDuration;
	}

	get minutesDuration() {
		return this._minutesDuration;
	}

	// slot		0..*	Reference(Slot)	The slots that this appointment is filling
	set slot(slot) {
		if (Array.isArray(slot)) {
			this._slot = slot.map((i) => new Reference(i));
		} else {
			this._slot = [new Reference(slot)];
		}
	}

	get slot() {
		return this._slot;
	}

	// created		0..1	dateTime	The date that this appointment was initially created
	set created(created) {
		this._created = created;
	}

	get created() {
		return this._created;
	}

	// comment		0..1	string	Additional comments
	set comment(comment) {
		this._comment = comment;
	}

	get comment() {
		return this._comment;
	}

	// incomingReferral		0..*	Reference(ReferralRequest)	The ReferralRequest provided as information to allocate to the Encounter
	set incomingReferral(incomingReferral) {
		if (Array.isArray(incomingReferral)) {
			this._incomingReferral = incomingReferral.map((i) => new Reference(i));
		} else {
			this._incomingReferral = [new Reference(incomingReferral)];
		}
	}

	get incomingReferral() {
		return this._incomingReferral;
	}

	// participant	I	1..*	BackboneElement	Participants involved in appointment
	// + Either the type or actor on the participant SHALL be specified
	set participant(participant) {
		if (Array.isArray(participant)) {
			this._participant = participant.map((i) => new Participant(i));
		} else {
			this._participant = [new Participant(participant)];
		}
	}

	get participant() {
		return this._participant;
	}

	// requestedPeriod		0..*	Period	Potential date/time interval(s) requested to allocate the appointment within
	set requestedPeriod(requestedPeriod) {
		if (Array.isArray(requestedPeriod)) {
			this._requestedPeriod = requestedPeriod.map((i) => new Period(i));
		} else {
			this._requestedPeriod = [new Period(requestedPeriod)];
		}
	}

	get requestedPeriod() {
		return this._requestedPeriod;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			status: this._status,
			serviceCategory: this._serviceCategory,
			serviceType: this._serviceType,
			specialty: this._specialty,
			appointmentType: this._appointmentType,
			reason: this._reason,
			indication: this._indication,
			priority: this._priority,
			description: this._description,
			supportingInformation: this._supportingInformation,
			start: this._start,
			end: this._end,
			minutesDuration: this._minutesDuration,
			slot: this._slot,
			created: this._created,
			comment: this._comment,
			incomingReferral: this._incomingReferral,
			participant: this._participant,
			requestedPeriod: this._requestedPeriod,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Appointment = Appointment;
module.exports.Participant = Participant;
