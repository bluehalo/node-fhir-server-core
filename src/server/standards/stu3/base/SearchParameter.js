const DomainResource = require('./DomainResource');
const ContactDetail = require('./ContactDetail');
const UsageContext = require('./UsageContext');
const CodeableConcept = require('./CodeableConcept');
const SearchParameter_Component = require('./SearchParameter_Component');

class SearchParameter extends DomainResource {

	constructor ( opts ) {
		super();
		Object.assign(this, opts);
	}

	static get __resourceType () {
		return 'SearchParameter';
	}

	// This is a SearchParameter resource
	get resourceType () {
		return this._resourceType;
	}

	set resourceType ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['SearchParameter'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field resourceType`);
		}
		this._resourceType = new_value;
	}

	// An absolute URI that is used to identify this search parameter when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this search parameter is (or will be) published. The URL SHOULD include the major version of the search parameter. For more information see [Technical and Business Versions](resource.html#versions).
	get url () {
		return this._url;
	}

	set url ( new_value ) {
		this._url = new_value;
	}

	// The identifier that is used to identify this version of the search parameter when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the search parameter author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence.
	get version () {
		return this._version;
	}

	set version ( new_value ) {
		this._version = new_value;
	}

	// A natural language name identifying the search parameter. This name should be usable as an identifier for the module by machine processing applications such as code generation.
	get name () {
		return this._name;
	}

	set name ( new_value ) {
		this._name = new_value;
	}

	// The status of this search parameter. Enables tracking the life-cycle of the content.
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

	// A boolean value to indicate that this search parameter is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage.
	get experimental () {
		return this._experimental;
	}

	set experimental ( new_value ) {
		this._experimental = new_value;
	}

	// The date  (and optionally time) when the search parameter was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the search parameter changes.
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

	// The name of the individual or organization that published the search parameter.
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

	// The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate search parameter instances.
	get useContext () {
		return this._useContext;
	}

	set useContext ( new_value ) {
		this._useContext = Array.isArray(new_value) ? new_value.map(val => new UsageContext(val)) : [new UsageContext(new_value)];
	}

	// A legal or geographic region in which the search parameter is intended to be used.
	get jurisdiction () {
		return this._jurisdiction;
	}

	set jurisdiction ( new_value ) {
		this._jurisdiction = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// Explaination of why this search parameter is needed and why it has been designed as it has.
	get purpose () {
		return this._purpose;
	}

	set purpose ( new_value ) {
		this._purpose = new_value;
	}

	// The code used in the URL or the parameter name in a parameters resource for this search parameter.
	get code () {
		return this._code;
	}

	set code ( new_value ) {
		// Throw if new value does not match the pattern
		let pattern = /[^\s]+([\s]?[^\s]+)*/;
		if ( !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field code`);
		}
		this._code = new_value;
	}

	// The base resource type(s) that this search parameter can be used against.
	get base () {
		return this._base;
	}

	set base ( new_value ) {
		this._base = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// The type of value a search parameter refers to, and how the content is interpreted.
	get type () {
		return this._type;
	}

	set type ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['number', 'date', 'string', 'token', 'reference', 'composite', 'quantity', 'uri'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field type`);
		}
		this._type = new_value;
	}

	// Where this search parameter is originally defined. If a derivedFrom is provided, then the details in the search parameter must be consistent with the definition from which it is defined. I.e. the parameter should have the same meaning, and (usually) the functionality should be a proper subset of the underlying search parameter.
	get derivedFrom () {
		return this._derivedFrom;
	}

	set derivedFrom ( new_value ) {
		this._derivedFrom = new_value;
	}

	// A free text natural language description of the search parameter from a consumer's perspective. and how it used.
	get description () {
		return this._description;
	}

	set description ( new_value ) {
		this._description = new_value;
	}

	// A FHIRPath expression that returns a set of elements for the search parameter.
	get expression () {
		return this._expression;
	}

	set expression ( new_value ) {
		this._expression = new_value;
	}

	// An XPath expression that returns a set of elements for the search parameter.
	get xpath () {
		return this._xpath;
	}

	set xpath ( new_value ) {
		this._xpath = new_value;
	}

	// How the search parameter relates to the set of elements returned by evaluating the xpath query.
	get xpathUsage () {
		return this._xpathUsage;
	}

	set xpathUsage ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['normal', 'phonetic', 'nearby', 'distance', 'other'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field xpathUsage`);
		}
		this._xpathUsage = new_value;
	}

	// Types of resource (if a resource is referenced).
	get target () {
		return this._target;
	}

	set target ( new_value ) {
		this._target = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Comparators supported for the search parameter.
	get comparator () {
		return this._comparator;
	}

	set comparator ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['eq', 'ne', 'gt', 'lt', 'ge', 'le', 'sa', 'eb', 'ap'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field comparator`);
		}
		this._comparator = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// A modifier supported for the search parameter.
	get modifier () {
		return this._modifier;
	}

	set modifier ( new_value ) {
		// Throw if new value is not in the allowed values
		let allowed_values = ['missing', 'exact', 'contains', 'not', 'text', 'in', 'not-in', 'below', 'above', 'type'];
		if ( allowed_values.indexOf(new_value) === -1 ) {
			throw new Error(`Expected one of ${allowed_values}, got ${new_value} for field modifier`);
		}
		this._modifier = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Contains the names of any search parameters which may be chained to the containing search parameter. Chained parameters may be added to search parameters of type reference, and specify that resources will only be returned if they contain a reference to a resource which matches the chained parameter value. Values for this field should be drawn from SearchParameter.code for a parameter on the target resource type.
	get chain () {
		return this._chain;
	}

	set chain ( new_value ) {
		this._chain = Array.isArray(new_value) ? new_value.map(val => val) : [new_value];
	}

	// Used to define the parts of a composite search parameter.
	get component () {
		return this._component;
	}

	set component ( new_value ) {
		this._component = Array.isArray(new_value) ? new_value.map(val => new SearchParameter_Component(val)) : [new SearchParameter_Component(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this._resourceType,
			url: this._url,
			version: this._version,
			name: this._name,
			status: this._status,
			experimental: this._experimental,
			date: this._date,
			publisher: this._publisher,
			contact: this._contact,
			useContext: this._useContext,
			jurisdiction: this._jurisdiction,
			purpose: this._purpose,
			code: this._code,
			base: this._base,
			type: this._type,
			derivedFrom: this._derivedFrom,
			description: this._description,
			expression: this._expression,
			xpath: this._xpath,
			xpathUsage: this._xpathUsage,
			target: this._target,
			comparator: this._comparator,
			modifier: this._modifier,
			chain: this._chain,
			component: this._component
		});
	}

}

module.exports = SearchParameter;
