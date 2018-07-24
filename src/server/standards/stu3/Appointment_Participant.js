const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');

class Appointment_Participant extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Appointment_Participant';
	}

	// Role of participant in the appointment.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// A Person, Location/HealthcareService or Device that is participating in the appointment.
	get actor () {
		return this._actor;
	}

	set actor ( new_value ) {
		this._actor = new Reference(new_value);
	}

	// Is this participant required to be present at the meeting. This covers a use-case where 2 doctors need to meet to discuss the results for a specific patient, and the patient is not required to be present.
	get required () {
		return this._required;
	}

	set required ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['required', 'optional', 'information-only'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field required`);
		}
		this._required = new_value;
	}

	// Participation status of the actor.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['accepted', 'declined', 'tentative', 'needs-action'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			type: this._type,
			actor: this._actor,
			required: this._required,
			status: this._status
		});
	}

}

module.exports = Appointment_Participant;
