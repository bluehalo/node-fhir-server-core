const DomainResource = require('./DomainResource');
const UriScalar = require('./scalars/Uri.scalar');
const DateTimeScalar = require('./scalars/DateTime.scalar');
const CodeScalar = require('./scalars/Code.scalar');

class SearchParameter extends DomainResource {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'SearchParameter';
		Object.assign(this, opt);
	}

	// This is a SearchParameter resource
	static get __resourceType() {
		return 'SearchParameter';
	}

	// Type of this resource.
	get resourceType() {
		return this.__resourceType;
	}

	set resourceType(new_value) {
		this.__SearchParameter = new_value;
	}

	// An absolute URL that is used to identify this search parameter when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this search parameter is (or will be) published.
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

	// A free text natural language name identifying the search parameter.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// The status of this search parameter definition.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// A flag to indicate that this search parameter definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental() {
		return this.__experimental;
	}

	set experimental(new_value) {
		this.__experimental = new_value;
	}

	// The name of the individual or organization that published the search parameter.
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
		const SearchParameterContact = require('./SearchParameterContact');
		this.__contact = Array.isArray(new_value)
			? new_value.map(val => new SearchParameterContact(val))
			: [new SearchParameterContact(new_value)];
	}

	// The date  (and optionally time) when the search parameter definition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the search parameter changes.
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

	// The Scope and Usage that this search parameter was created to meet.
	get requirements() {
		return this.__requirements;
	}

	set requirements(new_value) {
		this.__requirements = new_value;
	}

	// The code used in the URL or the parameter name in a parameters resource for this search parameter.
	get code() {
		return this.__code;
	}

	set code(new_value) {
		// Throw if new value does not match the pattern
		let pattern = CodeScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field code`);
		}
		this.__code = new_value;
	}

	// The base resource type that this search parameter refers to.
	get base() {
		return this.__base;
	}

	set base(new_value) {
		this.__base = new_value;
	}

	// The type of value a search parameter refers to, and how the content is interpreted.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// A description of the search parameters and how it used.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// An XPath expression that returns a set of elements for the search parameter.
	get xpath() {
		return this.__xpath;
	}

	set xpath(new_value) {
		this.__xpath = new_value;
	}

	// How the search parameter relates to the set of elements returned by evaluating the xpath query.
	get xpathUsage() {
		return this.__xpathUsage;
	}

	set xpathUsage(new_value) {
		this.__xpathUsage = new_value;
	}

	// Types of resource (if a resource is referenced).
	get target() {
		return this.__target;
	}

	set target(new_value) {
		this.__target = Array.isArray(new_value) ? new_value : [new_value];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			url: this.__url,
			name: this.__name,
			status: this.__status,
			experimental: this.__experimental,
			publisher: this.__publisher,
			contact: this.__contact && this.__contact.map(v => v.toJSON()),
			date: this.__date,
			requirements: this.__requirements,
			code: this.__code,
			base: this.__base,
			type: this.__type,
			description: this.__description,
			xpath: this.__xpath,
			xpathUsage: this.__xpathUsage,
			target: this.__target,
		});
	}
}

module.exports = SearchParameter;
