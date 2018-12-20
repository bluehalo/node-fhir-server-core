const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const DateScalar = require('./scalars/Date.scalar');

class Immunization extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Immunization';
		Object.assign(this, opt);
	}

	// This is a Immunization resource
	static get __resourceType() {
		return 'Immunization';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Immunization = new_value;
	}

	// A unique identifier assigned to this immunization record.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// Indicates the current status of the vaccination event.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Date vaccine administered or was to be administered.
	get date() {
		return this.__date;
	}

	set date(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this.__date = new_value;
	}

	// Vaccine that was administered or was to be administered.
	get vaccineCode() {
		return this.__vaccineCode;
	}

	set vaccineCode(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__vaccineCode = new CodeableConcept(new_value);
	}

	// The patient who either received or did not receive the immunization.
	get patient() {
		return this.__patient;
	}

	set patient(new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// Indicates if the vaccination was or was not given.
	get wasNotGiven() {
		return this.__wasNotGiven;
	}

	set wasNotGiven(new_value) {
		this.__wasNotGiven = new_value;
	}

	// True if this administration was reported rather than directly administered.
	get reported() {
		return this.__reported;
	}

	set reported(new_value) {
		this.__reported = new_value;
	}

	// Clinician who administered the vaccine.
	get performer() {
		return this.__performer;
	}

	set performer(new_value) {
		const Reference = require('./Reference');
		this.__performer = new Reference(new_value);
	}

	// Clinician who ordered the vaccination.
	get requester() {
		return this.__requester;
	}

	set requester(new_value) {
		const Reference = require('./Reference');
		this.__requester = new Reference(new_value);
	}

	// The visit or admission or other contact between patient and health care provider the immunization was performed as part of.
	get encounter() {
		return this.__encounter;
	}

	set encounter(new_value) {
		const Reference = require('./Reference');
		this.__encounter = new Reference(new_value);
	}

	// Name of vaccine manufacturer.
	get manufacturer() {
		return this.__manufacturer;
	}

	set manufacturer(new_value) {
		const Reference = require('./Reference');
		this.__manufacturer = new Reference(new_value);
	}

	// The service delivery location where the vaccine administration occurred.
	get location() {
		return this.__location;
	}

	set location(new_value) {
		const Reference = require('./Reference');
		this.__location = new Reference(new_value);
	}

	// Lot number of the  vaccine product.
	get lotNumber() {
		return this.__lotNumber;
	}

	set lotNumber(new_value) {
		this.__lotNumber = new_value;
	}

	// Date vaccine batch expires.
	get expirationDate() {
		return this.__expirationDate;
	}

	set expirationDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field expirationDate`);
		}
		this.__expirationDate = new_value;
	}

	// Body site where vaccine was administered.
	get site() {
		return this.__site;
	}

	set site(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__site = new CodeableConcept(new_value);
	}

	// The path by which the vaccine product is taken into the body.
	get route() {
		return this.__route;
	}

	set route(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__route = new CodeableConcept(new_value);
	}

	// The quantity of vaccine product that was administered.
	get doseQuantity() {
		return this.__doseQuantity;
	}

	set doseQuantity(new_value) {
		const Quantity = require('./Quantity');
		this.__doseQuantity = new Quantity(new_value);
	}

	// Extra information about the immunization that is not conveyed by the other attributes.
	get note() {
		return this.__note;
	}

	set note(new_value) {
		const Annotation = require('./Annotation');
		this.__note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// Reasons why a vaccine was or was not administered.
	get explanation() {
		return this.__explanation;
	}

	set explanation(new_value) {
		const ImmunizationExplanation = require('./ImmunizationExplanation');
		this.__explanation = new ImmunizationExplanation(new_value);
	}

	// Categorical data indicating that an adverse event is associated in time to an immunization.
	get reaction() {
		return this.__reaction;
	}

	set reaction(new_value) {
		const ImmunizationReaction = require('./ImmunizationReaction');
		this.__reaction = Array.isArray(new_value)
			? new_value.map(val => new ImmunizationReaction(val))
			: [new ImmunizationReaction(new_value)];
	}

	// Contains information about the protocol(s) under which the vaccine was administered.
	get vaccinationProtocol() {
		return this.__vaccinationProtocol;
	}

	set vaccinationProtocol(new_value) {
		const ImmunizationVaccinationProtocol = require('./ImmunizationVaccinationProtocol');
		this.__vaccinationProtocol = Array.isArray(new_value)
			? new_value.map(val => new ImmunizationVaccinationProtocol(val))
			: [new ImmunizationVaccinationProtocol(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			status: this.__status,
			date: this.__date,
			vaccineCode: this.__vaccineCode && this.__vaccineCode.toJSON(),
			patient: this.__patient && this.__patient.toJSON(),
			wasNotGiven: this.__wasNotGiven,
			reported: this.__reported,
			performer: this.__performer && this.__performer.toJSON(),
			requester: this.__requester && this.__requester.toJSON(),
			encounter: this.__encounter && this.__encounter.toJSON(),
			manufacturer: this.__manufacturer && this.__manufacturer.toJSON(),
			location: this.__location && this.__location.toJSON(),
			lotNumber: this.__lotNumber,
			expirationDate: this.__expirationDate,
			site: this.__site && this.__site.toJSON(),
			route: this.__route && this.__route.toJSON(),
			doseQuantity: this.__doseQuantity && this.__doseQuantity.toJSON(),
			note: this.__note && this.__note.map(v => v.toJSON()),
			explanation: this.__explanation && this.__explanation.toJSON(),
			reaction: this.__reaction && this.__reaction.map(v => v.toJSON()),
			vaccinationProtocol: this.__vaccinationProtocol && this.__vaccinationProtocol.map(v => v.toJSON()),
		});
	}
}

module.exports = Immunization;
