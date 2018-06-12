const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const RelatedArtifact = require('./RelatedArtifact');
const TriggerDefinition = require('./TriggerDefinition');
const PlanDefinition_Condition = require('./PlanDefinition_Condition');
const DataRequirement = require('./DataRequirement');
const PlanDefinition_RelatedAction = require('./PlanDefinition_RelatedAction');
const Period = require('./Period');
const Duration = require('./Duration');
const Range = require('./Range');
const Timing = require('./Timing');
const PlanDefinition_Participant = require('./PlanDefinition_Participant');
const Coding = require('./Coding');
const Reference = require('./Reference');
const PlanDefinition_DynamicValue = require('./PlanDefinition_DynamicValue');

class PlanDefinition_Action extends BackboneElement {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'PlanDefinition_Action';
	}

	// A user-visible label for the action.
	get label () {
		return this._label;
	}

	set label ( new_value ) {
		this._label = new_value;
	}

	// The title of the action displayed to a user.
	get title () {
		return this._title;
	}

	set title ( new_value ) {
		this._title = new_value;
	}

	// A short description of the action used to provide a summary to display to the user.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that may not be capable of interpreting it dynamically.
	get textEquivalent () {
		return this._textEquivalent;
	}

	set textEquivalent ( new_value ) {
		this._textEquivalent = new_value;
	}

	// A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a the section of a documentation template.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// A description of why this action is necessary or appropriate.
	get reason () {
		return this._reason;
	}

	set reason ( new_value ) {
		this._reason = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
	get documentation () {
		return this._documentation;
	}

	set documentation ( new_value ) {
		this._documentation = Array.isArray(new_value) ? new_value.map(val => new RelatedArtifact(val)) : [new RelatedArtifact(new_value)];
	}

	// Identifies goals that this action supports. The reference must be to a goal element defined within this plan definition.
	get goalId () {
		return this._goalId;
	}

	set goalId ( new_value ) {
		this._goalId = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// A description of when the action should be triggered.
	get triggerDefinition () {
		return this._triggerDefinition;
	}

	set triggerDefinition ( new_value ) {
		this._triggerDefinition = Array.isArray(new_value) ? new_value.map(val => new TriggerDefinition(val)) : [new TriggerDefinition(new_value)];
	}

	// An expression that describes applicability criteria, or start/stop conditions for the action.
	get condition () {
		return this._condition;
	}

	set condition ( new_value ) {
		this._condition = Array.isArray(new_value) ? new_value.map(val => new PlanDefinition_Condition(val)) : [new PlanDefinition_Condition(new_value)];
	}

	// Defines input data requirements for the action.
	get input () {
		return this._input;
	}

	set input ( new_value ) {
		this._input = Array.isArray(new_value) ? new_value.map(val => new DataRequirement(val)) : [new DataRequirement(new_value)];
	}

	// Defines the outputs of the action, if any.
	get output () {
		return this._output;
	}

	set output ( new_value ) {
		this._output = Array.isArray(new_value) ? new_value.map(val => new DataRequirement(val)) : [new DataRequirement(new_value)];
	}

	// A relationship to another action such as "before" or "30-60 minutes after start of".
	get relatedAction () {
		return this._relatedAction;
	}

	set relatedAction ( new_value ) {
		this._relatedAction = Array.isArray(new_value) ? new_value.map(val => new PlanDefinition_RelatedAction(val)) : [new PlanDefinition_RelatedAction(new_value)];
	}

	// An optional value describing when the action should be performed.
	get timingDateTime () {
		return this._timingDateTime;
	}

	set timingDateTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field timingDateTime`);
		}
		this._timingDateTime = new_value;
	}

	// An optional value describing when the action should be performed.
	get timingPeriod () {
		return this._timingPeriod;
	}

	set timingPeriod ( new_value ) {
		this._timingPeriod = new Period(new_value);
	}

	// An optional value describing when the action should be performed.
	get timingDuration () {
		return this._timingDuration;
	}

	set timingDuration ( new_value ) {
		this._timingDuration = new Duration(new_value);
	}

	// An optional value describing when the action should be performed.
	get timingRange () {
		return this._timingRange;
	}

	set timingRange ( new_value ) {
		this._timingRange = new Range(new_value);
	}

	// An optional value describing when the action should be performed.
	get timingTiming () {
		return this._timingTiming;
	}

	set timingTiming ( new_value ) {
		this._timingTiming = new Timing(new_value);
	}

	// Indicates who should participate in performing the action described.
	get participant () {
		return this._participant;
	}

	set participant ( new_value ) {
		this._participant = Array.isArray(new_value) ? new_value.map(val => new PlanDefinition_Participant(val)) : [new PlanDefinition_Participant(new_value)];
	}

	// The type of action to perform (create, update, remove).
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = new Coding(new_value);
	}

	// Defines the grouping behavior for the action and its children.
	get groupingBehavior () {
		return this._groupingBehavior;
	}

	set groupingBehavior ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['visual-group', 'logical-group', 'sentence-group'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field groupingBehavior`);
		}
		this._groupingBehavior = new_value;
	}

	// Defines the selection behavior for the action and its children.
	get selectionBehavior () {
		return this._selectionBehavior;
	}

	set selectionBehavior ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['any', 'all', 'all-or-none', 'exactly-one', 'at-most-one', 'one-or-more'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field selectionBehavior`);
		}
		this._selectionBehavior = new_value;
	}

	// Defines the requiredness behavior for the action.
	get requiredBehavior () {
		return this._requiredBehavior;
	}

	set requiredBehavior ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['must', 'could', 'must-unless-documented'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field requiredBehavior`);
		}
		this._requiredBehavior = new_value;
	}

	// Defines whether the action should usually be preselected.
	get precheckBehavior () {
		return this._precheckBehavior;
	}

	set precheckBehavior ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['yes', 'no'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field precheckBehavior`);
		}
		this._precheckBehavior = new_value;
	}

	// Defines whether the action can be selected multiple times.
	get cardinalityBehavior () {
		return this._cardinalityBehavior;
	}

	set cardinalityBehavior ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['single', 'multiple'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field cardinalityBehavior`);
		}
		this._cardinalityBehavior = new_value;
	}

	// A reference to an ActivityDefinition that describes the action to be taken in detail, or a PlanDefinition that describes a series of actions to be taken.
	get definition () {
		return this._definition;
	}

	set definition ( new_value ) {
		this._definition = new Reference(new_value);
	}

	// A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input.
	get transform () {
		return this._transform;
	}

	set transform ( new_value ) {
		this._transform = new Reference(new_value);
	}

	// Customizations that should be applied to the statically defined resource. For example, if the dosage of a medication must be computed based on the patient's weight, a customization would be used to specify an expression that calculated the weight, and the path on the resource that would contain the result.
	get dynamicValue () {
		return this._dynamicValue;
	}

	set dynamicValue ( new_value ) {
		this._dynamicValue = Array.isArray(new_value) ? new_value.map(val => new PlanDefinition_DynamicValue(val)) : [new PlanDefinition_DynamicValue(new_value)];
	}

	// Sub actions that are contained within the action. The behavior of this action determines the functionality of the sub-actions. For example, a selection behavior of at-most-one indicates that of the sub-actions, at most one may be chosen as part of realizing the action definition.
	get action () {
		return this._action;
	}

	set action ( new_value ) {
		this._action = Array.isArray(new_value) ? new_value.map(val => new PlanDefinition_Action(val)) : [new PlanDefinition_Action(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			label: this._label,
			title: this._title,
			description: this._description,
			textEquivalent: this._textEquivalent,
			code: this._code,
			reason: this._reason,
			documentation: this._documentation,
			goalId: this._goalId,
			triggerDefinition: this._triggerDefinition,
			condition: this._condition,
			input: this._input,
			output: this._output,
			relatedAction: this._relatedAction,
			timingDateTime: this._timingDateTime,
			timingPeriod: this._timingPeriod,
			timingDuration: this._timingDuration,
			timingRange: this._timingRange,
			timingTiming: this._timingTiming,
			participant: this._participant,
			type: this._type,
			groupingBehavior: this._groupingBehavior,
			selectionBehavior: this._selectionBehavior,
			requiredBehavior: this._requiredBehavior,
			precheckBehavior: this._precheckBehavior,
			cardinalityBehavior: this._cardinalityBehavior,
			definition: this._definition,
			transform: this._transform,
			dynamicValue: this._dynamicValue,
			action: this._action
		});
	}

}

module.exports = PlanDefinition_Action;
