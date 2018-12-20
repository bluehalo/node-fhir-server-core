const BackboneElement = require('./BackboneElement');

class GoalOutcome extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'GoalOutcome';
		Object.assign(this, opt);
	}

	// This is a GoalOutcome resource
	static get __resourceType() {
		return 'GoalOutcome';
	}

	// Details of what\'s changed (or not changed).
	get resultCodeableConcept() {
		return this.__resultCodeableConcept;
	}

	set resultCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__resultCodeableConcept = new CodeableConcept(new_value);
	}

	// Details of what\'s changed (or not changed).
	get resultReference() {
		return this.__resultReference;
	}

	set resultReference(new_value) {
		const Reference = require('./Reference');
		this.__resultReference = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resultCodeableConcept: this.__resultCodeableConcept && this.__resultCodeableConcept.toJSON(),
			resultReference: this.__resultReference && this.__resultReference.toJSON(),
		});
	}
}

module.exports = GoalOutcome;
