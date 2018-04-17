const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Period = require('../types/Period');
const Reference = require('../types/Reference');
const CodeableConcept = require('../types/CodeableConcept');
const ContactPoint = require('../types/ContactPoint');
const Code = require('../types/Code');

class AvailableTime {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// daysOfWeek		0..*	code	mon | tue | wed | thu | fri | sat | sun
	// DaysOfWeek (Required)
	set daysOfWeek(daysOfWeek) {
		if (Array.isArray(daysOfWeek)) {
			this._daysOfWeek = daysOfWeek.map((i) => new Code(i));
		} else {
			this._daysOfWeek = [new Code(daysOfWeek)];
		}
	}

	get daysOfWeek() {
		return this._daysOfWeek;
	}

	// allDay		0..1	boolean	Always available? e.g. 24 hour service
	set allDay(allDay) {
		this._allDay = allDay;
	}

	get allDay() {
		return this._allDay;
	}

	// availableStartTime		0..1	time	Opening time of day (ignored if allDay = true)
	set availableStartTime(availableStartTime) {
		this._availableStartTime = availableStartTime;
	}

	get availableStartTime() {
		return this._availableStartTime;
	}

	// availableEndTime		0..1	time	Closing time of day (ignored if allDay = true)
	set availableEndTime(availableEndTime) {
		this._availableEndTime = availableEndTime;
	}

	get availableEndTime() {
		return this._availableEndTime;
	}

	toJSON() {
		return {
			daysOfWeek: this._daysOfWeek,
			allDay: this._allDay,
			availableStartTime: this._availableStartTime,
			availableEndTime: this._availableEndTime,
		};
	}
}

class NotAvailable {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// description		1..1	string	Reason presented to the user explaining why time not available
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// during		0..1	Period	Service not availablefrom this date
	set during(during) {
		this._during = new Period(during);
	}

	get during() {
		return this._during;
	}

	toJSON() {
		return {
			description: this._description,
			during: this._during,
		};
	}
}

class PractitionerRole extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'PractitionerRole';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	Business Identifiers that are specific to a role/location
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

	// active	Σ	0..1	boolean	Whether this practitioner's record is in active use
	set active(active) {
		this._active = active;
	}

	get active() {
		return this._active;
	}

	// period	Σ	0..1	Period	The period during which the practitioner is authorized to perform in these role(s)
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	// practitioner	Σ	0..1	Reference(Practitioner)	Practitioner that is able to provide the defined services for the organation
	set practitioner(practitioner) {
		this._practitioner = new Reference(practitioner);
	}

	get practitioner() {
		return this._practitioner;
	}

	// organization	Σ	0..1	Reference(Organization)	Organization where the roles are available
	set organization(organization) {
		this._organization = new Reference(organization);
	}

	get organization() {
		return this._organization;
	}

	// code	Σ	0..*	CodeableConcept	Roles which this practitioner may perform
	// PractitionerRole (Example)
	set code(code) {
		if (Array.isArray(code)) {
			this._code = code.map((i) => new CodeableConcept(i));
		} else {
			this._code = [new CodeableConcept(code)];
		}
	}

	get code() {
		return this._code;
	}

	// specialty	Σ	0..*	CodeableConcept	Specific specialty of the practitioner
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

	// location	Σ	0..*	Reference(Location)	The location(s) at which this practitioner provides care
	set location(location) {
		if (Array.isArray(location)) {
			this._location = location.map((i) => new Reference(i));
		} else {
			this._location = [new Reference(location)];
		}
	}

	get location() {
		return this._location;
	}

	// healthcareService		0..*	Reference(HealthcareService)	The list of healthcare services that this worker provides for this role's Organization/Location(s)
	set healthcareService(healthcareService) {
		if (Array.isArray(healthcareService)) {
			this._healthcareService = healthcareService.map((i) => new Reference(i));
		} else {
			this._healthcareService = [new Reference(healthcareService)];
		}
	}

	get healthcareService() {
		return this._healthcareService;
	}

	// telecom	Σ	0..*	ContactPoint	Contact details that are specific to the role/location/service
	set telecom(telecom) {
		if (Array.isArray(telecom)) {
			this._telecom = telecom.map((i) => new ContactPoint(i));
		} else {
			this._telecom = [new ContactPoint(telecom)];
		}
	}

	get telecom() {
		return this._telecom;
	}

	// availableTime		0..*	BackboneElement	Times the Service Site is available
	set availableTime(availableTime) {
		if (Array.isArray(availableTime)) {
			this._availableTime = availableTime.map((i) => new AvailableTime(i));
		} else {
			this._availableTime = [new AvailableTime(availableTime)];
		}
	}

	get availableTime() {
		return this._availableTime;
	}

	// notAvailable		0..*	BackboneElement	Not available during this time due to provided reason
	set notAvailable(notAvailable) {
		if (Array.isArray(notAvailable)) {
			this._notAvailable = notAvailable.map((i) => new NotAvailable(i));
		} else {
			this._notAvailable = [new NotAvailable(notAvailable)];
		}
	}

	get notAvailable() {
		return this._notAvailable;
	}

	// availabilityExceptions		0..1	string	Description of availability exceptions
	set availabilityExceptions(availabilityExceptions) {
		this._availabilityExceptions = availabilityExceptions;
	}

	get availabilityExceptions() {
		return this._availabilityExceptions;
	}

	// endpoint		0..*	Reference(Endpoint)	Technical endpoints providing access to services operated for the practitioner with this role
	set endpoint(endpoint) {
		if (Array.isArray(endpoint)) {
			this._endpoint = endpoint.map((i) => new Reference(i));
		} else {
			this._endpoint = [new Reference(endpoint)];
		}
	}

	get endpoint() {
		return this._endpoint;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			active: this._active,
			period: this._period,
			practitioner: this._practitioner,
			organization: this._organization,
			code: this._code,
			specialty: this._specialty,
			location: this._location,
			healthcareService: this._healthcareService,
			telecom: this._telecom,
			availableTime: this._availableTime,
			notAvailable: this._notAvailable,
			availabilityExceptions: this._availabilityExceptions,
			endpoint: this._endpoint,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.PractitionerRole = PractitionerRole;
module.exports.NotAvailable = NotAvailable;
module.exports.AvailableTime = AvailableTime;
