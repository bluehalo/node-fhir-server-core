const BackboneElement = require('./BackboneElement');
const Reference = require('./Reference');
const CodeableConcept = require('./CodeableConcept');

class AdverseEvent_SuspectEntity extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'AdverseEvent_SuspectEntity';
	}

	// Identifies the actual instance of what caused the adverse event.  May be a substance, medication, medication administration, medication statement or a device.
	get instance () {
		return this._instance;
	}

	set instance ( new_value ) {
		this._instance = new Reference(new_value);
	}

	// causality1 | causality2.
	get causality () {
		return this._causality;
	}

	set causality ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['causality1', 'causality2'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field causality`);
		}
		this._causality = new_value;
	}

	// assess1 | assess2.
	get causalityAssessment () {
		return this._causalityAssessment;
	}

	set causalityAssessment ( new_value ) {
		this._causalityAssessment = new CodeableConcept(new_value);
	}

	// AdverseEvent.suspectEntity.causalityProductRelatedness.
	get causalityProductRelatedness () {
		return this._causalityProductRelatedness;
	}

	set causalityProductRelatedness ( new_value ) {
		this._causalityProductRelatedness = new_value;
	}

	// method1 | method2.
	get causalityMethod () {
		return this._causalityMethod;
	}

	set causalityMethod ( new_value ) {
		this._causalityMethod = new CodeableConcept(new_value);
	}

	// AdverseEvent.suspectEntity.causalityAuthor.
	get causalityAuthor () {
		return this._causalityAuthor;
	}

	set causalityAuthor ( new_value ) {
		this._causalityAuthor = new Reference(new_value);
	}

	// result1 | result2.
	get causalityResult () {
		return this._causalityResult;
	}

	set causalityResult ( new_value ) {
		this._causalityResult = new CodeableConcept(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			instance: this._instance,
			causality: this._causality,
			causalityAssessment: this._causalityAssessment,
			causalityProductRelatedness: this._causalityProductRelatedness,
			causalityMethod: this._causalityMethod,
			causalityAuthor: this._causalityAuthor,
			causalityResult: this._causalityResult
		});
	}

}

module.exports = AdverseEvent_SuspectEntity;
