const DomainResource = require('./DomainResource');

class Schedule extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Schedule';
		Object.assign(this, opt);
	}

	// This is a Schedule resource
	static get __resourceType() {
		return 'Schedule';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Schedule = new_value;
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

	// Whether this schedule record is in active use, or should not be used (such as was entered in error).
	get active() {
		return this.__active;
	}

	set active(new_value) {
		this.__active = new_value;
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

	// The resource this Schedule resource is providing availability information for. These are expected to usually be one of HealthcareService, Location, Practitioner, PractitionerRole, Device, Patient or RelatedPerson.
	get actor() {
		return this.__actor;
	}

	set actor(new_value) {
		const Reference = require('./Reference');
		this.__actor = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The period of time that the slots that are attached to this Schedule resource cover (even if none exist). These  cover the amount of time that an organization\'s planning horizon; the interval for which they are currently accepting appointments. This does not define a \'template\' for planning outside these dates.
	get planningHorizon() {
		return this.__planningHorizon;
	}

	set planningHorizon(new_value) {
		const Period = require('./Period');
		this.__planningHorizon = new Period(new_value);
	}

	// Comments on the availability to describe any extended information. Such as custom constraints on the slots that may be associated.
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
			active: this.__active,
			serviceCategory: this.__serviceCategory && this.__serviceCategory.toJSON(),
			serviceType: this.__serviceType && this.__serviceType.map(v => v.toJSON()),
			specialty: this.__specialty && this.__specialty.map(v => v.toJSON()),
			actor: this.__actor && this.__actor.map(v => v.toJSON()),
			planningHorizon: this.__planningHorizon && this.__planningHorizon.toJSON(),
			comment: this.__comment,
		});
	}
}

module.exports = Schedule;
