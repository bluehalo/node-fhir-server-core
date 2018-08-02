const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Period = require('./Period');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const ContactPoint = require('./ContactPoint');
const PractitionerRole_AvailableTime = require('./PractitionerRole_AvailableTime');
const PractitionerRole_NotAvailable = require('./PractitionerRole_NotAvailable');

class PractitionerRole extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'PractitionerRole';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'PractitionerRole';
	}

	// This is a PractitionerRole resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['PractitionerRole'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// Business Identifiers that are specific to a role/location.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// Whether this practitioner's record is in active use.
	get active () {
		return this._active;
	}

	set active ( new_value ) {
		this._active = new_value;
	}

	// The period during which the person is authorized to act as a practitioner in these role(s) for the organization.
	get period () {
		return this._period;
	}

	set period ( new_value ) {
		this._period = new Period(new_value);
	}

	// Practitioner that is able to provide the defined services for the organation.
	get practitioner () {
		return this._practitioner;
	}

	set practitioner ( new_value ) {
		this._practitioner = new Reference(new_value);
	}

	// The organization where the Practitioner performs the roles associated.
	get organization () {
		return this._organization;
	}

	set organization ( new_value ) {
		this._organization = new Reference(new_value);
	}

	// Roles which this practitioner is authorized to perform for the organization.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Specific specialty of the practitioner.
	get specialty () {
		return this._specialty;
	}

	set specialty ( new_value ) {
		this._specialty = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The location(s) at which this practitioner provides care.
	get location () {
		return this._location;
	}

	set location ( new_value ) {
		this._location = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The list of healthcare services that this worker provides for this role's Organization/Location(s).
	get healthcareService () {
		return this._healthcareService;
	}

	set healthcareService ( new_value ) {
		this._healthcareService = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Contact details that are specific to the role/location/service.
	get telecom () {
		return this._telecom;
	}

	set telecom ( new_value ) {
		this._telecom = Array.isArray(new_value) ? new_value.map(val => new ContactPoint(val)) : [new ContactPoint(new_value)];
	}

	// A collection of times that the Service Site is available.
	get availableTime () {
		return this._availableTime;
	}

	set availableTime ( new_value ) {
		this._availableTime = Array.isArray(new_value) ? new_value.map(val => new PractitionerRole_AvailableTime(val)) : [new PractitionerRole_AvailableTime(new_value)];
	}

	// The HealthcareService is not available during this period of time due to the provided reason.
	get notAvailable () {
		return this._notAvailable;
	}

	set notAvailable ( new_value ) {
		this._notAvailable = Array.isArray(new_value) ? new_value.map(val => new PractitionerRole_NotAvailable(val)) : [new PractitionerRole_NotAvailable(new_value)];
	}

	// A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
	get availabilityExceptions () {
		return this._availabilityExceptions;
	}

	set availabilityExceptions ( new_value ) {
		this._availabilityExceptions = new_value;
	}

	// Technical endpoints providing access to services operated for the practitioner with this role.
	get endpoint () {
		return this._endpoint;
	}

	set endpoint ( new_value ) {
		this._endpoint = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			identifier: this._identifier && this._identifier.map(v => v.toJSON()),
			active: this._active,
			period: this._period && this._period.toJSON(),
			practitioner: this._practitioner && this._practitioner.toJSON(),
			organization: this._organization && this._organization.toJSON(),
			code: this._code && this._code.map(v => v.toJSON()),
			specialty: this._specialty && this._specialty.map(v => v.toJSON()),
			location: this._location && this._location.map(v => v.toJSON()),
			healthcareService: this._healthcareService && this._healthcareService.map(v => v.toJSON()),
			telecom: this._telecom && this._telecom.map(v => v.toJSON()),
			availableTime: this._availableTime && this._availableTime.map(v => v.toJSON()),
			notAvailable: this._notAvailable && this._notAvailable.map(v => v.toJSON()),
			availabilityExceptions: this._availabilityExceptions,
			endpoint: this._endpoint && this._endpoint.map(v => v.toJSON())
		});
	}

}

module.exports = PractitionerRole;
