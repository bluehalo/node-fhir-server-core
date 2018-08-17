const DomainResource = require('./DomainResource');
const Identifier = require('./Identifier');
const ContactDetail = require('./ContactDetail');
const UsageContext = require('./UsageContext');
const CodeableConcept = require('./CodeableConcept');
const ValueSet_Compose = require('./ValueSet_Compose');
const ValueSet_Expansion = require('./ValueSet_Expansion');

class ValueSet extends DomainResource {

	constructor ( opts ) {
		super( opts );
		this._resourceType = 'ValueSet';
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'ValueSet';
	}

	// This is a ValueSet resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['ValueSet'];
		if ( new_value && allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// An absolute URI that is used to identify this value set when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this value set is (or will be) published. The URL SHOULD include the major version of the value set. For more information see [Technical and Business Versions](resource.html#versions).
	get url () {
		return this._url;
	}

	set url ( new_value ) {
		this._url = new_value;
	}

	// A formal identifier that is used to identify this value set when it is represented in other formats, or referenced in a specification, model, design or an instance.
	get identifier () {
		return this._identifier;
	}

	set identifier ( new_value ) {
		this._identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// The identifier that is used to identify this version of the value set when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the value set author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
	get version () {
		return this._version;
	}

	set version ( new_value ) {
		this._version = new_value;
	}

	// A natural language name identifying the value set. This name should be usable as an identifier for the module by machine processing applications such as code generation.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// A short, descriptive, user-friendly title for the value set.
	get title () {
		return this._title;
	}

	set title ( new_value ) {
		this._title = new_value;
	}

	// The status of this value set. Enables tracking the life-cycle of the content.
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

	// A boolean value to indicate that this value set is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental () {
		return this._experimental;
	}

	set experimental ( new_value ) {
		this._experimental = new_value;
	}

	// The date  (and optionally time) when the value set was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the value set changes. (e.g. the 'content logical definition').
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

	// The name of the individual or organization that published the value set.
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

	// A free text natural language description of the value set from a consumer's perspective.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate value set instances.
	get useContext () {
		return this._useContext;
	}

	set useContext ( new_value ) {
		this._useContext = Array.isArray(new_value) ? new_value.map(val => new UsageContext(val)) : [new UsageContext(new_value)];
	}

	// A legal or geographic region in which the value set is intended to be used.
	get jurisdiction () {
		return this._jurisdiction;
	}

	set jurisdiction ( new_value ) {
		this._jurisdiction = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// If this is set to 'true', then no new versions of the content logical definition can be created.  Note: Other metadata might still change.
	get immutable () {
		return this._immutable;
	}

	set immutable ( new_value ) {
		this._immutable = new_value;
	}

	// Explaination of why this value set is needed and why it has been designed as it has.
	get purpose () {
		return this._purpose;
	}

	set purpose ( new_value ) {
		this._purpose = new_value;
	}

	// A copyright statement relating to the value set and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the value set.
	get copyright () {
		return this._copyright;
	}

	set copyright ( new_value ) {
		this._copyright = new_value;
	}

	// Whether this is intended to be used with an extensible binding or not.
	get extensible () {
		return this._extensible;
	}

	set extensible ( new_value ) {
		this._extensible = new_value;
	}

	// A set of criteria that define the content logical definition of the value set by including or excluding codes from outside this value set. This I also known as the "Content Logical Definition" (CLD).
	get compose () {
		return this._compose;
	}

	set compose ( new_value ) {
		this._compose = new ValueSet_Compose(new_value);
	}

	// A value set can also be "expanded", where the value set is turned into a simple collection of enumerated codes. This element holds the expansion, if it has been performed.
	get expansion () {
		return this._expansion;
	}

	set expansion ( new_value ) {
		this._expansion = new ValueSet_Expansion(new_value);
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
			contact: this._contact && this._contact.map(v => v.toJSON()),
			description: this._description,
			useContext: this._useContext && this._useContext.map(v => v.toJSON()),
			jurisdiction: this._jurisdiction && this._jurisdiction.map(v => v.toJSON()),
			immutable: this._immutable,
			purpose: this._purpose,
			copyright: this._copyright,
			extensible: this._extensible,
			compose: this._compose && this._compose.toJSON(),
			expansion: this._expansion && this._expansion.toJSON()
		});
	}

}

module.exports = ValueSet;
