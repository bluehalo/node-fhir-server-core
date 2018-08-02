const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Period = require('./Period');
const UsageContext = require('./UsageContext');
const CodeableConcept = require('./CodeableConcept');
const Contributor = require('./Contributor');
const ContactDetail = require('./ContactDetail');
const RelatedArtifact = require('./RelatedArtifact');
const Reference = require('./Reference');
const Measure_Group = require('./Measure_Group');
const Measure_SupplementalData = require('./Measure_SupplementalData');

class Measure extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'Measure';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'Measure';
	}

	// This is a Measure resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['Measure'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// An absolute URI that is used to identify this measure when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this measure is (or will be) published. The URL SHOULD include the major version of the measure. For more information see [Technical and Business Versions](resource.html#versions).
	get url () {
		return this._url;
	}

	set url ( new_value ) {
		this._url = new_value;
	}

	// A formal identifier that is used to identify this measure when it is represented in other formats, or referenced in a specification, model, design or an instance.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// The identifier that is used to identify this version of the measure when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the measure author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active artifacts.
	get version () {
		return this._version;
	}

	set version ( new_value ) {
		this._version = new_value;
	}

	// A natural language name identifying the measure. This name should be usable as an identifier for the module by machine processing applications such as code generation.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// A short, descriptive, user-friendly title for the measure.
	get title () {
		return this._title;
	}

	set title ( new_value ) {
		this._title = new_value;
	}

	// The status of this measure. Enables tracking the life-cycle of the content.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['draft', 'active', 'retired', 'unknown'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// A boolean value to indicate that this measure is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental () {
		return this._experimental;
	}

	set experimental ( new_value ) {
		this._experimental = new_value;
	}

	// The date  (and optionally time) when the measure was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the measure changes.
	get date () {
		return this._date;
	}

	set date ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this._date = new_value;
	}

	// The name of the individual or organization that published the measure.
	get publisher () {
		return this._publisher;
	}

	set publisher ( new_value ) {
		this._publisher = new_value;
	}

	// A free text natural language description of the measure from a consumer's perspective.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// Explaination of why this measure is needed and why it has been designed as it has.
	get purpose () {
		return this._purpose;
	}

	set purpose ( new_value ) {
		this._purpose = new_value;
	}

	// A detailed description of how the measure is used from a clinical perspective.
	get usage () {
		return this._usage;
	}

	set usage ( new_value ) {
		this._usage = new_value;
	}

	// The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage.
	get approvalDate () {
		return this._approvalDate;
	}

	set approvalDate ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field approvalDate`);
		}
		this._approvalDate = new_value;
	}

	// The date on which the resource content was last reviewed. Review happens periodically after approval, but doesn't change the original approval date.
	get lastReviewDate () {
		return this._lastReviewDate;
	}

	set lastReviewDate ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1]))?)?/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field lastReviewDate`);
		}
		this._lastReviewDate = new_value;
	}

	// The period during which the measure content was or is planned to be in active use.
	get effectivePeriod () {
		return this._effectivePeriod;
	}

	set effectivePeriod ( new_value ) {
		this._effectivePeriod = new Period(new_value);
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate measure instances.
	get useContext () {
		return this._useContext;
	}

	set useContext ( new_value ) {
		this._useContext = Array.isArray(new_value) ? new_value.map(val => new UsageContext(val)) : [new UsageContext(new_value)];
	}

	// A legal or geographic region in which the measure is intended to be used.
	get jurisdiction () {
		return this._jurisdiction;
	}

	set jurisdiction ( new_value ) {
		this._jurisdiction = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Descriptive topics related to the content of the measure. Topics provide a high-level categorization of the type of the measure that can be useful for filtering and searching.
	get topic () {
		return this._topic;
	}

	set topic ( new_value ) {
		this._topic = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// A contributor to the content of the measure, including authors, editors, reviewers, and endorsers.
	get contributor () {
		return this._contributor;
	}

	set contributor ( new_value ) {
		this._contributor = Array.isArray(new_value) ? new_value.map(val => new Contributor(val)) : [new Contributor(new_value)];
	}

	// Contact details to assist a user in finding and communicating with the publisher.
	get contact () {
		return this._contact;
	}

	set contact ( new_value ) {
		this._contact = Array.isArray(new_value) ? new_value.map(val => new ContactDetail(val)) : [new ContactDetail(new_value)];
	}

	// A copyright statement relating to the measure and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the measure.
	get copyright () {
		return this._copyright;
	}

	set copyright ( new_value ) {
		this._copyright = new_value;
	}

	// Related artifacts such as additional documentation, justification, or bibliographic references.
	get relatedArtifact () {
		return this._relatedArtifact;
	}

	set relatedArtifact ( new_value ) {
		this._relatedArtifact = Array.isArray(new_value) ? new_value.map(val => new RelatedArtifact(val)) : [new RelatedArtifact(new_value)];
	}

	// A reference to a Library resource containing the formal logic used by the measure.
	get library () {
		return this._library;
	}

	set library ( new_value ) {
		this._library = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Notices and disclaimers regarding the use of the measure, or related to intellectual property (such as code systems) referenced by the measure.
	get disclaimer () {
		return this._disclaimer;
	}

	set disclaimer ( new_value ) {
		this._disclaimer = new_value;
	}

	// Indicates how the calculation is performed for the measure, including proportion, ratio, continuous variable, and cohort. The value set is extensible, allowing additional measure scoring types to be represented.
	get scoring () {
		return this._scoring;
	}

	set scoring ( new_value ) {
		this._scoring = new CodeableConcept(new_value);
	}

	// If this is a composite measure, the scoring method used to combine the component measures to determine the composite score.
	get compositeScoring () {
		return this._compositeScoring;
	}

	set compositeScoring ( new_value ) {
		this._compositeScoring = new CodeableConcept(new_value);
	}

	// Indicates whether the measure is used to examine a process, an outcome over time, a patient-reported outcome, or a structure measure such as utilization.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		this._type = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// A description of the risk adjustment factors that may impact the resulting score for the measure and how they may be accounted for when computing and reporting measure results.
	get riskAdjustment () {
		return this._riskAdjustment;
	}

	set riskAdjustment ( new_value ) {
		this._riskAdjustment = new_value;
	}

	// Describes how to combine the information calculated, based on logic in each of several populations, into one summarized result.
	get rateAggregation () {
		return this._rateAggregation;
	}

	set rateAggregation ( new_value ) {
		this._rateAggregation = new_value;
	}

	// Provides a succint statement of the need for the measure. Usually includes statements pertaining to importance criterion: impact, gap in care, and evidence.
	get rationale () {
		return this._rationale;
	}

	set rationale ( new_value ) {
		this._rationale = new_value;
	}

	// Provides a summary of relevant clinical guidelines or other clinical recommendations supporting the measure.
	get clinicalRecommendationStatement () {
		return this._clinicalRecommendationStatement;
	}

	set clinicalRecommendationStatement ( new_value ) {
		this._clinicalRecommendationStatement = new_value;
	}

	// Information on whether an increase or decrease in score is the preferred result (e.g., a higher score indicates better quality OR a lower score indicates better quality OR quality is whthin a range).
	get improvementNotation () {
		return this._improvementNotation;
	}

	set improvementNotation ( new_value ) {
		this._improvementNotation = new_value;
	}

	// Provides a description of an individual term used within the measure.
	get definition () {
		return this._definition;
	}

	set definition ( new_value ) {
		this._definition = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Additional guidance for the measure including how it can be used in a clinical context, and the intent of the measure.
	get guidance () {
		return this._guidance;
	}

	set guidance ( new_value ) {
		this._guidance = new_value;
	}

	// The measure set, e.g. Preventive Care and Screening.
	get set () {
		return this._set;
	}

	set set ( new_value ) {
		this._set = new_value;
	}

	// A group of population criteria for the measure.
	get group () {
		return this._group;
	}

	set group ( new_value ) {
		this._group = Array.isArray(new_value) ? new_value.map(val => new Measure_Group(val)) : [new Measure_Group(new_value)];
	}

	// The supplemental data criteria for the measure report, specified as either the name of a valid CQL expression within a referenced library, or a valid FHIR Resource Path.
	get supplementalData () {
		return this._supplementalData;
	}

	set supplementalData ( new_value ) {
		this._supplementalData = Array.isArray(new_value) ? new_value.map(val => new Measure_SupplementalData(val)) : [new Measure_SupplementalData(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			url: this._url,
			identifier: this._identifier && this._identifier.map(v => v.toJSON()),
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
			effectivePeriod: this._effectivePeriod && this._effectivePeriod.toJSON(),
			useContext: this._useContext && this._useContext.map(v => v.toJSON()),
			jurisdiction: this._jurisdiction && this._jurisdiction.map(v => v.toJSON()),
			topic: this._topic && this._topic.map(v => v.toJSON()),
			contributor: this._contributor && this._contributor.map(v => v.toJSON()),
			contact: this._contact && this._contact.map(v => v.toJSON()),
			copyright: this._copyright,
			relatedArtifact: this._relatedArtifact && this._relatedArtifact.map(v => v.toJSON()),
			library: this._library && this._library.map(v => v.toJSON()),
			disclaimer: this._disclaimer,
			scoring: this._scoring && this._scoring.toJSON(),
			compositeScoring: this._compositeScoring && this._compositeScoring.toJSON(),
			type: this._type && this._type.map(v => v.toJSON()),
			riskAdjustment: this._riskAdjustment,
			rateAggregation: this._rateAggregation,
			rationale: this._rationale,
			clinicalRecommendationStatement: this._clinicalRecommendationStatement,
			improvementNotation: this._improvementNotation,
			definition: this._definition,
			guidance: this._guidance,
			set: this._set,
			group: this._group && this._group.map(v => v.toJSON()),
			supplementalData: this._supplementalData && this._supplementalData.map(v => v.toJSON())
		});
	}

}

module.exports = Measure;
