const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');

class AppointmentResponse extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'AppointmentResponse';
	}

	// This is a AppointmentResponse resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['AppointmentResponse'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// This records identifiers associated with this appointment response concern that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// Appointment that this response is replying to.
	get appointment () {
		return this._appointment;
	}

	set appointment ( new_value ) {
		this._appointment = new Reference(new_value);
	}

	// Date/Time that the appointment is to take place, or requested new start time.
	get start () {
		return this._start;
	}

	set start ( new_value ) {
		this._start = new_value;
	}

	// This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the end time.
	get end () {
		return this._end;
	}

	set end ( new_value ) {
		this._end = new_value;
	}

	// Role of participant in the appointment.
	get participantType () {
		return this._participantType;
	}

	set participantType ( new_value ) {
		this._participantType = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// A Person, Location/HealthcareService or Device that is participating in the appointment.
	get actor () {
		return this._actor;
	}

	set actor ( new_value ) {
		this._actor = new Reference(new_value);
	}

	// Participation status of the participant. When the status is declined or tentative if the start/end times are different to the appointment, then these times should be interpreted as a requested time change. When the status is accepted, the times can either be the time of the appointment (as a confirmation of the time) or can be empty.
	get participantStatus () {
		return this._participantStatus;
	}

	set participantStatus ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field participantStatus`);
		}
		this._participantStatus = new_value;
	}

	// Additional comments about the appointment.
	get comment () {
		return this._comment;
	}

	set comment ( new_value ) {
		this._comment = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier,
			appointment: this._appointment,
			start: this._start,
			end: this._end,
			participantType: this._participantType,
			actor: this._actor,
			participantStatus: this._participantStatus,
			comment: this._comment
		});
	}

}

module.exports = AppointmentResponse;
