const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Appointment_Participant = require('./Appointment_Participant');
const Period = require('./Period');

class Appointment extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Appointment';
	}

	// This is a Appointment resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Appointment'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// This records identifiers associated with this appointment concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// The overall status of the Appointment. Each of the participants has their own participation status which indicates their involvement in the process, however this status indicates the shared status.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['proposed', 'pending', 'booked', 'arrived', 'fulfilled', 'cancelled', 'noshow', 'entered-in-error'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// A broad categorisation of the service that is to be performed during this appointment.
	get serviceCategory () {
		return this._serviceCategory;
	}

	set serviceCategory ( new_value ) {
		this._serviceCategory = new CodeableConcept(new_value);
	}

	// The specific service that is to be performed during this appointment.
	get serviceType () {
		return this._serviceType;
	}

	set serviceType ( new_value ) {
		this._serviceType = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The specialty of a practitioner that would be required to perform the service requested in this appointment.
	get specialty () {
		return this._specialty;
	}

	set specialty ( new_value ) {
		this._specialty = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The style of appointment or patient that has been booked in the slot (not service type).
	get appointmentType () {
		return this._appointmentType;
	}

	set appointmentType ( new_value ) {
		this._appointmentType = new CodeableConcept(new_value);
	}

	// The reason that this appointment is being scheduled. This is more clinical than administrative.
	get reason () {
		return this._reason;
	}

	set reason ( new_value ) {
		this._reason = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Reason the appointment has been scheduled to take place, as specified using information from another resource. When the patient arrives and the encounter begins it may be used as the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.
	get indication () {
		return this._indication;
	}

	set indication ( new_value ) {
		this._indication = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The priority of the appointment. Can be used to make informed decisions if needing to re-prioritize appointments. (The iCal Standard specifies 0 as undefined, 1 as highest, 9 as lowest priority).
	get priority () {
		return this._priority;
	}

	set priority ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[0]|([1-9][0-9]*)/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field priority`);
		}
		this._priority = new_value;
	}

	// The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list. Detailed or expanded information should be put in the comment field.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// Additional information to support the appointment provided when making the appointment.
	get supportingInformation () {
		return this._supportingInformation;
	}

	set supportingInformation ( new_value ) {
		this._supportingInformation = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Date/Time that the appointment is to take place.
	get start () {
		return this._start;
	}

	set start ( new_value ) {
		this._start = new_value;
	}

	// Date/Time that the appointment is to conclude.
	get end () {
		return this._end;
	}

	set end ( new_value ) {
		this._end = new_value;
	}

	// Number of minutes that the appointment is to take. This can be less than the duration between the start and end times (where actual time of appointment is only an estimate or is a planned appointment request).
	get minutesDuration () {
		return this._minutesDuration;
	}

	set minutesDuration ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[1-9][0-9]*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field minutesDuration`);
		}
		this._minutesDuration = new_value;
	}

	// The slots from the participants' schedules that will be filled by the appointment.
	get slot () {
		return this._slot;
	}

	set slot ( new_value ) {
		this._slot = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The date that this appointment was initially created. This could be different to the meta.lastModified value on the initial entry, as this could have been before the resource was created on the FHIR server, and should remain unchanged over the lifespan of the appointment.
	get created () {
		return this._created;
	}

	set created ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field created`);
		}
		this._created = new_value;
	}

	// Additional comments about the appointment.
	get comment () {
		return this._comment;
	}

	set comment ( new_value ) {
		this._comment = new_value;
	}

	// The referral request this appointment is allocated to assess (incoming referral).
	get incomingReferral () {
		return this._incomingReferral;
	}

	set incomingReferral ( new_value ) {
		this._incomingReferral = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// List of participants involved in the appointment.
	get participant () {
		return this._participant;
	}

	set participant ( new_value ) {
		this._participant = Array.isArray(new_value) ? new_value.map(val => new Appointment_Participant(val)) : [new Appointment_Participant(new_value)];
	}

	// A set of date ranges (potentially including times) that the appointment is preferred to be scheduled within. When using these values, the minutes duration should be provided to indicate the length of the appointment to fill and populate the start/end times for the actual allocated time.
	get requestedPeriod () {
		return this._requestedPeriod;
	}

	set requestedPeriod ( new_value ) {
		this._requestedPeriod = Array.isArray(new_value) ? new_value.map(val => new Period(val)) : [new Period(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
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
			requestedPeriod: this._requestedPeriod
		});
	}

}

module.exports = Appointment;
