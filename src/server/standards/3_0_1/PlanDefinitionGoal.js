const BackboneElement = require('./BackboneElement');

class PlanDefinitionGoal extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'PlanDefinitionGoal';
		Object.assign(this, opt);
	}

	// This is a PlanDefinitionGoal resource
	static get __resourceType() {
		return 'PlanDefinitionGoal';
	}

	// Indicates a category the goal falls within.
	get category() {
		return this.__category;
	}

	set category(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__category = new CodeableConcept(new_value);
	}

	// Human-readable and/or coded description of a specific desired objective of care, such as \'control blood pressure\' or \'negotiate an obstacle course\' or \'dance with child at wedding\'.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__description = new CodeableConcept(new_value);
	}

	// Identifies the expected level of importance associated with reaching/sustaining the defined goal.
	get priority() {
		return this.__priority;
	}

	set priority(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__priority = new CodeableConcept(new_value);
	}

	// The event after which the goal should begin being pursued.
	get start() {
		return this.__start;
	}

	set start(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__start = new CodeableConcept(new_value);
	}

	// Identifies problems, conditions, issues, or concerns the goal is intended to address.
	get addresses() {
		return this.__addresses;
	}

	set addresses(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__addresses = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Didactic or other informational resources associated with the goal that provide further supporting information about the goal. Information resources can include inline text commentary and links to web resources.
	get documentation() {
		return this.__documentation;
	}

	set documentation(new_value) {
		const RelatedArtifact = require('./RelatedArtifact');
		this.__documentation = Array.isArray(new_value)
			? new_value.map(val => new RelatedArtifact(val))
			: [new RelatedArtifact(new_value)];
	}

	// Indicates what should be done and within what timeframe.
	get target() {
		return this.__target;
	}

	set target(new_value) {
		const PlanDefinitionGoalTarget = require('./PlanDefinitionGoalTarget');
		this.__target = Array.isArray(new_value)
			? new_value.map(val => new PlanDefinitionGoalTarget(val))
			: [new PlanDefinitionGoalTarget(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			category: this.__category && this.__category.toJSON(),
			description: this.__description && this.__description.toJSON(),
			priority: this.__priority && this.__priority.toJSON(),
			start: this.__start && this.__start.toJSON(),
			addresses: this.__addresses && this.__addresses.map(v => v.toJSON()),
			documentation: this.__documentation && this.__documentation.map(v => v.toJSON()),
			target: this.__target && this.__target.map(v => v.toJSON()),
		});
	}
}

module.exports = PlanDefinitionGoal;
