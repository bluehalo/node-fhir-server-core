const BackboneElement = require('./BackboneElement');

class CarePlanActivityDetail extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CarePlanActivityDetail';
		Object.assign(this, opt);
	}

	// This is a CarePlanActivityDetail resource
	static get __resourceType() {
		return 'CarePlanActivityDetail';
	}

	// High-level categorization of the type of activity in a care plan.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__category = new CodeableConcept(new_value);
	}

	// Detailed description of the type of planned activity; e.g. What lab test, what procedure, what kind of encounter.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// Provides the rationale that drove the inclusion of this particular activity as part of the plan.
	get reasonCode() {
		return this.__reasonCode;
	}

	set reasonCode(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reasonCode = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Provides the health condition(s) that drove the inclusion of this particular activity as part of the plan.
	get reasonReference() {
		return this.__reasonReference;
	}

	set reasonReference(new_value) {
		const Reference = require('./Reference');
		this.__reasonReference = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// Internal reference that identifies the goals that this activity is intended to contribute towards meeting.
	get goal() {
		return this.__goal;
	}

	set goal(new_value) {
		const Reference = require('./Reference');
		this.__goal = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Identifies what progress is being made for the specific activity.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// Provides reason why the activity isn\'t yet started, is on hold, was cancelled, etc.
	get statusReason() {
		return this.__statusReason;
	}

	set statusReason(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__statusReason = new CodeableConcept(new_value);
	}

	// If true, indicates that the described activity is one that must NOT be engaged in when following the plan.
	get prohibited() {
		return this.__prohibited;
	}

	set prohibited(new_value) {
		this.__prohibited = new_value;
	}

	// The period, timing or frequency upon which the described activity is to occur.
	get scheduledTiming() {
		return this.__scheduledTiming;
	}

	set scheduledTiming(new_value) {
		const Timing = require('./Timing');
		this.__scheduledTiming = new Timing(new_value);
	}

	// The period, timing or frequency upon which the described activity is to occur.
	get scheduledPeriod() {
		return this.__scheduledPeriod;
	}

	set scheduledPeriod(new_value) {
		const Period = require('./Period');
		this.__scheduledPeriod = new Period(new_value);
	}

	// The period, timing or frequency upon which the described activity is to occur.
	get scheduledString() {
		return this.__scheduledString;
	}

	set scheduledString(new_value) {
		this.__scheduledString = new_value;
	}

	// Identifies the facility where the activity will occur; e.g. home, hospital, specific clinic, etc.
	get location() {
		return this.__location;
	}

	set location(new_value) {
		const Reference = require('./Reference');
		this.__location = new Reference(new_value);
	}

	// Identifies who\'s expected to be involved in the activity.
	get performer() {
		return this.__performer;
	}

	set performer(new_value) {
		const Reference = require('./Reference');
		this.__performer = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Identifies the food, drug or other product to be consumed or supplied in the activity.
	get productCodeableConcept() {
		return this.__productCodeableConcept;
	}

	set productCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__productCodeableConcept = new CodeableConcept(new_value);
	}

	// Identifies the food, drug or other product to be consumed or supplied in the activity.
	get productReference() {
		return this.__productReference;
	}

	set productReference(new_value) {
		const Reference = require('./Reference');
		this.__productReference = new Reference(new_value);
	}

	// Identifies the quantity expected to be consumed in a given day.
	get dailyAmount() {
		return this.__dailyAmount;
	}

	set dailyAmount(new_value) {
		const Quantity = require('./Quantity');
		this.__dailyAmount = new Quantity(new_value);
	}

	// Identifies the quantity expected to be supplied, administered or consumed by the subject.
	get quantity() {
		return this.__quantity;
	}

	set quantity(new_value) {
		const Quantity = require('./Quantity');
		this.__quantity = new Quantity(new_value);
	}

	// This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			category: this.__category && this.__category.toJSON(),
			code: this.__code && this.__code.toJSON(),
			reasonCode: this.__reasonCode && this.__reasonCode.map(v => v.toJSON()),
			reasonReference: this.__reasonReference && this.__reasonReference.map(v => v.toJSON()),
			goal: this.__goal && this.__goal.map(v => v.toJSON()),
			status: this.__status,
			statusReason: this.__statusReason && this.__statusReason.toJSON(),
			prohibited: this.__prohibited,
			scheduledTiming: this.__scheduledTiming && this.__scheduledTiming.toJSON(),
			scheduledPeriod: this.__scheduledPeriod && this.__scheduledPeriod.toJSON(),
			scheduledString: this.__scheduledString,
			location: this.__location && this.__location.toJSON(),
			performer: this.__performer && this.__performer.map(v => v.toJSON()),
			productCodeableConcept: this.__productCodeableConcept && this.__productCodeableConcept.toJSON(),
			productReference: this.__productReference && this.__productReference.toJSON(),
			dailyAmount: this.__dailyAmount && this.__dailyAmount.toJSON(),
			quantity: this.__quantity && this.__quantity.toJSON(),
			description: this.__description,
		});
	}
}

module.exports = CarePlanActivityDetail;
