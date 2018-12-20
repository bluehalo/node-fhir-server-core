const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class CapabilityStatementRestResourceSearchParam extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'CapabilityStatementRestResourceSearchParam';
		Object.assign(this, opt);
	}

	// This is a CapabilityStatementRestResourceSearchParam resource
	static get __resourceType() {
		return 'CapabilityStatementRestResourceSearchParam';
	}

	// The name of the search parameter used in the interface.
	get name() {
		return this.__name;
	}

	set name(new_value) {
		this.__name = new_value;
	}

	// An absolute URI that is a formal reference to where this parameter was first defined, so that a client can be confident of the meaning of the search parameter (a reference to [SearchParameter.url]()).
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

	toJSON() {
		return Object.assign(super.toJSON(), {
			name: this.__name,
			definition: this.__definition,
			type: this.__type,
			documentation: this.__documentation,
		});
	}
}

module.exports = CapabilityStatementRestResourceSearchParam;
