const BackboneElement = require('./BackboneElement');

class MedicationStatementDosage extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MedicationStatementDosage';
		Object.assign(this, opt);
	}

	// This is a MedicationStatementDosage resource
	static get __resourceType() {
		return 'MedicationStatementDosage';
	}

	// Free text dosage information as reported about a patient\'s medication use. When coded dosage information is present, the free text may still be present for display to humans.
	get text() {
		return this.__text;
	}

	set text(new_value) {
		this.__text = new_value;
	}

	// The timing schedule for giving the medication to the patient.  The Schedule data type allows many different expressions, for example.  \'Every  8 hours\'; \'Three times a day\'; \'1/2 an hour before breakfast for 10 days from 23-Dec 2011:\';  \'15 Oct 2013, 17 Oct 2013 and 1 Nov 2013\'.
	get timing() {
		return this.__timing;
	}

	set timing(new_value) {
		const Timing = require('./Timing');
		this.__timing = new Timing(new_value);
	}

	// Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).    Specifically if \'boolean\' datatype is selected, then the following logic applies:  If set to True, this indicates that the medication is only taken when needed, within the specified schedule.
	get asNeededBoolean() {
		return this.__asNeededBoolean;
	}

	set asNeededBoolean(new_value) {
		this.__asNeededBoolean = new_value;
	}

	// Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).    Specifically if \'boolean\' datatype is selected, then the following logic applies:  If set to True, this indicates that the medication is only taken when needed, within the specified schedule.
	get asNeededCodeableConcept() {
		return this.__asNeededCodeableConcept;
	}

	set asNeededCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__asNeededCodeableConcept = new CodeableConcept(new_value);
	}

	// A coded specification of or a reference to the anatomic site where the medication first enters the body.
	get siteCodeableConcept() {
		return this.__siteCodeableConcept;
	}

	set siteCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__siteCodeableConcept = new CodeableConcept(new_value);
	}

	// A coded specification of or a reference to the anatomic site where the medication first enters the body.
	get siteReference() {
		return this.__siteReference;
	}

	set siteReference(new_value) {
		const Reference = require('./Reference');
		this.__siteReference = new Reference(new_value);
	}

	// A code specifying the route or physiological path of administration of a therapeutic agent into or onto a subject.
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

	// The amount of therapeutic or other substance given at one administration event.
	get quantityQuantity() {
		return this.__quantityQuantity;
	}

	set quantityQuantity(new_value) {
		const Quantity = require('./Quantity');
		this.__quantityQuantity = new Quantity(new_value);
	}

	// The amount of therapeutic or other substance given at one administration event.
	get quantityRange() {
		return this.__quantityRange;
	}

	set quantityRange(new_value) {
		const Range = require('./Range');
		this.__quantityRange = new Range(new_value);
	}

	// Identifies the speed with which the medication was or will be introduced into the patient. Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.   Currently we do not specify a default of \'1\' in the denominator, but this is being discussed. Other examples: 200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.
	get rateRatio() {
		return this.__rateRatio;
	}

	set rateRatio(new_value) {
		const Ratio = require('./Ratio');
		this.__rateRatio = new Ratio(new_value);
	}

	// Identifies the speed with which the medication was or will be introduced into the patient. Typically the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time e.g. 500 ml per 2 hours.   Currently we do not specify a default of \'1\' in the denominator, but this is being discussed. Other examples: 200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours.
	get rateRange() {
		return this.__rateRange;
	}

	set rateRange(new_value) {
		const Range = require('./Range');
		this.__rateRange = new Range(new_value);
	}

	// The maximum total quantity of a therapeutic substance that may be administered to a subject over the period of time.  For example, 1000mg in 24 hours.
	get maxDosePerPeriod() {
		return this.__maxDosePerPeriod;
	}

	set maxDosePerPeriod(new_value) {
		const Ratio = require('./Ratio');
		this.__maxDosePerPeriod = new Ratio(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			text: this.__text,
			timing: this.__timing && this.__timing.toJSON(),
			asNeededBoolean: this.__asNeededBoolean,
			asNeededCodeableConcept: this.__asNeededCodeableConcept && this.__asNeededCodeableConcept.toJSON(),
			siteCodeableConcept: this.__siteCodeableConcept && this.__siteCodeableConcept.toJSON(),
			siteReference: this.__siteReference && this.__siteReference.toJSON(),
			route: this.__route && this.__route.toJSON(),
			method: this.__method && this.__method.toJSON(),
			quantityQuantity: this.__quantityQuantity && this.__quantityQuantity.toJSON(),
			quantityRange: this.__quantityRange && this.__quantityRange.toJSON(),
			rateRatio: this.__rateRatio && this.__rateRatio.toJSON(),
			rateRange: this.__rateRange && this.__rateRange.toJSON(),
			maxDosePerPeriod: this.__maxDosePerPeriod && this.__maxDosePerPeriod.toJSON(),
		});
	}
}

module.exports = MedicationStatementDosage;
