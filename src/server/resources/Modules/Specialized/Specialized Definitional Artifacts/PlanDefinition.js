const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const CodeableConcept = require('./types/CodeableConcept');
const Code = require('./types/Code');
const Period = require('./types/Period');
const UsageContext = require('./types/UsageContext');
const Contributor = require('./types/Contributor');
const ContactDetail = require('./types/ContactDetail');
const RelatedArtifact = require('./types/RelatedArtifact');
const Reference = require('./types/Reference');
const Quantity = require('./types/Quantity');
const Range = require('./types/Range');
const TriggerDefinition = require('./types/TriggerDefinition');
const DataRequirement = require('./types/DataRequirement');
const Timing = require('./types/Timing');
const Coding = require('./types/Coding');

class DynamicValue {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// description		0..1	string	Natural language description of the dynamic value
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// path		0..1	string	The path to the element to be set dynamically
	set path(path) {
		this._path = path;
	}

	get path() {
		return this._path;
	}

	// language		0..1	string	Language of the expression
	set language(language) {
		this._language = language;
	}

	get language() {
		return this._language;
	}

	// expression		0..1	string	An expression that provides the dynamic value for the customization
	set expression(expression) {
		this._expression = expression;
	}

	get expression() {
		return this._expression;
	}

	toJSON() {
		return {
			description: this._description,
			path: this._path,
			language: this._language,
			expression: this._expression,
		};
	}
}

class Participant {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// type		1..1	code	patient | practitioner | related-person
	// ActionParticipantType (Required)
	set type(type) {
		this._type = new Code(type);
	}

	get type() {
		return this._type;
	}

	// role		0..1	CodeableConcept	E.g. Nurse, Surgeon, Parent, etc
	// ActionParticipantRole (Example)
	set role(role) {
		this._role = new CodeableConcept(role);
	}

	get role() {
		return this._role;
	}

	toJSON() {
		return {
			type: this._type,
			role: this._role,
		};
	}
}

class RelatedAction {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// actionId		1..1	id	What action is this related to
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

	toJSON() {
		return {
			kind: this._kind,
			description: this._description,
			language: this._language,
			expression: this._expression,
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

	// description		0..1	string	Short description of the action
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// textEquivalent		0..1	string	Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system
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

	// reason		0..*	CodeableConcept	Why the action should be performed
	set reason(reason) {
		if (Array.isArray(reason)) {
			this._reason = reason.map((i) => new CodeableConcept(i));
		} else {
			this._reason = [new CodeableConcept(reason)];
		}
	}

	get reason() {
		return this._reason;
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

	// goalId		0..*	id	What goals this action supports
	set goalId(goalId) {
		this._goalId = [].concat(goalId);
	}

	get goalId() {
		return this._goalId;
	}

	// triggerDefinition		0..*	TriggerDefinition	When the action should be triggered
	set triggerDefinition(triggerDefinition) {
		if (Array.isArray(triggerDefinition)) {
			this._triggerDefinition = triggerDefinition.map((i) => new TriggerDefinition(i));
		} else {
			this._triggerDefinition = [new TriggerDefinition(triggerDefinition)];
		}
	}

	get triggerDefinition() {
		return this._triggerDefinition;
	}

	// input		0..*	DataRequirement	Input data requirements
	set input(input) {
		if (Array.isArray(input)) {
			this._input = input.map((i) => new DataRequirement(i));
		} else {
			this._input = [new DataRequirement(input)];
		}
	}

	get input() {
		return this._input;
	}

	// output		0..*	DataRequirement	Output data definition
	set output(output) {
		if (Array.isArray(output)) {
			this._output = output.map((i) => new DataRequirement(i));
		} else {
			this._output = [new DataRequirement(output)];
		}
	}

	get output() {
		return this._output;
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

	// type		0..1	Coding	create | update | remove | fire-event
	// ActionType (Required)
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

	// definition		0..1	Reference(ActivityDefinition | PlanDefinition)	Description of the activity to be performed
	set definition(definition) {
		this._definition = new Reference(definition);
	}

	get definition() {
		return this._definition;
	}

	// transform		0..1	Reference(StructureMap)	Transform to apply the template
	set transform(transform) {
		this._transform = new Reference(transform);
	}

	get transform() {
		return this._transform;
	}

	// action		0..*	see action	A sub-action
	set action(action) {
		this._action = [].concat(action);
	}

	get action() {
		return this._action;
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

	// participant		0..*	BackboneElement	Who should participate in the action
	set participant(participant) {
		if (Array.isArray(participant)) {
			this._participant = participant.map((i) => new Participant(i));
		} else {
			this._participant = [new Participant(participant)];
		}
	}

	get participant() {
		return this._participant;
	}

	// dynamicValue		0..*	BackboneElement	Dynamic aspects of the definition
	set dynamicValue(dynamicValue) {
		if (Array.isArray(dynamicValue)) {
			this._dynamicValue = dynamicValue.map((i) => new DynamicValue(i));
		} else {
			this._dynamicValue = [new DynamicValue(dynamicValue)];
		}
	}

	get dynamicValue() {
		return this._dynamicValue;
	}

	toJSON() {
		return {
			label: this._label,
			title: this._title,
			description: this._description,
			textEquivalent: this._textEquivalent,
			code: this._code,
			reason: this._reason,
			documentation: this._documentation,
			goalId: this._goalId,
			triggerDefinition: this._triggerDefinition,
			input: this._input,
			output: this._output,
			timingDateTime: this._timingDateTime,
			timingPeriod: this._timingPeriod,
			timingDuration: this._timingDuration,
			timingRange: this._timingRange,
			timingTiming: this._timingTiming,
			type: this._type,
			groupingBehavior: this._groupingBehavior,
			selectionBehavior: this._selectionBehavior,
			requiredBehavior: this._requiredBehavior,
			precheckBehavior: this._precheckBehavior,
			cardinalityBehavior: this._cardinalityBehavior,
			definition: this._definition,
			transform: this._transform,
			action: this._action,
			condition: this._condition,
			relatedAction: this._relatedAction,
			participant: this._participant,
			dynamicValue: this._dynamicValue,
		};
	}
}

class Target {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// measure		0..1	CodeableConcept	The parameter whose value is to be tracked
	// LOINC Codes (Example)
	set measure(measure) {
		this._measure = new CodeableConcept(measure);
	}

	get measure() {
		return this._measure;
	}

	// detail[x]		0..1		The target value to be achieved
	// detailQuantity			Quantity
	set detailQuantity(detailQuantity) {
		this._detailQuantity = new Quantity(detailQuantity);
	}

	get detailQuantity() {
		return this._detailQuantity;
	}

	// detailRange			Range
	set detailRange(detailRange) {
		this._detailRange = new Range(detailRange);
	}

	get detailRange() {
		return this._detailRange;
	}

	// detailCodeableConcept			CodeableConcept
	set detailCodeableConcept(detailCodeableConcept) {
		this._detailCodeableConcept = new CodeableConcept(detailCodeableConcept);
	}

	get detailCodeableConcept() {
		return this._detailCodeableConcept;
	}

	// due		0..1	Duration	Reach goal within
	set due(due) {
		this._due = due;
	}

	get due() {
		return this._due;
	}

	toJSON() {
		return {
			measure: this._measure,
			detailQuantity: this._detailQuantity,
			detailRange: this._detailRange,
			detailCodeableConcept: this._detailCodeableConcept,
			due: this._due,
		};
	}
}

class Goal {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// category		0..1	CodeableConcept	E.g. Treatment, dietary, behavioral, etc
	// GoalCategory (Example)
	set category(category) {
		this._category = new CodeableConcept(category);
	}

	get category() {
		return this._category;
	}

	// description		1..1	CodeableConcept	Code or text describing the goal
	// SNOMED CT Clinical Findings (Example)
	set description(description) {
		this._description = new CodeableConcept(description);
	}

	get description() {
		return this._description;
	}

	// priority		0..1	CodeableConcept	high-priority | medium-priority | low-priority
	// GoalPriority (Preferred)
	set priority(priority) {
		this._priority = new CodeableConcept(priority);
	}

	get priority() {
		return this._priority;
	}

	// start		0..1	CodeableConcept	When goal pursuit begins
	// GoalStartEvent (Example)
	set start(start) {
		this._start = new CodeableConcept(start);
	}

	get start() {
		return this._start;
	}

	// addresses		0..*	CodeableConcept	What does the goal address
	// Condition/Problem/Diagnosis Codes (Example)
	set addresses(addresses) {
		if (Array.isArray(addresses)) {
			this._addresses = addresses.map((i) => new CodeableConcept(i));
		} else {
			this._addresses = [new CodeableConcept(addresses)];
		}
	}

	get addresses() {
		return this._addresses;
	}

	// documentation		0..*	RelatedArtifact	Supporting documentation for the goal
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

	// target		0..*	BackboneElement	Target outcome for the goal
	set target(target) {
		if (Array.isArray(target)) {
			this._target = target.map((i) => new Target(i));
		} else {
			this._target = [new Target(target)];
		}
	}

	get target() {
		return this._target;
	}

	toJSON() {
		return {
			category: this._category,
			description: this._description,
			priority: this._priority,
			start: this._start,
			addresses: this._addresses,
			documentation: this._documentation,
			target: this._target,
		};
	}
}

class PlanDefinition extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'PlanDefinition';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// url	Σ	0..1	uri	Logical URI to reference this plan definition (globally unique)
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// identifier	Σ	0..*	Identifier	Additional identifier for the plan definition
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

	// version	Σ	0..1	string	Business version of the plan definition
	set version(version) {
		this._version = version;
	}

	get version() {
		return this._version;
	}

	// name	Σ	0..1	string	Name for this plan definition (computer friendly)
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// title	Σ	0..1	string	Name for this plan definition (human friendly)
	set title(title) {
		this._title = title;
	}

	get title() {
		return this._title;
	}

	// type	Σ	0..1	CodeableConcept	order-set | protocol | eca-rule
	// PlanDefinitionType (Extensible)
	set type(type) {
		this._type = new CodeableConcept(type);
	}

	get type() {
		return this._type;
	}

	// status	?!Σ	1..1	code	draft | active | retired | unknown
	// PublicationStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// experimental	?!Σ	0..1	boolean	For testing purposes, not real usage
	set experimental(experimental) {
		this._experimental = experimental;
	}

	get experimental() {
		return this._experimental;
	}

	// date	Σ	0..1	dateTime	Date this was last changed
	set date(date) {
		this._date = date;
	}

	get date() {
		return this._date;
	}

	// publisher	Σ	0..1	string	Name of the publisher (organization or individual)
	set publisher(publisher) {
		this._publisher = publisher;
	}

	get publisher() {
		return this._publisher;
	}

	// description	Σ	0..1	markdown	Natural language description of the plan definition
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// purpose		0..1	markdown	Why this plan definition is defined
	set purpose(purpose) {
		this._purpose = purpose;
	}

	get purpose() {
		return this._purpose;
	}

	// usage		0..1	string	Describes the clinical usage of the asset
	set usage(usage) {
		this._usage = usage;
	}

	get usage() {
		return this._usage;
	}

	// approvalDate		0..1	date	When the plan definition was approved by publisher
	set approvalDate(approvalDate) {
		this._approvalDate = approvalDate;
	}

	get approvalDate() {
		return this._approvalDate;
	}

	// lastReviewDate		0..1	date	When the plan definition was last reviewed
	set lastReviewDate(lastReviewDate) {
		this._lastReviewDate = lastReviewDate;
	}

	get lastReviewDate() {
		return this._lastReviewDate;
	}

	// effectivePeriod	Σ	0..1	Period	When the plan definition is expected to be used
	set effectivePeriod(effectivePeriod) {
		this._effectivePeriod = new Period(effectivePeriod);
	}

	get effectivePeriod() {
		return this._effectivePeriod;
	}

	// useContext	Σ	0..*	UsageContext	Context the content is intended to support
	set useContext(useContext) {
		if (Array.isArray(useContext)) {
			this._useContext = useContext.map((i) => new UsageContext(i));
		} else {
			this._useContext = [new UsageContext(useContext)];
		}
	}

	get useContext() {
		return this._useContext;
	}

	// jurisdiction	Σ	0..*	CodeableConcept	Intended jurisdiction for plan definition (if applicable)
	// Jurisdiction ValueSet (Extensible)
	set jurisdiction(jurisdiction) {
		if (Array.isArray(jurisdiction)) {
			this._jurisdiction = jurisdiction.map((i) => new CodeableConcept(i));
		} else {
			this._jurisdiction = [new CodeableConcept(jurisdiction)];
		}
	}

	get jurisdiction() {
		return this._jurisdiction;
	}

	// topic		0..*	CodeableConcept	E.g. Education, Treatment, Assessment, etc
	// DefinitionTopic (Example)
	set topic(topic) {
		if (Array.isArray(topic)) {
			this._topic = topic.map((i) => new CodeableConcept(i));
		} else {
			this._topic = [new CodeableConcept(topic)];
		}
	}

	get topic() {
		return this._topic;
	}

	// contributor		0..*	Contributor	A content contributor
	set contributor(contributor) {
		if (Array.isArray(contributor)) {
			this._contributor = contributor.map((i) => new Contributor(i));
		} else {
			this._contributor = [new Contributor(contributor)];
		}
	}

	get contributor() {
		return this._contributor;
	}

	// contact	Σ	0..*	ContactDetail	Contact details for the publisher
	set contact(contact) {
		if (Array.isArray(contact)) {
			this._contact = contact.map((i) => new ContactDetail(i));
		} else {
			this._contact = [new ContactDetail(contact)];
		}
	}

	get contact() {
		return this._contact;
	}

	// copyright		0..1	markdown	Use and/or publishing restrictions
	set copyright(copyright) {
		this._copyright = copyright;
	}

	get copyright() {
		return this._copyright;
	}

	// relatedArtifact		0..*	RelatedArtifact	Related artifacts for the asset
	set relatedArtifact(relatedArtifact) {
		if (Array.isArray(relatedArtifact)) {
			this._relatedArtifact = relatedArtifact.map((i) => new RelatedArtifact(i));
		} else {
			this._relatedArtifact = [new RelatedArtifact(relatedArtifact)];
		}
	}

	get relatedArtifact() {
		return this._relatedArtifact;
	}

	// library		0..*	Reference(Library)	Logic used by the plan definition
	set library(library) {
		if (Array.isArray(library)) {
			this._library = library.map((i) => new Reference(i));
		} else {
			this._library = [new Reference(library)];
		}
	}

	get library() {
		return this._library;
	}

	// goal		0..*	BackboneElement	What the plan is trying to accomplish
	set goal(goal) {
		if (Array.isArray(goal)) {
			this._goal = goal.map((i) => new Goal(i));
		} else {
			this._goal = [new Goal(goal)];
		}
	}

	get goal() {
		return this._goal;
	}

	// action		0..*	BackboneElement	Action defined by the plan
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
			url: this._url,
			identifier: this._identifier,
			version: this._version,
			name: this._name,
			title: this._title,
			type: this._type,
			status: this._status,
			experimental: this._experimental,
			date: this._date,
			publisher: this._publisher,
			description: this._description,
			purpose: this._purpose,
			usage: this._usage,
			approvalDate: this._approvalDate,
			lastReviewDate: this._lastReviewDate,
			effectivePeriod: this._effectivePeriod,
			useContext: this._useContext,
			jurisdiction: this._jurisdiction,
			topic: this._topic,
			contributor: this._contributor,
			contact: this._contact,
			copyright: this._copyright,
			relatedArtifact: this._relatedArtifact,
			library: this._library,
			goal: this._goal,
			action: this._action,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.PlanDefinition = PlanDefinition;
module.exports.Goal = Goal;
module.exports.Target = Target;
module.exports.Action = Action;
module.exports.Condition = Condition;
module.exports.RelatedAction = RelatedAction;
module.exports.Participant = Participant;
module.exports.DynamicValue = DynamicValue;
