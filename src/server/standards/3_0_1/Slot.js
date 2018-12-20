const DomainResource = require('./DomainResource');
const InstantScalar = require('./scalars/Instant.scalar');

class Slot extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Slot';
		Object.assign(this, opt);
	}

	// This is a Slot resource
	static get __resourceType() {
		return 'Slot';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Slot = new_value;
	}

	// External Ids for this item.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// A broad categorisation of the service that is to be performed during this appointment.
	get serviceCategory() {
		return this.__serviceCategory;
	}

	set serviceCategory(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__serviceCategory = new CodeableConcept(new_value);
	}

	// The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource.
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

	// The style of appointment or patient that may be booked in the slot (not service type).
	get appointmentType() {
		return this.__appointmentType;
	}

	set appointmentType(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__appointmentType = new CodeableConcept(new_value);
	}

	// The schedule resource that this slot defines an interval of status information.
	get schedule() {
		return this.__schedule;
	}

	set schedule(new_value) {
		const Reference = require('./Reference');
		this.__schedule = new Reference(new_value);
	}

	// busy | free | busy-unavailable | busy-tentative | entered-in-error.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Date/Time that the slot is to begin.
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

	// Date/Time that the slot is to conclude.
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

	// This slot has already been overbooked, appointments are unlikely to be accepted for this time.
	get overbooked() {
		return this.__overbooked;
	}

	set overbooked(new_value) {
		this.__overbooked = new_value;
	}

	// Comments on the slot to describe any extended information. Such as custom constraints on the slot.
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
			serviceCategory: this.__serviceCategory && this.__serviceCategory.toJSON(),
			serviceType: this.__serviceType && this.__serviceType.map(v => v.toJSON()),
			specialty: this.__specialty && this.__specialty.map(v => v.toJSON()),
			appointmentType: this.__appointmentType && this.__appointmentType.toJSON(),
			schedule: this.__schedule && this.__schedule.toJSON(),
			status: this.__status,
			start: this.__start,
			end: this.__end,
			overbooked: this.__overbooked,
			comment: this.__comment,
		});
	}
}

module.exports = Slot;
