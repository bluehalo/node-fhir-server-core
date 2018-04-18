const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Reference = require('../types/Reference');
const Code = require('../types/Code');
const CodeableConcept = require('../types/CodeableConcept');
const ContactDetail = require('../types/ContactDetail');
const UsageContext = require('../types/UsageContext');
const Period = require('../types/Period');

class Definition extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Definition';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// url	Σ	0..1	uri	Logical uri to reference this {{title}} (globally unique)
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// identifier	Σ	0..1	Identifier	Business Identifier for {{title}}
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// version	Σ	0..1	string	Business version of the {{title}}
	set version(version) {
		this._version = version;
	}

	get version() {
		return this._version;
	}

	// title	Σ	0..1	string	Name for this {{title}} (Human friendly)
	set title(title) {
		this._title = title;
	}

	get title() {
		return this._title;
	}

	// definition	Σ	0..*	Reference(Definition)	Instantiates protocol or definition
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

	// partOf	Σ	0..*	Reference(Definition)	Part of referenced definition
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

	// replaces	Σ	0..*	Reference(Definition)	Request(s) replaced by this request
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

	// status	?!Σ	1..1	code	draft | active | retired | unknown
	// PublicationStatus (Required)
	set status(status) {
		this._status = new Code(status);
	}

	get status() {
		return this._status;
	}

	// experimental	?!Σ	0..1	boolean	If for testing purposes, not real usage
	set experimental(experimental) {
		this._experimental = experimental;
	}

	get experimental() {
		return this._experimental;
	}

	// subject[x]	Σ	0..1		Type of individual the defined service is for
	// subjectCodeableConcept			CodeableConcept
	set subjectCodeableConcept(subjectCodeableConcept) {
		this._subjectCodeableConcept = new CodeableConcept(subjectCodeableConcept);
	}

	get subjectCodeableConcept() {
		return this._subjectCodeableConcept;
	}

	// subjectReference			Reference
	set subjectReference(subjectReference) {
		this._subjectReference = new Reference(subjectReference);
	}

	get subjectReference() {
		return this._subjectReference;
	}

	// date	Σ	0..1	dateTime	Date status first applied
	set date(date) {
		this._date = date;
	}

	get date() {
		return this._date;
	}

	// publisher	Σ	0..1	Reference(Practitioner | Organization)	The name of the individual or organization that published the {{title}}
	set publisher(publisher) {
		this._publisher = new Reference(publisher);
	}

	get publisher() {
		return this._publisher;
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

	// useContext	Σ	0..*	UsageContext	Content intends to support these contexts
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

	// jurisdiction	Σ	0..*	CodeableConcept	Intended jurisdiction for {{title}} (if applicable)
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

	// description		0..1	markdown	Natural language description of the {{title}}
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// purpose		0..1	markdown	Why this {{title}} is defined
	set purpose(purpose) {
		this._purpose = purpose;
	}

	get purpose() {
		return this._purpose;
	}

	// copyright		0..1	markdown	Use and/or publishing restrictions
	set copyright(copyright) {
		this._copyright = copyright;
	}

	get copyright() {
		return this._copyright;
	}

	// approvalDate		0..1	date	When {{title}} approved by publisher
	set approvalDate(approvalDate) {
		this._approvalDate = approvalDate;
	}

	get approvalDate() {
		return this._approvalDate;
	}

	// lastReviewDate		0..1	date	Last review date for the {{title}}
	set lastReviewDate(lastReviewDate) {
		this._lastReviewDate = lastReviewDate;
	}

	get lastReviewDate() {
		return this._lastReviewDate;
	}

	// effectivePeriod	Σ	0..1	Period	The effective date range for the {{title}}
	set effectivePeriod(effectivePeriod) {
		this._effectivePeriod = new Period(effectivePeriod);
	}

	get effectivePeriod() {
		return this._effectivePeriod;
	}

	// performerType	Σ	0..1	CodeableConcept	Desired kind of service performer
	set performerType(performerType) {
		this._performerType = new CodeableConcept(performerType);
	}

	get performerType() {
		return this._performerType;
	}

	toJSON() {
		const json = {
			url: this._url,
			identifier: this._identifier,
			version: this._version,
			title: this._title,
			definition: this._definition,
			partOf: this._partOf,
			replaces: this._replaces,
			status: this._status,
			experimental: this._experimental,
			subjectCodeableConcept: this._subjectCodeableConcept,
			subjectReference: this._subjectReference,
			date: this._date,
			publisher: this._publisher,
			contact: this._contact,
			useContext: this._useContext,
			jurisdiction: this._jurisdiction,
			description: this._description,
			purpose: this._purpose,
			copyright: this._copyright,
			approvalDate: this._approvalDate,
			lastReviewDate: this._lastReviewDate,
			effectivePeriod: this._effectivePeriod,
			performerType: this._performerType,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Definition = Definition;
