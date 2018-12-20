const DomainResource = require('./DomainResource');
const UriScalar = require('./scalars/Uri.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class ValueSet extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ValueSet';
		Object.assign(this, opt);
	}

	// This is a ValueSet resource
	static get __resourceType() {
		return 'ValueSet';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__ValueSet = new_value;
	}

	// An absolute URI that is used to identify this value set when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this value set is (or will be) published. The URL SHOULD include the major version of the value set. For more information see [Technical and Business Versions](resource.html#versions).
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

	// A formal identifier that is used to identify this value set when it is represented in other formats, or referenced in a specification, model, design or an instance.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value)
			? new_value.map(val => new Identifier(val))
			: [new Identifier(new_value)];
	}

	// The identifier that is used to identify this version of the value set when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the value set author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	// A natural language name identifying the value set. This name should be usable as an identifier for the module by machine processing applications such as code generation.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// A short, descriptive, user-friendly title for the value set.
	get title() {
		return this.__title;
	}

	set title(new_value) {
		this.__title = new_value;
	}

	// The status of this value set. Enables tracking the life-cycle of the content.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// A boolean value to indicate that this value set is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental() {
		return this.__experimental;
	}

	set experimental(new_value) {
		this.__experimental = new_value;
	}

	// The date  (and optionally time) when the value set was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the value set changes. (e.g. the \'content logical definition\').
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

	// The name of the individual or organization that published the value set.
	get publisher() {
		return this.__publisher;
	}

	set publisher(new_value) {
		this.__publisher = new_value;
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

	// A free text natural language description of the value set from a consumer\'s perspective.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate value set instances.
	get useContext() {
		return this.__useContext;
	}

	set useContext(new_value) {
		const UsageContext = require('./UsageContext');
		this.__useContext = Array.isArray(new_value)
			? new_value.map(val => new UsageContext(val))
			: [new UsageContext(new_value)];
	}

	// A legal or geographic region in which the value set is intended to be used.
	get jurisdiction() {
		return this.__jurisdiction;
	}

	set jurisdiction(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__jurisdiction = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// If this is set to \'true\', then no new versions of the content logical definition can be created.  Note: Other metadata might still change.
	get immutable() {
		return this.__immutable;
	}

	set immutable(new_value) {
		this.__immutable = new_value;
	}

	// Explaination of why this value set is needed and why it has been designed as it has.
	get purpose() {
		return this.__purpose;
	}

	set purpose(new_value) {
		this.__purpose = new_value;
	}

	// A copyright statement relating to the value set and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the value set.
	get copyright() {
		return this.__copyright;
	}

	set copyright(new_value) {
		this.__copyright = new_value;
	}

	// Whether this is intended to be used with an extensible binding or not.
	get extensible() {
		return this.__extensible;
	}

	set extensible(new_value) {
		this.__extensible = new_value;
	}

	// A set of criteria that define the content logical definition of the value set by including or excluding codes from outside this value set. This I also known as the \'Content Logical Definition\' (CLD).
	get compose() {
		return this.__compose;
	}

	set compose(new_value) {
		const ValueSetCompose = require('./ValueSetCompose');
		this.__compose = new ValueSetCompose(new_value);
	}

	// A value set can also be \'expanded\', where the value set is turned into a simple collection of enumerated codes. This element holds the expansion, if it has been performed.
	get expansion() {
		return this.__expansion;
	}

	set expansion(new_value) {
		const ValueSetExpansion = require('./ValueSetExpansion');
		this.__expansion = new ValueSetExpansion(new_value);
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
			contact: this.__contact && this.__contact.map(v => v.toJSON()),
			description: this.__description,
			useContext: this.__useContext && this.__useContext.map(v => v.toJSON()),
			jurisdiction: this.__jurisdiction && this.__jurisdiction.map(v => v.toJSON()),
			immutable: this.__immutable,
			purpose: this.__purpose,
			copyright: this.__copyright,
			extensible: this.__extensible,
			compose: this.__compose && this.__compose.toJSON(),
			expansion: this.__expansion && this.__expansion.toJSON(),
		});
	}
}

module.exports = ValueSet;
