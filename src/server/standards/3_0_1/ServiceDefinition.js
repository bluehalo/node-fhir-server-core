const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const Period = require('./Period');
const UsageContext = require('./UsageContext');
const CodeableConcept = require('./CodeableConcept');
const Contributor = require('./Contributor');
const ContactDetail = require('./ContactDetail');
const RelatedArtifact = require('./RelatedArtifact');
const TriggerDefinition = require('./TriggerDefinition');
const DataRequirement = require('./DataRequirement');
const Reference = require('./Reference');

class ServiceDefinition extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'ServiceDefinition';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ServiceDefinition';
	}

	// This is a ServiceDefinition resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['ServiceDefinition'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// An absolute URI that is used to identify this service definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this service definition is (or will be) published. The URL SHOULD include the major version of the service definition. For more information see [Technical and Business Versions](resource.html#versions).
	get url () {
		return this._url;
	}

	set url ( new_value ) {
		this._url = new_value;
	}

	// A formal identifier that is used to identify this service definition when it is represented in other formats, or referenced in a specification, model, design or an instance. This is used for CMS or NQF identifiers for a measure artifact. Note that at least one identifier is required for non-experimental active artifacts.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// The identifier that is used to identify this version of the service definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the service definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
	get version () {
		return this._version;
	}

	set version ( new_value ) {
		this._version = new_value;
	}

	// A natural language name identifying the service definition. This name should be usable as an identifier for the module by machine processing applications such as code generation.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// A short, descriptive, user-friendly title for the service definition.
	get title () {
		return this._title;
	}

	set title ( new_value ) {
		this._title = new_value;
	}

	// The status of this service definition. Enables tracking the life-cycle of the content.
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

	// A boolean value to indicate that this service definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental () {
		return this._experimental;
	}

	set experimental ( new_value ) {
		this._experimental = new_value;
	}

	// The date  (and optionally time) when the service definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the service definition changes.
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

	// The name of the individual or organization that published the service definition.
	get publisher () {
		return this._publisher;
	}

	set publisher ( new_value ) {
		this._publisher = new_value;
	}

	// A free text natural language description of the service definition from a consumer's perspective.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// Explaination of why this service definition is needed and why it has been designed as it has.
	get purpose () {
		return this._purpose;
	}

	set purpose ( new_value ) {
		this._purpose = new_value;
	}

	// A detailed description of how the module is used from a clinical perspective.
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

	// The period during which the service definition content was or is planned to be in active use.
	get effectivePeriod () {
		return this._effectivePeriod;
	}

	set effectivePeriod ( new_value ) {
		this._effectivePeriod = new Period(new_value);
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate service definition instances.
	get useContext () {
		return this._useContext;
	}

	set useContext ( new_value ) {
		this._useContext = Array.isArray(new_value) ? new_value.map(val => new UsageContext(val)) : [new UsageContext(new_value)];
	}

	// A legal or geographic region in which the service definition is intended to be used.
	get jurisdiction () {
		return this._jurisdiction;
	}

	set jurisdiction ( new_value ) {
		this._jurisdiction = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Descriptive topics related to the module. Topics provide a high-level categorization of the module that can be useful for filtering and searching.
	get topic () {
		return this._topic;
	}

	set topic ( new_value ) {
		this._topic = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// A contributor to the content of the module, including authors, editors, reviewers, and endorsers.
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

	// A copyright statement relating to the service definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the service definition.
	get copyright () {
		return this._copyright;
	}

	set copyright ( new_value ) {
		this._copyright = new_value;
	}

	// Related resources such as additional documentation, justification, or bibliographic references.
	get relatedArtifact () {
		return this._relatedArtifact;
	}

	set relatedArtifact ( new_value ) {
		this._relatedArtifact = Array.isArray(new_value) ? new_value.map(val => new RelatedArtifact(val)) : [new RelatedArtifact(new_value)];
	}

	// The trigger element defines when the rule should be invoked. This information is used by consumers of the rule to determine how to integrate the rule into a specific workflow.
	get trigger () {
		return this._trigger;
	}

	set trigger ( new_value ) {
		this._trigger = Array.isArray(new_value) ? new_value.map(val => new TriggerDefinition(val)) : [new TriggerDefinition(new_value)];
	}

	// Data requirements are a machine processable description of the data required by the module in order to perform a successful evaluation.
	get dataRequirement () {
		return this._dataRequirement;
	}

	set dataRequirement ( new_value ) {
		this._dataRequirement = Array.isArray(new_value) ? new_value.map(val => new DataRequirement(val)) : [new DataRequirement(new_value)];
	}

	// A reference to the operation that is used to invoke this service.
	get operationDefinition () {
		return this._operationDefinition;
	}

	set operationDefinition ( new_value ) {
		this._operationDefinition = new Reference(new_value);
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
			trigger: this._trigger && this._trigger.map(v => v.toJSON()),
			dataRequirement: this._dataRequirement && this._dataRequirement.map(v => v.toJSON()),
			operationDefinition: this._operationDefinition && this._operationDefinition.toJSON()
		});
	}

}

module.exports = ServiceDefinition;
