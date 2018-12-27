const DomainResource = require('./DomainResource');
const UriScalar = require('./scalars/Uri.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const DateScalar = require('./scalars/Date.scalar');

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

	// An absolute URL that is used to identify this value set when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this value set is (or will be) published.
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

	// Formal identifier that is used to identify this value set when it is represented in other formats, or referenced in a specification, model, design or an instance.
	get identifier() {
		return this.__identifier;
	}

	set identifier(new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// Used to identify this version of the value set when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the profile author manually and the value should be a timestamp.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	// A free text natural language name describing the value set.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// The status of the value set.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// This valueset was authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental() {
		return this.__experimental;
	}

	set experimental(new_value) {
		this.__experimental = new_value;
	}

	// The name of the individual or organization that published the value set.
	get publisher() {
		return this.__publisher;
	}

	set publisher(new_value) {
		this.__publisher = new_value;
	}

	// Contacts to assist a user in finding and communicating with the publisher.
	get contact() {
		return this.__contact;
	}

	set contact(new_value) {
		const ValueSetContact = require('./ValueSetContact');
		this.__contact = Array.isArray(new_value)
			? new_value.map(val => new ValueSetContact(val))
			: [new ValueSetContact(new_value)];
	}

	// The date that the value set status was last changed. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the implementation guide changes (e.g. the \'content logical definition\').
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

	// If a locked date is defined, then the Content Logical Definition must be evaluated using the current version of all referenced code system(s) and value set instances as of the locked date.
	get lockedDate() {
		return this.__lockedDate;
	}

	set lockedDate(new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field lockedDate`);
		}
		this.__lockedDate = new_value;
	}

	// A free text natural language description of the use of the value set - reason for definition, \'the semantic space\' to be included in the value set, conditions of use, etc. The description may include a list of expected usages for the value set and can also describe the approach taken to build the value set.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of value set definitions.
	get useContext() {
		return this.__useContext;
	}

	set useContext(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__useContext = Array.isArray(new_value)
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

	// Explains why this value set is needed and why it has been constrained as it has.
	get requirements() {
		return this.__requirements;
	}

	set requirements(new_value) {
		this.__requirements = new_value;
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

	// A definition of a code system, inlined into the value set (as a packaging convenience). Note that the inline code system may be used from other value sets by referring to its (codeSystem.system) directly.
	get codeSystem() {
		return this.__codeSystem;
	}

	set codeSystem(new_value) {
		const ValueSetCodeSystem = require('./ValueSetCodeSystem');
		this.__codeSystem = new ValueSetCodeSystem(new_value);
	}

	// A set of criteria that provide the content logical definition of the value set by including or excluding codes from outside this value set.
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
			identifier: this.__identifier && this.__identifier.toJSON(),
			version: this.__version,
			name: this.__name,
			status: this.__status,
			experimental: this.__experimental,
			publisher: this.__publisher,
			contact: this.__contact && this.__contact.map(v => v.toJSON()),
			date: this.__date,
			lockedDate: this.__lockedDate,
			description: this.__description,
			useContext: this.__useContext && this.__useContext.map(v => v.toJSON()),
			immutable: this.__immutable,
			requirements: this.__requirements,
			copyright: this.__copyright,
			extensible: this.__extensible,
			codeSystem: this.__codeSystem && this.__codeSystem.toJSON(),
			compose: this.__compose && this.__compose.toJSON(),
			expansion: this.__expansion && this.__expansion.toJSON(),
		});
	}
}

module.exports = ValueSet;
