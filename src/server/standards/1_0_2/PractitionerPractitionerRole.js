const BackboneElement = require('./BackboneElement');

class PractitionerPractitionerRole extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'PractitionerPractitionerRole';
		Object.assign(this, opt);
	}

	// This is a PractitionerPractitionerRole resource
	static get __resourceType() {
		return 'PractitionerPractitionerRole';
	}

	// The organization where the Practitioner performs the roles associated.
	get managingOrganization() {
		return this.__managingOrganization;
	}

	set managingOrganization(new_value) {
		const Reference = require('./Reference');
		this.__managingOrganization = new Reference(new_value);
	}

	// Roles which this practitioner is authorized to perform for the organization.
	get role() {
		return this.__role;
	}

	set role(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__role = new CodeableConcept(new_value);
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

	// The period during which the person is authorized to act as a practitioner in these role(s) for the organization.
	get period() {
		return this.__period;
	}

	set period(new_value) {
		const Period = require('./Period');
		this.__period = new Period(new_value);
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

	toJSON() {
		return Object.assign(super.toJSON(), {
			managingOrganization: this.__managingOrganization && this.__managingOrganization.toJSON(),
			role: this.__role && this.__role.toJSON(),
			specialty: this.__specialty && this.__specialty.map(v => v.toJSON()),
			period: this.__period && this.__period.toJSON(),
			location: this.__location && this.__location.map(v => v.toJSON()),
			healthcareService: this.__healthcareService && this.__healthcareService.map(v => v.toJSON()),
		});
	}
}

module.exports = PractitionerPractitionerRole;
