const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');
const Attachment = require('./Attachment');
const ContactPoint = require('./ContactPoint');
const HealthcareService_AvailableTime = require('./HealthcareService_AvailableTime');
const HealthcareService_NotAvailable = require('./HealthcareService_NotAvailable');

class HealthcareService extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'HealthcareService';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'HealthcareService';
	}

	// This is a HealthcareService resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['HealthcareService'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// External identifiers for this item.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// Whether this healthcareservice record is in active use.
	get active () {
		return this._active;
	}

	set active ( new_value ) {
		this._active = new_value;
	}

	// The organization that provides this healthcare service.
	get providedBy () {
		return this._providedBy;
	}

	set providedBy ( new_value ) {
		this._providedBy = new Reference(new_value);
	}

	// Identifies the broad category of service being performed or delivered.
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		this._category = new CodeableConcept(new_value);
	}

	// The specific type of service that may be delivered or performed.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Collection of specialties handled by the service site. This is more of a medical term.
	get specialty () {
		return this._specialty;
	}

	set specialty ( new_value ) {
		this._specialty = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The location(s) where this healthcare service may be provided.
	get location () {
		return this._location;
	}

	set location ( new_value ) {
		this._location = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Further description of the service as it would be presented to a consumer while searching.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// Any additional description of the service and/or any specific issues not covered by the other attributes, which can be displayed as further detail under the serviceName.
	get comment () {
		return this._comment;
	}

	set comment ( new_value ) {
		this._comment = new_value;
	}

	// Extra details about the service that can't be placed in the other fields.
	get extraDetails () {
		return this._extraDetails;
	}

	set extraDetails ( new_value ) {
		this._extraDetails = new_value;
	}

	// If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list.
	get photo () {
		return this._photo;
	}

	set photo ( new_value ) {
		this._photo = new Attachment(new_value);
	}

	// List of contacts related to this specific healthcare service.
	get telecom () {
		return this._telecom;
	}

	set telecom ( new_value ) {
		this._telecom = Array.isArray(new_value) ? new_value.map(val => new ContactPoint(val)) : [new ContactPoint(new_value)];
	}

	// The location(s) that this service is available to (not where the service is provided).
	get coverageArea () {
		return this._coverageArea;
	}

	set coverageArea ( new_value ) {
		this._coverageArea = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// The code(s) that detail the conditions under which the healthcare service is available/offered.
	get serviceProvisionCode () {
		return this._serviceProvisionCode;
	}

	set serviceProvisionCode ( new_value ) {
		this._serviceProvisionCode = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Does this service have specific eligibility requirements that need to be met in order to use the service?
	get eligibility () {
		return this._eligibility;
	}

	set eligibility ( new_value ) {
		this._eligibility = new CodeableConcept(new_value);
	}

	// Describes the eligibility conditions for the service.
	get eligibilityNote () {
		return this._eligibilityNote;
	}

	set eligibilityNote ( new_value ) {
		this._eligibilityNote = new_value;
	}

	// Program Names that can be used to categorize the service.
	get programName () {
		return this._programName;
	}

	set programName ( new_value ) {
		this._programName = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Collection of characteristics (attributes).
	get characteristic () {
		return this._characteristic;
	}

	set characteristic ( new_value ) {
		this._characteristic = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required.
	get referralMethod () {
		return this._referralMethod;
	}

	set referralMethod ( new_value ) {
		this._referralMethod = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service.
	get appointmentRequired () {
		return this._appointmentRequired;
	}

	set appointmentRequired ( new_value ) {
		this._appointmentRequired = new_value;
	}

	// A collection of times that the Service Site is available.
	get availableTime () {
		return this._availableTime;
	}

	set availableTime ( new_value ) {
		this._availableTime = Array.isArray(new_value) ? new_value.map(val => new HealthcareService_AvailableTime(val)) : [new HealthcareService_AvailableTime(new_value)];
	}

	// The HealthcareService is not available during this period of time due to the provided reason.
	get notAvailable () {
		return this._notAvailable;
	}

	set notAvailable ( new_value ) {
		this._notAvailable = Array.isArray(new_value) ? new_value.map(val => new HealthcareService_NotAvailable(val)) : [new HealthcareService_NotAvailable(new_value)];
	}

	// A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
	get availabilityExceptions () {
		return this._availabilityExceptions;
	}

	set availabilityExceptions ( new_value ) {
		this._availabilityExceptions = new_value;
	}

	// Technical endpoints providing access to services operated for the specific healthcare services defined at this resource.
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
			providedBy: this._providedBy && this._providedBy.toJSON(),
			category: this._category && this._category.toJSON(),
			type: this._type && this._type.map(v => v.toJSON()),
			specialty: this._specialty && this._specialty.map(v => v.toJSON()),
			location: this._location && this._location.map(v => v.toJSON()),
			name: this._name,
			comment: this._comment,
			extraDetails: this._extraDetails,
			photo: this._photo && this._photo.toJSON(),
			telecom: this._telecom && this._telecom.map(v => v.toJSON()),
			coverageArea: this._coverageArea && this._coverageArea.map(v => v.toJSON()),
			serviceProvisionCode: this._serviceProvisionCode && this._serviceProvisionCode.map(v => v.toJSON()),
			eligibility: this._eligibility && this._eligibility.toJSON(),
			eligibilityNote: this._eligibilityNote,
			programName: this._programName,
			characteristic: this._characteristic && this._characteristic.map(v => v.toJSON()),
			referralMethod: this._referralMethod && this._referralMethod.map(v => v.toJSON()),
			appointmentRequired: this._appointmentRequired,
			availableTime: this._availableTime && this._availableTime.map(v => v.toJSON()),
			notAvailable: this._notAvailable && this._notAvailable.map(v => v.toJSON()),
			availabilityExceptions: this._availabilityExceptions,
			endpoint: this._endpoint && this._endpoint.map(v => v.toJSON())
		});
	}

}

module.exports = HealthcareService;
