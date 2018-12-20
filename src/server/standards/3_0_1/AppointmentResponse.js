const DomainResource = require('./DomainResource');
const InstantScalar = require('./scalars/Instant.scalar');

class AppointmentResponse extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'AppointmentResponse';
		Object.assign(this, opt);
	}

	// This is a AppointmentResponse resource
	static get __resourceType() {
		return 'AppointmentResponse';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__AppointmentResponse = new_value;
	}

	// This records identifiers associated with this appointment response concern that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// Appointment that this response is replying to.
	get appointment() {
		return this.__appointment;
	}

	set appointment(new_value) {
		const Reference = require('./Reference');
		this.__appointment = new Reference(new_value);
	}

	// Date/Time that the appointment is to take place, or requested new start time.
	get start() {
		return this.__start;
	}

	set start(new_value) {
		// Throw if new value does not match the pattern
		let pattern = InstantScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field start`);
		}
		this.__start = new_value;
	}

	// This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the end time.
	get end() {
		return this.__end;
	}

	set end(new_value) {
		// Throw if new value does not match the pattern
		let pattern = InstantScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field end`);
		}
		this.__end = new_value;
	}

	// Role of participant in the appointment.
	get participantType() {
		return this.__participantType;
	}

	set participantType(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__participantType = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// A Person, Location/HealthcareService or Device that is participating in the appointment.
	get actor() {
		return this.__actor;
	}

	set actor(new_value) {
		const Reference = require('./Reference');
		this.__actor = new Reference(new_value);
	}

	// Participation status of the participant. When the status is declined or tentative if the start/end times are different to the appointment, then these times should be interpreted as a requested time change. When the status is accepted, the times can either be the time of the appointment (as a confirmation of the time) or can be empty.
	get participantStatus() {
		return this.__participantStatus;
	}

	set participantStatus(new_value) {
		this.__participantStatus = new_value;
	}

	// Additional comments about the appointment.
	get comment() {
		return this.__comment;
	}

	set comment(new_value) {
		this.__comment = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			appointment: this.__appointment && this.__appointment.toJSON(),
			start: this.__start,
			end: this.__end,
			participantType: this.__participantType && this.__participantType.map(v => v.toJSON()),
			actor: this.__actor && this.__actor.toJSON(),
			participantStatus: this.__participantStatus,
			comment: this.__comment,
		});
	}
}

module.exports = AppointmentResponse;
