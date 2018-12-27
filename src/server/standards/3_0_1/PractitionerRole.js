const DomainResource = require('./DomainResource');

class PractitionerRole extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'PractitionerRole';
		Object.assign(this, opt);
	}

	// This is a PractitionerRole resource
	static get __resourceType() {
		return 'PractitionerRole';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__PractitionerRole = new_value;
	}

	// Business Identifiers that are specific to a role/location.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// Whether this practitioner\'s record is in active use.
	get active() {
		return this.__active;
	}

	set active(new_value) {
		this.__active = new_value;
	}

	// The period during which the person is authorized to act as a practitioner in these role(s) for the organization.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
	}

	// Practitioner that is able to provide the defined services for the organation.
	get practitioner() {
		return this.__practitioner;
	}

	set practitioner(new_value) {
		const Reference = require('./Reference');
		this.__practitioner = new Reference(new_value);
	}

	// The organization where the Practitioner performs the roles associated.
	get organization() {
		return this.__organization;
	}

	set organization(new_value) {
		const Reference = require('./Reference');
		this.__organization = new Reference(new_value);
	}

	// Roles which this practitioner is authorized to perform for the organization.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Specific specialty of the practitioner.
	get specialty() {
		return this.__specialty;
	}

	set specialty(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__specialty = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// The location(s) at which this practitioner provides care.
	get location() {
		return this.__location;
	}

	set location(new_value) {
		const Reference = require('./Reference');
		this.__location = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The list of healthcare services that this worker provides for this role\'s Organization/Location(s).
	get healthcareService() {
		return this.__healthcareService;
	}

	set healthcareService(new_value) {
		const Reference = require('./Reference');
		this.__healthcareService = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// Contact details that are specific to the role/location/service.
	get telecom() {
		return this.__telecom;
	}

	set telecom(new_value) {
		const ContactPoint = require('./ContactPoint');
		this.__telecom = Array.isArray(new_value)
			? new_value.map(val => new ContactPoint(val))
			: [new ContactPoint(new_value)];
	}

	// A collection of times that the Service Site is available.
	get availableTime() {
		return this.__availableTime;
	}

	set availableTime(new_value) {
		const PractitionerRoleAvailableTime = require('./PractitionerRoleAvailableTime');
		this.__availableTime = Array.isArray(new_value)
			? new_value.map(val => new PractitionerRoleAvailableTime(val))
			: [new PractitionerRoleAvailableTime(new_value)];
	}

	// The HealthcareService is not available during this period of time due to the provided reason.
	get notAvailable() {
		return this.__notAvailable;
	}

	set notAvailable(new_value) {
		const PractitionerRoleNotAvailable = require('./PractitionerRoleNotAvailable');
		this.__notAvailable = Array.isArray(new_value)
			? new_value.map(val => new PractitionerRoleNotAvailable(val))
			: [new PractitionerRoleNotAvailable(new_value)];
	}

	// A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
	get availabilityExceptions() {
		return this.__availabilityExceptions;
	}

	set availabilityExceptions(new_value) {
		this.__availabilityExceptions = new_value;
	}

	// Technical endpoints providing access to services operated for the practitioner with this role.
	get endpoint() {
		return this.__endpoint;
	}

	set endpoint(new_value) {
		const Reference = require('./Reference');
		this.__endpoint = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			active: this.__active,
			period: this.__period && this.__period.toJSON(),
			practitioner: this.__practitioner && this.__practitioner.toJSON(),
			organization: this.__organization && this.__organization.toJSON(),
			code: this.__code && this.__code.map(v => v.toJSON()),
			specialty: this.__specialty && this.__specialty.map(v => v.toJSON()),
			location: this.__location && this.__location.map(v => v.toJSON()),
			healthcareService: this.__healthcareService && this.__healthcareService.map(v => v.toJSON()),
			telecom: this.__telecom && this.__telecom.map(v => v.toJSON()),
			availableTime: this.__availableTime && this.__availableTime.map(v => v.toJSON()),
			notAvailable: this.__notAvailable && this.__notAvailable.map(v => v.toJSON()),
			availabilityExceptions: this.__availabilityExceptions,
			endpoint: this.__endpoint && this.__endpoint.map(v => v.toJSON()),
		});
	}
}

module.exports = PractitionerRole;
