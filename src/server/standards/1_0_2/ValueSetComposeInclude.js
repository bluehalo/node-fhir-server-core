const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class ValueSetComposeInclude extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ValueSetComposeInclude';
		Object.assign(this, opt);
	}

	// This is a ValueSetComposeInclude resource
	static get __resourceType() {
		return 'ValueSetComposeInclude';
	}

	// An absolute URI which is the code system from which the selected codes come from.
	get system() {
		return this.__system;
	}

	set system(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field system`);
		}
		this.__system = new_value;
	}

	// The version of the code system that the codes are selected from.
	get version() {
		return this.__version;
	}

	set version(new_value) {
		this.__version = new_value;
	}

	// Specifies a concept to be included or excluded.
	get concept() {
		return this.__concept;
	}

	set concept(new_value) {
		const ValueSetComposeIncludeConcept = require('./ValueSetComposeIncludeConcept');
		this.__concept = Array.isArray(new_value)
			? new_value.map(val => new ValueSetComposeIncludeConcept(val))
			: [new ValueSetComposeIncludeConcept(new_value)];
	}

	// Select concepts by specify a matching criteria based on the properties (including relationships) defined by the system. If multiple filters are specified, they SHALL all be true.
	get filter() {
		return this.__filter;
	}

	set filter(new_value) {
		const ValueSetComposeIncludeFilter = require('./ValueSetComposeIncludeFilter');
		this.__filter = Array.isArray(new_value)
			? new_value.map(val => new ValueSetComposeIncludeFilter(val))
			: [new ValueSetComposeIncludeFilter(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			system: this.__system,
			version: this.__version,
			concept: this.__concept && this.__concept.map(v => v.toJSON()),
			filter: this.__filter && this.__filter.map(v => v.toJSON()),
		});
	}
}

module.exports = ValueSetComposeInclude;
