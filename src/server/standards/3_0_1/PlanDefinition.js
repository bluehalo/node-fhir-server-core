const DomainResource = require('./DomainResource');
const UriScalar = require('./scalars/Uri.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const DateScalar = require('./scalars/Date.scalar');

class PlanDefinition extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'PlanDefinition';
		Object.assign(this, opt);
	}

	// This is a PlanDefinition resource
	static get __resourceType() {
		return 'PlanDefinition';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__PlanDefinition = new_value;
	}

	// An absolute URI that is used to identify this plan definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this plan definition is (or will be) published. The URL SHOULD include the major version of the plan definition. For more information see [Technical and Business Versions](resource.html#versions).
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

	// A formal identifier that is used to identify this plan definition when it is represented in other formats, or referenced in a specification, model, design or an instance.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// The identifier that is used to identify this version of the plan definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the plan definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active artifacts.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	// A natural language name identifying the plan definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// A short, descriptive, user-friendly title for the plan definition.
	get title() {
		return this.__title;
	}

	set title(new_value) {
		this.__title = new_value;
	}

	// The type of asset the plan definition represents, e.g. an order set, protocol, or event-condition-action rule.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// The status of this plan definition. Enables tracking the life-cycle of the content.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// A boolean value to indicate that this plan definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental() {
		return this.__experimental;
	}

	set experimental(new_value) {
		this.__experimental = new_value;
	}

	// The date  (and optionally time) when the plan definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the plan definition changes.
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

	// The name of the individual or organization that published the plan definition.
	get publisher() {
		return this.__publisher;
	}

	set publisher(new_value) {
		this.__publisher = new_value;
	}

	// A free text natural language description of the plan definition from a consumer\'s perspective.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Explaination of why this plan definition is needed and why it has been designed as it has.
	get purpose() {
		return this.__purpose;
	}

	set purpose(new_value) {
		this.__purpose = new_value;
	}

	// A detailed description of how the asset is used from a clinical perspective.
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

	// The period during which the plan definition content was or is planned to be in active use.
	get effectivePeriod() {
		return this.__effectivePeriod;
	}

	set effectivePeriod(new_value) {
		const Period = require('./Period');
		this.__effectivePeriod = new Period(new_value);
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate plan definition instances.
	get useContext() {
		return this.__useContext;
	}

	set useContext(new_value) {
		const UsageContext = require('./UsageContext');
		this.__useContext = Array.isArray(new_value)
			? new_value.map(val => new UsageContext(val))
			: [new UsageContext(new_value)];
	}

	// A legal or geographic region in which the plan definition is intended to be used.
	get jurisdiction() {
		return this.__jurisdiction;
	}

	set jurisdiction(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__jurisdiction = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Descriptive topics related to the content of the plan definition. Topics provide a high-level categorization of the definition that can be useful for filtering and searching.
	get topic() {
		return this.__topic;
	}

	set topic(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__topic = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// A contributor to the content of the asset, including authors, editors, reviewers, and endorsers.
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

	// A copyright statement relating to the plan definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the plan definition.
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

	// A reference to a Library resource containing any formal logic used by the plan definition.
	get library() {
		return this.__library;
	}

	set library(new_value) {
		const Reference = require('./Reference');
		this.__library = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Goals that describe what the activities within the plan are intended to achieve. For example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
	get goal() {
		return this.__goal;
	}

	set goal(new_value) {
		const PlanDefinitionGoal = require('./PlanDefinitionGoal');
		this.__goal = Array.isArray(new_value)
			? new_value.map(val => new PlanDefinitionGoal(val))
			: [new PlanDefinitionGoal(new_value)];
	}

	// An action to be taken as part of the plan.
	get action() {
		return this.__action;
	}

	set action(new_value) {
		const PlanDefinitionAction = require('./PlanDefinitionAction');
		this.__action = Array.isArray(new_value)
			? new_value.map(val => new PlanDefinitionAction(val))
			: [new PlanDefinitionAction(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			url: this.__url,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			version: this.__version,
			name: this.__name,
			title: this.__title,
			type: this.__type && this.__type.toJSON(),
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
			goal: this.__goal && this.__goal.map(v => v.toJSON()),
			action: this.__action && this.__action.map(v => v.toJSON()),
		});
	}
}

module.exports = PlanDefinition;
