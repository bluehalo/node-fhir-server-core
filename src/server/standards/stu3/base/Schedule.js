const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Period = require('./Period');

class Schedule extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Schedule';
	}

	// This is a Schedule resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Schedule'];
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

	// Whether this schedule record is in active use, or should not be used (such as was entered in error).
	get active () {
		return this._active;
	}

	set active ( new_value ) {
		this._active = new_value;
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

	// The resource this Schedule resource is providing availability information for. These are expected to usually be one of HealthcareService, Location, Practitioner, PractitionerRole, Device, Patient or RelatedPerson.
	get actor () {
		return this._actor;
	}

	set actor ( new_value ) {
		this._actor = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The period of time that the slots that are attached to this Schedule resource cover (even if none exist). These  cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a "template" for planning outside these dates.
	get planningHorizon () {
		return this._planningHorizon;
	}

	set planningHorizon ( new_value ) {
		this._planningHorizon = new Period(new_value);
	}

	// Comments on the availability to describe any extended information. Such as custom constraints on the slots that may be associated.
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
			active: this._active,
			serviceCategory: this._serviceCategory,
			serviceType: this._serviceType,
			specialty: this._specialty,
			actor: this._actor,
			planningHorizon: this._planningHorizon,
			comment: this._comment
		});
	}

}

module.exports = Schedule;
