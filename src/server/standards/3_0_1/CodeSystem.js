const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const ContactDetail = require('./ContactDetail');
const UsageContext = require('./UsageContext');
const CodeableConcept = require('./CodeableConcept');
const CodeSystem_Filter = require('./CodeSystem_Filter');
const CodeSystem_Property = require('./CodeSystem_Property');
const CodeSystem_Concept = require('./CodeSystem_Concept');

class CodeSystem extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'CodeSystem';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'CodeSystem';
	}

	// This is a CodeSystem resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['CodeSystem'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// An absolute URI that is used to identify this code system when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this code system is (or will be) published. The URL SHOULD include the major version of the code system. For more information see [Technical and Business Versions](resource.html#versions). This is used in [Coding]{datatypes.html#Coding}.system.
	get url () {
		return this._url;
	}

	set url ( new_value ) {
		this._url = new_value;
	}

	// A formal identifier that is used to identify this code system when it is represented in other formats, or referenced in a specification, model, design or an instance.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = new Identifier(new_value);
	}

	// The identifier that is used to identify this version of the code system when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the code system author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. This is used in [Coding]{datatypes.html#Coding}.version.
	get version () {
		return this._version;
	}

	set version ( new_value ) {
		this._version = new_value;
	}

	// A natural language name identifying the code system. This name should be usable as an identifier for the module by machine processing applications such as code generation.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// A short, descriptive, user-friendly title for the code system.
	get title () {
		return this._title;
	}

	set title ( new_value ) {
		this._title = new_value;
	}

	// The status of this code system. Enables tracking the life-cycle of the content.
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

	// A boolean value to indicate that this code system is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental () {
		return this._experimental;
	}

	set experimental ( new_value ) {
		this._experimental = new_value;
	}

	// The date  (and optionally time) when the code system was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the code system changes.
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

	// The name of the individual or organization that published the code system.
	get publisher () {
		return this._publisher;
	}

	set publisher ( new_value ) {
		this._publisher = new_value;
	}

	// Contact details to assist a user in finding and communicating with the publisher.
	get contact () {
		return this._contact;
	}

	set contact ( new_value ) {
		this._contact = Array.isArray(new_value) ? new_value.map(val => new ContactDetail(val)) : [new ContactDetail(new_value)];
	}

	// A free text natural language description of the code system from a consumer's perspective.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate code system instances.
	get useContext () {
		return this._useContext;
	}

	set useContext ( new_value ) {
		this._useContext = Array.isArray(new_value) ? new_value.map(val => new UsageContext(val)) : [new UsageContext(new_value)];
	}

	// A legal or geographic region in which the code system is intended to be used.
	get jurisdiction () {
		return this._jurisdiction;
	}

	set jurisdiction ( new_value ) {
		this._jurisdiction = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Explaination of why this code system is needed and why it has been designed as it has.
	get purpose () {
		return this._purpose;
	}

	set purpose ( new_value ) {
		this._purpose = new_value;
	}

	// A copyright statement relating to the code system and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the code system.
	get copyright () {
		return this._copyright;
	}

	set copyright ( new_value ) {
		this._copyright = new_value;
	}

	// If code comparison is case sensitive when codes within this system are compared to each other.
	get caseSensitive () {
		return this._caseSensitive;
	}

	set caseSensitive ( new_value ) {
		this._caseSensitive = new_value;
	}

	// Canonical URL of value set that contains the entire code system.
	get valueSet () {
		return this._valueSet;
	}

	set valueSet ( new_value ) {
		this._valueSet = new_value;
	}

	// The meaning of the hierarchy of concepts.
	get hierarchyMeaning () {
		return this._hierarchyMeaning;
	}

	set hierarchyMeaning ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['grouped-by', 'is-a', 'part-of', 'classified-with'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field hierarchyMeaning`);
		}
		this._hierarchyMeaning = new_value;
	}

	// True If code system defines a post-composition grammar.
	get compositional () {
		return this._compositional;
	}

	set compositional ( new_value ) {
		this._compositional = new_value;
	}

	// This flag is used to signify that the code system has not (or does not) maintain the definitions, and a version must be specified when referencing this code system.
	get versionNeeded () {
		return this._versionNeeded;
	}

	set versionNeeded ( new_value ) {
		this._versionNeeded = new_value;
	}

	// How much of the content of the code system - the concepts and codes it defines - are represented in this resource.
	get content () {
		return this._content;
	}

	set content ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['not-present', 'example', 'fragment', 'complete'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field content`);
		}
		this._content = new_value;
	}

	// The total number of concepts defined by the code system. Where the code system has a compositional grammar, the count refers to the number of base (primitive) concepts.
	get count () {
		return this._count;
	}

	set count ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[0]|([1-9][0-9]*)/;
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field count`);
		}
		this._count = new_value;
	}

	// A filter that can be used in a value set compose statement when selecting concepts using a filter.
	get filter () {
		return this._filter;
	}

	set filter ( new_value ) {
		this._filter = Array.isArray(new_value) ? new_value.map(val => new CodeSystem_Filter(val)) : [new CodeSystem_Filter(new_value)];
	}

	// A property defines an additional slot through which additional information can be provided about a concept.
	get property () {
		return this._property;
	}

	set property ( new_value ) {
		this._property = Array.isArray(new_value) ? new_value.map(val => new CodeSystem_Property(val)) : [new CodeSystem_Property(new_value)];
	}

	// Concepts that are in the code system. The concept definitions are inherently hierarchical, but the definitions must be consulted to determine what the meaning of the hierarchical relationships are.
	get concept () {
		return this._concept;
	}

	set concept ( new_value ) {
		this._concept = Array.isArray(new_value) ? new_value.map(val => new CodeSystem_Concept(val)) : [new CodeSystem_Concept(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			url: this._url,
			identifier: this._identifier && this._identifier.toJSON(),
			version: this._version,
			name: this._name,
			title: this._title,
			status: this._status,
			experimental: this._experimental,
			date: this._date,
			publisher: this._publisher,
			contact: this._contact && this._contact.map(v => v.toJSON()),
			description: this._description,
			useContext: this._useContext && this._useContext.map(v => v.toJSON()),
			jurisdiction: this._jurisdiction && this._jurisdiction.map(v => v.toJSON()),
			purpose: this._purpose,
			copyright: this._copyright,
			caseSensitive: this._caseSensitive,
			valueSet: this._valueSet,
			hierarchyMeaning: this._hierarchyMeaning,
			compositional: this._compositional,
			versionNeeded: this._versionNeeded,
			content: this._content,
			count: this._count,
			filter: this._filter && this._filter.map(v => v.toJSON()),
			property: this._property && this._property.map(v => v.toJSON()),
			concept: this._concept && this._concept.map(v => v.toJSON())
		});
	}

}

module.exports = CodeSystem;
