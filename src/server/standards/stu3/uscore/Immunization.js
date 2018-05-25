const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Quantity = require('./Quantity');
const Immunization_Practitioner = require('./Immunization_Practitioner');
const Annotation = require('./Annotation');
const Immunization_Explanation = require('./Immunization_Explanation');
const Immunization_Reaction = require('./Immunization_Reaction');
const Immunization_VaccinationProtocol = require('./Immunization_VaccinationProtocol');

class Immunization extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Immunization';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Immunization';
	}

	// This is a Immunization resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value is not in the allowed values
		let allowed_values = ['Immunization'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// A unique identifier assigned to this immunization record.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// Indicates the current status of the vaccination event.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field status`);
		}
		this._status = new_value;
	}

	// Indicates if the vaccination was or was not given.
	get notGiven () {
		return this._notGiven;
	}

	set notGiven ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._notGiven = new_value;
	}

	// Vaccine that was administered or was to be administered.
	get vaccineCode () {
		return this._vaccineCode;
	}

	set vaccineCode ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._vaccineCode = new CodeableConcept(new_value);
	}

	// The patient who either received or did not receive the immunization.
	get patient () {
		return this._patient;
	}

	set patient ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._patient = new Reference(new_value);
	}

	// The visit or admission or other contact between patient and health care provider the immunization was performed as part of.
	get encounter () {
		return this._encounter;
	}

	set encounter ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._encounter = new Reference(new_value);
	}

	// Date vaccine administered or was to be administered.
	get date () {
		return this._date;
	}

	set date ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this._date = new_value;
	}

	// An indication that the content of the record is based on information from the person who administered the vaccine. This reflects the context under which the data was originally recorded.
	get primarySource () {
		return this._primarySource;
	}

	set primarySource ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._primarySource = new_value;
	}

	// The source of the data when the report of the immunization event is not based on information from the person who administered the vaccine.
	get reportOrigin () {
		return this._reportOrigin;
	}

	set reportOrigin ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._reportOrigin = new CodeableConcept(new_value);
	}

	// The service delivery location where the vaccine administration occurred.
	get location () {
		return this._location;
	}

	set location ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._location = new Reference(new_value);
	}

	// Name of vaccine manufacturer.
	get manufacturer () {
		return this._manufacturer;
	}

	set manufacturer ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._manufacturer = new Reference(new_value);
	}

	// Lot number of the  vaccine product.
	get lotNumber () {
		return this._lotNumber;
	}

	set lotNumber ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._lotNumber = new_value;
	}

	// Date vaccine batch expires.
	get expirationDate () {
		return this._expirationDate;
	}

	set expirationDate ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field expirationDate`);
		}
		this._expirationDate = new_value;
	}

	// Body site where vaccine was administered.
	get site () {
		return this._site;
	}

	set site ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._site = new CodeableConcept(new_value);
	}

	// The path by which the vaccine product is taken into the body.
	get route () {
		return this._route;
	}

	set route ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._route = new CodeableConcept(new_value);
	}

	// The quantity of vaccine product that was administered.
	get doseQuantity () {
		return this._doseQuantity;
	}

	set doseQuantity ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._doseQuantity = new Quantity(new_value);
	}

	// Indicates who or what performed the event.
	get practitioner () {
		return this._practitioner;
	}

	set practitioner ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._practitioner = Array.isArray(new_value) ? new_value.map(val => new Immunization_Practitioner(val)) : [new Immunization_Practitioner(new_value)];
	}

	// Extra information about the immunization that is not conveyed by the other attributes.
	get note () {
		return this._note;
	}

	set note ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._note = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// Reasons why a vaccine was or was not administered.
	get explanation () {
		return this._explanation;
	}

	set explanation ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._explanation = new Immunization_Explanation(new_value);
	}

	// Categorical data indicating that an adverse event is associated in time to an immunization.
	get reaction () {
		return this._reaction;
	}

	set reaction ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._reaction = Array.isArray(new_value) ? new_value.map(val => new Immunization_Reaction(val)) : [new Immunization_Reaction(new_value)];
	}

	// Contains information about the protocol(s) under which the vaccine was administered.
	get vaccinationProtocol () {
		return this._vaccinationProtocol;
	}

	set vaccinationProtocol ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._vaccinationProtocol = Array.isArray(new_value) ? new_value.map(val => new Immunization_VaccinationProtocol(val)) : [new Immunization_VaccinationProtocol(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this.resourceType,
			identifier: this.identifier.map(v => v.toJSON()),
			status: this.status,
			notGiven: this.notGiven,
			vaccineCode: this.vaccineCode && this.vaccineCode.toJSON(),
			patient: this.patient && this.patient.toJSON(),
			encounter: this.encounter && this.encounter.toJSON(),
			date: this.date,
			primarySource: this.primarySource,
			reportOrigin: this.reportOrigin && this.reportOrigin.toJSON(),
			location: this.location && this.location.toJSON(),
			manufacturer: this.manufacturer && this.manufacturer.toJSON(),
			lotNumber: this.lotNumber,
			expirationDate: this.expirationDate,
			site: this.site && this.site.toJSON(),
			route: this.route && this.route.toJSON(),
			doseQuantity: this.doseQuantity && this.doseQuantity.toJSON(),
			practitioner: this.practitioner.map(v => v.toJSON()),
			note: this.note.map(v => v.toJSON()),
			explanation: this.explanation && this.explanation.toJSON(),
			reaction: this.reaction.map(v => v.toJSON()),
			vaccinationProtocol: this.vaccinationProtocol.map(v => v.toJSON())
		});
	}

}

module.exports = Immunization;
