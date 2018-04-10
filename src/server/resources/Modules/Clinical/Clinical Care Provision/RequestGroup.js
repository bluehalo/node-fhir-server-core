const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Reference = require('./types/Reference');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Annotation = require('./types/Annotation');
const RelatedArtifact = require('./types/RelatedArtifact');
const Period = require('./types/Period');
const Range = require('./types/Range');
const Timing = require('./types/Timing');
const Coding = require('./types/Coding');

class RelatedAction {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// actionId		1..1	id	What action this is related to
	set actionId(actionId) {
		this._actionId = actionId;
	}

	get actionId() {
		return this._actionId;
	}

	// relationship		1..1	code	before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end
	// ActionRelationshipType (Required)
	set relationship(relationship) {
		this._relationship = new Code(relationship);
	}

	get relationship() {
		return this._relationship;
	}

	// offset[x]		0..1		Time offset for the relationship
	// offsetDuration			Duration
	set offsetDuration(offsetDuration) {
		this._offsetDuration = offsetDuration;
	}

	get offsetDuration() {
		return this._offsetDuration;
	}

	// offsetRange			Range
	set offsetRange(offsetRange) {
		this._offsetRange = new Range(offsetRange);
	}

	get offsetRange() {
		return this._offsetRange;
	}

	toJSON() {
		return {
			actionId: this._actionId,
			relationship: this._relationship,
			offsetDuration: this._offsetDuration,
			offsetRange: this._offsetRange,
		};
	}
}

class Condition {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// kind		1..1	code	applicability | start | stop
	// ActionConditionKind (Required)
	set kind(kind) {
		this._kind = new Code(kind);
	}

	get kind() {
		return this._kind;
	}

	// description		0..1	string	Natural language description of the condition
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// language		0..1	string	Language of the expression
	set language(language) {
		this._language = language;
	}

	get language() {
		return this._language;
	}

	// expression		0..1	string	Boolean-valued expression
	set expression(expression) {
		this._expression = expression;
	}

	get expression() {
		return this._expression;
	}

	// relatedAction		0..*	BackboneElement	Relationship to another action
	set relatedAction(relatedAction) {
		if (Array.isArray(relatedAction)) {
			this._relatedAction = relatedAction.map((i) => new RelatedAction(i));
		} else {
			this._relatedAction = [new RelatedAction(relatedAction)];
		}
	}

	get relatedAction() {
		return this._relatedAction;
	}

	toJSON() {
		return {
			kind: this._kind,
			description: this._description,
			language: this._language,
			expression: this._expression,
			relatedAction: this._relatedAction,
		};
	}
}

class Action {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// label		0..1	string	User-visible label for the action (e.g. 1. or A.)
	set label(label) {
		this._label = label;
	}

	get label() {
		return this._label;
	}

	// title		0..1	string	User-visible title
	set title(title) {
		this._title = title;
	}

	get title() {
		return this._title;
	}

	// description	Σ	0..1	string	Short description of the action
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// textEquivalent	Σ	0..1	string	Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system
	set textEquivalent(textEquivalent) {
		this._textEquivalent = textEquivalent;
	}

	get textEquivalent() {
		return this._textEquivalent;
	}

	// code		0..*	CodeableConcept	Code representing the meaning of the action or sub-actions
	set code(code) {
		if (Array.isArray(code)) {
			this._code = code.map((i) => new CodeableConcept(i));
		} else {
			this._code = [new CodeableConcept(code)];
		}
	}

	get code() {
		return this._code;
	}

	// documentation		0..*	RelatedArtifact	Supporting documentation for the intended performer of the action
	set documentation(documentation) {
		if (Array.isArray(documentation)) {
			this._documentation = documentation.map((i) => new RelatedArtifact(i));
		} else {
			this._documentation = [new RelatedArtifact(documentation)];
		}
	}

	get documentation() {
		return this._documentation;
	}

	// condition		0..*	BackboneElement	Whether or not the action is applicable
	set condition(condition) {
		if (Array.isArray(condition)) {
			this._condition = condition.map((i) => new Condition(i));
		} else {
			this._condition = [new Condition(condition)];
		}
	}

	get condition() {
		return this._condition;
	}

	// timing[x]		0..1		When the action should take place
	// timingDateTime			dateTime
	set timingDateTime(timingDateTime) {
		this._timingDateTime = timingDateTime;
	}

	get timingDateTime() {
		return this._timingDateTime;
	}

	// timingPeriod			Period
	set timingPeriod(timingPeriod) {
		this._timingPeriod = new Period(timingPeriod);
	}

	get timingPeriod() {
		return this._timingPeriod;
	}

	// timingDuration			Duration
	set timingDuration(timingDuration) {
		this._timingDuration = timingDuration;
	}

	get timingDuration() {
		return this._timingDuration;
	}

	// timingRange			Range
	set timingRange(timingRange) {
		this._timingRange = new Range(timingRange);
	}

	get timingRange() {
		return this._timingRange;
	}

	// timingTiming			Timing
	set timingTiming(timingTiming) {
		this._timingTiming = new Timing(timingTiming);
	}

	get timingTiming() {
		return this._timingTiming;
	}

	// participant		0..*	Reference(Patient | Person | Practitioner | RelatedPerson)	Who should perform the action
	set participant(participant) {
		if (Array.isArray(participant)) {
			this._participant = participant.map((i) => new Reference(i));
		} else {
			this._participant = [new Reference(participant)];
		}
	}

	get participant() {
		return this._participant;
	}

	// type		0..1	Coding	create | update | remove | fire-event
	// ActionType (Extensible)
	set type(type) {
		this._type = new Coding(type);
	}

	get type() {
		return this._type;
	}

	// groupingBehavior		0..1	code	visual-group | logical-group | sentence-group
	// ActionGroupingBehavior (Required)
	set groupingBehavior(groupingBehavior) {
		this._groupingBehavior = new Code(groupingBehavior);
	}

	get groupingBehavior() {
		return this._groupingBehavior;
	}

	// selectionBehavior		0..1	code	any | all | all-or-none | exactly-one | at-most-one | one-or-more
	// ActionSelectionBehavior (Required)
	set selectionBehavior(selectionBehavior) {
		this._selectionBehavior = new Code(selectionBehavior);
	}

	get selectionBehavior() {
		return this._selectionBehavior;
	}

	// requiredBehavior		0..1	code	must | could | must-unless-documented
	// ActionRequiredBehavior (Required)
	set requiredBehavior(requiredBehavior) {
		this._requiredBehavior = new Code(requiredBehavior);
	}

	get requiredBehavior() {
		return this._requiredBehavior;
	}

	// precheckBehavior		0..1	code	yes | no
	// ActionPrecheckBehavior (Required)
	set precheckBehavior(precheckBehavior) {
		this._precheckBehavior = new Code(precheckBehavior);
	}

	get precheckBehavior() {
		return this._precheckBehavior;
	}

	// cardinalityBehavior		0..1	code	single | multiple
	// ActionCardinalityBehavior (Required)
	set cardinalityBehavior(cardinalityBehavior) {
		this._cardinalityBehavior = new Code(cardinalityBehavior);
	}

	get cardinalityBehavior() {
		return this._cardinalityBehavior;
	}

	// resource	I	0..1	Reference(Any)	The target of the action
	set resource(resource) {
		this._resource = new Reference(resource);
	}

	get resource() {
		return this._resource;
	}

	// action	I	0..*	see action	Sub action
	set action(action) {
		this._action = [].concat(action);
	}

	get action() {
		return this._action;
	}

	toJSON() {
		return {
			label: this._label,
			title: this._title,
			description: this._description,
			textEquivalent: this._textEquivalent,
			code: this._code,
			documentation: this._documentation,
			condition: this._condition,
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
			resource: this._resource,
			action: this._action,
		};
	}
}

class RequestGroup extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'RequestGroup';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	Business identifier
	set identifier(identifier) {
		if (Array.isArray(identifier)) {
			this._identifier = identifier.map((i) => new Identifier(i));
		} else {
			this._identifier = [new Identifier(identifier)];
		}
	}

	get identifier() {
		return this._identifier;
	}

	// definition		0..*	Reference(Any)	Instantiates protocol or definition
	set definition(definition) {
		if (Array.isArray(definition)) {
			this._definition = definition.map((i) => new Reference(i));
		} else {
			this._definition = [new Reference(definition)];
		}
	}

	get definition() {
		return this._definition;
	}

	// basedOn		0..*	Reference(Any)	Fulfills plan, proposal, or order
	set basedOn(basedOn) {
		if (Array.isArray(basedOn)) {
			this._basedOn = basedOn.map((i) => new Reference(i));
		} else {
			this._basedOn = [new Reference(basedOn)];
		}
	}

	get basedOn() {
		return this._basedOn;
	}

	// replaces		0..*	Reference(Any)	Request(s) replaced by this request
	set replaces(replaces) {
		if (Array.isArray(replaces)) {
			this._replaces = replaces.map((i) => new Reference(i));
		} else {
			this._replaces = [new Reference(replaces)];
		}
	}

	get replaces() {
		return this._replaces;
	}

	// groupIdentifier	Σ	0..1	Identifier	Composite request this is part of
	set groupIdentifier(groupIdentifier) {
		this._groupIdentifier = new Identifier(groupIdentifier);
	}

	get groupIdentifier() {
		return this._groupIdentifier;
	}

	// status	?!Σ	1..1	code	draft | active | suspended | cancelled | completed | entered-in-error | unknown
	// RequestStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// intent	?!Σ	1..1	code	proposal | plan | order
	// RequestIntent (Required)
	set intent(intent) {
		this._intent = new Code(intent);
	}

	get intent() {
		return this._intent;
	}

	// priority	Σ	0..1	code	routine | urgent | asap | stat
	// RequestPriority (Required)
	set priority(priority) {
		this._priority = new Code(priority);
	}

	get priority() {
		return this._priority;
	}

	// subject		0..1	Reference(Patient | Group)	Who the request group is about
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// context		0..1	Reference(Encounter | EpisodeOfCare)	Encounter or Episode for the request group
	set context(context) {
		this._context = new Reference(context);
	}

	get context() {
		return this._context;
	}

	// authoredOn		0..1	dateTime	When the request group was authored
	set authoredOn(authoredOn) {
		this._authoredOn = authoredOn;
	}

	get authoredOn() {
		return this._authoredOn;
	}

	// author		0..1	Reference(Device | Practitioner)	Device or practitioner that authored the request group
	set author(author) {
		this._author = new Reference(author);
	}

	get author() {
		return this._author;
	}

	// reason[x]		0..1		Reason for the request group
	// reasonCodeableConcept			CodeableConcept
	set reasonCodeableConcept(reasonCodeableConcept) {
		this._reasonCodeableConcept = new CodeableConcept(reasonCodeableConcept);
	}

	get reasonCodeableConcept() {
		return this._reasonCodeableConcept;
	}

	// reasonReference			Reference
	set reasonReference(reasonReference) {
		this._reasonReference = new Reference(reasonReference);
	}

	get reasonReference() {
		return this._reasonReference;
	}

	// note		0..*	Annotation	Additional notes about the response
	set note(note) {
		if (Array.isArray(note)) {
			this._note = note.map((i) => new Annotation(i));
		} else {
			this._note = [new Annotation(note)];
		}
	}

	get note() {
		return this._note;
	}

	// action	I	0..*	BackboneElement	Proposed actions, if any
	// + Must have resource or action but not both
	set action(action) {
		if (Array.isArray(action)) {
			this._action = action.map((i) => new Action(i));
		} else {
			this._action = [new Action(action)];
		}
	}

	get action() {
		return this._action;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			definition: this._definition,
			basedOn: this._basedOn,
			replaces: this._replaces,
			groupIdentifier: this._groupIdentifier,
			status: this._status,
			intent: this._intent,
			priority: this._priority,
			subject: this._subject,
			context: this._context,
			authoredOn: this._authoredOn,
			author: this._author,
			reasonCodeableConcept: this._reasonCodeableConcept,
			reasonReference: this._reasonReference,
			note: this._note,
			action: this._action,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.RequestGroup = RequestGroup;
module.exports.Action = Action;
module.exports.Condition = Condition;
module.exports.RelatedAction = RelatedAction;
