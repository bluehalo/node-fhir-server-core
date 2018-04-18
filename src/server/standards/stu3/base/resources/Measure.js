const DomainResource = require('../types/DomainResource');
const Identifier = require('../types/Identifier');
const Code = require('../types/Code');
const Period = require('../types/Period');
const UsageContext = require('../types/UsageContext');
const CodeableConcept = require('../types/CodeableConcept');
const Contributor = require('../types/Contributor');
const ContactDetail = require('../types/ContactDetail');
const RelatedArtifact = require('../types/RelatedArtifact');
const Reference = require('../types/Reference');

class Stratifier {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// identifier		0..1	Identifier	The identifier for the stratifier used to coordinate the reported data back to this stratifier
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// criteria		0..1	string	How the measure should be stratified
	set criteria(criteria) {
		this._criteria = criteria;
	}

	get criteria() {
		return this._criteria;
	}

	// path		0..1	string	Path to the stratifier
	set path(path) {
		this._path = path;
	}

	get path() {
		return this._path;
	}

	toJSON() {
		return {
			identifier: this._identifier,
			criteria: this._criteria,
			path: this._path,
		};
	}
}

class Population {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// identifier		0..1	Identifier	Unique identifier
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// code		0..1	CodeableConcept	initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation
	// MeasurePopulationType (Extensible)
	set code(code) {
		this._code = new CodeableConcept(code);
	}

	get code() {
		return this._code;
	}

	// name		0..1	string	Short name
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// description		0..1	string	The human readable description of this population criteria
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// criteria		1..1	string	The name of a valid referenced CQL expression (may be namespaced) that defines this population criteria
	set criteria(criteria) {
		this._criteria = criteria;
	}

	get criteria() {
		return this._criteria;
	}

	toJSON() {
		return {
			identifier: this._identifier,
			code: this._code,
			name: this._name,
			description: this._description,
			criteria: this._criteria,
		};
	}
}

class SupplementalData {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// identifier		0..1	Identifier	Identifier, unique within the measure
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// usage		0..*	CodeableConcept	supplemental-data | risk-adjustment-factor
	// MeasureDataUsage (Extensible)
	set usage(usage) {
		if (Array.isArray(usage)) {
			this._usage = usage.map((i) => new CodeableConcept(i));
		} else {
			this._usage = [new CodeableConcept(usage)];
		}
	}

	get usage() {
		return this._usage;
	}

	// criteria		0..1	string	Expression describing additional data to be reported
	set criteria(criteria) {
		this._criteria = criteria;
	}

	get criteria() {
		return this._criteria;
	}

	// path		0..1	string	Path to the supplemental data element
	set path(path) {
		this._path = path;
	}

	get path() {
		return this._path;
	}

	toJSON() {
		return {
			identifier: this._identifier,
			usage: this._usage,
			criteria: this._criteria,
			path: this._path,
		};
	}
}

class Group {
	constructor(obj) {
		Object.assign(this, obj);
	}

	// identifier		1..1	Identifier	Unique identifier
	set identifier(identifier) {
		this._identifier = new Identifier(identifier);
	}

	get identifier() {
		return this._identifier;
	}

	// name		0..1	string	Short name
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// description		0..1	string	Summary description
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// population		0..*	BackboneElement	Population criteria
	set population(population) {
		if (Array.isArray(population)) {
			this._population = population.map((i) => new Population(i));
		} else {
			this._population = [new Population(population)];
		}
	}

	get population() {
		return this._population;
	}

	// stratifier		0..*	BackboneElement	Stratifier criteria for the measure
	set stratifier(stratifier) {
		if (Array.isArray(stratifier)) {
			this._stratifier = stratifier.map((i) => new Stratifier(i));
		} else {
			this._stratifier = [new Stratifier(stratifier)];
		}
	}

	get stratifier() {
		return this._stratifier;
	}

	toJSON() {
		return {
			identifier: this._identifier,
			name: this._name,
			description: this._description,
			population: this._population,
			stratifier: this._stratifier,
		};
	}
}

class Measure extends DomainResource {
	constructor(obj) {
		super();
		this._resourceType = 'Measure';
		Object.assign(this, obj);
	}

	set resourceType(resourceType) {
		this._resourceType = resourceType;
	}

	get resourceType() {
		return this._resourceType;
	}

	// url	Σ	0..1	uri	Logical URI to reference this measure (globally unique)
	set url(url) {
		this._url = url;
	}

	get url() {
		return this._url;
	}

	// identifier	Σ	0..*	Identifier	Additional identifier for the measure
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

	// version	Σ	0..1	string	Business version of the measure
	set version(version) {
		this._version = version;
	}

	get version() {
		return this._version;
	}

	// name	Σ	0..1	string	Name for this measure (computer friendly)
	set name(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	// title	Σ	0..1	string	Name for this measure (human friendly)
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

	// description	Σ	0..1	markdown	Natural language description of the measure
	set description(description) {
		this._description = description;
	}

	get description() {
		return this._description;
	}

	// purpose		0..1	markdown	Why this measure is defined
	set purpose(purpose) {
		this._purpose = purpose;
	}

	get purpose() {
		return this._purpose;
	}

	// usage		0..1	string	Describes the clinical usage of the measure
	set usage(usage) {
		this._usage = usage;
	}

	get usage() {
		return this._usage;
	}

	// approvalDate		0..1	date	When the measure was approved by publisher
	set approvalDate(approvalDate) {
		this._approvalDate = approvalDate;
	}

	get approvalDate() {
		return this._approvalDate;
	}

	// lastReviewDate		0..1	date	When the measure was last reviewed
	set lastReviewDate(lastReviewDate) {
		this._lastReviewDate = lastReviewDate;
	}

	get lastReviewDate() {
		return this._lastReviewDate;
	}

	// effectivePeriod	Σ	0..1	Period	When the measure is expected to be used
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

	// jurisdiction	Σ	0..*	CodeableConcept	Intended jurisdiction for measure (if applicable)
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

	// library		0..*	Reference(Library)	Logic used by the measure
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

	// disclaimer	Σ	0..1	markdown	Disclaimer for use of the measure or its referenced content
	set disclaimer(disclaimer) {
		this._disclaimer = disclaimer;
	}

	get disclaimer() {
		return this._disclaimer;
	}

	// scoring	Σ	0..1	CodeableConcept	proportion | ratio | continuous-variable | cohort
	// MeasureScoring (Extensible)
	set scoring(scoring) {
		this._scoring = new CodeableConcept(scoring);
	}

	get scoring() {
		return this._scoring;
	}

	// compositeScoring	Σ	0..1	CodeableConcept	opportunity | all-or-nothing | linear | weighted
	// CompositeMeasureScoring (Extensible)
	set compositeScoring(compositeScoring) {
		this._compositeScoring = new CodeableConcept(compositeScoring);
	}

	get compositeScoring() {
		return this._compositeScoring;
	}

	// type	Σ	0..*	CodeableConcept	process | outcome | structure | patient-reported-outcome | composite
	// MeasureType (Extensible)
	set type(type) {
		if (Array.isArray(type)) {
			this._type = type.map((i) => new CodeableConcept(i));
		} else {
			this._type = [new CodeableConcept(type)];
		}
	}

	get type() {
		return this._type;
	}

	// riskAdjustment	Σ	0..1	string	How is risk adjustment applied for this measure
	set riskAdjustment(riskAdjustment) {
		this._riskAdjustment = riskAdjustment;
	}

	get riskAdjustment() {
		return this._riskAdjustment;
	}

	// rateAggregation	Σ	0..1	string	How is rate aggregation performed for this measure
	set rateAggregation(rateAggregation) {
		this._rateAggregation = rateAggregation;
	}

	get rateAggregation() {
		return this._rateAggregation;
	}

	// rationale	Σ	0..1	markdown	Why does this measure exist
	set rationale(rationale) {
		this._rationale = rationale;
	}

	get rationale() {
		return this._rationale;
	}

	// clinicalRecommendationStatement	Σ	0..1	markdown	Summary of clinical guidelines
	set clinicalRecommendationStatement(clinicalRecommendationStatement) {
		this._clinicalRecommendationStatement = clinicalRecommendationStatement;
	}

	get clinicalRecommendationStatement() {
		return this._clinicalRecommendationStatement;
	}

	// improvementNotation	Σ	0..1	string	Improvement notation for the measure, e.g. higher score indicates better quality
	set improvementNotation(improvementNotation) {
		this._improvementNotation = improvementNotation;
	}

	get improvementNotation() {
		return this._improvementNotation;
	}

	// definition	Σ	0..*	markdown	Defined terms used in the measure documentation
	set definition(definition) {
		this._definition = [].concat(definition);
	}

	get definition() {
		return this._definition;
	}

	// guidance	Σ	0..1	markdown	Additional guidance for implementers
	set guidance(guidance) {
		this._guidance = guidance;
	}

	get guidance() {
		return this._guidance;
	}

	// set	Σ	0..1	string	The measure set, e.g. Preventive Care and Screening
	set measureSet(measureSet) {
		this._measureSet = measureSet;
	}

	get measureSet() {
		return this._measureSet;
	}

	// group		0..*	BackboneElement	Population criteria group
	set group(group) {
		if (Array.isArray(group)) {
			this._group = group.map((i) => new Group(i));
		} else {
			this._group = [new Group(group)];
		}
	}

	get group() {
		return this._group;
	}

	// supplementalData		0..*	BackboneElement	What other data should be reported with the measure
	set supplementalData(supplementalData) {
		if (Array.isArray(supplementalData)) {
			this._supplementalData = supplementalData.map((i) => new SupplementalData(i));
		} else {
			this._supplementalData = [new SupplementalData(supplementalData)];
		}
	}

	get supplementalData() {
		return this._supplementalData;
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
			disclaimer: this._disclaimer,
			scoring: this._scoring,
			compositeScoring: this._compositeScoring,
			type: this._type,
			riskAdjustment: this._riskAdjustment,
			rateAggregation: this._rateAggregation,
			rationale: this._rationale,
			clinicalRecommendationStatement: this._clinicalRecommendationStatement,
			improvementNotation: this._improvementNotation,
			definition: this._definition,
			guidance: this._guidance,
			measureSet: this._measureSet,
			group: this._group,
			supplementalData: this._supplementalData,
		};

		return Object.assign({ resourceType: this._resourceType }, super.toJSON(), json);
	}
}

module.exports.Measure = Measure;
module.exports.Group = Group;
module.exports.SupplementalData = SupplementalData;
module.exports.Population = Population;
module.exports.Stratifier = Stratifier;
