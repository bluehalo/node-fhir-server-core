const BackboneElement = require('./BackboneElement');

class ResearchStudyArm extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ResearchStudyArm';
		Object.assign(this, opt);
	}

	// This is a ResearchStudyArm resource
	static get __resourceType() {
		return 'ResearchStudyArm';
	}

	// Unique, human-readable label for this arm of the study.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// Categorization of study arm, e.g. experimental, active comparator, placebo comparater.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// A succinct description of the path through the study that would be followed by a subject adhering to this arm.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			name: this.__name,
			code: this.__code && this.__code.toJSON(),
			description: this.__description,
		});
	}
}

module.exports = ResearchStudyArm;
