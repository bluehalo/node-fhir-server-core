const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');

class Slot extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Slot';
	}

	// This is a Slot resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Slot'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// External Ids for this item.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// A broad categorisation of the service that is to be performed during this appointment.
	get serviceCategory () {
		return this._serviceCategory;
	}

	set serviceCategory ( new_value ) {
		this._serviceCategory = new CodeableConcept(new_value);
	}

	// The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource.
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

	// The style of appointment or patient that may be booked in the slot (not service type).
	get appointmentType () {
		return this._appointmentType;
	}

	set appointmentType ( new_value ) {
		this._appointmentType = new CodeableConcept(new_value);
	}

	// The schedule resource that this slot defines an interval of status information.
	get schedule () {
		return this._schedule;
	}

	set schedule ( new_value ) {
		this._schedule = new Reference(new_value);
	}

	// busy | free | busy-unavailable | busy-tentative | entered-in-error.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['busy', 'free', 'busy-unavailable', 'busy-tentative', 'entered-in-error'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// Date/Time that the slot is to begin.
	get start () {
		return this._start;
	}

	set start ( new_value ) {
		this._start = new_value;
	}

	// Date/Time that the slot is to conclude.
	get end () {
		return this._end;
	}

	set end ( new_value ) {
		this._end = new_value;
	}

	// This slot has already been overbooked, appointments are unlikely to be accepted for this time.
	get overbooked () {
		return this._overbooked;
	}

	set overbooked ( new_value ) {
		this._overbooked = new_value;
	}

	// Comments on the slot to describe any extended information. Such as custom constraints on the slot.
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
			serviceCategory: this._serviceCategory,
			serviceType: this._serviceType,
			specialty: this._specialty,
			appointmentType: this._appointmentType,
			schedule: this._schedule,
			status: this._status,
			start: this._start,
			end: this._end,
			overbooked: this._overbooked,
			comment: this._comment
		});
	}

}

module.exports = Slot;
