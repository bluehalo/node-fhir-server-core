const BackboneElement = require('./BackboneElement');

class MedicationAdministrationDosage extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MedicationAdministrationDosage';
		Object.assign(this, opt);
	}

	// This is a MedicationAdministrationDosage resource
	static get __resourceType() {
		return 'MedicationAdministrationDosage';
	}

	// Free text dosage can be used for cases where the dosage administered is too complex to code. When coded dosage is present, the free text dosage may still be present for display to humans.  The dosage instructions should reflect the dosage of the medication that was administered.
	get text() {
		return this.__text;
	}

	set text(new_value) {
		this.__text = new_value;
	}

	// A coded specification of the anatomic site where the medication first entered the body.  For example, \'left arm\'.
	get site() {
		return this.__site;
	}

	set site(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__site = new CodeableConcept(new_value);
	}

	// A code specifying the route or physiological path of administration of a therapeutic agent into or onto the patient.  For example, topical, intravenous, etc.
	get route() {
		return this.__route;
	}

	set route(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__route = new CodeableConcept(new_value);
	}

	// A coded value indicating the method by which the medication is intended to be or was introduced into or on the body.  This attribute will most often NOT be populated.  It is most commonly used for injections.  For example, Slow Push, Deep IV.
	get method() {
		return this.__method;
	}

	set method(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__method = new CodeableConcept(new_value);
	}

	// The amount of the medication given at one administration event.   Use this value when the administration is essentially an instantaneous event such as a swallowing a tablet or giving an injection.
	get dose() {
		return this.__dose;
	}

	set dose(new_value) {
		const Quantity = require('./Quantity');
		this.__dose = new Quantity(new_value);
	}

	// Identifies the speed with which the medication was or will be introduced into the patient.  Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.  Other examples:  200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.
	get rateRatio() {
		return this.__rateRatio;
	}

	set rateRatio(new_value) {
		const Ratio = require('./Ratio');
		this.__rateRatio = new Ratio(new_value);
	}

	// Identifies the speed with which the medication was or will be introduced into the patient.  Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.  Other examples:  200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.
	get rateQuantity() {
		return this.__rateQuantity;
	}

	set rateQuantity(new_value) {
		const Quantity = require('./Quantity');
		this.__rateQuantity = new Quantity(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			text: this.__text,
			site: this.__site && this.__site.toJSON(),
			route: this.__route && this.__route.toJSON(),
			method: this.__method && this.__method.toJSON(),
			dose: this.__dose && this.__dose.toJSON(),
			rateRatio: this.__rateRatio && this.__rateRatio.toJSON(),
			rateQuantity: this.__rateQuantity && this.__rateQuantity.toJSON(),
		});
	}
}

module.exports = MedicationAdministrationDosage;
