const BackboneElement = require('./BackboneElement');

class AdverseEventSuspectEntity extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'AdverseEventSuspectEntity';
		Object.assign(this, opt);
	}

	// This is a AdverseEventSuspectEntity resource
	static get __resourceType() {
		return 'AdverseEventSuspectEntity';
	}

	// Identifies the actual instance of what caused the adverse event.  May be a substance, medication, medication administration, medication statement or a device.
	get instance() {
		return this.__instance;
	}

	set instance(new_value) {
		const Reference = require('./Reference');
		this.__instance = new Reference(new_value);
	}

	// causality1 | causality2.
	get causality() {
		return this.__causality;
	}

	set causality(new_value) {
		this.__causality = new_value;
	}

	// assess1 | assess2.
	get causalityAssessment() {
		return this.__causalityAssessment;
	}

	set causalityAssessment(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__causalityAssessment = new CodeableConcept(new_value);
	}

	// AdverseEvent.suspectEntity.causalityProductRelatedness.
	get causalityProductRelatedness() {
		return this.__causalityProductRelatedness;
	}

	set causalityProductRelatedness(new_value) {
		this.__causalityProductRelatedness = new_value;
	}

	// method1 | method2.
	get causalityMethod() {
		return this.__causalityMethod;
	}

	set causalityMethod(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__causalityMethod = new CodeableConcept(new_value);
	}

	// AdverseEvent.suspectEntity.causalityAuthor.
	get causalityAuthor() {
		return this.__causalityAuthor;
	}

	set causalityAuthor(new_value) {
		const Reference = require('./Reference');
		this.__causalityAuthor = new Reference(new_value);
	}

	// result1 | result2.
	get causalityResult() {
		return this.__causalityResult;
	}

	set causalityResult(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__causalityResult = new CodeableConcept(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			instance: this.__instance && this.__instance.toJSON(),
			causality: this.__causality,
			causalityAssessment: this.__causalityAssessment && this.__causalityAssessment.toJSON(),
			causalityProductRelatedness: this.__causalityProductRelatedness,
			causalityMethod: this.__causalityMethod && this.__causalityMethod.toJSON(),
			causalityAuthor: this.__causalityAuthor && this.__causalityAuthor.toJSON(),
			causalityResult: this.__causalityResult && this.__causalityResult.toJSON(),
		});
	}
}

module.exports = AdverseEventSuspectEntity;
