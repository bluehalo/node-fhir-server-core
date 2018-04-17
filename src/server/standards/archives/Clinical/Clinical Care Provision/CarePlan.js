const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Reference = require('./types/Reference');
const Code = require('./types/Code');
const CodeableConcept = require('./types/CodeableConcept');
const Period = require('./types/Period');
const Annotation = require('./types/Annotation');
const Timing = require('./types/Timing');

class Detail {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// category		0..1	CodeableConcept	diet | drug | encounter | observation | procedure | supply | other
	// CarePlanActivityCategory (Example)
	set category(category) {
		this._category = new CodeableConcept(category);
	}

	get category() {
		return this._category;
	}

	// definition		0..1	Reference(PlanDefinition | ActivityDefinition | Questionnaire)	Protocol or definition
	set definition(definition) {
		this._definition = new Reference(definition);
	}

	get definition() {
		return this._definition;
	}

	// code		0..1	CodeableConcept	Detail type of activity
	// Care Plan Activity (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// reasonCode		0..*	CodeableConcept	Why activity should be done or why activity was prohibited
	// Activity Reason (Example)
	set reasonCode(reasonCode) {
		if (Array.isArray(reasonCode)) {
			this._reasonCode = reasonCode.map((i) => new CodeableConcept(i));
		} else {
			this._reasonCode = [new CodeableConcept(reasonCode)];
		}
	}

	get reasonCode() {
		return this._reasonCode;
	}

	// reasonReference		0..*	Reference(Condition)	Condition triggering need for activity
	set reasonReference(reasonReference) {
		if (Array.isArray(reasonReference)) {
			this._reasonReference = reasonReference.map((i) => new Reference(i));
		} else {
			this._reasonReference = [new Reference(reasonReference)];
		}
	}

	get reasonReference() {
		return this._reasonReference;
	}

	// goal		0..*	Reference(Goal)	Goals this activity relates to
	set goal(goal) {
		if (Array.isArray(goal)) {
			this._goal = goal.map((i) => new Reference(i));
		} else {
			this._goal = [new Reference(goal)];
		}
	}

	get goal() {
		return this._goal;
	}

	// status	?!	1..1	code	not-started | scheduled | in-progress | on-hold | completed | cancelled | unknown
	// CarePlanActivityStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// statusReason		0..1	string	Reason for current status
	set statusReason(statusReason) {
		this._statusReason = statusReason;
	}

	get statusReason() {
		return this._statusReason;
	}

	// prohibited	?!	0..1	boolean	Do NOT do
	set prohibited(prohibited) {
		this._prohibited = prohibited;
	}

	get prohibited() {
		return this._prohibited;
	}

	// scheduled[x]		0..1		When activity is to occur
	// scheduledTiming			Timing
	set scheduledTiming(scheduledTiming) {
		this._scheduledTiming = new Timing(scheduledTiming);
	}

	get scheduledTiming() {
		return this._scheduledTiming;
	}

	// scheduledPeriod			Period
	set scheduledPeriod(scheduledPeriod) {
		this._scheduledPeriod = new Period(scheduledPeriod);
	}

	get scheduledPeriod() {
		return this._scheduledPeriod;
	}

	// scheduledString			string
	set scheduledString(scheduledString) {
		this._scheduledString = scheduledString;
	}

	get scheduledString() {
		return this._scheduledString;
	}

	// location		0..1	Reference(Location)	Where it should happen
	set location(location) {
		this._location = new Reference(location);
	}

	get location() {
		return this._location;
	}

	// performer		0..*	Reference(Practitioner | Organization | RelatedPerson | Patient | CareTeam)	Who will be responsible?
	set performer(performer) {
		if (Array.isArray(performer)) {
			this._performer = performer.map((i) => new Reference(i));
		} else {
			this._performer = [new Reference(performer)];
		}
	}

	get performer() {
		return this._performer;
	}

	// product[x]		0..1		What is to be administered/supplied
	// SNOMED CT Medication Codes (Example)
	// productCodeableConcept			CodeableConcept
	set productCodeableConcept(productCodeableConcept) {
		this._productCodeableConcept = new CodeableConcept(productCodeableConcept);
	}

	get productCodeableConcept() {
		return this._productCodeableConcept;
	}

	// productReference			Reference
	set productReference(productReference) {
		this._productReference = new Reference(productReference);
	}

	get productReference() {
		return this._productReference;
	}

	// dailyAmount		0..1	SimpleQuantity	How to consume/day?
	set dailyAmount(dailyAmount) {
		this._dailyAmount = dailyAmount;
	}

	get dailyAmount() {
		return this._dailyAmount;
	}

	// quantity		0..1	SimpleQuantity	How much to administer/supply/consume
	set quantity(quantity) {
		this._quantity = quantity;
	}

	get quantity() {
		return this._quantity;
	}

	// description		0..1	string	Extra info describing activity to perform
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	toJSON() {
		return {
			category: this._category,
			definition: this._definition,
			code: this._code,
			reasonCode: this._reasonCode,
			reasonReference: this._reasonReference,
			goal: this._goal,
			status: this._status,
			statusReason: this._statusReason,
			prohibited: this._prohibited,
			scheduledTiming: this._scheduledTiming,
			scheduledPeriod: this._scheduledPeriod,
			scheduledString: this._scheduledString,
			location: this._location,
			performer: this._performer,
			productCodeableConcept: this._productCodeableConcept,
			productReference: this._productReference,
			dailyAmount: this._dailyAmount,
			quantity: this._quantity,
			description: this._description,
		};
	}
}

class Activity {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// outcomeCodeableConcept		0..*	CodeableConcept	Results of the activity
	// Care Plan Activity Outcome (Example)
	set outcomeCodeableConcept(outcomeCodeableConcept) {
		if (Array.isArray(outcomeCodeableConcept)) {
			this._outcomeCodeableConcept = outcomeCodeableConcept.map((i) => new CodeableConcept(i));
		} else {
			this._outcomeCodeableConcept = [new CodeableConcept(outcomeCodeableConcept)];
		}
	}

	get outcomeCodeableConcept() {
		return this._outcomeCodeableConcept;
	}

	// outcomeReference		0..*	Reference(Any)	Appointment, Encounter, Procedure, etc.
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

	// progress		0..*	Annotation	Comments about the activity status/progress
	set progress(progress) {
		if (Array.isArray(progress)) {
			this._progress = progress.map((i) => new Annotation(i));
		} else {
			this._progress = [new Annotation(progress)];
		}
	}

	get progress() {
		return this._progress;
	}

	// reference	I	0..1	Reference(Appointment | CommunicationRequest | DeviceRequest | MedicationRequest | NutritionOrder | Task | ProcedureRequest | ReferralRequest | VisionPrescription | RequestGroup)	Activity details defined in specific resource
	set reference(reference) {
		this._reference = new Reference(reference);
	}

	get reference() {
		return this._reference;
	}

	// detail	I	0..1	BackboneElement	In-line definition of activity
	set detail(detail) {
		this._detail = new Detail(detail);
	}

	get detail() {
		return this._detail;
	}

	toJSON() {
		return {
			outcomeCodeableConcept: this._outcomeCodeableConcept,
			outcomeReference: this._outcomeReference,
			progress: this._progress,
			reference: this._reference,
			detail: this._detail,
		};
	}
}

class CarePlan extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'CarePlan';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// identifier	Σ	0..*	Identifier	External Ids for this plan
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

	// definition	Σ	0..*	Reference(PlanDefinition | Questionnaire)	Protocol or definition
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

	// basedOn	Σ	0..*	Reference(CarePlan)	Fulfills care plan
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

	// replaces	Σ	0..*	Reference(CarePlan)	CarePlan replaced by this CarePlan
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

	// partOf	Σ	0..*	Reference(CarePlan)	Part of referenced CarePlan
	set partOf(partOf) {
		if (Array.isArray(partOf)) {
			this._partOf = partOf.map((i) => new Reference(i));
		} else {
			this._partOf = [new Reference(partOf)];
		}
	}

	get partOf() {
		return this._partOf;
	}

	// status	?!Σ	1..1	code	draft | active | suspended | completed | entered-in-error | cancelled | unknown
	// CarePlanStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// intent	?!Σ	1..1	code	proposal | plan | order | option
	// CarePlanIntent (Required)
	set intent(intent) {
		this._intent = new Code(intent);
	}

	get intent() {
		return this._intent;
	}

	// category	Σ	0..*	CodeableConcept	Type of plan
	// Care Plan Category (Example)
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

	// title	Σ	0..1	string	Human-friendly name for the CarePlan
	set title(title) {
		this._title = title;
	}

	get title() {
		return this._title;
	}

	// description	Σ	0..1	string	Summary of nature of plan
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// subject	Σ	1..1	Reference(Patient | Group)	Who care plan is for
	set subject(subject) {
		this._subject = new Reference(subject);
	}

	get subject() {
		return this._subject;
	}

	// context	Σ	0..1	Reference(Encounter | EpisodeOfCare)	Created in context of
	set context(context) {
		this._context = new Reference(context);
	}

	get context() {
		return this._context;
	}

	// period	Σ	0..1	Period	Time period plan covers
	set period(period) {
		this._period = new Period(period);
	}

	get period() {
		return this._period;
	}

	// author	Σ	0..*	Reference(Patient | Practitioner | RelatedPerson | Organization | CareTeam)	Who is responsible for contents of the plan
	set author(author) {
		if (Array.isArray(author)) {
			this._author = author.map((i) => new Reference(i));
		} else {
			this._author = [new Reference(author)];
		}
	}

	get author() {
		return this._author;
	}

	// careTeam		0..*	Reference(CareTeam)	Who's involved in plan?
	set careTeam(careTeam) {
		if (Array.isArray(careTeam)) {
			this._careTeam = careTeam.map((i) => new Reference(i));
		} else {
			this._careTeam = [new Reference(careTeam)];
		}
	}

	get careTeam() {
		return this._careTeam;
	}

	// addresses	Σ	0..*	Reference(Condition)	Health issues this plan addresses
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

	// supportingInfo		0..*	Reference(Any)	Information considered as part of plan
	set supportingInfo(supportingInfo) {
		if (Array.isArray(supportingInfo)) {
			this._supportingInfo = supportingInfo.map((i) => new Reference(i));
		} else {
			this._supportingInfo = [new Reference(supportingInfo)];
		}
	}

	get supportingInfo() {
		return this._supportingInfo;
	}

	// goal		0..*	Reference(Goal)	Desired outcome of plan
	set goal(goal) {
		if (Array.isArray(goal)) {
			this._goal = goal.map((i) => new Reference(i));
		} else {
			this._goal = [new Reference(goal)];
		}
	}

	get goal() {
		return this._goal;
	}

	// note		0..*	Annotation	Comments about the plan
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

	// activity	I	0..*	BackboneElement	Action to occur as part of plan
	// + Provide a reference or detail, not both
	set activity(activity) {
		if (Array.isArray(activity)) {
			this._activity = activity.map((i) => new Activity(i));
		} else {
			this._activity = [new Activity(activity)];
		}
	}

	get activity() {
		return this._activity;
	}

	toJSON() {
		const json = {
			identifier: this._identifier,
			definition: this._definition,
			basedOn: this._basedOn,
			replaces: this._replaces,
			partOf: this._partOf,
			status: this._status,
			intent: this._intent,
			category: this._category,
			title: this._title,
			description: this._description,
			subject: this._subject,
			context: this._context,
			period: this._period,
			author: this._author,
			careTeam: this._careTeam,
			addresses: this._addresses,
			supportingInfo: this._supportingInfo,
			goal: this._goal,
			note: this._note,
			activity: this._activity,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.CarePlan = CarePlan;
module.exports.Activity = Activity;
module.exports.Detail = Detail;
