const DomainResource = require('./types/DomainResource');
const Identifier = require('./types/Identifier');
const Code = require('./types/Code');
const Period = require('./types/Period');
const UsageContext = require('./types/UsageContext');
const CodeableConcept = require('./types/CodeableConcept');
const Contributor = require('./types/Contributor');
const ContactDetail = require('./types/ContactDetail');
const RelatedArtifact = require('./types/RelatedArtifact');
const Reference = require('./types/Reference');
const Timing = require('./types/Timing');
const Range = require('./types/Range');
const Dosage = require('./types/Dosage');

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

class ActivityDefinition extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'ActivityDefinition';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// url	Σ	0..1	uri	Logical URI to reference this activity definition (globally unique)
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// identifier	Σ	0..*	Identifier	Additional identifier for the activity definition
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

	// version	Σ	0..1	string	Business version of the activity definition
	set version(version) {
		this._version = version;
	}

	get version() {
		return this._version;
	}

	// name	Σ	0..1	string	Name for this activity definition (computer friendly)
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// title	Σ	0..1	string	Name for this activity definition (human friendly)
	set title(title) {
		this._title = title;
	}

	get title() {
		return this._title;
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

	// description	Σ	0..1	markdown	Natural language description of the activity definition
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// purpose		0..1	markdown	Why this activity definition is defined
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

	// approvalDate		0..1	date	When the activity definition was approved by publisher
	set approvalDate(approvalDate) {
		this._approvalDate = approvalDate;
	}

	get approvalDate() {
		return this._approvalDate;
	}

	// lastReviewDate		0..1	date	When the activity definition was last reviewed
	set lastReviewDate(lastReviewDate) {
		this._lastReviewDate = lastReviewDate;
	}

	get lastReviewDate() {
		return this._lastReviewDate;
	}

	// effectivePeriod	Σ	0..1	Period	When the activity definition is expected to be used
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

	// jurisdiction	Σ	0..*	CodeableConcept	Intended jurisdiction for activity definition (if applicable)
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

	// relatedArtifact		0..*	RelatedArtifact	Additional documentation, citations, etc
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

	// library		0..*	Reference(Library)	Logic used by the asset
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

	// kind		0..1	code	Kind of resource
	// ResourceType (Required)
	set kind(kind) {
		this._kind = new Code(kind);
	}

	get kind() {
		return this._kind;
	}

	// code		0..1	CodeableConcept	Detail type of activity
	// Procedure Codes (SNOMED CT) (Example)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// timing[x]		0..1		When activity is to occur
	// timingTiming			Timing
	set timingTiming(timingTiming) {
		this._timingTiming = new Timing(timingTiming);
	}

	get timingTiming() {
		return this._timingTiming;
	}

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

	// timingRange			Range
	set timingRange(timingRange) {
		this._timingRange = new Range(timingRange);
	}

	get timingRange() {
		return this._timingRange;
	}

	// location		0..1	Reference(Location)	Where it should happen
	set location(location) {
		this._location = new Reference(location);
	}

	get location() {
		return this._location;
	}

	// product[x]		0..1		What's administered/supplied
	// SNOMED CT Medication Codes (Example)
	// productReference			Reference
	set productReference(productReference) {
		this._productReference = new Reference(productReference);
	}

	get productReference() {
		return this._productReference;
	}

	// productCodeableConcept			CodeableConcept
	set productCodeableConcept(productCodeableConcept) {
		this._productCodeableConcept = new CodeableConcept(productCodeableConcept);
	}

	get productCodeableConcept() {
		return this._productCodeableConcept;
	}

	// quantity		0..1	SimpleQuantity	How much is administered/consumed/supplied
	set quantity(quantity) {
		this._quantity = quantity;
	}

	get quantity() {
		return this._quantity;
	}

	// dosage		0..*	Dosage	Detailed dosage instructions
	set dosage(dosage) {
		if (Array.isArray(dosage)) {
			this._dosage = dosage.map((i) => new Dosage(i));
		} else {
			this._dosage = [new Dosage(dosage)];
		}
	}

	get dosage() {
		return this._dosage;
	}

	// bodySite		0..*	CodeableConcept	What part of body to perform on
	// SNOMED CT Body Structures (Example)
	set bodySite(bodySite) {
		if (Array.isArray(bodySite)) {
			this._bodySite = bodySite.map((i) => new CodeableConcept(i));
		} else {
			this._bodySite = [new CodeableConcept(bodySite)];
		}
	}

	get bodySite() {
		return this._bodySite;
	}

	// transform		0..1	Reference(StructureMap)	Transform to apply the template
	set transform(transform) {
		this._transform = new Reference(transform);
	}

	get transform() {
		return this._transform;
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
		const json = {
			url: this._url,
			identifier: this._identifier,
			version: this._version,
			name: this._name,
			title: this._title,
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
			kind: this._kind,
			code: this._code,
			timingTiming: this._timingTiming,
			timingDateTime: this._timingDateTime,
			timingPeriod: this._timingPeriod,
			timingRange: this._timingRange,
			location: this._location,
			productReference: this._productReference,
			productCodeableConcept: this._productCodeableConcept,
			quantity: this._quantity,
			dosage: this._dosage,
			bodySite: this._bodySite,
			transform: this._transform,
			participant: this._participant,
			dynamicValue: this._dynamicValue,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.ActivityDefinition = ActivityDefinition;
module.exports.Participant = Participant;
module.exports.DynamicValue = DynamicValue;
