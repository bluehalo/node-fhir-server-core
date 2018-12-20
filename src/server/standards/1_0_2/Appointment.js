const DomainResource = require('./DomainResource');
const UnsignedIntScalar = require('./scalars/UnsignedInt.scalar');
const InstantScalar = require('./scalars/Instant.scalar');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');

class Appointment extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Appointment';
		Object.assign(this, opt);
	}

	// This is a Appointment resource
	static get __resourceType() {
		return 'Appointment';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Appointment = new_value;
	}

	// This records identifiers associated with this appointment concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// The overall status of the Appointment. Each of the participants has their own participation status which indicates their involvement in the process, however this status indicates the shared status.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// The type of appointment that is being booked (This may also be associated with participants for location, and/or a HealthcareService).
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// The reason that this appointment is being scheduled. This is more clinical than administrative.
	get reason() {
		return this.__reason;
	}

	set reason(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reason = new CodeableConcept(new_value);
	}

	// The priority of the appointment. Can be used to make informed decisions if needing to re-prioritize appointments. (The iCal Standard specifies 0 as undefined, 1 as highest, 9 as lowest priority).
	get priority() {
		return this.__priority;
	}

	set priority(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UnsignedIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field priority`);
		}
		this.__priority = new_value;
	}

	// The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list. Detailed or expanded information should be put in the comment field.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Date/Time that the appointment is to take place.
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

	// Date/Time that the appointment is to conclude.
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

	// Number of minutes that the appointment is to take. This can be less than the duration between the start and end times (where actual time of appointment is only an estimate or is a planned appointment request).
	get minutesDuration() {
		return this.__minutesDuration;
	}

	set minutesDuration(new_value) {
		// Throw if new value does not match the pattern
		let pattern = PositiveIntScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field minutesDuration`);
		}
		this.__minutesDuration = new_value;
	}

	// The slot that this appointment is filling. If provided then the schedule will not be provided as slots are not recursive, and the start/end values MUST be the same as from the slot.
	get slot() {
		return this.__slot;
	}

	set slot(new_value) {
		const Reference = require('./Reference');
		this.__slot = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Additional comments about the appointment.
	get comment() {
		return this.__comment;
	}

	set comment(new_value) {
		this.__comment = new_value;
	}

	// List of participants involved in the appointment.
	get participant() {
		return this.__participant;
	}

	set participant(new_value) {
		const AppointmentParticipant = require('./AppointmentParticipant');
		this.__participant = Array.isArray(new_value)
			? new_value.map(val => new AppointmentParticipant(val))
			: [new AppointmentParticipant(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			status: this.__status,
			type: this.__type && this.__type.toJSON(),
			reason: this.__reason && this.__reason.toJSON(),
			priority: this.__priority,
			description: this.__description,
			start: this.__start,
			end: this.__end,
			minutesDuration: this.__minutesDuration,
			slot: this.__slot && this.__slot.map(v => v.toJSON()),
			comment: this.__comment,
			participant: this.__participant && this.__participant.map(v => v.toJSON()),
		});
	}
}

module.exports = Appointment;
