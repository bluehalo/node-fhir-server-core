const BackboneElement = require('./BackboneElement');

class AppointmentParticipant extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'AppointmentParticipant';
		Object.assign(this, opt);
	}

	// This is a AppointmentParticipant resource
	static get __resourceType() {
		return 'AppointmentParticipant';
	}

	// Role of participant in the appointment.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = Array.isArray(new_value)
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

	// Is this participant required to be present at the meeting. This covers a use-case where 2 doctors need to meet to discuss the results for a specific patient, and the patient is not required to be present.
	get required() {
		return this.__required;
	}

	set required(new_value) {
		this.__required = new_value;
	}

	// Participation status of the actor.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			type: this.__type && this.__type.map(v => v.toJSON()),
			actor: this.__actor && this.__actor.toJSON(),
			required: this.__required,
			status: this.__status,
		});
	}
}

module.exports = AppointmentParticipant;
