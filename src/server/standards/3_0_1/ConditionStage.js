const BackboneElement = require('./BackboneElement');

class ConditionStage extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ConditionStage';
		Object.assign(this, opt);
	}

	// This is a ConditionStage resource
	static get __resourceType() {
		return 'ConditionStage';
	}

	// A simple summary of the stage such as \'Stage 3\'. The determination of the stage is disease-specific.
	get summary() {
		return this.__summary;
	}

	set summary(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__summary = new CodeableConcept(new_value);
	}

	// Reference to a formal record of the evidence on which the staging assessment is based.
	get assessment() {
		return this.__assessment;
	}

	set assessment(new_value) {
		const Reference = require('./Reference');
		this.__assessment = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			summary: this.__summary && this.__summary.toJSON(),
			assessment: this.__assessment && this.__assessment.map(v => v.toJSON()),
		});
	}
}

module.exports = ConditionStage;
