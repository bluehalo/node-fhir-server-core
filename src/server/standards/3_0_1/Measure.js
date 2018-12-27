const DomainResource = require('./DomainResource');
const UriScalar = require('./scalars/Uri.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const DateScalar = require('./scalars/Date.scalar');

class Measure extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'Measure';
		Object.assign(this, opt);
	}

	// This is a Measure resource
	static get __resourceType() {
		return 'Measure';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__Measure = new_value;
	}

	// An absolute URI that is used to identify this measure when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this measure is (or will be) published. The URL SHOULD include the major version of the measure. For more information see [Technical and Business Versions](resource.html#versions).
	get url() {
		return this.__url;
	}

	set url(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field url`);
		}
		this.__url = new_value;
	}

	// A formal identifier that is used to identify this measure when it is represented in other formats, or referenced in a specification, model, design or an instance.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// The identifier that is used to identify this version of the measure when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the measure author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active artifacts.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	// A natural language name identifying the measure. This name should be usable as an identifier for the module by machine processing applications such as code generation.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// A short, descriptive, user-friendly title for the measure.
	get title() {
		return this.__title;
	}

	set title(new_value) {
		this.__title = new_value;
	}

	// The status of this measure. Enables tracking the life-cycle of the content.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// A boolean value to indicate that this measure is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental() {
		return this.__experimental;
	}

	set experimental(new_value) {
		this.__experimental = new_value;
	}

	// The date  (and optionally time) when the measure was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the measure changes.
	get date() {
		return this.__date;
	}

	set date(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this.__date = new_value;
	}

	// The name of the individual or organization that published the measure.
	get publisher() {
		return this.__publisher;
	}

	set publisher(new_value) {
		this.__publisher = new_value;
	}

	// A free text natural language description of the measure from a consumer\'s perspective.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Explaination of why this measure is needed and why it has been designed as it has.
	get purpose() {
		return this.__purpose;
	}

	set purpose(new_value) {
		this.__purpose = new_value;
	}

	// A detailed description of how the measure is used from a clinical perspective.
	get usage() {
		return this.__usage;
	}

	set usage(new_value) {
		this.__usage = new_value;
	}

	// The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.
	get approvalDate() {
		return this.__approvalDate;
	}

	set approvalDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field approvalDate`);
		}
		this.__approvalDate = new_value;
	}

	// The date on which the resource content was last reviewed. Review happens periodically after approval, but doesn\'t change the original approval date.
	get lastReviewDate() {
		return this.__lastReviewDate;
	}

	set lastReviewDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field lastReviewDate`);
		}
		this.__lastReviewDate = new_value;
	}

	// The period during which the measure content was or is planned to be in active use.
	get effectivePeriod() {
		return this.__effectivePeriod;
	}

	set effectivePeriod(new_value) {
		const Period = require('./Period');
		this.__effectivePeriod = new Period(new_value);
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate measure instances.
	get useContext() {
		return this.__useContext;
	}

	set useContext(new_value) {
		const UsageContext = require('./UsageContext');
		this.__useContext = Array.isArray(new_value)
			? new_value.map(val => new UsageContext(val))
			: [new UsageContext(new_value)];
	}

	// A legal or geographic region in which the measure is intended to be used.
	get jurisdiction() {
		return this.__jurisdiction;
	}

	set jurisdiction(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__jurisdiction = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Descriptive topics related to the content of the measure. Topics provide a high-level categorization of the type of the measure that can be useful for filtering and searching.
	get topic() {
		return this.__topic;
	}

	set topic(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__topic = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// A contributor to the content of the measure, including authors, editors, reviewers, and endorsers.
	get contributor() {
		return this.__contributor;
	}

	set contributor(new_value) {
		const Contributor = require('./Contributor');
		this.__contributor = Array.isArray(new_value)
			? new_value.map(val => new Contributor(val))
			: [new Contributor(new_value)];
	}

	// Contact details to assist a user in finding and communicating with the publisher.
	get contact() {
		return this.__contact;
	}

	set contact(new_value) {
		const ContactDetail = require('./ContactDetail');
		this.__contact = Array.isArray(new_value)
			? new_value.map(val => new ContactDetail(val))
			: [new ContactDetail(new_value)];
	}

	// A copyright statement relating to the measure and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the measure.
	get copyright() {
		return this.__copyright;
	}

	set copyright(new_value) {
		this.__copyright = new_value;
	}

	// Related artifacts such as additional documentation, justification, or bibliographic references.
	get relatedArtifact() {
		return this.__relatedArtifact;
	}

	set relatedArtifact(new_value) {
		const RelatedArtifact = require('./RelatedArtifact');
		this.__relatedArtifact = Array.isArray(new_value)
			? new_value.map(val => new RelatedArtifact(val))
			: [new RelatedArtifact(new_value)];
	}

	// A reference to a Library resource containing the formal logic used by the measure.
	get library() {
		return this.__library;
	}

	set library(new_value) {
		const Reference = require('./Reference');
		this.__library = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Notices and disclaimers regarding the use of the measure, or related to intellectual property (such as code systems) referenced by the measure.
	get disclaimer() {
		return this.__disclaimer;
	}

	set disclaimer(new_value) {
		this.__disclaimer = new_value;
	}

	// Indicates how the calculation is performed for the measure, including proportion, ratio, continuous variable, and cohort. The value set is extensible, allowing additional measure scoring types to be represented.
	get scoring() {
		return this.__scoring;
	}

	set scoring(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__scoring = new CodeableConcept(new_value);
	}

	// If this is a composite measure, the scoring method used to combine the component measures to determine the composite score.
	get compositeScoring() {
		return this.__compositeScoring;
	}

	set compositeScoring(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__compositeScoring = new CodeableConcept(new_value);
	}

	// Indicates whether the measure is used to examine a process, an outcome over time, a patient-reported outcome, or a structure measure such as utilization.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// A description of the risk adjustment factors that may impact the resulting score for the measure and how they may be accounted for when computing and reporting measure results.
	get riskAdjustment() {
		return this.__riskAdjustment;
	}

	set riskAdjustment(new_value) {
		this.__riskAdjustment = new_value;
	}

	// Describes how to combine the information calculated, based on logic in each of several populations, into one summarized result.
	get rateAggregation() {
		return this.__rateAggregation;
	}

	set rateAggregation(new_value) {
		this.__rateAggregation = new_value;
	}

	// Provides a succint statement of the need for the measure. Usually includes statements pertaining to importance criterion: impact, gap in care, and evidence.
	get rationale() {
		return this.__rationale;
	}

	set rationale(new_value) {
		this.__rationale = new_value;
	}

	// Provides a summary of relevant clinical guidelines or other clinical recommendations supporting the measure.
	get clinicalRecommendationStatement() {
		return this.__clinicalRecommendationStatement;
	}

	set clinicalRecommendationStatement(new_value) {
		this.__clinicalRecommendationStatement = new_value;
	}

	// Information on whether an increase or decrease in score is the preferred result (e.g., a higher score indicates better quality OR a lower score indicates better quality OR quality is whthin a range).
	get improvementNotation() {
		return this.__improvementNotation;
	}

	set improvementNotation(new_value) {
		this.__improvementNotation = new_value;
	}

	// Provides a description of an individual term used within the measure.
	get definition() {
		return this.__definition;
	}

	set definition(new_value) {
		this.__definition = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Additional guidance for the measure including how it can be used in a clinical context, and the intent of the measure.
	get guidance() {
		return this.__guidance;
	}

	set guidance(new_value) {
		this.__guidance = new_value;
	}

	// The measure set, e.g. Preventive Care and Screening.
	get set() {
		return this.__set;
	}

	set set(new_value) {
		this.__set = new_value;
	}

	// A group of population criteria for the measure.
	get group() {
		return this.__group;
	}

	set group(new_value) {
		const MeasureGroup = require('./MeasureGroup');
		this.__group = Array.isArray(new_value)
			? new_value.map(val => new MeasureGroup(val))
			: [new MeasureGroup(new_value)];
	}

	// The supplemental data criteria for the measure report, specified as either the name of a valid CQL expression within a referenced library, or a valid FHIR Resource Path.
	get supplementalData() {
		return this.__supplementalData;
	}

	set supplementalData(new_value) {
		const MeasureSupplementalData = require('./MeasureSupplementalData');
		this.__supplementalData = Array.isArray(new_value)
			? new_value.map(val => new MeasureSupplementalData(val))
			: [new MeasureSupplementalData(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			url: this.__url,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			version: this.__version,
			name: this.__name,
			title: this.__title,
			status: this.__status,
			experimental: this.__experimental,
			date: this.__date,
			publisher: this.__publisher,
			description: this.__description,
			purpose: this.__purpose,
			usage: this.__usage,
			approvalDate: this.__approvalDate,
			lastReviewDate: this.__lastReviewDate,
			effectivePeriod: this.__effectivePeriod && this.__effectivePeriod.toJSON(),
			useContext: this.__useContext && this.__useContext.map(v => v.toJSON()),
			jurisdiction: this.__jurisdiction && this.__jurisdiction.map(v => v.toJSON()),
			topic: this.__topic && this.__topic.map(v => v.toJSON()),
			contributor: this.__contributor && this.__contributor.map(v => v.toJSON()),
			contact: this.__contact && this.__contact.map(v => v.toJSON()),
			copyright: this.__copyright,
			relatedArtifact: this.__relatedArtifact && this.__relatedArtifact.map(v => v.toJSON()),
			library: this.__library && this.__library.map(v => v.toJSON()),
			disclaimer: this.__disclaimer,
			scoring: this.__scoring && this.__scoring.toJSON(),
			compositeScoring: this.__compositeScoring && this.__compositeScoring.toJSON(),
			type: this.__type && this.__type.map(v => v.toJSON()),
			riskAdjustment: this.__riskAdjustment,
			rateAggregation: this.__rateAggregation,
			rationale: this.__rationale,
			clinicalRecommendationStatement: this.__clinicalRecommendationStatement,
			improvementNotation: this.__improvementNotation,
			definition: this.__definition,
			guidance: this.__guidance,
			set: this.__set,
			group: this.__group && this.__group.map(v => v.toJSON()),
			supplementalData: this.__supplementalData && this.__supplementalData.map(v => v.toJSON()),
		});
	}
}

module.exports = Measure;
