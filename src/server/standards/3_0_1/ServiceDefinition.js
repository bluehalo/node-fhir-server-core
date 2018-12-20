const DomainResource = require('./DomainResource');
const UriScalar = require('./scalars/Uri.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const DateScalar = require('./scalars/Date.scalar');

class ServiceDefinition extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ServiceDefinition';
		Object.assign(this, opt);
	}

	// This is a ServiceDefinition resource
	static get __resourceType() {
		return 'ServiceDefinition';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__ServiceDefinition = new_value;
	}

	// An absolute URI that is used to identify this service definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this service definition is (or will be) published. The URL SHOULD include the major version of the service definition. For more information see [Technical and Business Versions](resource.html#versions).
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

	// A formal identifier that is used to identify this service definition when it is represented in other formats, or referenced in a specification, model, design or an instance. This is used for CMS or NQF identifiers for a measure artifact. Note that at least one identifier is required for non-experimental active artifacts.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// The identifier that is used to identify this version of the service definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the service definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	// A natural language name identifying the service definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// A short, descriptive, user-friendly title for the service definition.
	get title() {
		return this.__title;
	}

	set title(new_value) {
		this.__title = new_value;
	}

	// The status of this service definition. Enables tracking the life-cycle of the content.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// A boolean value to indicate that this service definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental() {
		return this.__experimental;
	}

	set experimental(new_value) {
		this.__experimental = new_value;
	}

	// The date  (and optionally time) when the service definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the service definition changes.
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

	// The name of the individual or organization that published the service definition.
	get publisher() {
		return this.__publisher;
	}

	set publisher(new_value) {
		this.__publisher = new_value;
	}

	// A free text natural language description of the service definition from a consumer\'s perspective.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Explaination of why this service definition is needed and why it has been designed as it has.
	get purpose() {
		return this.__purpose;
	}

	set purpose(new_value) {
		this.__purpose = new_value;
	}

	// A detailed description of how the module is used from a clinical perspective.
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

	// The period during which the service definition content was or is planned to be in active use.
	get effectivePeriod() {
		return this.__effectivePeriod;
	}

	set effectivePeriod(new_value) {
		const Period = require('./Period');
		this.__effectivePeriod = new Period(new_value);
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate service definition instances.
	get useContext() {
		return this.__useContext;
	}

	set useContext(new_value) {
		const UsageContext = require('./UsageContext');
		this.__useContext = Array.isArray(new_value)
			? new_value.map(val => new UsageContext(val))
			: [new UsageContext(new_value)];
	}

	// A legal or geographic region in which the service definition is intended to be used.
	get jurisdiction() {
		return this.__jurisdiction;
	}

	set jurisdiction(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__jurisdiction = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Descriptive topics related to the module. Topics provide a high-level categorization of the module that can be useful for filtering and searching.
	get topic() {
		return this.__topic;
	}

	set topic(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__topic = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// A contributor to the content of the module, including authors, editors, reviewers, and endorsers.
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

	// A copyright statement relating to the service definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the service definition.
	get copyright() {
		return this.__copyright;
	}

	set copyright(new_value) {
		this.__copyright = new_value;
	}

	// Related resources such as additional documentation, justification, or bibliographic references.
	get relatedArtifact() {
		return this.__relatedArtifact;
	}

	set relatedArtifact(new_value) {
		const RelatedArtifact = require('./RelatedArtifact');
		this.__relatedArtifact = Array.isArray(new_value)
			? new_value.map(val => new RelatedArtifact(val))
			: [new RelatedArtifact(new_value)];
	}

	// The trigger element defines when the rule should be invoked. This information is used by consumers of the rule to determine how to integrate the rule into a specific workflow.
	get trigger() {
		return this.__trigger;
	}

	set trigger(new_value) {
		const TriggerDefinition = require('./TriggerDefinition');
		this.__trigger = Array.isArray(new_value)
			? new_value.map(val => new TriggerDefinition(val))
			: [new TriggerDefinition(new_value)];
	}

	// Data requirements are a machine processable description of the data required by the module in order to perform a successful evaluation.
	get dataRequirement() {
		return this.__dataRequirement;
	}

	set dataRequirement(new_value) {
		const DataRequirement = require('./DataRequirement');
		this.__dataRequirement = Array.isArray(new_value)
			? new_value.map(val => new DataRequirement(val))
			: [new DataRequirement(new_value)];
	}

	// A reference to the operation that is used to invoke this service.
	get operationDefinition() {
		return this.__operationDefinition;
	}

	set operationDefinition(new_value) {
		const Reference = require('./Reference');
		this.__operationDefinition = new Reference(new_value);
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
			trigger: this.__trigger && this.__trigger.map(v => v.toJSON()),
			dataRequirement: this.__dataRequirement && this.__dataRequirement.map(v => v.toJSON()),
			operationDefinition: this.__operationDefinition && this.__operationDefinition.toJSON(),
		});
	}
}

module.exports = ServiceDefinition;
