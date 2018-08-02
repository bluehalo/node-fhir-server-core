const BackboneElement = require('./BackboneElement');
const CodeableConcept = require('./CodeableConcept');
const RelatedArtifact = require('./RelatedArtifact');
const RequestGroup_Condition = require('./RequestGroup_Condition');
const RequestGroup_RelatedAction = require('./RequestGroup_RelatedAction');
const Period = require('./Period');
const Duration = require('./Duration');
const Range = require('./Range');
const Timing = require('./Timing');
const Reference = require('./Reference');
const Coding = require('./Coding');

class RequestGroup_Action extends BackboneElement {

	constructor ( opts ) {
		super( opts );
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'RequestGroup_Action';
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

	// Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
	get documentation () {
		return this._documentation;
	}

	set documentation ( new_value ) {
		this._documentation = Array.isArray(new_value) ? new_value.map(val => new RelatedArtifact(val)) : [new RelatedArtifact(new_value)];
	}

	// An expression that describes applicability criteria, or start/stop conditions for the action.
	get condition () {
		return this._condition;
	}

	set condition ( new_value ) {
		this._condition = Array.isArray(new_value) ? new_value.map(val => new RequestGroup_Condition(val)) : [new RequestGroup_Condition(new_value)];
	}

	// A relationship to another action such as "before" or "30-60 minutes after start of".
	get relatedAction () {
		return this._relatedAction;
	}

	set relatedAction ( new_value ) {
		this._relatedAction = Array.isArray(new_value) ? new_value.map(val => new RequestGroup_RelatedAction(val)) : [new RequestGroup_RelatedAction(new_value)];
	}

	// An optional value describing when the action should be performed.
	get timingDateTime () {
		return this._timingDateTime;
	}

	set timingDateTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
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

	// The participant that should perform or be responsible for this action.
	get participant () {
		return this._participant;
	}

	set participant ( new_value ) {
		this._participant = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
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
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field groupingBehavior`);
		}
		this._groupingBehavior = new_value;
	}

	// Defines the selection behavior for the action and its children.
	get selectionBehavior () {
		return this._selectionBehavior;
	}

	set selectionBehavior ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field selectionBehavior`);
		}
		this._selectionBehavior = new_value;
	}

	// Defines the requiredness behavior for the action.
	get requiredBehavior () {
		return this._requiredBehavior;
	}

	set requiredBehavior ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field requiredBehavior`);
		}
		this._requiredBehavior = new_value;
	}

	// Defines whether the action should usually be preselected.
	get precheckBehavior () {
		return this._precheckBehavior;
	}

	set precheckBehavior ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field precheckBehavior`);
		}
		this._precheckBehavior = new_value;
	}

	// Defines whether the action can be selected multiple times.
	get cardinalityBehavior () {
		return this._cardinalityBehavior;
	}

	set cardinalityBehavior ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field cardinalityBehavior`);
		}
		this._cardinalityBehavior = new_value;
	}

	// The resource that is the target of the action (e.g. CommunicationRequest).
	get resource () {
		return this._resource;
	}

	set resource ( new_value ) {
		this._resource = new Reference(new_value);
	}

	// Sub actions.
	get action () {
		return this._action;
	}

	set action ( new_value ) {
		this._action = Array.isArray(new_value) ? new_value.map(val => new RequestGroup_Action(val)) : [new RequestGroup_Action(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			label: this._label,
			title: this._title,
			description: this._description,
			textEquivalent: this._textEquivalent,
			code: this._code && this._code.map(v => v.toJSON()),
			documentation: this._documentation && this._documentation.map(v => v.toJSON()),
			condition: this._condition && this._condition.map(v => v.toJSON()),
			relatedAction: this._relatedAction && this._relatedAction.map(v => v.toJSON()),
			timingDateTime: this._timingDateTime,
			timingPeriod: this._timingPeriod && this._timingPeriod.toJSON(),
			timingDuration: this._timingDuration && this._timingDuration.toJSON(),
			timingRange: this._timingRange && this._timingRange.toJSON(),
			timingTiming: this._timingTiming && this._timingTiming.toJSON(),
			participant: this._participant && this._participant.map(v => v.toJSON()),
			type: this._type && this._type.toJSON(),
			groupingBehavior: this._groupingBehavior,
			selectionBehavior: this._selectionBehavior,
			requiredBehavior: this._requiredBehavior,
			precheckBehavior: this._precheckBehavior,
			cardinalityBehavior: this._cardinalityBehavior,
			resource: this._resource && this._resource.toJSON(),
			action: this._action && this._action.map(v => v.toJSON())
		});
	}

}

module.exports = RequestGroup_Action;
