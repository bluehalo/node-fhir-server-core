const BackboneElement = require('./BackboneElement');

class CarePlanActivity extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CarePlanActivity';
		Object.assign(this, opt);
	}

	// This is a CarePlanActivity resource
	static get __resourceType() {
		return 'CarePlanActivity';
	}

	// Identifies the outcome at the point when the status of the activity is assessed.  For example, the outcome of an education activity could be patient understands (or not).
	get outcomeCodeableConcept() {
		return this.__outcomeCodeableConcept;
	}

	set outcomeCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__outcomeCodeableConcept = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Details of the outcome or action resulting from the activity.  The reference to an \'event\' resource, such as Procedure or Encounter or Observation, is the result/outcome of the activity itself.  The activity can be conveyed using CarePlan.activity.detail OR using the CarePlan.activity.reference (a reference to a “request” resource).
	get outcomeReference() {
		return this.__outcomeReference;
	}

	set outcomeReference(new_value) {
		const Reference = require('./Reference');
		this.__outcomeReference = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// Notes about the adherence/status/progress of the activity.
	get progress() {
		return this.__progress;
	}

	set progress(new_value) {
		const Annotation = require('./Annotation');
		this.__progress = Array.isArray(new_value)
			? new_value.map(val => new Annotation(val))
			: [new Annotation(new_value)];
	}

	// The details of the proposed activity represented in a specific resource.
	get reference() {
		return this.__reference;
	}

	set reference(new_value) {
		const Reference = require('./Reference');
		this.__reference = new Reference(new_value);
	}

	// A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn\'t know about specific resources such as procedure etc.
	get detail() {
		return this.__detail;
	}

	set detail(new_value) {
		const CarePlanActivityDetail = require('./CarePlanActivityDetail');
		this.__detail = new CarePlanActivityDetail(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			outcomeCodeableConcept: this.__outcomeCodeableConcept && this.__outcomeCodeableConcept.map(v => v.toJSON()),
			outcomeReference: this.__outcomeReference && this.__outcomeReference.map(v => v.toJSON()),
			progress: this.__progress && this.__progress.map(v => v.toJSON()),
			reference: this.__reference && this.__reference.toJSON(),
			detail: this.__detail && this.__detail.toJSON(),
		});
	}
}

module.exports = CarePlanActivity;
