const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const RelatedArtifact = require('./RelatedArtifact');
const PlanDefinition_Target = require('./PlanDefinition_Target');

class PlanDefinition_Goal extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'PlanDefinition_Goal';
	}

	// Indicates a category the goal falls within.
	get category () {
		return this._category;
	}

	set category ( new_value ) {
		this._category = new CodeableConcept(new_value);
	}

	// Human-readable and/or coded description of a specific desired objective of care, such as "control blood pressure" or "negotiate an obstacle course" or "dance with child at wedding".
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new CodeableConcept(new_value);
	}

	// Identifies the expected level of importance associated with reaching/sustaining the defined goal.
	get priority () {
		return this._priority;
	}

	set priority ( new_value ) {
		this._priority = new CodeableConcept(new_value);
	}

	// The event after which the goal should begin being pursued.
	get start () {
		return this._start;
	}

	set start ( new_value ) {
		this._start = new CodeableConcept(new_value);
	}

	// Identifies problems, conditions, issues, or concerns the goal is intended to address.
	get addresses () {
		return this._addresses;
	}

	set addresses ( new_value ) {
		this._addresses = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Didactic or other informational resources associated with the goal that provide further supporting information about the goal. Information resources can include inline text commentary and links to web resources.
	get documentation () {
		return this._documentation;
	}

	set documentation ( new_value ) {
		this._documentation = Array.isArray(new_value) ? new_value.map(val => new RelatedArtifact(val)) : [new RelatedArtifact(new_value)];
	}

	// Indicates what should be done and within what timeframe.
	get target () {
		return this._target;
	}

	set target ( new_value ) {
		this._target = Array.isArray(new_value) ? new_value.map(val => new PlanDefinition_Target(val)) : [new PlanDefinition_Target(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			category: this._category,
			description: this._description,
			priority: this._priority,
			start: this._start,
			addresses: this._addresses,
			documentation: this._documentation,
			target: this._target
		});
	}

}

module.exports = PlanDefinition_Goal;
