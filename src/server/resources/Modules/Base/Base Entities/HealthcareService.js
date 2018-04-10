const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Reference = require('./types/Reference');
const CodeableConcept = require('./types/CodeableConcept');
const Attachment = require('./types/Attachment');
const ContactPoint = require('./types/ContactPoint');
const Code = require('./types/Code');
const Period = require('./types/Period');

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

class HealthcareService extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'HealthcareService';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	External identifiers for this item
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

	// active	?!Σ	0..1	boolean	Whether this healthcareservice is in active use
	set active(active) {
		this._active = active;
	}

	get active() {
		return this._active;
	}

	// providedBy	Σ	0..1	Reference(Organization)	Organization that provides this service
	set providedBy(providedBy) {
		this._providedBy = new Reference(providedBy);
	}

	get providedBy() {
		return this._providedBy;
	}

	// category	Σ	0..1	CodeableConcept	Broad category of service being performed or delivered
	// ServiceCategory (Example)
	set category(category) {
		this._category = new CodeableConcept(category);
	}

	get category() {
		return this._category;
	}

	// type	Σ	0..*	CodeableConcept	Type of service that may be delivered or performed
	// ServiceType (Example)
	set type(type) {
		if (Array.isArray(type)) {
			this._type = type.map((i) => new CodeableConcept(i));
		} else {
			this._type = [new CodeableConcept(type)];
		}
	}

	get type() {
		return this._type;
	}

	// specialty	Σ	0..*	CodeableConcept	Specialties handled by the HealthcareService
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

	// location	Σ	0..*	Reference(Location)	Location(s) where service may be provided
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

	// name	Σ	0..1	string	Description of service as presented to a consumer while searching
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// comment	Σ	0..1	string	Additional description and/or any specific issues not covered elsewhere
	set comment(comment) {
		this._comment = comment;
	}

	get comment() {
		return this._comment;
	}

	// extraDetails		0..1	string	Extra details about the service that can't be placed in the other fields
	set extraDetails(extraDetails) {
		this._extraDetails = extraDetails;
	}

	get extraDetails() {
		return this._extraDetails;
	}

	// photo	Σ	0..1	Attachment	Facilitates quick identification of the service
	set photo(photo) {
		this._photo = new Attachment(photo);
	}

	get photo() {
		return this._photo;
	}

	// telecom		0..*	ContactPoint	Contacts related to the healthcare service
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

	// coverageArea		0..*	Reference(Location)	Location(s) service is inteded for/available to
	set coverageArea(coverageArea) {
		if (Array.isArray(coverageArea)) {
			this._coverageArea = coverageArea.map((i) => new Reference(i));
		} else {
			this._coverageArea = [new Reference(coverageArea)];
		}
	}

	get coverageArea() {
		return this._coverageArea;
	}

	// serviceProvisionCode		0..*	CodeableConcept	Conditions under which service is available/offered
	// ServiceProvisionConditions (Example)
	set serviceProvisionCode(serviceProvisionCode) {
		if (Array.isArray(serviceProvisionCode)) {
			this._serviceProvisionCode = serviceProvisionCode.map((i) => new CodeableConcept(i));
		} else {
			this._serviceProvisionCode = [new CodeableConcept(serviceProvisionCode)];
		}
	}

	get serviceProvisionCode() {
		return this._serviceProvisionCode;
	}

	// eligibility		0..1	CodeableConcept	Specific eligibility requirements required to use the service
	set eligibility(eligibility) {
		this._eligibility = new CodeableConcept(eligibility);
	}

	get eligibility() {
		return this._eligibility;
	}

	// eligibilityNote		0..1	string	Describes the eligibility conditions for the service
	set eligibilityNote(eligibilityNote) {
		this._eligibilityNote = eligibilityNote;
	}

	get eligibilityNote() {
		return this._eligibilityNote;
	}

	// programName		0..*	string	Program Names that categorize the service
	set programName(programName) {
		this._programName = [].concat(programName);
	}

	get programName() {
		return this._programName;
	}

	// characteristic		0..*	CodeableConcept	Collection of characteristics (attributes)
	set characteristic(characteristic) {
		if (Array.isArray(characteristic)) {
			this._characteristic = characteristic.map((i) => new CodeableConcept(i));
		} else {
			this._characteristic = [new CodeableConcept(characteristic)];
		}
	}

	get characteristic() {
		return this._characteristic;
	}

	// referralMethod		0..*	CodeableConcept	Ways that the service accepts referrals
	// ReferralMethod (Example)
	set referralMethod(referralMethod) {
		if (Array.isArray(referralMethod)) {
			this._referralMethod = referralMethod.map((i) => new CodeableConcept(i));
		} else {
			this._referralMethod = [new CodeableConcept(referralMethod)];
		}
	}

	get referralMethod() {
		return this._referralMethod;
	}

	// appointmentRequired		0..1	boolean	If an appointment is required for access to this service
	set appointmentRequired(appointmentRequired) {
		this._appointmentRequired = appointmentRequired;
	}

	get appointmentRequired() {
		return this._appointmentRequired;
	}

	// availabilityExceptions		0..1	string	Description of availability exceptions
	set availabilityExceptions(availabilityExceptions) {
		this._availabilityExceptions = availabilityExceptions;
	}

	get availabilityExceptions() {
		return this._availabilityExceptions;
	}

	// endpoint		0..*	Reference(Endpoint)	Technical endpoints providing access to services operated for the location
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

	toJSON() {
		const json = {
			identifier: this._identifier,
			active: this._active,
			providedBy: this._providedBy,
			category: this._category,
			type: this._type,
			specialty: this._specialty,
			location: this._location,
			name: this._name,
			comment: this._comment,
			extraDetails: this._extraDetails,
			photo: this._photo,
			telecom: this._telecom,
			coverageArea: this._coverageArea,
			serviceProvisionCode: this._serviceProvisionCode,
			eligibility: this._eligibility,
			eligibilityNote: this._eligibilityNote,
			programName: this._programName,
			characteristic: this._characteristic,
			referralMethod: this._referralMethod,
			appointmentRequired: this._appointmentRequired,
			availabilityExceptions: this._availabilityExceptions,
			endpoint: this._endpoint,
			notAvailable: this._notAvailable,
			availableTime: this._availableTime,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.HealthcareService = HealthcareService;
module.exports.AvailableTime = AvailableTime;
module.exports.NotAvailable = NotAvailable;
