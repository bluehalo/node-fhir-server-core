const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');

class ResearchStudy_Arm extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ResearchStudy_Arm';
	}

	// Unique, human-readable label for this arm of the study.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// Categorization of study arm, e.g. experimental, active comparator, placebo comparater.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new CodeableConcept(new_value);
	}

	// A succinct description of the path through the study that would be followed by a subject adhering to this arm.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			name: this._name,
			code: this._code,
			description: this._description
		});
	}

}

module.exports = ResearchStudy_Arm;
