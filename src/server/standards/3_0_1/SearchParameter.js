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

	// An absolute URI that is used to identify this search parameter when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this search parameter is (or will be) published. The URL SHOULD include the major version of the search parameter. For more information see [Technical and Business Versions](resource.html#versions).
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

	// The identifier that is used to identify this version of the search parameter when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the search parameter author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	// A natural language name identifying the search parameter. This name should be usable as an identifier for the module by machine processing applications such as code generation.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// The status of this search parameter. Enables tracking the life-cycle of the content.
	get status() {
		return this.__status;
	}

	set status(new_value) {
		this.__status = new_value;
	}

	// A boolean value to indicate that this search parameter is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental() {
		return this.__experimental;
	}

	set experimental(new_value) {
		this.__experimental = new_value;
	}

	// The date  (and optionally time) when the search parameter was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the search parameter changes.
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

	// The name of the individual or organization that published the search parameter.
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

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate search parameter instances.
	get useContext() {
		return this.__useContext;
	}

	set useContext(new_value) {
		const UsageContext = require('./UsageContext');
		this.__useContext = Array.isArray(new_value)
			? new_value.map(val => new UsageContext(val))
			: [new UsageContext(new_value)];
	}

	// A legal or geographic region in which the search parameter is intended to be used.
	get jurisdiction() {
		return this.__jurisdiction;
	}

	set jurisdiction(new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__jurisdiction = Array.isArray(new_value)
			? new_value.map(val => new CodeableConcept(val))
			: [new CodeableConcept(new_value)];
	}

	// Explaination of why this search parameter is needed and why it has been designed as it has.
	get purpose() {
		return this.__purpose;
	}

	set purpose(new_value) {
		this.__purpose = new_value;
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

	// The base resource type(s) that this search parameter can be used against.
	get base() {
		return this.__base;
	}

	set base(new_value) {
		this.__base = Array.isArray(new_value) ? new_value : [new_value];
	}

	// The type of value a search parameter refers to, and how the content is interpreted.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// Where this search parameter is originally defined. If a derivedFrom is provided, then the details in the search parameter must be consistent with the definition from which it is defined. I.e. the parameter should have the same meaning, and (usually) the functionality should be a proper subset of the underlying search parameter.
	get derivedFrom() {
		return this.__derivedFrom;
	}

	set derivedFrom(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field derivedFrom`);
		}
		this.__derivedFrom = new_value;
	}

	// A free text natural language description of the search parameter from a consumer\'s perspective. and how it used.
	get description() {
		return this.__description;
	}

	set description(new_value) {
		this.__description = new_value;
	}

	// A FHIRPath expression that returns a set of elements for the search parameter.
	get expression() {
		return this.__expression;
	}

	set expression(new_value) {
		this.__expression = new_value;
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

	// Comparators supported for the search parameter.
	get comparator() {
		return this.__comparator;
	}

	set comparator(new_value) {
		this.__comparator = Array.isArray(new_value) ? new_value : [new_value];
	}

	// A modifier supported for the search parameter.
	get modifier() {
		return this.__modifier;
	}

	set modifier(new_value) {
		this.__modifier = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Contains the names of any search parameters which may be chained to the containing search parameter. Chained parameters may be added to search parameters of type reference, and specify that resources will only be returned if they contain a reference to a resource which matches the chained parameter value. Values for this field should be drawn from SearchParameter.code for a parameter on the target resource type.
	get chain() {
		return this.__chain;
	}

	set chain(new_value) {
		this.__chain = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Used to define the parts of a composite search parameter.
	get component() {
		return this.__component;
	}

	set component(new_value) {
		const SearchParameterComponent = require('./SearchParameterComponent');
		this.__component = Array.isArray(new_value)
			? new_value.map(val => new SearchParameterComponent(val))
			: [new SearchParameterComponent(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			url: this.__url,
			version: this.__version,
			name: this.__name,
			status: this.__status,
			experimental: this.__experimental,
			date: this.__date,
			publisher: this.__publisher,
			contact: this.__contact && this.__contact.map(v => v.toJSON()),
			useContext: this.__useContext && this.__useContext.map(v => v.toJSON()),
			jurisdiction: this.__jurisdiction && this.__jurisdiction.map(v => v.toJSON()),
			purpose: this.__purpose,
			code: this.__code,
			base: this.__base,
			type: this.__type,
			derivedFrom: this.__derivedFrom,
			description: this.__description,
			expression: this.__expression,
			xpath: this.__xpath,
			xpathUsage: this.__xpathUsage,
			target: this.__target,
			comparator: this.__comparator,
			modifier: this.__modifier,
			chain: this.__chain,
			component: this.__component && this.__component.map(v => v.toJSON()),
		});
	}
}

module.exports = SearchParameter;
