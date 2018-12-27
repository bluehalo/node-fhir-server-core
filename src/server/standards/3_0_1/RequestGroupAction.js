const BackboneElement = require('./BackboneElement');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class RequestGroupAction extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'RequestGroupAction';
		Object.assign(this, opt);
	}

	// This is a RequestGroupAction resource
	static get __resourceType() {
		return 'RequestGroupAction';
	}

	// A user-visible label for the action.
	get label() {
		return this.__label;
	}

	set label(new_value) {
		this.__label = new_value;
	}

	// The title of the action displayed to a user.
	get title() {
		return this.__title;
	}

	set title(new_value) {
		this.__title = new_value;
	}

	// A short description of the action used to provide a summary to display to the user.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that may not be capable of interpreting it dynamically.
	get textEquivalent() {
		return this.__textEquivalent;
	}

	set textEquivalent(new_value) {
		this.__textEquivalent = new_value;
	}

	// A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a the section of a documentation template.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
	get documentation() {
		return this.__documentation;
	}

	set documentation(new_value) {
		const RelatedArtifact = require('./RelatedArtifact');
		this.__documentation = Array.isArray(new_value)
			? new_value.map(val => new RelatedArtifact(val))
			: [new RelatedArtifact(new_value)];
	}

	// An expression that describes applicability criteria, or start/stop conditions for the action.
	get condition() {
		return this.__condition;
	}

	set condition(new_value) {
		const RequestGroupActionCondition = require('./RequestGroupActionCondition');
		this.__condition = Array.isArray(new_value)
			? new_value.map(val => new RequestGroupActionCondition(val))
			: [new RequestGroupActionCondition(new_value)];
	}

	// A relationship to another action such as \'before\' or \'30-60 minutes after start of\'.
	get relatedAction() {
		return this.__relatedAction;
	}

	set relatedAction(new_value) {
		const RequestGroupActionRelatedAction = require('./RequestGroupActionRelatedAction');
		this.__relatedAction = Array.isArray(new_value)
			? new_value.map(val => new RequestGroupActionRelatedAction(val))
			: [new RequestGroupActionRelatedAction(new_value)];
	}

	// An optional value describing when the action should be performed.
	get timingDateTime() {
		return this.__timingDateTime;
	}

	set timingDateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field timingDateTime`);
		}
		this.__timingDateTime = new_value;
	}

	// An optional value describing when the action should be performed.
	get timingPeriod() {
		return this.__timingPeriod;
	}

	set timingPeriod(new_value) {
		const Period = require('./Period');
		this.__timingPeriod = new Period(new_value);
	}

	// An optional value describing when the action should be performed.
	get timingDuration() {
		return this.__timingDuration;
	}

	set timingDuration(new_value) {
		const Duration = require('./Duration');
		this.__timingDuration = new Duration(new_value);
	}

	// An optional value describing when the action should be performed.
	get timingRange() {
		return this.__timingRange;
	}

	set timingRange(new_value) {
		const Range = require('./Range');
		this.__timingRange = new Range(new_value);
	}

	// An optional value describing when the action should be performed.
	get timingTiming() {
		return this.__timingTiming;
	}

	set timingTiming(new_value) {
		const Timing = require('./Timing');
		this.__timingTiming = new Timing(new_value);
	}

	// The participant that should perform or be responsible for this action.
	get participant() {
		return this.__participant;
	}

	set participant(new_value) {
		const Reference = require('./Reference');
		this.__participant = Array.isArray(new_value)
			? new_value.map(val => new Reference(val))
			: [new Reference(new_value)];
	}

	// The type of action to perform (create, update, remove).
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const Coding = require('./Coding');
		this.__type = new Coding(new_value);
	}

	// Defines the grouping behavior for the action and its children.
	get groupingBehavior() {
		return this.__groupingBehavior;
	}

	set groupingBehavior(new_value) {
		this.__groupingBehavior = new_value;
	}

	// Defines the selection behavior for the action and its children.
	get selectionBehavior() {
		return this.__selectionBehavior;
	}

	set selectionBehavior(new_value) {
		this.__selectionBehavior = new_value;
	}

	// Defines the requiredness behavior for the action.
	get requiredBehavior() {
		return this.__requiredBehavior;
	}

	set requiredBehavior(new_value) {
		this.__requiredBehavior = new_value;
	}

	// Defines whether the action should usually be preselected.
	get precheckBehavior() {
		return this.__precheckBehavior;
	}

	set precheckBehavior(new_value) {
		this.__precheckBehavior = new_value;
	}

	// Defines whether the action can be selected multiple times.
	get cardinalityBehavior() {
		return this.__cardinalityBehavior;
	}

	set cardinalityBehavior(new_value) {
		this.__cardinalityBehavior = new_value;
	}

	// The resource that is the target of the action (e.g. CommunicationRequest).
	get resource() {
		return this.__resource;
	}

	set resource(new_value) {
		const Reference = require('./Reference');
		this.__resource = new Reference(new_value);
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			label: this.__label,
			title: this.__title,
			description: this.__description,
			textEquivalent: this.__textEquivalent,
			code: this.__code && this.__code.map(v => v.toJSON()),
			documentation: this.__documentation && this.__documentation.map(v => v.toJSON()),
			condition: this.__condition && this.__condition.map(v => v.toJSON()),
			relatedAction: this.__relatedAction && this.__relatedAction.map(v => v.toJSON()),
			timingDateTime: this.__timingDateTime,
			timingPeriod: this.__timingPeriod && this.__timingPeriod.toJSON(),
			timingDuration: this.__timingDuration && this.__timingDuration.toJSON(),
			timingRange: this.__timingRange && this.__timingRange.toJSON(),
			timingTiming: this.__timingTiming && this.__timingTiming.toJSON(),
			participant: this.__participant && this.__participant.map(v => v.toJSON()),
			type: this.__type && this.__type.toJSON(),
			groupingBehavior: this.__groupingBehavior,
			selectionBehavior: this.__selectionBehavior,
			requiredBehavior: this.__requiredBehavior,
			precheckBehavior: this.__precheckBehavior,
			cardinalityBehavior: this.__cardinalityBehavior,
			resource: this.__resource && this.__resource.toJSON(),
		});
	}
}

module.exports = RequestGroupAction;
