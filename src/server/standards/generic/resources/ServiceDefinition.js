const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Code = require('../types/Code');
const Period = require('../types/Period');
const UsageContext = require('../types/UsageContext');
const CodeableConcept = require('../types/CodeableConcept');
const Contributor = require('../types/Contributor');
const ContactDetail = require('../types/ContactDetail');
const RelatedArtifact = require('../types/RelatedArtifact');
const TriggerDefinition = require('../types/TriggerDefinition');
const DataRequirement = require('../types/DataRequirement');
const Reference = require('../types/Reference');

class ServiceDefinition extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'ServiceDefinition';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// url	Σ	0..1	uri	Logical URI to reference this service definition (globally unique)
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// identifier	Σ	0..*	Identifier	Additional identifier for the service definition
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

	// version	Σ	0..1	string	Business version of the service definition
	set version(version) {
		this._version = version;
	}

	get version() {
		return this._version;
	}

	// name	Σ	0..1	string	Name for this service definition (computer friendly)
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// title	Σ	0..1	string	Name for this service definition (human friendly)
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

	// description		0..1	markdown	Natural language description of the service definition
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// purpose		0..1	markdown	Why this service definition is defined
	set purpose(purpose) {
		this._purpose = purpose;
	}

	get purpose() {
		return this._purpose;
	}

	// usage		0..1	string	Describes the clinical usage of the module
	set usage(usage) {
		this._usage = usage;
	}

	get usage() {
		return this._usage;
	}

	// approvalDate		0..1	date	When the service definition was approved by publisher
	set approvalDate(approvalDate) {
		this._approvalDate = approvalDate;
	}

	get approvalDate() {
		return this._approvalDate;
	}

	// lastReviewDate		0..1	date	When the service definition was last reviewed
	set lastReviewDate(lastReviewDate) {
		this._lastReviewDate = lastReviewDate;
	}

	get lastReviewDate() {
		return this._lastReviewDate;
	}

	// effectivePeriod	Σ	0..1	Period	When the service definition is expected to be used
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

	// jurisdiction	Σ	0..*	CodeableConcept	Intended jurisdiction for service definition (if applicable)
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

	// trigger		0..*	TriggerDefinition	"when" the module should be invoked
	set trigger(trigger) {
		if (Array.isArray(trigger)) {
			this._trigger = trigger.map((i) => new TriggerDefinition(i));
		} else {
			this._trigger = [new TriggerDefinition(trigger)];
		}
	}

	get trigger() {
		return this._trigger;
	}

	// dataRequirement		0..*	DataRequirement	What data is used by the module
	set dataRequirement(dataRequirement) {
		if (Array.isArray(dataRequirement)) {
			this._dataRequirement = dataRequirement.map((i) => new DataRequirement(i));
		} else {
			this._dataRequirement = [new DataRequirement(dataRequirement)];
		}
	}

	get dataRequirement() {
		return this._dataRequirement;
	}

	// operationDefinition		0..1	Reference(OperationDefinition)	Operation to invoke
	set operationDefinition(operationDefinition) {
		this._operationDefinition = new Reference(operationDefinition);
	}

	get operationDefinition() {
		return this._operationDefinition;
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
			trigger: this._trigger,
			dataRequirement: this._dataRequirement,
			operationDefinition: this._operationDefinition,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.ServiceDefinition = ServiceDefinition;
