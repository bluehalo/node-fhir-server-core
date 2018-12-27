const DomainResource = require('./DomainResource');
const UnsignedIntScalar = require('./scalars/UnsignedInt.scalar');
const InstantScalar = require('./scalars/Instant.scalar');
const PositiveIntScalar = require('./scalars/PositiveInt.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');

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

	// A broad categorisation of the service that is to be performed during this appointment.
	get serviceCategory() {
		return this.__serviceCategory;
	}

	set serviceCategory(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__serviceCategory = new CodeableConcept(new_value);
	}

	// The specific service that is to be performed during this appointment.
	get serviceType() {
		return this.__serviceType;
	}

	set serviceType(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__serviceType = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// The specialty of a practitioner that would be required to perform the service requested in this appointment.
	get specialty() {
		return this.__specialty;
	}

	set specialty(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__specialty = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// The style of appointment or patient that has been booked in the slot (not service type).
	get appointmentType() {
		return this.__appointmentType;
	}

	set appointmentType(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__appointmentType = new CodeableConcept(new_value);
	}

	// The reason that this appointment is being scheduled. This is more clinical than administrative.
	get reason() {
		return this.__reason;
	}

	set reason(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reason = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Reason the appointment has been scheduled to take place, as specified using information from another resource. When the patient arrives and the encounter begins it may be used as the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.
	get indication() {
		return this.__indication;
	}

	set indication(new_value) {
		const Reference = require('./Reference');
		this.__indication = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
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

	// Additional information to support the appointment provided when making the appointment.
	get supportingInformation() {
		return this.__supportingInformation;
	}

	set supportingInformation(new_value) {
		const Reference = require('./Reference');
		this.__supportingInformation = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
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

	// The slots from the participants\' schedules that will be filled by the appointment.
	get slot() {
		return this.__slot;
	}

	set slot(new_value) {
		const Reference = require('./Reference');
		this.__slot = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The date that this appointment was initially created. This could be different to the meta.lastModified value on the initial entry, as this could have been before the resource was created on the FHIR server, and should remain unchanged over the lifespan of the appointment.
	get created() {
		return this.__created;
	}

	set created(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field created`);
		}
		this.__created = new_value;
	}

	// Additional comments about the appointment.
	get comment() {
		return this.__comment;
	}

	set comment(new_value) {
		this.__comment = new_value;
	}

	// The referral request this appointment is allocated to assess (incoming referral).
	get incomingReferral() {
		return this.__incomingReferral;
	}

	set incomingReferral(new_value) {
		const Reference = require('./Reference');
		this.__incomingReferral = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
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

	// A set of date ranges (potentially including times) that the appointment is preferred to be scheduled within. When using these values, the minutes duration should be provided to indicate the length of the appointment to fill and populate the start/end times for the actual allocated time.
	get requestedPeriod() {
		return this.__requestedPeriod;
	}

	set requestedPeriod(new_value) {
		const Period = require('./Period');
		this.__requestedPeriod = Array.isArray(new_value) ? new_value.map(val => new Period(val)) : [new Period(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			status: this.__status,
			serviceCategory: this.__serviceCategory && this.__serviceCategory.toJSON(),
			serviceType: this.__serviceType && this.__serviceType.map(v => v.toJSON()),
			specialty: this.__specialty && this.__specialty.map(v => v.toJSON()),
			appointmentType: this.__appointmentType && this.__appointmentType.toJSON(),
			reason: this.__reason && this.__reason.map(v => v.toJSON()),
			indication: this.__indication && this.__indication.map(v => v.toJSON()),
			priority: this.__priority,
			description: this.__description,
			supportingInformation: this.__supportingInformation && this.__supportingInformation.map(v => v.toJSON()),
			start: this.__start,
			end: this.__end,
			minutesDuration: this.__minutesDuration,
			slot: this.__slot && this.__slot.map(v => v.toJSON()),
			created: this.__created,
			comment: this.__comment,
			incomingReferral: this.__incomingReferral && this.__incomingReferral.map(v => v.toJSON()),
			participant: this.__participant && this.__participant.map(v => v.toJSON()),
			requestedPeriod: this.__requestedPeriod && this.__requestedPeriod.map(v => v.toJSON()),
		});
	}
}

module.exports = Appointment;
