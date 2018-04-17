const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const CodeableConcept = require('../types/CodeableConcept');
const Reference = require('../types/Reference');
const Period = require('../types/Period');

class Schedule extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Schedule';
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

	// active	?!Σ	0..1	boolean	Whether this schedule is in active use
	set active(active) {
		this._active = active;
	}

	get active() {
		return this._active;
	}

	// serviceCategory	Σ	0..1	CodeableConcept	A broad categorisation of the service that is to be performed during this appointment
	// ServiceCategory (Example)
	set serviceCategory(serviceCategory) {
		this._serviceCategory = new CodeableConcept(serviceCategory);
	}

	get serviceCategory() {
		return this._serviceCategory;
	}

	// serviceType	Σ	0..*	CodeableConcept	The specific service that is to be performed during this appointment
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

	// actor	Σ	1..*	Reference(Patient | Practitioner | PractitionerRole | RelatedPerson | Device | HealthcareService | Location)	The resource this Schedule resource is providing availability information for. These are expected to usually be one of HealthcareService, Location, Practitioner, PractitionerRole, Device, Patient or RelatedPerson
	set actor(actor) {
		if (Array.isArray(actor)) {
			this._actor = actor.map((i) => new Reference(i));
		} else {
			this._actor = [new Reference(actor)];
		}
	}

	get actor() {
		return this._actor;
	}

	// planningHorizon	Σ	0..1	Period	The period of time that the slots that are attached to this Schedule resource cover (even if none exist). These cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a "template" for planning outside these dates
	set planningHorizon(planningHorizon) {
		this._planningHorizon = new Period(planningHorizon);
	}

	get planningHorizon() {
		return this._planningHorizon;
	}

	// comment		0..1	string	Comments on the availability to describe any extended information. Such as custom constraints on the slots that may be associated
	set comment(comment) {
		this._comment = comment;
	}

	get comment() {
		return this._comment;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			active: this._active,
			serviceCategory: this._serviceCategory,
			serviceType: this._serviceType,
			specialty: this._specialty,
			actor: this._actor,
			planningHorizon: this._planningHorizon,
			comment: this._comment,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Schedule = Schedule;
