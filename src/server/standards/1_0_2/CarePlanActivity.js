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

	// Resources that describe follow-on actions resulting from the plan, such as drug prescriptions, encounter records, appointments, etc.
	get actionResulting() {
		return this.__actionResulting;
	}

	set actionResulting(new_value) {
		const Reference = require('./Reference');
		this.__actionResulting = Array.isArray(new_value)
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
			actionResulting: this.__actionResulting && this.__actionResulting.map(v => v.toJSON()),
			progress: this.__progress && this.__progress.map(v => v.toJSON()),
			reference: this.__reference && this.__reference.toJSON(),
			detail: this.__detail && this.__detail.toJSON(),
		});
	}
}

module.exports = CarePlanActivity;
