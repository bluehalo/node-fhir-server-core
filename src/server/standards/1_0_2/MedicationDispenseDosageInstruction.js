const BackboneElement = require('./BackboneElement');

class MedicationDispenseDosageInstruction extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'MedicationDispenseDosageInstruction';
		Object.assign(this, opt);
	}

	// This is a MedicationDispenseDosageInstruction resource
	static get __resourceType() {
		return 'MedicationDispenseDosageInstruction';
	}

	// Free text dosage instructions can be used for cases where the instructions are too complex to code. When coded instructions are present, the free text instructions may still be present for display to humans taking or administering the medication.
	get text() {
		return this.__text;
	}

	set text(new_value) {
		this.__text = new_value;
	}

	// Additional instructions such as \'Swallow with plenty of water\' which may or may not be coded.
	get additionalInstructions() {
		return this.__additionalInstructions;
	}

	set additionalInstructions(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__additionalInstructions = new CodeableConcept(new_value);
	}

	// The timing schedule for giving the medication to the patient.  The Schedule data type allows many different expressions.  For example, \'Every  8 hours\'; \'Three times a day\'; \'1/2 an hour before breakfast for 10 days from 23-Dec 2011:\';  \'15 Oct 2013, 17 Oct 2013 and 1 Nov 2013\'.
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

	// A coded specification of the anatomic site where the medication first enters the body.
	get siteCodeableConcept() {
		return this.__siteCodeableConcept;
	}

	set siteCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__siteCodeableConcept = new CodeableConcept(new_value);
	}

	// A coded specification of the anatomic site where the medication first enters the body.
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

	// A coded value indicating the method by which the medication is intended to be or was introduced into or on the body.
	get method() {
		return this.__method;
	}

	set method(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__method = new CodeableConcept(new_value);
	}

	// The amount of therapeutic or other substance given at one administration event.
	get doseRange() {
		return this.__doseRange;
	}

	set doseRange(new_value) {
		const Range = require('./Range');
		this.__doseRange = new Range(new_value);
	}

	// The amount of therapeutic or other substance given at one administration event.
	get doseQuantity() {
		return this.__doseQuantity;
	}

	set doseQuantity(new_value) {
		const Quantity = require('./Quantity');
		this.__doseQuantity = new Quantity(new_value);
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

	// The maximum total quantity of a therapeutic substance that may be administered to a subject over the period of time,  e.g. 1000mg in 24 hours.
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
			additionalInstructions: this.__additionalInstructions && this.__additionalInstructions.toJSON(),
			timing: this.__timing && this.__timing.toJSON(),
			asNeededBoolean: this.__asNeededBoolean,
			asNeededCodeableConcept: this.__asNeededCodeableConcept && this.__asNeededCodeableConcept.toJSON(),
			siteCodeableConcept: this.__siteCodeableConcept && this.__siteCodeableConcept.toJSON(),
			siteReference: this.__siteReference && this.__siteReference.toJSON(),
			route: this.__route && this.__route.toJSON(),
			method: this.__method && this.__method.toJSON(),
			doseRange: this.__doseRange && this.__doseRange.toJSON(),
			doseQuantity: this.__doseQuantity && this.__doseQuantity.toJSON(),
			rateRatio: this.__rateRatio && this.__rateRatio.toJSON(),
			rateRange: this.__rateRange && this.__rateRange.toJSON(),
			maxDosePerPeriod: this.__maxDosePerPeriod && this.__maxDosePerPeriod.toJSON(),
		});
	}
}

module.exports = MedicationDispenseDosageInstruction;
