const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const CodeableConcept = require('../types/CodeableConcept');
const Reference = require('../types/Reference');
const Code = require('../types/Code');

class Slot extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Slot';
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

	// serviceCategory	Σ	0..1	CodeableConcept	A broad categorisation of the service that is to be performed during this appointment
	// ServiceCategory (Example)
	set serviceCategory(serviceCategory) {
		this._serviceCategory = new CodeableConcept(serviceCategory);
	}

	get serviceCategory() {
		return this._serviceCategory;
	}

	// serviceType	Σ	0..*	CodeableConcept	The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource
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

	// appointmentType	Σ	0..1	CodeableConcept	The style of appointment or patient that may be booked in the slot (not service type)
	// v2 Appointment reason codes (Preferred)
	set appointmentType(appointmentType) {
		this._appointmentType = new CodeableConcept(appointmentType);
	}

	get appointmentType() {
		return this._appointmentType;
	}

	// schedule	Σ	1..1	Reference(Schedule)	The schedule resource that this slot defines an interval of status information
	set schedule(schedule) {
		this._schedule = new Reference(schedule);
	}

	get schedule() {
		return this._schedule;
	}

	// status	Σ	1..1	code	busy | free | busy-unavailable | busy-tentative | entered-in-error
	// SlotStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// start	Σ	1..1	instant	Date/Time that the slot is to begin
	set start(start) {
		this._start = start;
	}

	get start() {
		return this._start;
	}

	// end	Σ	1..1	instant	Date/Time that the slot is to conclude
	set end(end) {
		this._end = end;
	}

	get end() {
		return this._end;
	}

	// overbooked		0..1	boolean	This slot has already been overbooked, appointments are unlikely to be accepted for this time
	set overbooked(overbooked) {
		this._overbooked = overbooked;
	}

	get overbooked() {
		return this._overbooked;
	}

	// comment		0..1	string	Comments on the slot to describe any extended information. Such as custom constraints on the slot
	set comment(comment) {
		this._comment = comment;
	}

	get comment() {
		return this._comment;
	}

	toJSON() {
		const json = {
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
			comment: this._comment,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Slot = Slot;
