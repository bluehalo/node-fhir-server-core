const DomainResource = require('./DomainResource');
const UriScalar = require('./scalars/Uri.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const DateScalar = require('./scalars/Date.scalar');

class ActivityDefinition extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ActivityDefinition';
		Object.assign(this, opt);
	}

	// This is a ActivityDefinition resource
	static get __resourceType() {
		return 'ActivityDefinition';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__ActivityDefinition = new_value;
	}

	// An absolute URI that is used to identify this activity definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this activity definition is (or will be) published. The URL SHOULD include the major version of the activity definition. For more information see [Technical and Business Versions](resource.html#versions).
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

	// A formal identifier that is used to identify this activity definition when it is represented in other formats, or referenced in a specification, model, design or an instance.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// The identifier that is used to identify this version of the activity definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the activity definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active assets.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	// A natural language name identifying the activity definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// A short, descriptive, user-friendly title for the activity definition.
	get title() {
		return this.__title;
	}

	set title(new_value) {
		this.__title = new_value;
	}

	// The status of this activity definition. Enables tracking the life-cycle of the content.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// A boolean value to indicate that this activity definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental() {
		return this.__experimental;
	}

	set experimental(new_value) {
		this.__experimental = new_value;
	}

	// The date  (and optionally time) when the activity definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the activity definition changes.
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

	// The name of the individual or organization that published the activity definition.
	get publisher() {
		return this.__publisher;
	}

	set publisher(new_value) {
		this.__publisher = new_value;
	}

	// A free text natural language description of the activity definition from a consumer\'s perspective.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// Explaination of why this activity definition is needed and why it has been designed as it has.
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

	// The period during which the activity definition content was or is planned to be in active use.
	get effectivePeriod() {
		return this.__effectivePeriod;
	}

	set effectivePeriod(new_value) {
		const Period = require('./Period');
		this.__effectivePeriod = new Period(new_value);
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate activity definition instances.
	get useContext() {
		return this.__useContext;
	}

	set useContext(new_value) {
		const UsageContext = require('./UsageContext');
		this.__useContext = Array.isArray(new_value)
			? new_value.map(val => new UsageContext(val))
			: [new UsageContext(new_value)];
	}

	// A legal or geographic region in which the activity definition is intended to be used.
	get jurisdiction() {
		return this.__jurisdiction;
	}

	set jurisdiction(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__jurisdiction = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Descriptive topics related to the content of the activity. Topics provide a high-level categorization of the activity that can be useful for filtering and searching.
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

	// A copyright statement relating to the activity definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the activity definition.
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

	// A reference to a Library resource containing any formal logic used by the asset.
	get library() {
		return this.__library;
	}

	set library(new_value) {
		const Reference = require('./Reference');
		this.__library = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A description of the kind of resource the activity definition is representing. For example, a MedicationRequest, a ProcedureRequest, or a CommunicationRequest. Typically, but not always, this is a Request resource.
	get kind() {
		return this.__kind;
	}

	set kind(new_value) {
		this.__kind = new_value;
	}

	// Detailed description of the type of activity; e.g. What lab test, what procedure, what kind of encounter.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__code = new CodeableConcept(new_value);
	}

	// The period, timing or frequency upon which the described activity is to occur.
	get timingTiming() {
		return this.__timingTiming;
	}

	set timingTiming(new_value) {
		const Timing = require('./Timing');
		this.__timingTiming = new Timing(new_value);
	}

	// The period, timing or frequency upon which the described activity is to occur.
	get timingDateTime() {
		return this.__timingDateTime;
	}

	set timingDateTime(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field timingDateTime`);
		}
		this.__timingDateTime = new_value;
	}

	// The period, timing or frequency upon which the described activity is to occur.
	get timingPeriod() {
		return this.__timingPeriod;
	}

	set timingPeriod(new_value) {
		const Period = require('./Period');
		this.__timingPeriod = new Period(new_value);
	}

	// The period, timing or frequency upon which the described activity is to occur.
	get timingRange() {
		return this.__timingRange;
	}

	set timingRange(new_value) {
		const Range = require('./Range');
		this.__timingRange = new Range(new_value);
	}

	// Identifies the facility where the activity will occur; e.g. home, hospital, specific clinic, etc.
	get location() {
		return this.__location;
	}

	set location(new_value) {
		const Reference = require('./Reference');
		this.__location = new Reference(new_value);
	}

	// Indicates who should participate in performing the action described.
	get participant() {
		return this.__participant;
	}

	set participant(new_value) {
		const ActivityDefinitionParticipant = require('./ActivityDefinitionParticipant');
		this.__participant = Array.isArray(new_value)
			? new_value.map(val => new ActivityDefinitionParticipant(val))
			: [new ActivityDefinitionParticipant(new_value)];
	}

	// Identifies the food, drug or other product being consumed or supplied in the activity.
	get productReference() {
		return this.__productReference;
	}

	set productReference(new_value) {
		const Reference = require('./Reference');
		this.__productReference = new Reference(new_value);
	}

	// Identifies the food, drug or other product being consumed or supplied in the activity.
	get productCodeableConcept() {
		return this.__productCodeableConcept;
	}

	set productCodeableConcept(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__productCodeableConcept = new CodeableConcept(new_value);
	}

	// Identifies the quantity expected to be consumed at once (per dose, per meal, etc.).
	get quantity() {
		return this.__quantity;
	}

	set quantity(new_value) {
		const Quantity = require('./Quantity');
		this.__quantity = new Quantity(new_value);
	}

	// Provides detailed dosage instructions in the same way that they are described for MedicationRequest resources.
	get dosage() {
		return this.__dosage;
	}

	set dosage(new_value) {
		const Dosage = require('./Dosage');
		this.__dosage = Array.isArray(new_value) ? new_value.map(val => new Dosage(val)) : [new Dosage(new_value)];
	}

	// Indicates the sites on the subject\'s body where the procedure should be performed (I.e. the target sites).
	get bodySite() {
		return this.__bodySite;
	}

	set bodySite(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__bodySite = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input.
	get transform() {
		return this.__transform;
	}

	set transform(new_value) {
		const Reference = require('./Reference');
		this.__transform = new Reference(new_value);
	}

	// Dynamic values that will be evaluated to produce values for elements of the resulting resource. For example, if the dosage of a medication must be computed based on the patient\'s weight, a dynamic value would be used to specify an expression that calculated the weight, and the path on the intent resource that would contain the result.
	get dynamicValue() {
		return this.__dynamicValue;
	}

	set dynamicValue(new_value) {
		const ActivityDefinitionDynamicValue = require('./ActivityDefinitionDynamicValue');
		this.__dynamicValue = Array.isArray(new_value)
			? new_value.map(val => new ActivityDefinitionDynamicValue(val))
			: [new ActivityDefinitionDynamicValue(new_value)];
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
			kind: this.__kind,
			code: this.__code && this.__code.toJSON(),
			timingTiming: this.__timingTiming && this.__timingTiming.toJSON(),
			timingDateTime: this.__timingDateTime,
			timingPeriod: this.__timingPeriod && this.__timingPeriod.toJSON(),
			timingRange: this.__timingRange && this.__timingRange.toJSON(),
			location: this.__location && this.__location.toJSON(),
			participant: this.__participant && this.__participant.map(v => v.toJSON()),
			productReference: this.__productReference && this.__productReference.toJSON(),
			productCodeableConcept: this.__productCodeableConcept && this.__productCodeableConcept.toJSON(),
			quantity: this.__quantity && this.__quantity.toJSON(),
			dosage: this.__dosage && this.__dosage.map(v => v.toJSON()),
			bodySite: this.__bodySite && this.__bodySite.map(v => v.toJSON()),
			transform: this.__transform && this.__transform.toJSON(),
			dynamicValue: this.__dynamicValue && this.__dynamicValue.map(v => v.toJSON()),
		});
	}
}

module.exports = ActivityDefinition;
