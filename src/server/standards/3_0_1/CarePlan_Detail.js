const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Timing = require('./Timing');
const Period = require('./Period');
const Quantity = require('./Quantity');

class CarePlan_Detail extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'CarePlan_Detail';
	}

	// High-level categorization of the type of activity in a care plan.
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		this._category = new CodeableConcept(new_value);
	}

	// Identifies the protocol, questionnaire, guideline or other specification the planned activity should be conducted in accordance with.
	get definition () {
		return this._definition;
	}

	set definition ( new_value ) {
		this._definition = new Reference(new_value);
	}

	// Detailed description of the type of planned activity; e.g. What lab test, what procedure, what kind of encounter.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new CodeableConcept(new_value);
	}

	// Provides the rationale that drove the inclusion of this particular activity as part of the plan or the reason why the activity was prohibited.
	get reasonCode () {
		return this._reasonCode;
	}

	set reasonCode ( new_value ) {
		this._reasonCode = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Provides the health condition(s) that drove the inclusion of this particular activity as part of the plan.
	get reasonReference () {
		return this._reasonReference;
	}

	set reasonReference ( new_value ) {
		this._reasonReference = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Internal reference that identifies the goals that this activity is intended to contribute towards meeting.
	get goal () {
		return this._goal;
	}

	set goal ( new_value ) {
		this._goal = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Identifies what progress is being made for the specific activity.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['not-started', 'scheduled', 'in-progress', 'on-hold', 'completed', 'cancelled', 'unknown'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// Provides reason why the activity isn't yet started, is on hold, was cancelled, etc.
	get statusReason () {
		return this._statusReason;
	}

	set statusReason ( new_value ) {
		this._statusReason = new_value;
	}

	// If true, indicates that the described activity is one that must NOT be engaged in when following the plan.  If false, indicates that the described activity is one that should be engaged in when following the plan.
	get prohibited () {
		return this._prohibited;
	}

	set prohibited ( new_value ) {
		this._prohibited = new_value;
	}

	// The period, timing or frequency upon which the described activity is to occur.
	get scheduledTiming () {
		return this._scheduledTiming;
	}

	set scheduledTiming ( new_value ) {
		this._scheduledTiming = new Timing(new_value);
	}

	// The period, timing or frequency upon which the described activity is to occur.
	get scheduledPeriod () {
		return this._scheduledPeriod;
	}

	set scheduledPeriod ( new_value ) {
		this._scheduledPeriod = new Period(new_value);
	}

	// The period, timing or frequency upon which the described activity is to occur.
	get scheduledString () {
		return this._scheduledString;
	}

	set scheduledString ( new_value ) {
		this._scheduledString = new_value;
	}

	// Identifies the facility where the activity will occur; e.g. home, hospital, specific clinic, etc.
	get location () {
		return this._location;
	}

	set location ( new_value ) {
		this._location = new Reference(new_value);
	}

	// Identifies who's expected to be involved in the activity.
	get performer () {
		return this._performer;
	}

	set performer ( new_value ) {
		this._performer = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Identifies the food, drug or other product to be consumed or supplied in the activity.
	get productCodeableConcept () {
		return this._productCodeableConcept;
	}

	set productCodeableConcept ( new_value ) {
		this._productCodeableConcept = new CodeableConcept(new_value);
	}

	// Identifies the food, drug or other product to be consumed or supplied in the activity.
	get productReference () {
		return this._productReference;
	}

	set productReference ( new_value ) {
		this._productReference = new Reference(new_value);
	}

	// Identifies the quantity expected to be consumed in a given day.
	get dailyAmount () {
		return this._dailyAmount;
	}

	set dailyAmount ( new_value ) {
		this._dailyAmount = new Quantity(new_value);
	}

	// Identifies the quantity expected to be supplied, administered or consumed by the subject.
	get quantity () {
		return this._quantity;
	}

	set quantity ( new_value ) {
		this._quantity = new Quantity(new_value);
	}

	// This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			category: this._category && this._category.toJSON(),
			definition: this._definition && this._definition.toJSON(),
			code: this._code && this._code.toJSON(),
			reasonCode: this._reasonCode && this._reasonCode.map(v => v.toJSON()),
			reasonReference: this._reasonReference && this._reasonReference.map(v => v.toJSON()),
			goal: this._goal && this._goal.map(v => v.toJSON()),
			status: this._status,
			statusReason: this._statusReason,
			prohibited: this._prohibited,
			scheduledTiming: this._scheduledTiming && this._scheduledTiming.toJSON(),
			scheduledPeriod: this._scheduledPeriod && this._scheduledPeriod.toJSON(),
			scheduledString: this._scheduledString,
			location: this._location && this._location.toJSON(),
			performer: this._performer && this._performer.map(v => v.toJSON()),
			productCodeableConcept: this._productCodeableConcept && this._productCodeableConcept.toJSON(),
			productReference: this._productReference && this._productReference.toJSON(),
			dailyAmount: this._dailyAmount && this._dailyAmount.toJSON(),
			quantity: this._quantity && this._quantity.toJSON(),
			description: this._description
		});
	}

}

module.exports = CarePlan_Detail;
