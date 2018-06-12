const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Period = require('./Period');
const UsageContext = require('./UsageContext');
const CodeableConcept = require('./CodeableConcept');
const Contributor = require('./Contributor');
const ContactDetail = require('./ContactDetail');
const RelatedArtifact = require('./RelatedArtifact');
const Reference = require('./Reference');
const Timing = require('./Timing');
const Range = require('./Range');
const ActivityDefinition_Participant = require('./ActivityDefinition_Participant');
const Quantity = require('./Quantity');
const Dosage = require('./Dosage');
const ActivityDefinition_DynamicValue = require('./ActivityDefinition_DynamicValue');

class ActivityDefinition extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ActivityDefinition';
	}

	// This is a ActivityDefinition resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['ActivityDefinition'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// An absolute URI that is used to identify this activity definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this activity definition is (or will be) published. The URL SHOULD include the major version of the activity definition. For more information see [Technical and Business Versions](resource.html#versions).
	get url () {
		return this._url;
	}

	set url ( new_value ) {
		this._url = new_value;
	}

	// A formal identifier that is used to identify this activity definition when it is represented in other formats, or referenced in a specification, model, design or an instance.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// The identifier that is used to identify this version of the activity definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the activity definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active assets.
	get version () {
		return this._version;
	}

	set version ( new_value ) {
		this._version = new_value;
	}

	// A natural language name identifying the activity definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// A short, descriptive, user-friendly title for the activity definition.
	get title () {
		return this._title;
	}

	set title ( new_value ) {
		this._title = new_value;
	}

	// The status of this activity definition. Enables tracking the life-cycle of the content.
	get status () {
		return this._status;
	}

	set status ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['draft', 'active', 'retired', 'unknown'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field status`);
		}
		this._status = new_value;
	}

	// A boolean value to indicate that this activity definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental () {
		return this._experimental;
	}

	set experimental ( new_value ) {
		this._experimental = new_value;
	}

	// The date  (and optionally time) when the activity definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the activity definition changes.
	get date () {
		return this._date;
	}

	set date ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field date`);
		}
		this._date = new_value;
	}

	// The name of the individual or organization that published the activity definition.
	get publisher () {
		return this._publisher;
	}

	set publisher ( new_value ) {
		this._publisher = new_value;
	}

	// A free text natural language description of the activity definition from a consumer's perspective.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// Explaination of why this activity definition is needed and why it has been designed as it has.
	get purpose () {
		return this._purpose;
	}

	set purpose ( new_value ) {
		this._purpose = new_value;
	}

	// A detailed description of how the asset is used from a clinical perspective.
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
		if ( !pattern.test(new_value) ) {
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
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field lastReviewDate`);
		}
		this._lastReviewDate = new_value;
	}

	// The period during which the activity definition content was or is planned to be in active use.
	get effectivePeriod () {
		return this._effectivePeriod;
	}

	set effectivePeriod ( new_value ) {
		this._effectivePeriod = new Period(new_value);
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate activity definition instances.
	get useContext () {
		return this._useContext;
	}

	set useContext ( new_value ) {
		this._useContext = Array.isArray(new_value) ? new_value.map(val => new UsageContext(val)) : [new UsageContext(new_value)];
	}

	// A legal or geographic region in which the activity definition is intended to be used.
	get jurisdiction () {
		return this._jurisdiction;
	}

	set jurisdiction ( new_value ) {
		this._jurisdiction = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Descriptive topics related to the content of the activity. Topics provide a high-level categorization of the activity that can be useful for filtering and searching.
	get topic () {
		return this._topic;
	}

	set topic ( new_value ) {
		this._topic = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// A contributor to the content of the asset, including authors, editors, reviewers, and endorsers.
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

	// A copyright statement relating to the activity definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the activity definition.
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

	// A reference to a Library resource containing any formal logic used by the asset.
	get library () {
		return this._library;
	}

	set library ( new_value ) {
		this._library = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// A description of the kind of resource the activity definition is representing. For example, a MedicationRequest, a ProcedureRequest, or a CommunicationRequest. Typically, but not always, this is a Request resource.
	get kind () {
		return this._kind;
	}

	set kind ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field kind`);
		}
		this._kind = new_value;
	}

	// Detailed description of the type of activity; e.g. What lab test, what procedure, what kind of encounter.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		this._code = new CodeableConcept(new_value);
	}

	// The period, timing or frequency upon which the described activity is to occur.
	get timingTiming () {
		return this._timingTiming;
	}

	set timingTiming ( new_value ) {
		this._timingTiming = new Timing(new_value);
	}

	// The period, timing or frequency upon which the described activity is to occur.
	get timingDateTime () {
		return this._timingDateTime;
	}

	set timingDateTime ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /-?[0-9]{4}(-(0[1-9]|1[0-2])(-(0[0-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field timingDateTime`);
		}
		this._timingDateTime = new_value;
	}

	// The period, timing or frequency upon which the described activity is to occur.
	get timingPeriod () {
		return this._timingPeriod;
	}

	set timingPeriod ( new_value ) {
		this._timingPeriod = new Period(new_value);
	}

	// The period, timing or frequency upon which the described activity is to occur.
	get timingRange () {
		return this._timingRange;
	}

	set timingRange ( new_value ) {
		this._timingRange = new Range(new_value);
	}

	// Identifies the facility where the activity will occur; e.g. home, hospital, specific clinic, etc.
	get location () {
		return this._location;
	}

	set location ( new_value ) {
		this._location = new Reference(new_value);
	}

	// Indicates who should participate in performing the action described.
	get participant () {
		return this._participant;
	}

	set participant ( new_value ) {
		this._participant = Array.isArray(new_value) ? new_value.map(val => new ActivityDefinition_Participant(val)) : [new ActivityDefinition_Participant(new_value)];
	}

	// Identifies the food, drug or other product being consumed or supplied in the activity.
	get productReference () {
		return this._productReference;
	}

	set productReference ( new_value ) {
		this._productReference = new Reference(new_value);
	}

	// Identifies the food, drug or other product being consumed or supplied in the activity.
	get productCodeableConcept () {
		return this._productCodeableConcept;
	}

	set productCodeableConcept ( new_value ) {
		this._productCodeableConcept = new CodeableConcept(new_value);
	}

	// Identifies the quantity expected to be consumed at once (per dose, per meal, etc.).
	get quantity () {
		return this._quantity;
	}

	set quantity ( new_value ) {
		this._quantity = new Quantity(new_value);
	}

	// Provides detailed dosage instructions in the same way that they are described for MedicationRequest resources.
	get dosage () {
		return this._dosage;
	}

	set dosage ( new_value ) {
		this._dosage = Array.isArray(new_value) ? new_value.map(val => new Dosage(val)) : [new Dosage(new_value)];
	}

	// Indicates the sites on the subject's body where the procedure should be performed (I.e. the target sites).
	get bodySite () {
		return this._bodySite;
	}

	set bodySite ( new_value ) {
		this._bodySite = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input.
	get transform () {
		return this._transform;
	}

	set transform ( new_value ) {
		this._transform = new Reference(new_value);
	}

	// Dynamic values that will be evaluated to produce values for elements of the resulting resource. For example, if the dosage of a medication must be computed based on the patient's weight, a dynamic value would be used to specify an expression that calculated the weight, and the path on the intent resource that would contain the result.
	get dynamicValue () {
		return this._dynamicValue;
	}

	set dynamicValue ( new_value ) {
		this._dynamicValue = Array.isArray(new_value) ? new_value.map(val => new ActivityDefinition_DynamicValue(val)) : [new ActivityDefinition_DynamicValue(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
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
			participant: this._participant,
			productReference: this._productReference,
			productCodeableConcept: this._productCodeableConcept,
			quantity: this._quantity,
			dosage: this._dosage,
			bodySite: this._bodySite,
			transform: this._transform,
			dynamicValue: this._dynamicValue
		});
	}

}

module.exports = ActivityDefinition;
