const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Quantity = require('./Quantity');
const Ratio = require('./Ratio');

class MedicationAdministration_Dosage extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'MedicationAdministration_Dosage';
	}

	// Free text dosage can be used for cases where the dosage administered is too complex to code. When coded dosage is present, the free text dosage may still be present for display to humans.  The dosage instructions should reflect the dosage of the medication that was administered.
	get text () {
		return this._text;
	}

	set text ( new_value ) {
		this._text = new_value;
	}

	// A coded specification of the anatomic site where the medication first entered the body.  For example, "left arm".
	get site () {
		return this._site;
	}

	set site ( new_value ) {
		this._site = new CodeableConcept(new_value);
	}

	// A code specifying the route or physiological path of administration of a therapeutic agent into or onto the patient.  For example, topical, intravenous, etc.
	get route () {
		return this._route;
	}

	set route ( new_value ) {
		this._route = new CodeableConcept(new_value);
	}

	// A coded value indicating the method by which the medication is intended to be or was introduced into or on the body.  This attribute will most often NOT be populated.  It is most commonly used for injections.  For example, Slow Push, Deep IV.
	get method () {
		return this._method;
	}

	set method ( new_value ) {
		this._method = new CodeableConcept(new_value);
	}

	// The amount of the medication given at one administration event.   Use this value when the administration is essentially an instantaneous event such as a swallowing a tablet or giving an injection.
	get dose () {
		return this._dose;
	}

	set dose ( new_value ) {
		this._dose = new Quantity(new_value);
	}

	// Identifies the speed with which the medication was or will be introduced into the patient.  Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.  Other examples:  200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.
	get rateRatio () {
		return this._rateRatio;
	}

	set rateRatio ( new_value ) {
		this._rateRatio = new Ratio(new_value);
	}

	// Identifies the speed with which the medication was or will be introduced into the patient.  Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.  Other examples:  200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.
	get rateSimpleQuantity () {
		return this._rateSimpleQuantity;
	}

	set rateSimpleQuantity ( new_value ) {
		this._rateSimpleQuantity = new Quantity(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			text: this._text,
			site: this._site && this._site.toJSON(),
			route: this._route && this._route.toJSON(),
			method: this._method && this._method.toJSON(),
			dose: this._dose && this._dose.toJSON(),
			rateRatio: this._rateRatio && this._rateRatio.toJSON(),
			rateSimpleQuantity: this._rateSimpleQuantity && this._rateSimpleQuantity.toJSON()
		});
	}

}

module.exports = MedicationAdministration_Dosage;
