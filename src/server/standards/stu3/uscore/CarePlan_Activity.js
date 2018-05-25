const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const Reference = require('./Reference');
const Annotation = require('./Annotation');
const CarePlan_Detail = require('./CarePlan_Detail');

class CarePlan_Activity extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'CarePlan_Activity';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'CarePlan_Activity';
	}

	// Identifies the outcome at the point when the status of the activity is assessed.  For example, the outcome of an education activity could be patient understands (or not).
	get outcomeCodeableConcept () {
		return this._outcomeCodeableConcept;
	}

	set outcomeCodeableConcept ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._outcomeCodeableConcept = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Details of the outcome or action resulting from the activity.  The reference to an "event" resource, such as Procedure or Encounter or Observation, is the result/outcome of the activity itself.  The activity can be conveyed using CarePlan.activity.detail OR using the CarePlan.activity.reference (a reference to a “request” resource).
	get outcomeReference () {
		return this._outcomeReference;
	}

	set outcomeReference ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._outcomeReference = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Notes about the adherence/status/progress of the activity.
	get progress () {
		return this._progress;
	}

	set progress ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._progress = Array.isArray(new_value) ? new_value.map(val => new Annotation(val)) : [new Annotation(new_value)];
	}

	// The details of the proposed activity represented in a specific resource.
	get reference () {
		return this._reference;
	}

	set reference ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._reference = new Reference(new_value);
	}

	// A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
	get detail () {
		return this._detail;
	}

	set detail ( new_value ) {
		// Do not set the value if new value is null or undefined
		if ( new_value === null || new_value === undefined) {
			return;
		}
		this._detail = new CarePlan_Detail(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			outcomeCodeableConcept: this.outcomeCodeableConcept && this.outcomeCodeableConcept.map(v => v.toJSON()),
			outcomeReference: this.outcomeReference && this.outcomeReference.map(v => v.toJSON()),
			progress: this.progress && this.progress.map(v => v.toJSON()),
			reference: this.reference && this.reference.toJSON(),
			detail: this.detail && this.detail.toJSON()
		});
	}

}

module.exports = CarePlan_Activity;
