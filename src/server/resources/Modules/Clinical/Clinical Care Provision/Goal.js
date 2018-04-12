const DomainResource = require('./types/DomainResource');
const Meta = require('./types/Meta');
const Code = require('./types/Code');
const Narrative = require('./types/Narrative');
const Resource = require('./types/Resource');
const Extension = require('./types/Extension');
const Identifier = require('./types/Identifier');
const CodeableConcept = require('./types/CodeableConcept');
const Reference = require('./types/Reference');
const Annotation = require('./types/Annotation');
const Quantity = require('./types/Quantity');
const Range = require('./types/Range');

class Target {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// id		0..1	string	xml:id (or equivalent in JSON)
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// extension		0..*	Extension	Additional Content defined by implementations
	set extension(extension) {
		if (Array.isArray(extension)) {
			this._extension = extension.map((i) => new Extension(i));
		} else {
			this._extension = [new Extension(extension)];
		}
	}

	get extension() {
		return this._extension;
	}

	// modifierExtension	?!Î£	0..*	Extension	Extensions that cannot be ignored
	set modifierExtension(modifierExtension) {
		if (Array.isArray(modifierExtension)) {
			this._modifierExtension = modifierExtension.map((i) => new Extension(i));
		} else {
			this._modifierExtension = [new Extension(modifierExtension)];
		}
	}

	get modifierExtension() {
		return this._modifierExtension;
	}

	// measure	Î£I	0..1	CodeableConcept	The parameter whose value is being tracked
	// Binding: LOINC Codes (example)
	set measure(measure) {
		this._measure = new CodeableConcept(measure);
	}

	get measure() {
		return this._measure;
	}

	// detail[x]	ΣI	0..1		The target value to be achieved
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

	// due[x]	Σ	0..1		Reach goal on or before
	// dueDate			date
	set dueDate(dueDate) {
		this._dueDate = dueDate;
	}

	get dueDate() {
		return this._dueDate;
	}

	// dueDuration			Duration
	set dueDuration(dueDuration) {
		this._dueDuration = dueDuration;
	}

	get dueDuration() {
		return this._dueDuration;
	}

	toJSON() {
		return {
			id: this._id,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			measure: this._measure,
			detailQuantity: this._detailQuantity,
			detailRange: this._detailRange,
			detailCodeableConcept: this._detailCodeableConcept,
			dueDate: this._dueDate,
			dueDuration: this._dueDuration,
		};
	}
}

class Goal extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Goal';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// id	Î£	0..1	id	Logical id of this artifact
	set id(id) {
		this._id = id;
	}

	get id() {
		return this._id;
	}

	// meta	Î£	0..1	Meta	Metadata about the resource
	set meta(meta) {
		this._meta = new Meta(meta);
	}

	get meta() {
		return this._meta;
	}

	// implicitRules	?!Î£	0..1	uri	A set of rules under which this content was created
	set implicitRules(implicitRules) {
		this._implicitRules = implicitRules;
	}

	get implicitRules() {
		return this._implicitRules;
	}

	// language		0..1	code	Language of the resource content
	// Binding: Common Languages (extensible)
	set language(language) {
		this._language = new Code(language);
	}

	get language() {
		return this._language;
	}

	// text	I	0..1	Narrative	Text summary of the resource, for human interpretation
	set text(text) {
		this._text = new Narrative(text);
	}

	get text() {
		return this._text;
	}

	// contained		0..*	Resource	Contained, inline Resources
	set contained(contained) {
		if (Array.isArray(contained)) {
			this._contained = contained.map((i) => new Resource(i));
		} else {
			this._contained = [new Resource(contained)];
		}
	}

	get contained() {
		return this._contained;
	}

	// extension		0..*	Extension	Additional Content defined by implementations
	set extension(extension) {
		if (Array.isArray(extension)) {
			this._extension = extension.map((i) => new Extension(i));
		} else {
			this._extension = [new Extension(extension)];
		}
	}

	get extension() {
		return this._extension;
	}

	// modifierExtension	?!	0..*	Extension	Extensions that cannot be ignored
	set modifierExtension(modifierExtension) {
		if (Array.isArray(modifierExtension)) {
			this._modifierExtension = modifierExtension.map((i) => new Extension(i));
		} else {
			this._modifierExtension = [new Extension(modifierExtension)];
		}
	}

	get modifierExtension() {
		return this._modifierExtension;
	}

	// identifier		0..*	Identifier	External Ids for this goal
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

	// status	?!SÎ£	1..1	code	proposed | accepted | planned | in-progress | on-target | ahead-of-target | behind-target | sustaining | achieved | on-hold | cancelled | entered-in-error | rejected
	// Binding: GoalStatus (required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// category	Î£	0..*	CodeableConcept	E.g. Treatment, dietary, behavioral, etc.
	// Binding: GoalCategory (example)
	set category(category) {
		if (Array.isArray(category)) {
			this._category = category.map((i) => new CodeableConcept(i));
		} else {
			this._category = [new CodeableConcept(category)];
		}
	}

	get category() {
		return this._category;
	}

	// priority	Î£	0..1	CodeableConcept	high-priority | medium-priority | low-priority
	// Binding: GoalPriority (preferred)
	set priority(priority) {
		this._priority = new CodeableConcept(priority);
	}

	get priority() {
		return this._priority;
	}

	// description	SÎ£	1..1	CodeableConcept	Code or text describing goal
	// Binding: SNOMED CT Clinical Findings (example)
	set description(description) {
		this._description = new CodeableConcept(description);
	}

	get description() {
		return this._description;
	}

	// subject	SÎ£	1..1	Reference(US Core Patient Profile)	Who this goal is intended for
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// start[x]	Σ	0..1		When goal pursuit begins
	// GoalStartEvent (Example)
	// startDate			date
	set startDate(startDate) {
		this._startDate = startDate;
	}

	get startDate() {
		return this._startDate;
	}

	// startCodeableConcept			CodeableConcept
	set startCodeableConcept(startCodeableConcept) {
		this._startCodeableConcept = new CodeableConcept(startCodeableConcept);
	}

	get startCodeableConcept() {
		return this._startCodeableConcept;
	}

	// target	I	0..1	BackboneElement	Target outcome for the goal
	// gol-1: Goal.target.measure is required if Goal.target.detail is populated
	set target(target) {
		this._target = new Target(target);
	}

	get target() {
		return this._target;
	}

	// statusDate	Î£	0..1	date	When goal status took effect
	set statusDate(statusDate) {
		this._statusDate = statusDate;
	}

	get statusDate() {
		return this._statusDate;
	}

	// statusReason		0..1	string	Reason for current status
	set statusReason(statusReason) {
		this._statusReason = statusReason;
	}

	get statusReason() {
		return this._statusReason;
	}

	// expressedBy	Î£	0..1	Reference(Patient), Reference(Practitioner), Reference(RelatedPerson)	Who's responsible for creating Goal?
	set expressedBy(expressedBy) {
		this._expressedBy = new Reference(expressedBy);
	}

	get expressedBy() {
		return this._expressedBy;
	}

	// addresses		0..*	Reference(Condition), Reference(Observation), Reference(MedicationStatement), Reference(NutritionOrder), Reference(ProcedureRequest), Reference(RiskAssessment)	Issues addressed by this goal
	set addresses(addresses) {
		if (Array.isArray(addresses)) {
			this._addresses = addresses.map((i) => new Reference(i));
		} else {
			this._addresses = [new Reference(addresses)];
		}
	}

	get addresses() {
		return this._addresses;
	}

	// note		0..*	Annotation	Comments about the goal
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

	// outcomeCode		0..*	CodeableConcept	What result was achieved regarding the goal?
	// Binding: SNOMED CT Clinical Findings (example)
	set outcomeCode(outcomeCode) {
		if (Array.isArray(outcomeCode)) {
			this._outcomeCode = outcomeCode.map((i) => new CodeableConcept(i));
		} else {
			this._outcomeCode = [new CodeableConcept(outcomeCode)];
		}
	}

	get outcomeCode() {
		return this._outcomeCode;
	}

	// outcomeReference		0..*	Reference(Observation)	Observation that resulted from goal
	set outcomeReference(outcomeReference) {
		if (Array.isArray(outcomeReference)) {
			this._outcomeReference = outcomeReference.map((i) => new Reference(i));
		} else {
			this._outcomeReference = [new Reference(outcomeReference)];
		}
	}

	get outcomeReference() {
		return this._outcomeReference;
	}

	toJSON() {
		const json = {
			id: this._id,
			meta: this._meta,
			implicitRules: this._implicitRules,
			language: this._language,
			text: this._text,
			contained: this._contained,
			extension: this._extension,
			modifierExtension: this._modifierExtension,
			identifier: this._identifier,
			status: this._status,
			category: this._category,
			priority: this._priority,
			description: this._description,
			subject: this._subject,
			startDate: this._startDate,
			startCodeableConcept: this._startCodeableConcept,
			target: this._target,
			statusDate: this._statusDate,
			statusReason: this._statusReason,
			expressedBy: this._expressedBy,
			addresses: this._addresses,
			note: this._note,
			outcomeCode: this._outcomeCode,
			outcomeReference: this._outcomeReference,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Goal = Goal;
module.exports.Target = Target;
