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

	// Free text dosage instructions can be used for cases where the instructions are too complex to code. When coded instructions are present, the free text instructions may still be present for display to humans taking or administering the medication.
	get text() {
		return this.__text;
	}

	set text(new_value) {
		this.__text = new_value;
	}

	// A coded specification of the anatomic site where the medication first entered the body.  For example, \'left arm\'.
	get siteCodeableConcept() {
		return this.__siteCodeableConcept;
	}

	set siteCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__siteCodeableConcept = new CodeableConcept(new_value);
	}

	// A coded specification of the anatomic site where the medication first entered the body.  For example, \'left arm\'.
	get siteReference() {
		return this.__siteReference;
	}

	set siteReference(new_value) {
		const Reference = require('./Reference');
		this.__siteReference = new Reference(new_value);
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
	get quantity() {
		return this.__quantity;
	}

	set quantity(new_value) {
		const Quantity = require('./Quantity');
		this.__quantity = new Quantity(new_value);
	}

	// Identifies the speed with which the medication was or will be introduced into the patient.  Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.  Currently we do not specify a default of \'1\' in the denominator, but this is being discussed.  Other examples:  200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.
	get rateRatio() {
		return this.__rateRatio;
	}

	set rateRatio(new_value) {
		const Ratio = require('./Ratio');
		this.__rateRatio = new Ratio(new_value);
	}

	// Identifies the speed with which the medication was or will be introduced into the patient.  Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.  Currently we do not specify a default of \'1\' in the denominator, but this is being discussed.  Other examples:  200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.
	get rateRange() {
		return this.__rateRange;
	}

	set rateRange(new_value) {
		const Range = require('./Range');
		this.__rateRange = new Range(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			text: this.__text,
			siteCodeableConcept: this.__siteCodeableConcept && this.__siteCodeableConcept.toJSON(),
			siteReference: this.__siteReference && this.__siteReference.toJSON(),
			route: this.__route && this.__route.toJSON(),
			method: this.__method && this.__method.toJSON(),
			quantity: this.__quantity && this.__quantity.toJSON(),
			rateRatio: this.__rateRatio && this.__rateRatio.toJSON(),
			rateRange: this.__rateRange && this.__rateRange.toJSON(),
		});
	}
}

module.exports = MedicationAdministrationDosage;
