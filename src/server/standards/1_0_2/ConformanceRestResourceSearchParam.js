const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class ConformanceRestResourceSearchParam extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ConformanceRestResourceSearchParam';
		Object.assign(this, opt);
	}

	// This is a ConformanceRestResourceSearchParam resource
	static get __resourceType() {
		return 'ConformanceRestResourceSearchParam';
	}

	// The name of the search parameter used in the interface.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// An absolute URI that is a formal reference to where this parameter was first defined, so that a client can be confident of the meaning of the search parameter (a reference to [[[SearchParameter.url]]]).
	get definition() {
		return this.__definition;
	}

	set definition(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field definition`);
		}
		this.__definition = new_value;
	}

	// The type of value a search parameter refers to, and how the content is interpreted.
	get type() {
		return this.__type;
	}

	set type(new_value) {
		this.__type = new_value;
	}

	// This allows documentation of any distinct behaviors about how the search parameter is used.  For example, text matching algorithms.
	get documentation() {
		return this.__documentation;
	}

	set documentation(new_value) {
		this.__documentation = new_value;
	}

	// Types of resource (if a resource is referenced).
	get target() {
		return this.__target;
	}

	set target(new_value) {
		this.__target = Array.isArray(new_value) ? new_value : [new_value];
	}

	// A modifier supported for the search parameter.
	get modifier() {
		return this.__modifier;
	}

	set modifier(new_value) {
		this.__modifier = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Contains the names of any search parameters which may be chained to the containing search parameter. Chained parameters may be added to search parameters of type reference, and specify that resources will only be returned if they contain a reference to a resource which matches the chained parameter value. Values for this field should be drawn from Conformance.rest.resource.searchParam.name on the target resource type.
	get chain() {
		return this.__chain;
	}

	set chain(new_value) {
		this.__chain = Array.isArray(new_value) ? new_value : [new_value];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			name: this.__name,
			definition: this.__definition,
			type: this.__type,
			documentation: this.__documentation,
			target: this.__target,
			modifier: this.__modifier,
			chain: this.__chain,
		});
	}
}

module.exports = ConformanceRestResourceSearchParam;
