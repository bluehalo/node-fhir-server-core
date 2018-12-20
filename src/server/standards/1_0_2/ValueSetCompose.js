const BackboneElement = require('./BackboneElement');
const UriScalar = require('./scalars/Uri.scalar');

class ValueSetCompose extends BackboneElement {
	constructor(opt) {
		super(opt);
		this.__resourceType = 'ValueSetCompose';
		Object.assign(this, opt);
	}

	// This is a ValueSetCompose resource
	static get __resourceType() {
		return 'ValueSetCompose';
	}

	// Includes the contents of the referenced value set as a part of the contents of this value set. This is an absolute URI that is a reference to ValueSet.uri.
	get import() {
		return this.__import;
	}

	set import(new_value) {
		// Throw if new value does not match the pattern
		let pattern = UriScalar.regex();
		if (new_value && !pattern.test(new_value)) {
			throw new Error(`Invalid format for ${new_value} on field import`);
		}
		this.__import = Array.isArray(new_value) ? new_value : [new_value];
	}

	// Include one or more codes from a code system.
	get include() {
		return this.__include;
	}

	set include(new_value) {
		const ValueSetComposeInclude = require('./ValueSetComposeInclude');
		this.__include = Array.isArray(new_value)
			? new_value.map(val => new ValueSetComposeInclude(val))
			: [new ValueSetComposeInclude(new_value)];
	}

	toJSON() {
		return Object.assign(super.toJSON(), {
			import: this.__import,
			include: this.__include && this.__include.map(v => v.toJSON()),
		});
	}
}

module.exports = ValueSetCompose;
